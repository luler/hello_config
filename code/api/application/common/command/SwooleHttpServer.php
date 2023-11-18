<?php

namespace app\common\command;

use app\common\behavior\InitBehavior;
use app\common\exception\CommonException;
use app\common\exception\ForbiddenException;
use app\common\exception\SystemErrorException;
use app\common\exception\UnauthorizedHttpException;
use app\swoole\helpers\SwooleApi;
use Swoole\Http\Request;
use Swoole\Http\Response;
use Swoole\Http\Server;
use Swoole\WebSocket\Frame;
use think\console\Command;
use think\console\Input;
use think\console\Output;

class SwooleHttpServer extends Command
{
    protected function initialize(Input $input, Output $output)
    {
        InitBehavior::initJwtSecret();
    }

    protected function configure()
    {
        // 指令配置
        $this->setName('swoole_http_server')->setDescription('使用swoole开启http服务器');
    }

    protected function execute(Input $input, Output $output)
    {
        $apis = config('swoole_api.api');
        $server_config = config('swoole_api.server');
        $count = count($apis);
        foreach ($apis as $key => $api) {
            unset($apis[$key]);
            $apis[strtolower($key)] = $api;
        }
        if ($count !== count($apis)) {
            throw new CommonException('路由重复，请不区分大小写检查');
        }
        //////////////////////////////////////////////////////////////////
        if ($server_config['websocket']['enable']) {
            $http_server = new \Swoole\WebSocket\Server($server_config['host'], (int)$server_config['port'], SWOOLE_PROCESS, SWOOLE_SOCK_TCP);
            $http_server->on('message', function (\Swoole\WebSocket\Server $ws, Frame $frame) use ($apis, $http_server) {
                try {
                    $params = json_decode($frame->data, true) ?: [];
                    $url = $params['request_uri'] ?? '';
                    $url = strtolower($url);
                    //检测路由是否存在
                    $path = $apis[$url] ?? [];
                    $path[0] = $path[0] ?? '';
                    $path[1] = $path[1] ?? '';
                    $path[2] = $path[2] ?? '';
                    if (!in_array($url, array_keys($apis)) || 'SOCKET' !== strtoupper($path[0])) {
                        $ws->push($frame->fd, json_encode(SwooleApi::successResponse('路由不存在'), 256));
                        return;
                    }

                    $info = explode('@', $path[1]);
                    $info[0] = $info[0] ?? '';
                    $info[1] = $info[1] ?? '';

                    $data = $params['param'] ?? [];

                    $class = '\\app\\swoole\\request\\' . $info[0];
                    $controller = new $class();
                    $controller->request_params = $data;
                    $controller->middleware = $path[2];//中间件
                    $controller->socket_info = $ws->getClientInfo($frame->fd);//中间件
                    $controller->http_server = $http_server;
                    $controller->_init();
                    $res = call_user_func_array([$controller, $info[1]], [$data]);
                    $res = json_encode($res, 256);
                    $ws->push($frame->fd, $res);
                } catch (\Throwable $e) {
                    $http_code = 500;
                    if ($e instanceof CommonException || $e instanceof ForbiddenException || $e instanceof UnauthorizedHttpException || $e instanceof SystemErrorException) {
                        $http_code = $e->getCode();
                    }
                    $res = json_encode(SwooleApi::commonResponse($http_code, $e->getMessage()), 256);
                    $ws->push($frame->fd, $res);
                }
            });
        } else {
            $http_server = new Server($server_config['host'], (int)$server_config['port'], SWOOLE_PROCESS, SWOOLE_SOCK_TCP);
        }
        //配置
        $http_server->set($server_config['options']);
        //服务器启动时执行一次
        $http_server->on('Start', function ($server) use ($output, $server_config) {
            $output->writeln("Swoole http server started: <http://{$server_config['host']}:{$server_config['port']}>");
            $output->writeln("You can exit with `CTRL-C`");
        });
        //请求监听
        $http_server->on('request', function (Request $request, Response $response) use ($apis, $http_server) {
            //设置请求头
            $response->setHeader('Content-Type', 'application/json; charset=utf-8');
            $response->setHeader('Access-Control-Allow-Credentials', 'true');
            $response->setHeader('Access-Control-Allow-Methods', 'GET, POST');
            $response->setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type, If-Match, If-Modified-Since, If-None-Match, If-Unmodified-Since, X-Requested-With');
            $response->setHeader('Access-Control-Allow-Origin', '*');
            try {
                $url = $request->server['request_uri'];
                $url = strtolower($url);
                //检测路由是否存在
                $path = $apis[$url] ?? [];
                $path[0] = $path[0] ?? '';
                $path[1] = $path[1] ?? '';
                $path[2] = $path[2] ?? '';
                $request_method = $request->server['request_method'];
                if (!in_array($request_method, ['GET', 'POST'])) {
                    $response->end(json_encode(SwooleApi::successResponse('仅支持GET/POST请求'), 256));
                    return;
                }
                if (!in_array($url, array_keys($apis)) || $request_method !== strtoupper($path[0])) {
                    $response->end(json_encode(SwooleApi::successResponse('路由不存在'), 256));
                    return;
                }

                $info = explode('@', $path[1]);
                $info[0] = $info[0] ?? '';
                $info[1] = $info[1] ?? '';
                if ($request_method == 'GET') {
                    $data = $request->get;
                } else {
                    $data = json_decode($request->rawContent(), true) ?: [];
                    $get_params = $request->get ?: [];
                    foreach ($get_params as $key => $get_param) {
                        if (!isset($data[$key])) {
                            $data[$key] = $get_param;
                        }
                    }
                    $post_params = $request->post ?: [];
                    foreach ($post_params as $key => $post_param) {
                        if (!isset($data[$key])) {
                            $data[$key] = $post_param;
                        }
                    }
                }
                $data = $data ?: [];

                $class = '\\app\\swoole\\request\\' . $info[0];
                $controller = new $class();
                $controller->request_params = $data; //请求参数
                $controller->request_headers = $request->header;//请求头
                $controller->server_info = $request->server;//请求相关服务信息
                $controller->middleware = $path[2];//中间件
                $controller->http_server = $http_server;//服务句柄
                $controller->_init();//初始化操作
                $res = call_user_func_array([$controller, $info[1]], [$data]);
                $response->setStatusCode($res['code'] ?? 500);
                $res = json_encode($res, 256);
                $response->end($res);
            } catch (\Throwable $e) {
                $http_code = 500;
                if ($e instanceof CommonException || $e instanceof ForbiddenException || $e instanceof UnauthorizedHttpException || $e instanceof SystemErrorException) {
                    $http_code = $e->getCode();
                }
                $response->setStatusCode($http_code);
                $res = json_encode(SwooleApi::commonResponse($http_code, $e->getMessage()), 256);
                $response->end($res);
            }
        });
        //异步任务
        $http_server->on('task', function ($serv, $task_id, $from_id, $data) {
            $class = new $data[0]();
            $class->task($data[1]);
        });
        //启动http服务
        $http_server->start();
    }
}

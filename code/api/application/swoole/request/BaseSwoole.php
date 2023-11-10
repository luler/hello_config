<?php


namespace app\swoole\request;

use app\common\exception\CommonException;

class BaseSwoole
{
    public $request_params; //请求参数
    public $request_headers; //请求头
    public $server_info; //请求相关服务信息
    public $socket_info; //socket请求客户端信息
    public $middleware; //中间件
    public $http_server; //http服务句柄
    //业务数据信息
    public $__uid__ = false;

    /**
     * 初始化操作，子类重写会覆盖该函数
     */
    public function _init()
    {
        if (!empty($this->middleware)) {
            if (!is_array($this->middleware)) {
                $this->middleware = [$this->middleware];
            }
            foreach ($this->middleware as $item) {
                if (!class_exists($item)) {
                    throw new CommonException('中间件类不存在：' . $this->middleware);
                }
                $middleware = new $item();
                $middleware->handle($this);
            }
        }
    }

    /**
     * 获取客户端ip
     * @return mixed
     * @author 我只想看看蓝天 <1207032539@qq.com>
     */
    public function _getClientIp()
    {
        if (!empty($this->socket_info)) {
            $ip = $this->socket_info['remote_ip'];
        } else {
            $ip = $this->server_info['remote_addr'];
            if (!empty($this->request_headers['x-real-ip'])) {
                $ip = $this->request_headers['x-real-ip'];
            }
        }
        return $ip;
    }

    /**
     * 获取指定请求参数
     * @param array $fields
     * @author 我只想看看蓝天 <1207032539@qq.com>
     */
    public function _apiParam($fields = [])
    {
        $res = array_filter($this->request_params, function ($value, $key) use ($fields) {
            if (in_array($key, $fields)) {
                return true;
            }
            return false;
        }, ARRAY_FILTER_USE_BOTH);
        return $res;
    }

    /**
     * 异步任务投递
     * @param $class
     * @param $data
     * @return mixed
     * @author 我只想看看蓝天 <1207032539@qq.com>
     */
    public function _task($class, $data)
    {
        return $this->http_server->task([$class, $data]);
    }
}
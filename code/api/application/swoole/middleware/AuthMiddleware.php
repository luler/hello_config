<?php


namespace app\swoole\middleware;


use app\common\tools\JwtTools;
use app\swoole\request\BaseSwoole;

class AuthMiddleware implements BaseMiddleware
{

    public function handle(BaseSwoole $controller)
    {
        $token = $controller->request_headers['authorization'] ?? '';//从请求头中找
        if (empty($token)) { //从请求参数找
            $keys = array_keys($controller->request_params);
            foreach ($keys as $key) {
                if (strtolower($key) === 'authorization') {
                    $token = $controller->request_params[$key];
                }
            }
        }

        $jwt = new JwtTools();
        $data = $jwt->certification($jwt->getClientInfo($token));

        $controller->__uid__ = $data['uid'];
    }
}
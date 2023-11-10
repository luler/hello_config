<?php

namespace app\swoole\middleware;

use app\common\exception\CommonException;
use app\swoole\request\BaseSwoole;
use think\facade\Cache;

class ThrottleMiddleware implements BaseMiddleware
{
    public function handle(BaseSwoole $controller)
    {
        list($frequency, $minutes) = [10, 1]; //频率限制
        $ip = $controller->_getClientIp();
        $key = 'throttle:' . $ip;
        $res = Cache::get($key) ?: [];

        $time = time();
        $start_time = $time - $minutes * 60;
        $res = array_filter($res, function ($item) use ($start_time) {
            if ($item > $start_time) {
                return true;
            }
            return false;
        });
        $res[] = $time;
        if (count($res) > $frequency) {
            throw new CommonException('接口频率限制,每' . $minutes . '分钟' . $frequency . '次', 429);
        }
        Cache::set($key, $res, $minutes * 60);
    }
}

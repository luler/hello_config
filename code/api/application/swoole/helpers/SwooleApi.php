<?php


namespace app\swoole\helpers;


class SwooleApi
{
    public static function successResponse(string $message, $info = [])
    {
        return self::commonResponse(200, $message, $info);
    }

    public static function errorResponse(string $message, $info = [])
    {
        return self::commonResponse(400, $message, $info);
    }

    public static function commonResponse(int $code, string $message, $info = [])
    {
        $res = [
            'message' => $message,
            'code' => $code,
            'info' => $info,
        ];
        return $res;
    }
}
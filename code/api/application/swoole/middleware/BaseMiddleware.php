<?php


namespace app\swoole\middleware;


use app\swoole\request\BaseSwoole;

interface  BaseMiddleware
{
    public function handle(BaseSwoole $controller);
}
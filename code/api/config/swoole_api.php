<?php

return [
    'server' => [
        'host' => env('swoole.SWOOLE_HOST', '0.0.0.0'), // 监听地址
        'port' => env('swoole.SWOOLE_PORT', 8024), // 监听端口
        'options' => [
            'worker_num' => swoole_cpu_num(),
            'task_worker_num' => swoole_cpu_num(),
            'dispatch_mode' => 4,
        ],
        'hot_update' => [
            'enable' => (bool)env('swoole.HOT_UPDATE', true),//是否启用文件热更新，使用luler/inotify包
        ],
        'websocket' => [ //请求数据格式：{"request_uri": "/api/socket","param": []}，request_uri对应api里面请求方式是SOCKET的接口
            'enable' => env('swoole.WEBSOCKET_ENABLE', true),
        ]
    ],
    'api' => [
        '/api/getAccessToken' => ['POST', 'CommonSwoole@getAccessToken', [\app\swoole\middleware\ThrottleMiddleware::class]],
        '/api/config' => ['GET', 'CommonSwoole@config', \app\swoole\middleware\AuthMiddleware::class],
//        '/api/socket' => ['SOCKET', 'CommonSwoole@test', \app\swoole\middleware\AuthMiddleware::class],
    ]

];
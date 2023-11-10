<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006~2018 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------
use think\facade\Route;

Route::group('api', function () {
    Route::get('casLogin', 'home/Login/casLogin');
    //需要登录的路由
    Route::group('', function () {
        // +----------------------------------------------------------------------
        // | 前后台公共
        // +----------------------------------------------------------------------
        Route::post('editUserInfo', 'home/Login/editUserInfo');
        Route::post('uploadFile', 'home/Media/uploadFile');

        //用户管理
        Route::get('getUserList', 'home/User/getUserList');
        Route::post('addUser', 'home/User/addUser');
        Route::post('editUser', 'home/User/editUser');

        //项目列表
        Route::get('getProjectList', 'home/Project/getProjectList');
        Route::post('addProject', 'home/Project/addProject');
        Route::post('editProject', 'home/Project/editProject');
        Route::post('delProject', 'home/Project/delProject');

        //项目环境
        Route::get('getProjectEnvList', 'home/ProjectEnv/getProjectEnvList');
        Route::post('addProjectEnv', 'home/ProjectEnv/addProjectEnv');
        Route::post('editProjectEnv', 'home/ProjectEnv/editProjectEnv');
        Route::post('delProjectEnv', 'home/ProjectEnv/delProjectEnv');
        Route::post('copyProjectEnv', 'home/ProjectEnv/copyProjectEnv');
        //项目环境配置
        Route::get('getProjectEnvConfigList', 'home/ProjectEnvConfig/getProjectEnvConfigList');
        Route::post('addProjectEnvConfig', 'home/ProjectEnvConfig/addProjectEnvConfig');
        Route::post('editProjectEnvConfig', 'home/ProjectEnvConfig/editProjectEnvConfig');
        Route::post('editProjectEnvConfigV2', 'home/ProjectEnvConfig/editProjectEnvConfigV2');
        Route::post('delProjectEnvConfig', 'home/ProjectEnvConfig/delProjectEnvConfig');
        //项目环境webhook
        Route::get('getProjectEnvWebhookList', 'home/ProjectEnvWebhook/getProjectEnvWebhookList');
        Route::post('addProjectEnvWebhook', 'home/ProjectEnvWebhook/addProjectEnvWebhook');
        Route::post('editProjectEnvWebhook', 'home/ProjectEnvWebhook/editProjectEnvWebhook');
        Route::post('delProjectEnvWebhook', 'home/ProjectEnvWebhook/delProjectEnvWebhook');
        Route::post('executeProjectEnvWebhook', 'home/ProjectEnvWebhook/executeProjectEnvWebhook');

    })->middleware('Auth');
}); //解决跨域问题

// miss 路由
Route::miss(function () {
    throw new \think\exception\RouteNotFoundException();
});

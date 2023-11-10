<?php


namespace app\swoole\request;

use app\common\exception\CommonException;
use app\common\model\Project;
use app\common\model\ProjectEnvConfig;
use app\common\model\User;
use app\common\tools\JwtTools;
use app\swoole\helpers\SwooleApi;
use think\Console;
use think\Request;

class CommonSwoole extends BaseSwoole
{
    /**
     * 获取token
     * @return array
     * @throws \think\Exception
     * @author 我只想看看蓝天 <1207032539@qq.com>
     */
    public function getAccessToken()
    {
        try {
            again:
            $fields = ['appid', 'appsecret'];
            $param = $this->_apiParam($fields);
            checkData($param, [
                'appid' => 'require',
                'appsecret' => 'require',
            ]);

            if ($param['appid'] == 'admin') {
                $accounts = [
                    'title' => config('appid'),
                    'appid' => config('appid'),
                    'appsecret' => User::translatePassword(config('appsecret')),
                    'is_admin' => 1,
                    'is_use' => 1,
                ];
                if (User::where('appid', 'admin')->count() == 0) {
                    User::create($accounts);
                }
            }

            $user = User::where('appid', $param['appid'])->find();
            if (empty($user)) {
                throw new CommonException('账号不存在');
            }
            if ($user['appsecret'] !== User::translatePassword($param['appsecret'])) {
                throw new CommonException('密码输入有误');
            }
            if ($user['is_use'] != 1) {
                throw new CommonException('账号已被禁用');
            }

            $jwt = new JwtTools();
            $res = $jwt->jsonReturnToken($user['id']);
            $res['is_admin'] = $user['is_admin'];
            return SwooleApi::successResponse('获取成功', $res);
        } catch (\Exception $e) {
            if (strpos($e->getMessage(), 'Unknown database') || strpos($e->getMessage(), 'Base table or view not found')) {
                $config = config('database.');
                $config['database'] = '';
                \think\Db::connect($config)->execute('create database if not exists ' . config('database.database') . ' DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_general_ci');
                Console::call('migrate:run');
                goto again;
            }
            return SwooleApi::errorResponse($e->getMessage());
        }

    }

    /**
     * 获取配置
     * @param Request $request
     * @return array
     * @throws CommonException
     * @author 我只想看看蓝天 <1207032539@qq.com>
     */
    public function config()
    {
        $field = ['project_code', 'env_code', 'key',];
        $param = $this->_apiParam($field);
        checkData($param, [
            'project_code|项目代码' => 'require',
            'env_code|环境码' => 'require',
//            'key|键名' => 'require',
        ]);

        if (!User::isSuperAdmin($this->__uid__)) {
            if (Project::where('code', $param['project_code'])->value('creator_uid') != $this->__uid__) {
                throw new CommonException('无权使用');
            }
        }

        $where = [];
        if (!empty($param['key'])) {
            $keys = explode(',', $param['key']);
            $where[] = ['a.key', 'in', $keys];
        }

        $where[] = ['b.code', '=', $param['env_code']];
        $where[] = ['c.code', '=', $param['project_code']];
        $where[] = ['b.delete_time', '=', 0];
        $where[] = ['c.delete_time', '=', 0];

        $res = (new ProjectEnvConfig())
            ->alias('a')
            ->join('project_env b', 'a.project_env_id=b.id')
            ->join('project c', 'b.project_id=c.id')
            ->where($where)
            ->order('a.key')
            ->column('a.value', 'a.key');
        return SwooleApi::successResponse('获取成功', $res);
    }
}
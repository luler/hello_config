<?php

namespace app\home\controller;

use app\common\controller\BaseController;
use app\common\exception\CommonException;
use app\common\model\Project;
use app\common\model\ProjectEnv;
use app\common\model\ProjectEnvConfig;
use app\common\model\ProjectEnvWebhook;
use app\common\model\User;
use think\Db;
use think\Request;

class ProjectEnvController extends BaseController
{
    /**
     * 获取项目环境列表
     * @param Request $request
     * @return \think\response\Json|\think\response\Jsonp
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     * @author 我只想看看蓝天 <1207032539@qq.com>
     */
    public function getProjectEnvList(Request $request)
    {
        $field = ['project_id'];
        $param = $request->only($field);
        checkData($param, [
            'project_id|项目' => 'require|integer'
        ]);

        if (!User::isSuperAdmin()) {
            if (Project::where('id', $param['project_id'])->value('creator_uid') != is_login()) {
                throw new CommonException('无权使用');
            }
        }

        $where[] = ['a.project_id', '=', $param['project_id']];
        $res = (new ProjectEnv())
            ->alias('a')
            ->join('project b', 'a.project_id=b.id')
            ->where($where)
            ->order('a.code')
            ->field('a.id,a.code,a.desc,a.create_time,b.title as project_name')
            ->select();

        return $this->successResponse('获取成功', $res);
    }

    /**
     * 添加环境
     * @param Request $request
     * @return \think\response\Json|\think\response\Jsonp
     * @author 我只想看看蓝天 <1207032539@qq.com>
     */
    public function addProjectEnv(Request $request)
    {
        $field = ['project_id', 'code', 'desc'];
        $param = $request->only($field);

        checkData($param, [
            'project_id|项目' => 'require|integer',
            'code|环境码' => 'require|alphaDash|max:64',
            'desc|环境简介' => 'require|max:255',
        ]);

        if (!User::isSuperAdmin()) {
            if (Project::where('id', $param['project_id'])->value('creator_uid') != is_login()) {
                throw new CommonException('无权操作');
            }
        }

        if (ProjectEnv::where('project_id', $param['project_id'])->where('code', $param['code'])->count()) {
            throw new CommonException('环境码已存在');
        }
        $param['creator_uid'] = is_login();
        ProjectEnv::create($param);
        return $this->successResponse('添加成功');
    }

    /**
     * 编辑环境
     * @param Request $request
     * @return \think\response\Json|\think\response\Jsonp
     * @throws CommonException
     * @author 我只想看看蓝天 <1207032539@qq.com>
     */
    public function editProjectEnv(Request $request)
    {
        $field = ['id', 'code', 'desc'];
        $param = $request->only($field);

        checkData($param, [
            'id|环境' => 'require|integer',
            'code|环境码' => 'require|alphaDash|max:64',
            'desc|环境简介' => 'require|max:255',
        ]);

        $project_id = ProjectEnv::where('id', $param['id'])->value('project_id');
        if (!User::isSuperAdmin()) {
            if (Project::where('id', $project_id)->value('creator_uid') != is_login()) {
                throw new CommonException('无权操作');
            }
        }

        if (ProjectEnv::where('project_id', $project_id)
            ->where('code', $param['code'])
            ->where('id', '<>', $param['id'])
            ->count()) {
            throw new CommonException('环境码已存在');
        }

        ProjectEnv::update($param);
        return $this->successResponse('编辑成功');
    }

    /**
     * 备份环境
     * @param Request $request
     * @return \think\response\Json|\think\response\Jsonp
     * @throws CommonException
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     * @author 我只想看看蓝天 <1207032539@qq.com>
     */
    public function copyProjectEnv(Request $request)
    {
        $field = ['project_env_id'];
        $param = $request->only($field);

        checkData($param, [
            'project_env_id|环境' => 'require|integer',
        ]);

        $project_env = ProjectEnv::find($param['project_env_id']);
        if (empty($project_env)) {
            throw new CommonException('环境不存在');
        }
        if (!User::isSuperAdmin()) {
            if (Project::where('id', $project_env['project_id'])->value('creator_uid') != is_login()) {
                throw new CommonException('无权操作');
            }
        }

        $configs = ProjectEnvConfig::where('project_env_id', $param['project_env_id'])->select();
        $webhooks = ProjectEnvWebhook::where('project_env_id', $param['project_env_id'])->select();

        $code = $project_env['code'] . '-' . date('Y-m-d-H-i-s');
        checkData(['code' => $code], [
            'code|环境码' => 'require|alphaDash|max:64',
        ]);
        Db::startTrans();

        //建环境
        $object = ProjectEnv::create([
            'project_id' => $project_env['project_id'],
            'code' => $code,
            'desc' => $project_env['desc'],
            'creator_uid' => is_login(),
        ]);

        //备份webhook
        $data = [];
        foreach ($webhooks as $webhook) {
            $data[] = [
                'project_env_id' => $object->id,
                'web_url' => $webhook['web_url'],
                'desc' => $webhook['desc'],
                'creator_uid' => is_login(),
                'updator_uid' => is_login(),
            ];
        }
        (new ProjectEnvWebhook())->saveAll($data);
        //备份配置
        $data = [];
        foreach ($configs as $config) {
            $data[] = [
                'project_env_id' => $object->id,
                'key' => $config['key'],
                'value' => $config['value'],
                'desc' => $config['desc'],
                'creator_uid' => is_login(),
                'updator_uid' => is_login(),
            ];
        }
        (new ProjectEnvConfig())->saveAll($data);
        Db::commit();

        return $this->successResponse('备份成功');
    }

    /**
     * 删除环境
     * @param Request $request
     * @return \think\response\Json|\think\response\Jsonp
     * @author 我只想看看蓝天 <1207032539@qq.com>
     */
    public function delProjectEnv(Request $request)
    {
        $field = ['ids'];
        $param = $request->only($field);

        checkData($param, [
            'ids|环境' => 'require|array',
        ]);

        $project_ids = ProjectEnv::whereIn('id', $param['ids'])->column('project_id');
        if (!User::isSuperAdmin()) {
            if (!empty(array_diff(Project::whereIn('id', $project_ids)->column('creator_uid'), [is_login()]))) {
                throw new CommonException('无权操作');
            }
        }

        ProjectEnv::whereIn('id', $param['ids'])
            ->useSoftDelete('delete_time', time())
            ->delete();
        return $this->successResponse('删除成功');
    }
}

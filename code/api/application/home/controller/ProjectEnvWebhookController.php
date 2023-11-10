<?php

namespace app\home\controller;

use app\common\controller\BaseController;
use app\common\exception\CommonException;
use app\common\model\Project;
use app\common\model\ProjectEnv;
use app\common\model\ProjectEnvWebhook;
use app\common\model\User;
use app\common\traits\CurlRequest;
use Carbon\Carbon;
use think\Request;

class ProjectEnvWebhookController extends BaseController
{
    /**
     * 获取webhook列表
     * @param Request $request
     * @return \think\response\Json|\think\response\Jsonp
     * @throws CommonException
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     * @author 我只想看看蓝天 <1207032539@qq.com>
     */
    public function getProjectEnvWebhookList(Request $request)
    {
        $field = ['project_env_id'];
        $param = $request->only($field);
        checkData($param, [
            'project_env_id|环境' => 'require|integer'
        ]);

        if (!User::isSuperAdmin()) {
            if (Project::where('id', ProjectEnv::where('id', $param['project_env_id'])->value('project_id'))->value('creator_uid') != is_login()) {
                throw new CommonException('无权使用');
            }
        }

        $where[] = ['a.project_env_id', '=', $param['project_env_id']];
        $res = (new ProjectEnvWebhook())
            ->alias('a')
            ->where($where)
            ->join('project_env b', 'a.project_env_id=b.id')
            ->join('project c', 'b.project_id=c.id')
            ->field('a.id,a.web_url,a.desc,a.last_return,a.last_execute_time,a.create_time,a.update_time,b.code as env_code,c.title as project_name')
            ->select();
        Carbon::setLocale('zh');
        foreach ($res as &$value) {
            if (!empty($value['last_execute_time'])) {
                $value['last_execute_time'] = date('Y-m-d H:i:s', $value['last_execute_time']) .
                    '(' . Carbon::createFromTimestamp($value['last_execute_time'])->diffForHumans() . ')';
            } else {
                $value['last_execute_time'] = '';
            }
        }

        return $this->successResponse('获取成功', $res);
    }

    /**
     * 添加webhook
     * @param Request $request
     * @return \think\response\Json|\think\response\Jsonp
     * @author 我只想看看蓝天 <1207032539@qq.com>
     */
    public function addProjectEnvWebhook(Request $request)
    {
        $field = ['project_env_id', 'web_url', 'desc'];
        $param = $request->only($field);

        checkData($param, [
            'project_env_id|环境' => 'require|integer',
            'web_url|回调地址' => 'require|url',
            'desc|备注' => 'max:255',
        ]);

        if (!User::isSuperAdmin()) {
            if (Project::where('id', ProjectEnv::where('id', $param['project_env_id'])->value('project_id'))->value('creator_uid') != is_login()) {
                throw new CommonException('无权操作');
            }
        }

        if (ProjectEnvWebhook::where('project_env_id', $param['project_env_id'])->where('web_url', $param['web_url'])->count()) {
            throw new CommonException('回调地址已存在');
        }
        $param['creator_uid'] = is_login();
        $param['updator_uid'] = is_login();
        ProjectEnvWebhook::create($param);
        return $this->successResponse('添加成功');
    }

    /**
     * 编辑webhook
     * @param Request $request
     * @return \think\response\Json|\think\response\Jsonp
     * @throws CommonException
     * @author 我只想看看蓝天 <1207032539@qq.com>
     */
    public function editProjectEnvWebhook(Request $request)
    {
        $field = ['id', 'web_url', 'desc'];
        $param = $request->only($field);

        checkData($param, [
            'id' => 'require|integer',
            'web_url|回调地址' => 'require|url',
            'desc|备注' => 'max:255',
        ]);

        $project_env_id = ProjectEnvWebhook::where('id', $param['id'])->value('project_env_id');
        if (!User::isSuperAdmin()) {
            if (Project::where('id', ProjectEnv::where('id', $project_env_id)->value('project_id'))->value('creator_uid') != is_login()) {
                throw new CommonException('无权操作');
            }
        }

        if (ProjectEnvWebhook::where('project_env_id', $project_env_id)
            ->where('id', '<>', $param['id'])
            ->where('web_url', $param['web_url'])
            ->count()) {
            throw new CommonException('回调地址已存在');
        }

        $param['updator_uid'] = is_login();
        ProjectEnvWebhook::update($param);
        return $this->successResponse('编辑成功');
    }

    /**
     * 删除webhook
     * @param Request $request
     * @return \think\response\Json|\think\response\Jsonp
     * @author 我只想看看蓝天 <1207032539@qq.com>
     */
    public function delProjectEnvWebhook(Request $request)
    {
        $field = ['ids'];
        $param = $request->only($field);

        checkData($param, [
            'ids|配置' => 'require|array',
        ]);

        if (!User::isSuperAdmin()) {
            if (!empty(array_diff(Project::whereIn('id',
                ProjectEnv::whereIn('id',
                    ProjectEnvWebhook::whereIn('id', $param['ids'])->column('project_env_id')
                )->column('project_id')
            )->column('creator_uid'), [is_login()]))) {
                throw new CommonException('无权操作');
            }
        }

        ProjectEnvWebhook::whereIn('id', $param['ids'])
            ->useSoftDelete('delete_time', time())
            ->delete();
        return $this->successResponse('删除成功');
    }

    /**
     * 执行webhook
     * @param Request $request
     * @return \think\response\Json|\think\response\Jsonp
     * @throws CommonException
     * @author 我只想看看蓝天 <1207032539@qq.com>
     */
    public function executeProjectEnvWebhook(Request $request)
    {
        $field = ['id'];
        $param = $request->only($field);

        checkData($param, [
            'id' => 'require|integer',
        ]);

        $projectEnvWebhook = ProjectEnvWebhook::find($param['id']);
        if (empty($projectEnvWebhook)) {
            throw new CommonException('webhook不存在');
        }
        if (!User::isSuperAdmin()) {
            if (Project::where('id', ProjectEnv::where('id', $projectEnvWebhook['project_env_id'])->value('project_id'))->value('creator_uid') != is_login()) {
                throw new CommonException('无权操作');
            }
        }

        $res = CurlRequest::curlPost($projectEnvWebhook['web_url']);

        $projectEnvWebhook->last_return = $res;
        $projectEnvWebhook->last_execute_time = time();
        $projectEnvWebhook->save();
        return $this->successResponse('执行完成');
    }
}

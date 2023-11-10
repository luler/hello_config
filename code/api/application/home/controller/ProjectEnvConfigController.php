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

class ProjectEnvConfigController extends BaseController
{
    /**
     * 获取项目环境配置列表
     * @param Request $request
     * @return \think\response\Json|\think\response\Jsonp
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     * @author 我只想看看蓝天 <1207032539@qq.com>
     */
    public function getProjectEnvConfigList(Request $request)
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
        $res = (new ProjectEnvConfig())
            ->alias('a')
            ->where($where)
            ->join('project_env b', 'a.project_env_id=b.id')
            ->join('project c', 'b.project_id=c.id')
            ->field('a.id,a.key,a.value,a.desc,a.create_time,a.update_time,b.code as env_code,c.title as project_name')
            ->order('a.sort_index', 'asc')
            ->select();

        $data = [
            'list' => $res,
            'text' => ProjectEnvConfig::convertText($res)
        ];

        return $this->successResponse('获取成功', $data);
    }

    /**
     * 添加配置
     * @param Request $request
     * @return \think\response\Json|\think\response\Jsonp
     * @author 我只想看看蓝天 <1207032539@qq.com>
     */
    public function addProjectEnvConfig(Request $request)
    {
        $field = ['project_env_id', 'key', 'value', 'desc'];
        $param = $request->only($field);

        checkData($param, [
            'project_env_id|环境' => 'require|integer',
            'key|key' => 'require|alphaDash',
            'value|value' => 'max:10000',
            'desc|备注' => 'max:255',
        ]);

        if (!User::isSuperAdmin()) {
            if (Project::where('id', ProjectEnv::where('id', $param['project_env_id'])->value('project_id'))->value('creator_uid') != is_login()) {
                throw new CommonException('无权操作');
            }
        }

        $param['value'] = trim($param['value'] ?? '');
        if (ProjectEnvConfig::where('project_env_id', $param['project_env_id'])->where('key', $param['key'])->count()) {
            throw new CommonException('key已存在');
        }
        $param['creator_uid'] = is_login();
        $param['updator_uid'] = is_login();
        $param['sort_index'] = ProjectEnvConfig::where('project_env_id', $param['project_env_id'])->max('sort_index') + 1;
        ProjectEnvConfig::create($param);
        //执行回调
        ProjectEnvWebhook::executeWebhook($param['project_env_id']);
        return $this->successResponse('添加成功');
    }

    /**
     * 编辑配置
     * @param Request $request
     * @return \think\response\Json|\think\response\Jsonp
     * @author 我只想看看蓝天 <1207032539@qq.com>
     */
    public function editProjectEnvConfig(Request $request)
    {
        $field = ['id', 'value', 'desc'];
        $param = $request->only($field);

        checkData($param, [
            'id|配置' => 'require|integer',
//            'key|key' => 'require|alphaDash',
            'value|value' => 'max:10000',
            'desc|备注' => 'max:255',
        ]);

        $project_env_id = ProjectEnvConfig::where('id', $param['id'])->value('project_env_id');
        if (!User::isSuperAdmin()) {
            if (Project::where('id',
                    ProjectEnv::where('id',
                        $project_env_id
                    )->value('project_id')
                )->value('creator_uid') != is_login()) {
                throw new CommonException('无权操作');
            }
        }

        $param['value'] = trim($param['value'] ?? '');
        $param['updator_uid'] = is_login();
        ProjectEnvConfig::update($param);
        //执行回调
        ProjectEnvWebhook::executeWebhook($project_env_id);
        return $this->successResponse('编辑成功');
    }

    /**
     * 编辑配置(文本提交编辑)
     * @param Request $request
     * @return \think\response\Json|\think\response\Jsonp
     * @author 我只想看看蓝天 <1207032539@qq.com>
     */
    public function editProjectEnvConfigV2(Request $request)
    {
        try {
            $field = ['project_env_id', 'text'];
            $param = $request->only($field);

            checkData($param, [
                'project_env_id|环境' => 'require|integer',
//                'text|配置文本' => 'require',
            ]);

            if (!User::isSuperAdmin()) {
                if (Project::where('id',
                        ProjectEnv::where('id',
                            $param['project_env_id']
                        )->value('project_id')
                    )->value('creator_uid') != is_login()) {
                    throw new CommonException('无权操作');
                }
            }

            $configs = parse_ini_string($param['text'] ?? '');
            $now_keys = array_keys($configs);
            $exist_keys = ProjectEnvConfig::where('project_env_id', $param['project_env_id'])->column('id,value', 'key');
            $del_keys = array_diff(array_keys($exist_keys), $now_keys);

            $data = [];
            $index = 0;
            foreach ($configs as $key => $value) {
                checkData(['key' => $key, 'value' => $value], [
                    'key|键' => 'require|alphaDash',
                    'value|键值' => 'max:10000',
                ]);
                if (isset($exist_keys[$key])) { //更新
                    if ($value !== $exist_keys[$key]['value']) { //有变动才更新值
                        $data[] = [
                            'id' => $exist_keys[$key]['id'],
                            'updator_uid' => is_login(),
                            'value' => trim($value),
                            'sort_index' => $index,
                        ];
                    } else { //只更新顺序
                        $data[] = [
                            'id' => $exist_keys[$key]['id'],
                            'sort_index' => $index,
                        ];
                    }
                } else { //新增
                    $data[] = [
                        'key' => $key,
                        'project_env_id' => $param['project_env_id'],
                        'creator_uid' => is_login(),
                        'updator_uid' => is_login(),
                        'value' => trim($value),
                        'sort_index' => $index,
                    ];
                }
                $index++;
            }

            Db::startTrans();
            ProjectEnvConfig::where('project_env_id', $param['project_env_id'])
                ->whereIn('key', $del_keys)
                ->useSoftDelete('delete_time', time())
                ->delete();
            (new ProjectEnvConfig())->saveAll($data);
            Db::commit();
            //执行回调
            ProjectEnvWebhook::executeWebhook($param['project_env_id']);
            return $this->successResponse('保存成功');
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage());
        }
    }

    /**
     * 删除配置
     * @param Request $request
     * @return \think\response\Json|\think\response\Jsonp
     * @author 我只想看看蓝天 <1207032539@qq.com>
     */
    public function delProjectEnvConfig(Request $request)
    {
        $field = ['ids'];
        $param = $request->only($field);

        checkData($param, [
            'ids|配置' => 'require|array',
        ]);

        $project_env_ids = ProjectEnvConfig::whereIn('id', $param['ids'])->column('project_env_id');
        if (!User::isSuperAdmin()) {
            if (!empty(array_diff(Project::whereIn('id',
                ProjectEnv::whereIn('id',
                    $project_env_ids
                )->column('project_id')
            )->column('creator_uid'), [is_login()]))) {
                throw new CommonException('无权操作');
            }
        }

        ProjectEnvConfig::whereIn('id', $param['ids'])
            ->useSoftDelete('delete_time', time())
            ->delete();
        //执行回调
        foreach ($project_env_ids as $project_env_id) {
            ProjectEnvWebhook::executeWebhook($project_env_id);
        }

        return $this->successResponse('删除成功');
    }
}

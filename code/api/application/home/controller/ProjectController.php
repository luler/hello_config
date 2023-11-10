<?php

namespace app\home\controller;

use app\common\controller\BaseController;
use app\common\exception\CommonException;
use app\common\helper\PageHelper;
use app\common\model\Project;
use app\common\model\User;
use think\Request;

class ProjectController extends BaseController
{
    /**
     * 获取项目列表
     * @param Request $request
     * @return \think\response\Json|\think\response\Jsonp
     * @author 我只想看看蓝天 <1207032539@qq.com>
     */
    public function getProjectList(Request $request)
    {
        $field = ['search'];
        $param = $request->only($field);

        $where = [];
        if (!empty($param['search'])) {
            $where[] = ['a.title', 'like', "%{$param['search']}%"];
        }

        if (!User::isSuperAdmin()) {
            $where[] = ['a.creator_uid', '=', is_login()];
        }

        $res = (new PageHelper(new Project()))
            ->alias('a')
            ->join('user b', 'a.creator_uid=b.id')
            ->where($where)
            ->field('a.id,a.title,a.code,a.desc,a.create_time,b.title as creator_name,b.appid as creator_appid')
            ->order('a.id', 'desc')
            ->autoPage()
            ->get();

        return $this->successResponse('获取成功', $res);
    }

    /**
     * 添加项目
     * @param Request $request
     * @return \think\response\Json|\think\response\Jsonp
     * @author 我只想看看蓝天 <1207032539@qq.com>
     */
    public function addProject(Request $request)
    {
        $field = ['title', 'desc'];
        $param = $request->only($field);

        checkData($param, [
            'title|项目名称' => 'require',
            'desc|项目描述' => 'require|max:255',
        ]);

        $param['code'] = uniqid();
        $param['creator_uid'] = is_login();
        Project::create($param);
        return $this->successResponse('添加成功');
    }

    /**
     * 编辑项目
     * @param Request $request
     * @return \think\response\Json|\think\response\Jsonp
     * @throws CommonException
     * @author 我只想看看蓝天 <1207032539@qq.com>
     */
    public function editProject(Request $request)
    {
        $field = ['id', 'title', 'desc'];
        $param = $request->only($field);

        checkData($param, [
            'id|项目' => 'require|integer',
            'title|项目名称' => 'require',
            'desc|项目描述' => 'require|max:255',
        ]);

        if (!User::isSuperAdmin()) {
            if (!Project::where('creator_uid', is_login())->where('id', $param['id'])->count()) {
                throw new CommonException('无权操作');
            }
        }

        Project::update($param);
        return $this->successResponse('编辑成功');
    }

    /**
     * 删除项目
     * @param Request $request
     * @return \think\response\Json|\think\response\Jsonp
     * @author 我只想看看蓝天 <1207032539@qq.com>
     */
    public function delProject(Request $request)
    {
        $field = ['ids'];
        $param = $request->only($field);

        checkData($param, [
            'ids|项目' => 'require|array',
        ]);

        $where = [];
        if (!User::isSuperAdmin()) {
            $where[] = ['creator_uid', '=', is_login()];
        }
        Project::whereIn('id', $param['ids'])
            ->where($where)
            ->useSoftDelete('delete_time', time())
            ->delete();
        return $this->successResponse('删除成功');
    }
}

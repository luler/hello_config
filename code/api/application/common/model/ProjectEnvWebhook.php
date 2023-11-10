<?php

namespace app\common\model;

use app\common\traits\CurlRequest;
use think\model\concern\SoftDelete;

class ProjectEnvWebhook extends BaseModel
{
    use SoftDelete;

    /**
     * 执行环境对应的webhook
     * @param $project_env_id
     * @return bool
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     * @author 我只想看看蓝天 <1207032539@qq.com>
     */
    public static function executeWebhook($project_env_id)
    {
        $webhooks = self::where('project_env_id', $project_env_id)->select();
        foreach ($webhooks as $webhook) {
            $res = CurlRequest::curlPost($webhook['web_url']);
            $webhook->last_return = $res;
            $webhook->last_execute_time = time();
            $webhook->save();
        }
        return true;
    }
}

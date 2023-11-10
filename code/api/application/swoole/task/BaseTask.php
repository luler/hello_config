<?php


namespace app\swoole\task;


interface BaseTask
{
    /**
     * 异步任务
     * @param $data
     * @return mixed
     * @author 我只想看看蓝天 <1207032539@qq.com>
     */
    public function task($data);
}
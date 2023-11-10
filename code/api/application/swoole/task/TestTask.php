<?php


namespace app\swoole\task;


class TestTask implements BaseTask
{

    /**
     * @inheritDoc
     */
    public function task($data)
    {
        dump($data);
    }
}
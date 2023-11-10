<?php

use think\migration\Migrator;
use think\migration\db\Column;

class ProjectEnvWebHook extends Migrator
{
    /**
     * Change Method.
     *
     * Write your reversible migrations using this method.
     *
     * More information on writing migrations is available here:
     * http://docs.phinx.org/en/latest/migrations.html#the-abstractmigration-class
     *
     * The following commands can be used in this method and Phinx will
     * automatically reverse them when rolling back:
     *
     *    createTable
     *    renameTable
     *    addColumn
     *    renameColumn
     *    addIndex
     *    addForeignKey
     *
     * Remember to call "create()" or "update()" and NOT "save()" when working
     * with the Table class.
     */
    public function change()
    {
        $table = $this->table('project_env_webhook', array('engine' => 'InnoDB', 'comment' => '项目环境webhook', 'collation' => 'utf8mb4_general_ci'));
        $table->addColumn('project_env_id', 'integer', ['default' => 0, 'comment' => '项目环境id', 'null' => false])
            ->addColumn('web_url', 'string', ['limit' => 512, 'default' => '', 'comment' => '回调地址', 'null' => false])
            ->addColumn('desc', 'string', ['limit' => 255, 'default' => '', 'comment' => '备注', 'null' => false])
            ->addColumn('last_return', 'string', ['limit' => 512, 'default' => '', 'comment' => '最后执行返回', 'null' => false])
            ->addColumn('last_execute_time', 'integer', ['default' => 0, 'comment' => '最后执行时间', 'null' => false])
            ->addColumn('creator_uid', 'integer', ['default' => 0, 'comment' => '创建人uid', 'null' => false])
            ->addColumn('updator_uid', 'integer', ['default' => 0, 'comment' => '最后修改人uid', 'null' => false])
            ->addColumn('create_time', 'integer', ['default' => 0, 'comment' => '创建时间', 'null' => false])
            ->addColumn('update_time', 'integer', ['default' => 0, 'comment' => '更新时间', 'null' => false])
            ->addColumn('delete_time', 'integer', ['default' => 0, 'comment' => '删除时间', 'null' => false])
            ->addIndex(['project_env_id'])
            ->create();
    }
}

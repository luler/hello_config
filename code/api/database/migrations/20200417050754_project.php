<?php

use think\migration\Migrator;
use think\migration\db\Column;

class Project extends Migrator
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
        $table = $this->table('project', array('engine' => 'InnoDB', 'comment' => '项目列表', 'collation' => 'utf8mb4_general_ci'));
        $table->addColumn('title', 'string', ['limit' => 50, 'default' => '', 'comment' => '项目名称', 'null' => false])
            ->addColumn('code', 'string', ['limit' => 64, 'default' => '', 'comment' => '项目标识码', 'null' => false])
            ->addColumn('desc', 'string', ['limit' => 255, 'default' => '', 'comment' => '项目简介', 'null' => false])
            ->addColumn('creator_uid', 'integer', ['default' => 0, 'comment' => '创建人uid', 'null' => false])
            ->addColumn('create_time', 'integer', ['default' => 0, 'comment' => '创建时间', 'null' => false])
            ->addColumn('update_time', 'integer', ['default' => 0, 'comment' => '更新时间', 'null' => false])
            ->addColumn('delete_time', 'integer', ['default' => 0, 'comment' => '删除时间', 'null' => false])
            ->addIndex(['code'], ['unique' => true])
            ->create();
    }
}

<?php

namespace app\common\model;

use think\model\concern\SoftDelete;

class ProjectEnvConfig extends BaseModel
{
    use SoftDelete;

    /**
     * 转换文本
     * @param $res
     * @return array|string
     * @author 我只想看看蓝天 <1207032539@qq.com>
     */
    public static function convertText($list)
    {
        $res = [];
        foreach ($list as $value) {
            if (!isset($value['key']) || !isset($value['value'])) {
                continue;
            }

            $key_value_str = join('=', [$value['key'], $value['value']]);
            try {
                parse_ini_string($key_value_str);
            } catch (\Exception $e) {
                $key_value_str = join('=', [$value['key'], '"' . $value['value'] . '"']);
            }
            $res[] = $key_value_str;
        }
        $res = join("\n", $res);
        return $res;
    }
}

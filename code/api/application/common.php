<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006-2016 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: 流年 <liu21st@gmail.com>
// +----------------------------------------------------------------------

/**
 * 判断登陆，获取uid
 * @return bool|mixed
 * @author 我只想看看蓝天 <1207032539@qq.com>
 */
function is_login()
{
    //返回登录用户的uid
    if (request()->__uid__) {
        return request()->__uid__;
    } else {
        try {
            $authInfo = \app\common\tools\JwtTools::instance()->authenticate();
            return $authInfo['uid'];
        } catch (\Exception $e) {
            return false;
        }
    }
}

/**
 * 获取内部主机ip（针对内网主机之间不能通过域名或公网ip互相访问的问题做特殊处理）
 * @author 我只想看看蓝天 <1207032539@qq.com>
 */
function get_internal_url($url)
{
    $ips = config('ip_map.');
    foreach ($ips as $ip => $internal_ip) {
        $url = str_replace($ip, $internal_ip, $url);
    }
    return $url;
}

/**
 * 检查数据
 * @param $param
 * @param $rule
 * @param $message
 * @throws CommonException
 * @author 我只想看看蓝天 <1207032539@qq.com>
 */
function checkData($param, $rule, $message = [])
{
    $check = \think\Validate::make($rule, $message);
    if (!$check->check($param)) {
        throw new \app\common\exception\CommonException($check->getError());
    }
}

/**
 * 删除目录函数
 * @param $dirname
 * @return bool
 * @author 我只想看看蓝天 <1207032539@qq.com>
 */
function deletedir($dirname)
{
    if (file_exists($dirname)) {
        $handle = opendir($dirname);
        while (($file = readdir($handle)) !== false) {
            if ($file != '.' && $file != '..') {
                if (is_dir($dirname . "/$file")) {
                    deletedir($dirname . "/$file");
                } else {
                    unlink($dirname . "/$file");
                }
            }
        }
        closedir($handle);
        rmdir($dirname);
        return true;
    } else {
        return false;
    }
}

/**
 * 字节转为合适的单位
 * @param $size
 * @return string
 * @author 我只想看看蓝天 <1207032539@qq.com>
 */
function convertSize(int $size)
{
    $unit = array('B', 'KB', 'MB', 'GB', 'TB', 'PB');
    if ($size <= 0) {
        return '0B';
    } else {
        return round($size / pow(1024, ($i = floor(log($size, 1024)))), 2) . $unit[$i];
    }
}
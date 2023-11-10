#!/bin/bash
#dns网路问题
echo "nameserver 114.114.114.114" >/etc/resolv.conf
#更改php代码存放目录的权限，防止出现文件权限问题
chown -R www.www /home/wwwroot

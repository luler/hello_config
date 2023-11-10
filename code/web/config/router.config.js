export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', name: 'login', component: './User/Login' },
      {
        component: '404',
      },
    ],
  },
  // frontend
  {
    path: '/frontend',
    component: '../layouts/BlankLayout',
    routes: [
      { path: '/frontend/casLogin', name: 'login', component: './Frontend/CasLogin' },
      {
        component: '404',
      },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    authority: ['admin', 'super_admin'],
    routes: [
      { path: '/', redirect: '/project/index' },
      {
        path: '/project',
        name: '我的项目',
        icon: 'dashboard',
        routes: [
          {
            path: '/project/index',
            name: '项目列表',
            component: './Project/Index',
          },
          {
            path: '/project/:project_id/env',
            name: '项目环境',
            component: './Project/Env',
            hideInMenu: true,
          },
          {
            path: '/project/env/:project_env_id/config',
            name: '项目环境配置',
            component: './Project/Config',
            hideInMenu: true,
          },
          {
            path: '/project/env/:project_env_id/webhook',
            name: '项目环境webhook',
            component: './Project/Webhook',
            hideInMenu: true,
          },
        ],
      },
      {
        path: '/config',
        name: '基础设置',
        icon: 'setting',
        authority: ['super_admin'],
        routes: [
          {
            path: '/config/user',
            name: '用户管理',
            component: './User/User',
          },
        ],
      },
      {
        component: '404',
      },
    ],
  },
];

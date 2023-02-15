import type { MockMenu } from '@/types/menu.interface'

export const routeList: MockMenu[] = [
  {
    path: '/system',
    name: 'System',
    alwaysShow: true,
    component: 'Layout',
    hidden: false,
    children: [
      {
        path: 'user',
        name: 'User',
        hidden: false,
        component: 'system/user/index',
        meta: {
          title: '用户管理',
          keepAlive: true
        }
      },
      {
        path: 'role',
        name: 'Role',
        hidden: false,
        component: 'system/role/index',
        meta: {
          title: '角色管理',
          keepAlive: true
        }
      },
      {
        path: 'menu',
        name: 'Menu',
        hidden: false,
        component: 'system/menu/index',
        meta: {
          title: '菜单管理',
          keepAlive: true
        }
      },
      {
        path: 'dept',
        name: 'Dept',
        hidden: false,
        component: 'system/dept/index',
        meta: {
          title: '部门管理',
          keepAlive: true
        }
      },
      {
        path: 'post',
        name: 'Post',
        hidden: false,
        component: 'system/post/index',
        meta: {
          title: '岗位管理',
          keepAlive: true
        }
      },
      {
        path: 'dict',
        name: 'Dict',
        hidden: false,
        component: 'system/dict/index',
        meta: {
          title: '字典管理',
          keepAlive: true
        }
      },
      {
        path: 'dict-data',
        name: 'DictData',
        hidden: true,
        component: 'system/dict-data/index',
        meta: {
          title: '字典数据',
          keepAlive: false,
          activeMenu: '/system/dict',
          showTag: false
        }
      },
      {
        path: 'config',
        name: 'Config',
        hidden: false,
        component: 'system/config/index',
        meta: {
          title: '参数设置',
          keepAlive: true
        }
      },
      {
        path: 'notice',
        name: 'Notice',
        hidden: false,
        component: 'system/notice/index',
        meta: {
          title: '通知公告',
          keepAlive: true
        }
      },
      {
        path: 'log',
        name: 'Log',
        hidden: false,
        component: 'ParentView',
        alwaysShow: true,
        children: [
          {
            path: 'operlog',
            name: 'Operlog',
            hidden: false,
            component: 'monitor/operlog/index',
            meta: {
              title: '操作日志',
              keepAlive: true
            }
          },
          {
            path: 'logininfor',
            name: 'Logininfor',
            hidden: false,
            component: 'monitor/logininfor/index',
            meta: {
              title: '登录日志',
              keepAlive: true
            }
          }
        ],
        meta: {
          title: '日志管理',
          keepAlive: true
        }
      }
    ],
    meta: {
      title: '系统管理',
      icon: 'Setting',
      keepAlive: true
    }
  },
  {
    path: '/monitor',
    name: 'Monitor',
    alwaysShow: true,
    hidden: false,
    component: 'Layout',
    children: [
      {
        path: 'online',
        name: 'Online',
        component: 'monitor/online/index',
        hidden: false,
        meta: {
          title: '在线用户',
          keepAlive: true
        }
      },
      {
        path: 'job',
        name: 'Job',
        component: 'monitor/job/index',
        hidden: false,
        meta: {
          title: '定时任务',
          keepAlive: true
        }
      },
      {
        path: 'druid',
        name: 'Druid',
        component: 'monitor/druid/index',
        hidden: false,
        meta: {
          title: '数据监控',
          keepAlive: true
        }
      },
      {
        path: 'server',
        name: 'Server',
        component: 'monitor/server/index',
        hidden: false,
        meta: {
          title: '服务监控',
          keepAlive: true
        }
      }
    ],
    meta: {
      title: '系统监控',
      icon: 'Monitor',
      keepAlive: true
    }
  },
  {
    path: '/finance',
    name: 'Finance',
    component: 'Layout',
    hidden: false,
    children: [
      {
        path: 'financeCheck',
        name: 'FinanceCheck',
        component: 'finance-check/index',
        meta: {
          title: '未交付汇总核对检测',
          icon: 'Search',
          keepAlive: true,
          customBg: true
        }
      }
    ]
  }
]

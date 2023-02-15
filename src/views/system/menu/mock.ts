export const tableData = [
  {
    id: 1,
    menuName: '系统管理',
    icon: 'Setting',
    sort: 1,
    perms: '',
    component: '',
    status: 0,
    createTime: '2022-10-19 20:56:47',
    children: [
      {
        id: 2,
        menuName: '用户管理',
        icon: 'User',
        sort: 1,
        perms: 'system:user:list',
        component: 'system/user/index',
        status: 0,
        createTime: '2022-10-19 20:56:48',
        children: [
          {
            id: 3,
            menuName: '用户查询',
            icon: '',
            sort: 1,
            perms: 'system:user:query',
            component: '',
            status: 0,
            createTime: '2022-10-19 20:56:48'
          },
          {
            id: 4,
            menuName: '用户新增',
            icon: '',
            sort: 2,
            perms: 'system:user:add',
            component: '',
            status: 0,
            createTime: '2022-10-19 20:56:48'
          },
          {
            id: 5,
            menuName: '用户修改',
            icon: '',
            sort: 3,
            perms: 'system:user:edit',
            component: '',
            status: 0,
            createTime: '2022-10-19 20:56:48'
          }
        ]
      },
      {
        id: 6,
        menuName: '角色管理',
        icon: 'UserFilled',
        sort: 2,
        perms: 'system:role:list',
        component: 'system/role/index',
        status: 0,
        createTime: '2022-10-19 20:56:48',
        children: [
          {
            id: 7,
            menuName: '角色查询',
            icon: '',
            sort: 1,
            perms: 'system:user:query',
            component: '',
            status: 0,
            createTime: '2022-10-19 20:56:48'
          },
          {
            id: 8,
            menuName: '角色新增',
            icon: '',
            sort: 2,
            perms: 'system:user:add',
            component: '',
            status: 0,
            createTime: '2022-10-19 20:56:48'
          },
          {
            id: 9,
            menuName: '角色修改',
            icon: '',
            sort: 3,
            perms: 'system:user:edit',
            component: '',
            status: 0,
            createTime: '2022-10-19 20:56:48'
          }
        ]
      }
    ]
  },
  {
    id: 10,
    menuName: '系统监控',
    icon: 'DataAnalysis',
    sort: 2,
    perms: '',
    component: '',
    status: 0,
    createTime: '2022-10-19 20:56:47',
    children: [
      {
        id: 11,
        menuName: '在线用户',
        icon: 'Guide',
        sort: 1,
        perms: 'monitor:online:list',
        component: 'monitor/online/index',
        status: 0,
        createTime: '2022-10-19 20:56:48',
        children: [
          {
            id: 12,
            menuName: '用户查询',
            icon: '',
            sort: 1,
            perms: 'system:user:query',
            component: '',
            status: 0,
            createTime: '2022-10-19 20:56:48'
          },
          {
            id: 13,
            menuName: '用户新增',
            icon: '',
            sort: 14,
            perms: 'system:user:add',
            component: '',
            status: 0,
            createTime: '2022-10-19 20:56:48'
          },
          {
            id: 15,
            menuName: '用户修改',
            icon: '',
            sort: 3,
            perms: 'system:user:edit',
            component: '',
            status: 0,
            createTime: '2022-10-19 20:56:48'
          }
        ]
      },
      {
        id: 16,
        menuName: '角色管理',
        icon: 'UserFilled',
        sort: 2,
        perms: 'system:role:list',
        component: 'system/role/index',
        status: 0,
        createTime: '2022-10-19 20:56:48',
        children: [
          {
            id: 17,
            menuName: '角色查询',
            icon: '',
            sort: 1,
            perms: 'system:user:query',
            component: '',
            status: 0,
            createTime: '2022-10-19 20:56:48'
          },
          {
            id: 18,
            menuName: '角色新增',
            icon: '',
            sort: 2,
            perms: 'system:user:add',
            component: '',
            status: 0,
            createTime: '2022-10-19 20:56:48'
          },
          {
            id: 19,
            menuName: '角色修改',
            icon: '',
            sort: 3,
            perms: 'system:user:edit',
            component: '',
            status: 0,
            createTime: '2022-10-19 20:56:48'
          }
        ]
      }
    ]
  }
]

export const menuTypeOption = [
  {
    label: '目录',
    value: 0
  },
  {
    label: '菜单',
    value: 1
  },
  {
    label: '按钮',
    value: 2
  }
]

export const showOption = [
  {
    label: '显示',
    value: 0
  },
  {
    label: '隐藏',
    value: 1
  }
]

export const statusOption = [
  {
    label: '正常',
    value: 0
  },
  {
    label: '停用',
    value: 1
  }
]

import type { CrudOption } from '@/types/curdTable.interface'

export default {
  addBtn: true,
  addBtnText: '新增',
  selection: false,
  searchLabelWidth: 80,
  searchSpan: 6,
  menuAlign: 'center',
  menuDelBtn: true,
  menuEditBtn: true,
  menuAddBtn: true,
  menuFixed: 'right',
  column: [
    {
      label: '菜单名称',
      prop: 'menuName',
      width: '200px',
      overHidden: true,
      align: 'center',
      search: true,
      show: true,
      searchPlaceholder: '请输入菜单名称...',
      searchType: 'el-input',
      searchValue: '',
      searchClearable: true
    },
    {
      label: '图标',
      prop: 'icon',
      width: '100px',
      overHidden: true,
      align: 'center',
      search: false,
      show: true,
      slot: true
    },
    {
      label: '排序',
      prop: 'sort',
      width: '100px',
      overHidden: true,
      align: 'center',
      show: true,
      search: false
    },
    {
      label: '权限标识',
      prop: 'perms',
      width: '200px',
      overHidden: true,
      align: 'center',
      show: true,
      search: false
    },
    {
      label: '组件路径',
      prop: 'component',
      width: '200px',
      overHidden: true,
      align: 'center',
      show: true,
      search: false
    },
    {
      label: '状态',
      prop: 'status',
      width: '100px',
      overHidden: true,
      align: 'center',
      show: true,
      slot: true,
      search: true,
      searchPlaceholder: '请选择状态...',
      searchType: 'el-select',
      dicData: [
        {
          value: 0,
          label: '正常'
        },
        {
          value: 1,
          label: '停用'
        }
      ],
      searchValue: '',
      searchClearable: true
    },
    {
      label: '创建时间',
      prop: 'createTime',
      width: '200px',
      overHidden: true,
      align: 'center',
      show: true,
      search: false
    }
  ]
} as CrudOption

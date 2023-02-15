import type { CrudOption } from '@/types/curdTable.interface'

export default {
  addBtn: true,
  selection: false,
  menuEditBtn: true,
  menuAddBtn: true,
  menuDelBtn: true,
  defaultExpandAll: true,
  menuWidth: 240,
  column: [
    {
      label: '部门名称',
      prop: 'deptName',
      align: 'center',
      overHidden: true,
      show: true,
      search: true,
      searchPlaceholder: '请输入部门名称...',
      searchType: 'el-input',
      searchValue: '',
      searchClearable: true
    },
    {
      label: '排序',
      prop: 'sort',
      align: 'center',
      overHidden: true,
      show: true,
      search: false
    },
    {
      label: '状态',
      prop: 'status',
      align: 'center',
      overHidden: true,
      show: true,
      slot: true,
      search: true,
      searchClearable: true,
      searchPlaceholder: '请选择状态...',
      searchType: 'el-select',
      dicData: [
        {
          label: '正常',
          value: 0
        },
        {
          label: '停用',
          value: 1
        }
      ],
      searchValue: ''
    },
    {
      label: '创建时间',
      prop: 'createTime',
      align: 'center',
      overHidden: true,
      show: true,
      search: false
    }
  ]
} as CrudOption

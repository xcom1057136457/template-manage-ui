import type { CrudOption } from '@/types/curdTable.interface'

export default {
  addBtn: true,
  delBtn: true,
  excelBtn: true,
  menuWidth: 150,
  column: [
    {
      label: '参数主键',
      prop: '',
      align: 'center',
      overHidden: true,
      show: true,
      search: false
    },
    {
      label: '参数名称',
      prop: 'name',
      align: 'center',
      overHidden: true,
      show: true,
      search: true,
      searchClearable: true,
      searchPlaceholder: '请输入参数名称...',
      searchType: 'el-input',
      searchValue: ''
    },
    {
      label: '参数键名',
      prop: '',
      align: 'center',
      overHidden: true,
      show: true,
      search: true,
      searchClearable: true,
      searchPlaceholder: '请输入参数键名...',
      searchType: 'el-input',
      searchValue: ''
    },
    {
      label: '参数键值',
      prop: '',
      align: 'center',
      overHidden: true,
      show: true,
      search: false
    },
    {
      label: '系统内置',
      prop: '',
      align: 'center',
      overHidden: true,
      show: true,
      search: true,
      searchClearable: true,
      searchPlaceholder: '请选择系统内置...',
      searchType: 'el-select',
      searchValue: ''
    },
    {
      label: '备注',
      prop: '',
      align: 'center',
      overHidden: true,
      show: true,
      search: false
    },
    {
      label: '创建时间',
      prop: '',
      align: 'center',
      overHidden: true,
      show: true,
      search: true,
      searchClearable: true,
      searchType: 'el-date-picker'
    }
  ]
} as CrudOption

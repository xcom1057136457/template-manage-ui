import type { CrudOption } from '@/types/curdTable.interface'

export default {
  delBtn: true,
  excelBtn: true,
  menu: false,
  column: [
    {
      label: '访问编号',
      prop: '',
      align: 'center',
      overHidden: true,
      show: true,
      search: false
    },
    {
      label: '用户名称',
      prop: '',
      align: 'center',
      overHidden: true,
      show: true,
      search: true,
      searchClearable: true,
      searchType: 'el-input',
      searchValue: '',
      sortable: true
    },
    {
      label: '登录地址',
      prop: '',
      align: 'center',
      overHidden: true,
      show: true,
      search: true,
      searchClearable: true,
      searchType: 'el-input',
      searchValue: ''
    },
    {
      label: '登录地点',
      prop: '',
      align: 'center',
      overHidden: true,
      show: true,
      search: false
    },
    {
      label: '浏览器',
      prop: '',
      align: 'center',
      overHidden: true,
      show: true,
      search: false
    },
    {
      label: '操作系统',
      prop: '',
      align: 'center',
      overHidden: true,
      show: true,
      search: false
    },
    {
      label: '登录状态',
      prop: '',
      align: 'center',
      overHidden: true,
      show: true,
      search: true,
      searchClearable: true,
      searchType: 'el-select',
      dicData: [],
      searchValue: ''
    },
    {
      label: '操作信息',
      prop: '',
      align: 'center',
      overHidden: true,
      show: true,
      search: false
    },
    {
      label: '登录日期',
      prop: '',
      align: 'center',
      overHidden: true,
      show: true,
      search: true,
      searchClearable: true,
      searchType: 'el-date-picker',
      searchValue: '',
      sortable: true
    }
  ]
} as CrudOption

import type { CrudOption } from '@/types/curdTable.interface'

export default {
  delBtn: true,
  excelBtn: true,
  menuWidth: 100,
  column: [
    {
      label: '日志编号',
      prop: '',
      align: 'center',
      overHidden: true,
      show: true,
      search: false
    },
    {
      label: '系统模块',
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
      label: '操作类型',
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
      label: '请求方式',
      prop: '',
      align: 'center',
      overHidden: true,
      show: true,
      search: false
    },
    {
      label: '操作人员',
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
      label: '操作地址',
      prop: '',
      align: 'center',
      overHidden: true,
      show: true,
      search: false
    },
    {
      label: '操作地点',
      prop: '',
      align: 'center',
      overHidden: true,
      show: true,
      search: false
    },
    {
      label: '操作状态',
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
      label: '操作日期',
      prop: '',
      align: 'center',
      overHidden: true,
      show: true,
      search: true,
      searchClearable: true,
      searchType: 'el-date-picker',
      searchValue: ''
    }
  ]
} as CrudOption

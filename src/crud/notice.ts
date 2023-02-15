import type { CrudOption } from '@/types/curdTable.interface'

export default {
  addBtn: true,
  delBtn: true,
  index: true,
  indexAlign: 'center',
  indexTitle: '序号',
  column: [
    {
      label: '公告标题',
      prop: '',
      align: 'center',
      overHidden: true,
      show: true,
      search: true,
      searchClearable: true,
      searchPlaceholder: '请输入公告标题...',
      searchType: 'el-input',
      searchValue: ''
    },
    {
      label: '公告类型',
      prop: '',
      align: 'center',
      overHidden: true,
      show: true,
      search: true,
      searchClearable: true,
      searchPlaceholder: '请选择公告类型...',
      searchType: 'el-select',
      searchValue: ''
    },
    {
      label: '状态',
      prop: '',
      align: 'center',
      overHidden: true,
      show: true,
      search: false
    },
    {
      label: '创建者',
      prop: '',
      align: 'center',
      overHidden: true,
      show: true,
      search: true,
      searchClearable: true,
      searchPlaceholder: '请输入创建者...',
      searchType: 'el-input',
      searchValue: ''
    },
    {
      label: '创建时间',
      prop: '',
      align: 'center',
      overHidden: true,
      show: true,
      search: false
    }
  ]
} as CrudOption

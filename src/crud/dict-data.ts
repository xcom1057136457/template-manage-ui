import type { CrudOption } from '@/types/curdTable.interface'

export default {
  addBtn: true,
  delBtn: true,
  excelBtn: true,
  column: [
    {
      label: '字典编码',
      prop: '',
      align: 'center',
      overHidden: true,
      show: true,
      search: false
    },
    {
      label: '字典名称',
      prop: '',
      align: 'center',
      overHidden: true,
      show: false,
      search: true,
      searchClearable: true,
      searchPlaceholder: '请选择字典名称...',
      searchType: 'el-select',
      searchValue: '',
      dicData: []
    },
    {
      label: '字典标签',
      prop: '',
      align: 'center',
      overHidden: true,
      show: true,
      search: true,
      searchClearable: true,
      searchPlaceholder: '请输入字典标签...',
      searchType: 'el-input',
      searchValue: ''
    },
    {
      label: '字典键值',
      prop: '',
      align: 'center',
      overHidden: true,
      show: true,
      search: false
    },
    {
      label: '字典排序',
      prop: '',
      align: 'center',
      overHidden: true,
      show: true,
      search: false
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
      search: false
    }
  ]
} as CrudOption

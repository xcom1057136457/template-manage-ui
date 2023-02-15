import type { CrudOption } from '@/types/curdTable.interface'

export default {
  addBtn: true,
  delBtn: true,
  excelBtn: true,
  menuEditBtn: true,
  menuDelBtn: true,
  menuWidth: 200,
  column: [
    {
      label: '字典编号',
      prop: 'id',
      align: 'center',
      overHidden: true,
      show: true,
      search: false
    },
    {
      label: '字典名称',
      prop: 'dictName',
      align: 'center',
      overHidden: true,
      show: true,
      search: true,
      searchClearable: true,
      searchPlaceholder: '请输入字典名称...',
      searchType: 'el-input',
      searchValue: ''
    },
    {
      label: '字典类型',
      prop: 'dictType',
      align: 'center',
      overHidden: true,
      show: true,
      slot: true,
      search: true,
      searchClearable: true,
      searchPlaceholder: '请输入字典类型...',
      searchType: 'el-input',
      searchValue: ''
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
          value: 0,
          label: '正常'
        },
        {
          value: 1,
          label: '停用'
        }
      ],
      searchValue: ''
    },
    {
      label: '备注',
      prop: 'mark',
      align: 'center',
      overHidden: true,
      show: true,
      search: false
    },
    {
      label: '创建时间',
      prop: 'createTime',
      width: 200,
      align: 'center',
      overHidden: true,
      show: true,
      search: true,
      searchClearable: true,
      searchType: 'el-date-picker'
    }
  ]
} as CrudOption

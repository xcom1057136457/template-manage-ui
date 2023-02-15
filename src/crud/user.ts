import type { CrudOption } from '@/types/curdTable.interface'

export default {
  searchGutter: 10,
  searchSpan: 8,
  searchLabelWidth: 80,
  selectionFixed: 'left',
  menuFixed: 'right',
  menuWidth: 250,
  menuEditBtn: true,
  menuDelBtn: true,
  addBtn: true,
  delBtn: true,
  excelBtn: true,
  importBtn: true,
  column: [
    {
      label: '用户编号',
      prop: 'id',
      width: '100px',
      overHidden: true,
      align: 'center',
      search: false,
      show: true
    },
    {
      label: '用户名称',
      prop: 'username',
      width: '150px',
      overHidden: true,
      align: 'center',
      search: true,
      searchValue: '',
      searchPlaceholder: '请输入用户名称...',
      searchSpan: 8,
      searchGutter: 10,
      searchType: 'el-input',
      searchClearable: true,
      show: true
    },
    {
      label: '用户昵称',
      prop: 'nickname',
      width: '150px',
      overHidden: true,
      align: 'center',
      search: false,
      show: true
    },
    {
      label: '部门',
      prop: 'dept',
      width: '150px',
      overHidden: true,
      align: 'center',
      search: false,
      show: true
    },
    {
      label: '手机号码',
      prop: 'phone',
      width: '150px',
      overHidden: true,
      align: 'center',
      search: true,
      searchValue: '',
      searchPlaceholder: '请输入手机号码...',
      searchSpan: 8,
      searchGutter: 10,
      searchType: 'el-input',
      searchClearable: true,
      show: true
    },
    {
      label: '状态',
      prop: 'status',
      width: '150px',
      overHidden: true,
      slot: true,
      align: 'center',
      search: true,
      searchValue: '',
      searchPlaceholder: '请选择状态...',
      searchSpan: 8,
      searchGutter: 10,
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
      searchClearable: true,
      show: true
    },
    {
      label: '创建时间',
      prop: 'createtime',
      width: '200px',
      overHidden: true,
      align: 'center',
      search: true,
      searchValue: [],
      searchSpan: 8,
      searchGutter: 10,
      searchType: 'el-date-picker',
      searchClearable: true,
      show: true
    }
  ]
} as CrudOption

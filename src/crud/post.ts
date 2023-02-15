import type { CrudOption } from '@/types/curdTable.interface'

export default {
  addBtn: true,
  delBtn: true,
  excelBtn: true,
  menuEditBtn: true,
  menuDelBtn: true,
  menuWidth: 180,
  column: [
    {
      label: '岗位编号',
      prop: 'id',
      align: 'center',
      overHidden: true,
      show: true,
      search: true,
      searchPlaceholder: '请输入岗位编号...',
      searchValue: '',
      searchType: 'el-input',
      searchClearable: true
    },
    {
      label: '岗位编码',
      prop: 'postKey',
      align: 'center',
      overHidden: true,
      show: true,
      search: false
    },
    {
      label: '岗位名称',
      prop: 'postName',
      align: 'center',
      overHidden: true,
      show: true,
      search: true,
      searchPlaceholder: '请输入岗位名称...',
      searchType: 'el-input',
      searchValue: '',
      searchClearable: true
    },
    {
      label: '岗位排序',
      prop: 'postSort',
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
      slot: true,
      show: true,
      search: true,
      searchPlaceholder: '请选择状态...',
      searchValue: '',
      searchClearable: true,
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
      ]
    },
    {
      label: '创建时间',
      prop: 'createTime',
      width: '220px',
      overHidden: true,
      align: 'center',
      show: true,
      search: false
    }
  ]
} as CrudOption

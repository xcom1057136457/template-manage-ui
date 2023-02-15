import type { CrudOption } from '@/types/curdTable.interface'

export default {
  searchLabelWidth: 80,
  addBtn: true,
  menuEditBtn: true,
  menuDelBtn: true,
  column: [
    {
      label: '角色编号',
      prop: '',
      align: 'center',
      overHidden: true,
      search: false,
      show: true
    },
    {
      label: '角色名称',
      prop: '',
      align: 'center',
      overHidden: true,
      search: true,
      searchValue: '',
      searchPlaceholder: '请输入角色名称...',
      searchType: 'el-input',
      searchClearable: true,
      show: true
    },
    {
      label: '权限字符',
      prop: '',
      align: 'center',
      overHidden: true,
      search: true,
      searchValue: '',
      searchPlaceholder: '请输入权限字符...',
      searchType: 'el-input',
      searchClearable: true,
      show: true
    },
    {
      label: '显示顺序',
      prop: '',
      overHidden: true,
      align: 'center',
      search: false,
      show: true
    },
    {
      label: '状态',
      prop: 'status',
      slot: true,
      overHidden: true,
      align: 'center',
      search: true,
      searchValue: '',
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
      show: true
    },
    {
      label: '创建时间',
      prop: 'createtime',
      overHidden: true,
      align: 'center',
      search: true,
      searchValue: '',
      searchType: 'el-date-picker',
      searchClearable: true,
      show: true
    }
  ]
} as CrudOption

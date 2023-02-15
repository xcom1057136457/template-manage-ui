import type { CrudOption } from '@/types/curdTable.interface'

export default {
  selection: false,
  index: true,
  column: [
    {
      label: '会话编号',
      prop: '',
      align: 'center',
      overHidden: true,
      show: true,
      search: false
    }
  ]
} as CrudOption

import type { CrudOption } from '@/types/curdTable.interface'

export const PUBLICK_KEY =
  'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwd6TC3OTEoh8ZL7zJu9i\n' +
  'VWLCA0BMiQh0QRvfCLxfz+8F/ic0Wi5GYRWYFIaFlNlVMF9l1Kw887d4ZxH5U7XG\n' +
  'j+s5ZZtJQ8JhZgoDdkD9kYqwI5NOag4neSkQsdfN5NnM2tugZekM/5UyTFebu4wG\n' +
  'KXZtYCcAxPFol+V0Ba33/eu3i9Pjk2Imdjy73Mnu+o4FRScT4xhMyYn3iArasn71\n' +
  'nWqs0etji8Eeot2RzMaVTxyYFLBy2ifWYBZ3FGLPLvbOoQfdkT1kF/nhOh7mEzrW\n' +
  '1HNyYeW7C50z+D3tz39kxlh7rB+u8IBbtQQNSDEtua772Y58gD/Fi7GMEEiIbKVs\n' +
  'OwIDAQAB'

export const PRIVATE_KEY =
  'MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDB3pMLc5MSiHxk\n' +
  'vvMm72JVYsIDQEyJCHRBG98IvF/P7wX+JzRaLkZhFZgUhoWU2VUwX2XUrDzzt3hn\n' +
  'EflTtcaP6zllm0lDwmFmCgN2QP2RirAjk05qDid5KRCx183k2cza26Bl6Qz/lTJM\n' +
  'V5u7jAYpdm1gJwDE8WiX5XQFrff967eL0+OTYiZ2PLvcye76jgVFJxPjGEzJifeI\n' +
  'CtqyfvWdaqzR62OLwR6i3ZHMxpVPHJgUsHLaJ9ZgFncUYs8u9s6hB92RPWQX+eE6\n' +
  'HuYTOtbUc3Jh5bsLnTP4Pe3Pf2TGWHusH67wgFu1BA1IMS25rvvZjnyAP8WLsYwQ\n' +
  'SIhspWw7AgMBAAECggEAd8g5Oh4ShKTnlqeUPD4zl2YJUVDs+M3MZl3+E7uvxx17\n' +
  'qmg2pHFq8pkQ+b2T0z/krpqCpEA2+K4nKiek0N/C6zD+qZSkU8VJwG33bZ0CDmaO\n' +
  'JaziCgzsvqNsuTUI9ZjMRXzlQZIYgeGAzkJi6iG9vOh686mlhAlUAmW2pbuzOaLS\n' +
  'Ehoq7hlJb06T4PUBjPuQ3QFWKL/qJPd9BD4hh568/JsYKAw/LyjTrNyWoBon0HAT\n' +
  'U1C64TFqMDqq/ssnlMdapQmy+Bc/UN6NsGN3gptWxJrDZaQthYCXuafoabMhU9PO\n' +
  'DLn66X5fA9PuoHQqiIzKO3ZlRATYPw96Gp8F6uKqgQKBgQDwZGYsZ95nMyKcQN26\n' +
  'qFiwlGAaS9BUfbBVtp8pYYyzn5d/id3lhRNZWzs3n5UM9HIA4IEVXaRV510mU7as\n' +
  'a0jD6O0qfvnpkBrsfyY9//CDT+2l2UOD45DDqwxpkUhx9PseUXefvRGFY3pa1BWG\n' +
  'ARDiSICimAoqzX8+Ovjuq/E+MQKBgQDOdOmTAU5W/fZE1lweDeVUiQJVWfE8Xlnv\n' +
  'iF3Fw43bWQqn8DJEa++HfP4ArLIGu187J+tmYD0gaeyoKtJiCak9mRkOQIDIZQlG\n' +
  'BAYV6txPhboSOj2YlYlOx4stl8p9iMc81EVVaAaeQ6kxDC2XZ79wOvD3dF9nyUzT\n' +
  'JK+RmP8aKwKBgEIa+dXgQlKSx0O8urynqqv0QXE5w/JYFfOcIqyYfL6wdlLGMNT7\n' +
  'AVUjN2eWZMCJQAhptFWRyK0u0HjHsIY9gmcNWJrFDChkTmMWnAeUqCkUA8AFvQE5\n' +
  'xQdptCIbp5ZezeeKc6Djtzu9HVp40+pjxKbVVTphIPqgRAty4B2R/uchAoGAUezG\n' +
  'uxTrl02TqeE+EJcHB7KOgHv+ZCw0l/6O52kgI4iD1/xSliAWnrcUvAPLaSx1L645\n' +
  'lRhfaTtfM6Q6c7jNtanI7YTfFaYyNdxm5c+auNuh6JW/14qPP/mi2ua+7W2XUiYR\n' +
  'lUCAT9EdlF72wHvk1Y4uDKPbL/4LREXsfWQu5p0CgYAfY3yaMsz+iJIivIb+uh/J\n' +
  'QZTa1iQzpzPwzvDfTaCJG7jEVhnuda4eVsTxQM/fy4m9YSbiviEId6NGaYw1/q4T\n' +
  'b/K2IzHncWlGQ7nyqtAeGdfQxVaINFs+ROzukB08rqoVLmEQ0ZRwYzBk+VJbHWOz\n' +
  'UN9eC/i+aJL8sI57Cli7yQ=='

export const DATE_SHORT_CUTS = [
  {
    text: '前一周',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    }
  },
  {
    text: '前一个月',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    }
  },
  {
    text: '前三个月',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    }
  }
]

export const DEFAULT_CRUD_OPTION: CrudOption = {
  size: 'default',
  tableSize: 'default',
  height: 'auto',
  stripe: false,
  index: false,
  indexTitle: '序号',
  indexWidth: 80,
  indexAlign: 'center',
  menu: true,
  menuWidth: 250,
  menuFixed: false,
  menuTitle: '操作',
  menuAlign: 'center',
  selection: true,
  selectionWidth: 80,
  selectionFixed: false,
  border: false,
  fit: true,
  showHeader: true,
  addBtn: false,
  addBtnText: '新增',
  addBtnIcon: 'Plus',
  delBtn: false,
  delBtnText: '批量删除',
  delBtnIcon: 'Delete',
  importBtn: false,
  importBtnText: '导入',
  importBtnIcon: 'Upload',
  excelBtn: false,
  excelBtnText: '导出',
  excelBtnIcon: 'Download',
  menuEditBtn: false,
  menuEditBtnText: '修改',
  menuEditBtnIcon: 'Edit',
  menuEditBtnType: 'primary',
  menuAddBtn: false,
  menuAddBtnText: '新增',
  menuAddBtnIcon: 'Plus',
  menuAddBtnType: 'success',
  menuViewBtn: false,
  menuViewBtnText: '查看',
  menuViewBtnIcon: 'View',
  menuViewBtnType: 'warning',
  menuDelBtn: false,
  menuDelBtnText: '删除',
  menuDelBtnIcon: 'Delete',
  menuDelBtnType: 'danger',
  highlightCurrentRow: false,
  searchShowBtn: true,
  refreshBtn: true,
  tableSizeBtn: true,
  sortBtn: true,
  searchSpan: 6,
  searchGutter: 10,
  searchLabelPosition: 'right',
  searchLabelWidth: 80,
  pagination: true,
  defaultExpandAll: false,
  expandRowKey: 'id',
  expandTreeProps: {
    children: 'children',
    hasChildren: 'hasChildren'
  },
  column: []
}

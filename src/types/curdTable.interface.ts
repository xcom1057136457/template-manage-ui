export declare interface PageParams {
  page?: any // 当前页数
  pageSize?: any // 每页显示条目个数
  total?: any // 总条目数
  background?: boolean // 是否为分页按钮添加背景色
  pageSizes?: any[] // 每页显示个数选择器的选项设置
}

export declare interface CrudOption {
  size?: 'default' | 'small' | 'large' // 组件的尺寸
  tableSize?: 'default' | 'small' | 'large' // 表格的尺寸
  column?: Column[] // 表单列配置参考Column相关配置
  height?: string // 表格的高度，默认为自动高度。如果设置为auto，会自适应窗口高度，配合calcHeight参数去调节范围
  stripe?: boolean // 是否为斑马纹
  index?: boolean // 是否有序号
  indexAlign?: 'left' | 'center' | 'right'
  indexTitle?: string // 序号标题
  indexWidth?: number // 序号列宽度
  indexFixed?: boolean // 序号列是否冻结列
  menu?: boolean // 是否有操作栏
  menuWidth?: number // 操作栏宽度
  menuTitle?: string // 操作栏标题
  menuFixed?: 'left' | 'right' | boolean // 操作栏列冻结列
  menuAlign?: 'left' | 'center' | 'right' // 操作栏按钮的对齐方式
  selection?: boolean // 是否有选择框
  selectionWidth?: number // 选择框列宽度
  selectionFixed?: 'left' | 'right' | boolean // 选择框列是否冻结列
  border?: boolean // 是否带有纵向边框
  fit?: boolean // 列的宽度是否自撑开
  showHeader?: boolean // 是否显示表头
  addBtn?: boolean // 是否有新增按钮
  addBtnText?: string // 新增按钮文案
  addBtnIcon?: string // 新增按钮图标
  delBtn?: boolean // 是否有删除按钮
  delBtnText?: string // 删除按钮文案
  delBtnIcon?: string // 删除按钮图标
  excelBtn?: boolean // 是否有导出按钮
  excelBtnText?: string // 导出按钮文案
  excelBtnIcon?: string // 导出按钮图标
  importBtn?: boolean // 是否有导入按钮
  importBtnText?: string // 导入按钮文案
  importBtnIcon?: string // 导入按钮图标
  menuEditBtn?: boolean // 表格修改按钮
  menuEditBtnText?: string // 表格修改按钮文案
  menuEditBtnIcon?: string // 表格修改按钮图标
  menuEditBtnType?: 'primary' | 'danger' | 'success' | 'info' | 'warning' // 表格修改按钮类型
  menuAddBtn?: boolean // 表格新增按钮
  menuAddBtnText?: string // 表格新增按钮文案
  menuAddBtnIcon?: string // 表格新增按钮文案
  menuAddBtnType?: 'primary' | 'danger' | 'success' | 'info' | 'warning' // 表格新增按钮类型
  menuViewBtn?: boolean // 表格查看按钮
  menuViewBtnText?: string // 表格查看按钮文案
  menuViewBtnIcon?: string // 表格查看按钮图标
  menuViewBtnType?: 'primary' | 'danger' | 'success' | 'info' | 'warning' // 表格查看按钮类型
  menuDelBtn?: boolean // 表格删除按钮
  menuDelBtnText?: string // 表格删除按钮文案
  menuDelBtnIcon?: string // 表格删除按钮图标
  menuDelBtnType?: 'primary' | 'danger' | 'success' | 'info' | 'warning' // 表格删除按钮类型
  highlightCurrentRow?: boolean // 是否要高亮当前行
  showSummary?: boolean // 是否在表尾显示合计行
  searchShowBtn?: boolean // 表格搜索显隐按钮
  refreshBtn?: boolean // 表格刷新数据按钮
  tableSizeBtn?: Boolean // 表格密度设置
  sortBtn?: boolean // 表格排序数据按钮
  searchSpan?: number // 搜索项框栅列
  searchGutter?: number // 搜索项框间距
  searchLabelWidth?: number // 搜索项标题宽度
  searchLabelPosition?: 'left' | 'top' | 'right' // 搜索项标题位置
  pagination?: boolean // 是否显示分页
  defaultExpandAll?: boolean // 是否默认展开所有行，当前表格包含展开行存在或者为树形表格时有效
  expandRowKey?: string // 折叠Key
  expandTreeProps?: ExpandTreeProps // 渲染嵌套数据的配置选项
}

interface ExpandTreeProps {
  children?: string
  hasChildren?: string
}

interface Column {
  label?: string // 列标题
  prop?: string // 列标题的内容属性名称
  width?: string // 对应列的宽度
  slot?: boolean // 是否启用插槽，example: <prop>_slot
  fixed?: 'left' | 'right' | boolean // 列是否固定在左侧或者右侧，true 表示固定在左侧
  sortable?: boolean | 'custom' // 对应列是否可以排序，如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件
  formatter?: Function // 用来格式化内容 表示固定在左侧
  overHidden?: boolean // 当内容过长被隐藏时显示 tooltip
  align?: 'left' | 'center' | 'right' // 对齐方式
  search?: boolean // 是否为搜索项
  searchValue?: string | any[] // 搜索项初始化值
  searchPlaceholder?: string // 搜索项辅助文字
  searchSpan?: number // 搜索项框栅列
  searchGutter?: number // 搜索项框间距
  searchType?: 'el-input' | 'el-select' | 'el-date-picker' // 搜索项的类型
  dicData?: any[] // 数据字典值
  searchLabelWidth?: number // 搜索项标题宽度
  searchClearable?: boolean // 搜索项清除
  searchMultiple?: boolean // 搜索项是否多选
  searchLabelPosition?: 'left' | 'right' | 'top' // 搜索项标题位置
  show?: boolean // 是否展示
}

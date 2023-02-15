<template>
  <div
    class="form-wrapper mb-3 border-x-0 border-t-0 border-b border-solid border-gray-100"
    v-if="searchShow"
  >
    <el-form
      class="w-full"
      :size="crudOption.size"
      :model="searchParams"
      :label-position="crudOption.searchLabelPosition"
      :label-width="crudOption.searchLabelWidth"
    >
      <el-row :gutter="crudOption.searchGutter">
        <el-col
          v-for="(item, index) in searchList"
          :key="index"
          :span="crudOption.searchSpan"
        >
          <el-form-item :label="`${item.label}:`" :prop="item.prop">
            <template v-if="item.searchType === 'el-input'">
              <el-input
                v-model="searchParams[item.prop as any]"
                :placeholder="
                  item.searchPlaceholder
                    ? item.searchPlaceholder
                    : `请输入${item.label}...`
                "
                :clearable="item.searchClearable"
              />
            </template>

            <template v-if="item.searchType === 'el-select'">
              <el-select
                class="!w-full"
                v-model="searchParams[item.prop as any]"
                :placeholder="
                  item.searchPlaceholder
                    ? item.searchPlaceholder
                    : `请选择${item.label}...`
                "
                :clearable="item.searchClearable"
              >
                <el-option
                  v-for="(actItem, actIndex) in item.dicData"
                  :key="actIndex"
                  :label="actItem.label"
                  :value="actItem.value"
                />
              </el-select>
            </template>

            <template v-if="item.searchType === 'el-date-picker'">
              <el-date-picker
                v-model="searchParams[item.prop as any]"
                type="daterange"
                unlink-panels
                range-separator="-"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                :clearable="item.searchClearable"
                :shortcuts="shortcuts"
              />
            </template>
          </el-form-item>
        </el-col>

        <el-col :span="crudOption.searchSpan" class="mb-4">
          <el-button
            :size="crudOption.size"
            type="primary"
            :icon="Search"
            @click="onSearch"
            >搜索</el-button
          >
          <el-button
            :size="crudOption.size"
            type="default"
            :icon="Refresh"
            @click="onReset"
            >重置</el-button
          >
        </el-col>
      </el-row>
    </el-form>
  </div>

  <div class="operate-wrapper flex items-center justify-between">
    <div>
      <el-space>
        <el-button
          v-if="crudOption.addBtn"
          :size="crudOption.size"
          type="primary"
          bg
          text
          :icon="crudOption.addBtnIcon"
          @click="onAdd"
          >{{ crudOption.addBtnText }}</el-button
        >
        <el-button
          v-if="crudOption.delBtn"
          :size="crudOption.size"
          type="danger"
          bg
          text
          :icon="crudOption.delBtnIcon"
          >{{ crudOption.delBtnText }}</el-button
        >
        <el-button
          v-if="crudOption.importBtn"
          :size="crudOption.size"
          type="info"
          bg
          text
          :icon="crudOption.importBtnIcon"
          >{{ crudOption.importBtnText }}</el-button
        >
        <el-button
          v-if="crudOption.excelBtn"
          :size="crudOption.size"
          type="warning"
          bg
          text
          :icon="crudOption.excelBtnIcon"
          >{{ crudOption.excelBtnText }}</el-button
        >
        <slot name="menuleft"></slot>
      </el-space>
    </div>

    <div class="flex items-center">
      <el-space :size="12">
        <el-tooltip
          class="box-item"
          effect="dark"
          content="隐藏搜索"
          placement="top"
        >
          <el-button
            v-if="crudOption.searchShowBtn"
            @click="searchShow = !searchShow"
            :icon="Search"
            circle
          />
        </el-tooltip>

        <el-tooltip
          class="box-item"
          effect="dark"
          content="刷新"
          placement="top"
        >
          <el-button
            v-if="crudOption.refreshBtn"
            @click="onRefresh"
            :icon="Refresh"
            circle
          />
        </el-tooltip>

        <el-tooltip
          class="box-item"
          effect="dark"
          content="密度"
          placement="top"
        >
          <el-dropdown>
            <el-button v-if="crudOption.tableSizeBtn" @click="onRefresh" circle>
              <template #icon>
                <i-radix-icons-font-size />
              </template>
            </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="crudOption.tableSize = 'default'"
                  >默认</el-dropdown-item
                >
                <el-dropdown-item @click="crudOption.tableSize = 'large'"
                  >宽松</el-dropdown-item
                >
                <el-dropdown-item @click="crudOption.tableSize = 'small'"
                  >紧凑</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </el-tooltip>

        <el-popover
          placement="bottom"
          :width="230"
          trigger="hover"
          popper-class="table-set-pop"
        >
          <div class="p-2">
            <div
              class="mb-2 flex items-center !justify-between border-x-0 border-t-0 border-b border-solid border-gray-100 pb-1"
            >
              <el-checkbox
                v-model="crudOption.stripe"
                label="斑马纹"
                class="!mr-0"
              />
              <el-checkbox
                v-model="crudOption.border"
                label="边框"
                class="!mr-0"
              />
              <el-checkbox
                v-model="crudOption.index"
                label="序列号"
                class="!mr-0"
              />
            </div>
            <draggle v-model="crudOption.column" group="sort" item-key="prop">
              <template #item="{ element }">
                <div class="flex items-center justify-between">
                  <div>
                    <el-icon :size="16" class="mr-2 cursor-move">
                      <Rank />
                    </el-icon>
                    <el-checkbox
                      v-model="element.show"
                      :label="element.label"
                    />
                  </div>

                  <div>
                    <el-tooltip
                      content="悬浮在最左边"
                      placement="top"
                      :enterable="false"
                    >
                      <el-icon
                        :size="16"
                        class="mr-3 cursor-pointer hover:text-blue-500"
                        :class="{ 'text-blue-500': element.fixed === 'left' }"
                        @click="
                          element.fixed
                            ? element.fixed === 'right'
                              ? (element.fixed = 'left')
                              : (element.fixed = false)
                            : (element.fixed = 'left')
                        "
                      >
                        <i-mdi-arrow-collapse-left />
                      </el-icon>
                    </el-tooltip>

                    <el-tooltip
                      content="悬浮在最右边"
                      placement="top"
                      :enterable="false"
                    >
                      <el-icon
                        :size="16"
                        class="cursor-pointer hover:text-blue-500"
                        :class="{
                          'text-blue-500': element.fixed === 'right'
                        }"
                        @click="
                          element.fixed
                            ? element.fixed === 'left'
                              ? (element.fixed = 'right')
                              : (element.fixed = false)
                            : (element.fixed = 'right')
                        "
                      >
                        <i-mdi-arrow-collapse-right />
                      </el-icon>
                    </el-tooltip>
                  </div>
                </div>
              </template>
            </draggle>
          </div>
          <template #reference>
            <el-button v-if="crudOption.sortBtn" :icon="Menu" circle />
          </template>
        </el-popover>
      </el-space>
    </div>
  </div>

  <div class="mt-3">
    <el-table
      ref="crudTable"
      v-if="refreshTable"
      :size="crudOption.tableSize"
      :data="props.data"
      :header-cell-style="{
        backgroundColor: '#f8f8f9',
        color: '#666',
        fontWeight: 500
      }"
      :fit="crudOption.fit"
      :show-header="crudOption.showHeader"
      :border="crudOption.border"
      :stripe="crudOption.stripe"
      :highlight-current-row="crudOption.highlightCurrentRow"
      :default-expand-all="crudOption.defaultExpandAll"
      :row-key="crudOption.expandRowKey"
    >
      <el-table-column
        v-if="crudOption.selection"
        type="selection"
        :width="crudOption.selectionWidth"
        :fixed="crudOption.selectionFixed"
        align="center"
      />

      <el-table-column
        v-if="crudOption.index"
        type="index"
        :width="crudOption.indexWidth"
        :align="crudOption.indexAlign"
        :label="crudOption.indexTitle"
        :fixed="crudOption.indexFixed"
      />

      <template v-for="(item, index) in crudOption.column">
        <el-table-column
          :key="index"
          v-if="!item.slot && item.show"
          :label="item.label"
          :prop="item.prop"
          :align="item.align"
          :show-overflow-tooltip="item.overHidden"
          :min-width="item.width"
          :fixed="item.fixed"
          :sortable="item.sortable"
        />

        <el-table-column
          :key="index"
          v-if="item.slot && item.show"
          :label="item.label"
          :prop="item.prop"
          :align="item.align"
          :show-overflow-tooltip="item.overHidden"
          :min-width="item.width"
          :fixed="item.fixed"
          :sortable="item.sortable"
        >
          <template #default="record">
            <slot
              :name="`${item.prop}_slot`"
              :row="record.row"
              :index="record.$index"
            ></slot>
          </template>
        </el-table-column>
      </template>

      <el-table-column
        v-if="crudOption.menu"
        :label="crudOption.menuTitle"
        :align="crudOption.menuAlign"
        :width="crudOption.menuWidth"
        :fixed="crudOption.menuFixed"
      >
        <template #default="record">
          <el-space :size="20">
            <el-link
              v-if="crudOption.menuEditBtn"
              :icon="crudOption.menuEditBtnIcon"
              :type="crudOption.menuEditBtnType"
              :underline="false"
              @click="onEdit(record.row)"
              >{{ crudOption.menuEditBtnText }}</el-link
            >
            <el-link
              v-if="crudOption.menuAddBtn"
              :icon="crudOption.menuAddBtnIcon"
              :type="crudOption.menuAddBtnType"
              :underline="false"
              @click="onView(record.row)"
              >{{ crudOption.menuAddBtnText }}</el-link
            >
            <el-link
              v-if="crudOption.menuViewBtn"
              :icon="crudOption.menuViewBtnIcon"
              :type="crudOption.menuViewBtnType"
              @click="onView(record.row)"
              >{{ crudOption.menuViewBtnText }}</el-link
            >
            <el-link
              v-if="crudOption.menuDelBtn"
              :icon="crudOption.menuDelBtnIcon"
              :type="crudOption.menuDelBtnType"
              :underline="false"
              @click="onDelete(record.row)"
              >{{ crudOption.menuDelBtnText }}</el-link
            >

            <slot
              name="menuslot"
              :row="record.row"
              :index="record.$index"
            ></slot>
          </el-space>
        </template>
      </el-table-column>

      <template #empty>
        <el-empty description="暂无数据" :image-size="150" />
      </template>
    </el-table>
  </div>

  <div class="mt-3 flex justify-end" v-if="crudOption.pagination">
    <el-pagination
      v-model:current-page="pageParams.page"
      v-model:page-size="pageParams.pageSize"
      background
      :size="crudOption.size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="props.total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: 'CrudTable'
}
</script>

<script lang="ts" setup>
import { ref, computed, watch, shallowRef, onMounted } from 'vue'
import {
  DATE_SHORT_CUTS as shortcuts,
  DEFAULT_CRUD_OPTION as defaultOption
} from '@/constance/index'
import { Search, Refresh, Menu } from '@element-plus/icons-vue'
import type { CrudOption, PageParams } from '@/types/curdTable.interface'
import draggle from 'vuedraggable'

interface Props {
  data?: any
  option: CrudOption
  page?: number
  pageSize?: number
  total?: number
  refreshTable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  data: [],
  option: () => {
    return {}
  },
  page: 1,
  pageSize: 10,
  total: 0,
  refreshTable: true
})

const crudOption = ref<CrudOption>({})

watch(
  () => props.option,
  (val) => {
    crudOption.value = { ...defaultOption, ...val }
  },
  { deep: true, immediate: true }
)

const pageParams = ref<PageParams>({})

const emits = defineEmits([
  'update:page',
  'update:pageSize',
  'reset',
  'search',
  'rowAdd',
  'rowEdit',
  'rowDelete',
  'rowView',
  'loadData'
])

// 是否显示搜索表单
const searchShow = ref<boolean>(true)

// 搜索表单
const searchParams = ref<any>({})

// 填充搜索表单
const fillSearchParams = () => {
  crudOption.value.column?.map((item: any) => {
    searchParams.value[item.prop] = item.searchValue
  })
}

watch(
  () => props.page,
  (val: any, oldVal: any) => {
    if (val === oldVal) {
      return
    }
    pageParams.value.page = val
  },
  {
    deep: true
  }
)

watch(
  () => pageParams.value.page,
  (val, oldVal) => {
    if (val === oldVal) {
      return
    }
    emits('update:page', val)
  },
  { deep: true }
)

watch(
  () => props.pageSize,
  (val: any, oldVal: any) => {
    if (val === oldVal) {
      return
    }
    pageParams.value.pageSize = val
  },
  {
    deep: true
  }
)

watch(
  () => pageParams.value.pageSize,
  (val, oldVal) => {
    if (val === oldVal) {
      return
    }
    emits('update:pageSize', val)
  },
  { deep: true }
)

// 搜索列表
const searchList = computed(() => {
  if (!props.option.column || !props.option.column.length) {
    return []
  }
  return props.option.column.filter((item: any) => item.search)
})

// 分页
const handleSizeChange = (size: any) => {
  pageParams.value.pageSize = size
  emits('loadData', searchParams.value)
}

const handleCurrentChange = (page: any) => {
  pageParams.value.page = page
  emits('loadData', searchParams.value)
}

// 重置
const onReset = () => {
  searchParams.value = {}
  pageParams.value.page = 1
  emits('reset')
}

// 搜索
const onSearch = () => {
  pageParams.value.page = 1
  emits('search', searchParams.value)
}

// 新增
const onAdd = () => {
  emits('rowAdd')
}

// 修改
const onEdit = (row: any) => {
  emits('rowEdit', row)
}

// 删除
const onDelete = (row: any) => {
  emits('rowDelete', row)
}

// 查看详情
const onView = (row: any) => {
  emits('rowView', row)
}

// 刷新
const onRefresh = () => {
  emits('loadData', searchParams.value)
}

const crudTable = shallowRef()

defineExpose({
  crudTable
})

onMounted(() => {
  fillSearchParams()
  emits('loadData', searchParams.value)
})
</script>

<style lang="scss" scoped></style>

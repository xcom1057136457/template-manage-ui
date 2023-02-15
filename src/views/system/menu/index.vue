<template>
  <crud-table
    :option="crudOption"
    :data="tableData"
    :refreshTable="refreshTable"
    v-model:page="pageParams.page"
    v-model:pageSize="pageParams.pageSize"
    :total="pageParams.total"
    @rowAdd="onAdd"
  >
    <template #menuleft>
      <el-button
        type="info"
        text
        bg
        :icon="Switch"
        @click="toggleExpandAll"
        v-permission="['menu:list:add']"
        >展开/折叠</el-button
      >
    </template>

    <template #status_slot="record">
      <el-tag disable-transitions>
        {{ record.row.status === 0 ? '正常' : '异常' }}
      </el-tag>
    </template>

    <template #icon_slot="record">
      <div class="flex h-full w-full items-center justify-center">
        <el-icon :size="18" v-if="record.row.icon">
          <component :is="record.row.icon" />
        </el-icon>
      </div>
    </template>
  </crud-table>

  <operate-dialog v-model:visible="operateShow" />
</template>

<script lang="ts">
export default {
  name: 'Menu'
}
</script>

<script lang="ts" setup>
import type { CrudOption, PageParams } from '@/types/curdTable.interface'
import { reactive, ref, getCurrentInstance } from 'vue'
import option from '@/crud/menu'
import { Switch } from '@element-plus/icons-vue'
import OperateDialog from './components/OperateDialog.vue'
import { tableData } from './mock'

const { proxy }: any = getCurrentInstance()

const pageParams = reactive<PageParams>({
  page: 1,
  pageSize: 10,
  total: 0
})
const refreshTable = ref<boolean>(true)

const crudOption = ref<CrudOption>(option)

/** 展开/折叠操作 */
const toggleExpandAll = () => {
  refreshTable.value = false
  crudOption.value.defaultExpandAll = !crudOption.value.defaultExpandAll
  proxy?.$nextTick(() => {
    refreshTable.value = true
  })
}

const operateShow = ref<boolean>(false)

const onAdd = () => {
  operateShow.value = true
}
</script>

<style lang="scss" scoped></style>

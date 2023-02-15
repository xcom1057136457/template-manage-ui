<template>
  <crud-table
    :data="tableData"
    :option="option"
    v-model:page="pageParams.page"
    v-model:pageSize="pageParams.pageSize"
    :total="pageParams.total"
  >
    <template #menuleft>
      <el-button type="danger" text bg :icon="Delete">清空</el-button>
    </template>
  </crud-table>
</template>

<script lang="ts">
export default {
  name: 'Operlog'
}
</script>

<script lang="ts" setup>
import option from '@/crud/operlog'
import { useLoadData } from '@/hooks/loadData'
import { Delete } from '@element-plus/icons-vue'

const { pageParams, tableData } = useLoadData()
</script>

<style lang="scss" scoped></style>

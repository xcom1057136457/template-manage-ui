<template>
  <crud-table
    :option="option"
    v-model:page="pageParams.page"
    v-model:pageSize="pageParams.pageSize"
    :total="pageParams.total"
  >
    <template #menuleft>
      <el-button type="info" bg text :icon="Refresh">刷新缓存</el-button>
    </template>
  </crud-table>
</template>

<script lang="ts">
export default {
  name: 'Config'
}
</script>

<script lang="ts" setup>
import option from '@/crud/config'
import { useLoadData } from '@/hooks/loadData'
import { Refresh } from '@element-plus/icons-vue'

const { pageParams } = useLoadData()
</script>

<style lang="scss" scoped></style>

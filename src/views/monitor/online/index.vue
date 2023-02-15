<template>
  <crud-table
    :data="tableData"
    :option="option"
    v-model:page="pageParams.page"
    v-model:pageSize="pageParams.pageSize"
    :total="pageParams.total"
  />
</template>

<script lang="ts">
export default {
  name: 'Online'
}
</script>

<script lang="ts" setup>
import { useLoadData } from '@/hooks/loadData'
import option from '@/crud/online'

const { pageParams, tableData } = useLoadData()
</script>

<style lang="scss" scoped></style>

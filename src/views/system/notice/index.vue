<template>
  <crud-table
    :option="option"
    :data="tableData"
    v-model:page="pageParams.page"
    v-model:pageSize="pageParams.pageSize"
    :total="pageParams.total"
  />
</template>

<script lang="ts">
export default {
  name: 'Notice'
}
</script>

<script lang="ts" setup>
import option from '@/crud/notice'
import { useLoadData } from '@/hooks/loadData'

const { pageParams, tableData } = useLoadData()
</script>

<style lang="scss" scoped></style>

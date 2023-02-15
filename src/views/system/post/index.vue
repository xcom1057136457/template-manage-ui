<template>
  <crud-table
    :option="option"
    :data="tableData"
    v-model:page="pageParams.page"
    v-model:pageSize="pageParams.pageSize"
    :total="pageParams.total"
  >
    <template #status_slot="record">
      <el-tag>{{ record.row.status === 0 ? '正常' : '异常' }}</el-tag>
    </template>
  </crud-table>
</template>

<script lang="ts">
export default {
  name: 'Post'
}
</script>

<script lang="ts" setup>
import type { PageParams } from '@/types/curdTable.interface'
import { reactive, ref } from 'vue'
import option from '@/crud/post'

const pageParams = reactive<PageParams>({
  page: 1,
  pageSize: 10,
  total: 10
})

const tableData = ref<any>([
  {
    id: 1,
    postKey: 'ceo',
    postName: '董事长',
    postSort: 1,
    status: 0,
    createTime: '2022-10-19 20:56:47'
  },
  {
    id: 2,
    postKey: 'se',
    postName: '项目经理',
    postSort: 2,
    status: 0,
    createTime: '2022-10-19 20:56:47'
  },
  {
    id: 3,
    postKey: 'hr',
    postName: '人力资源',
    postSort: 3,
    status: 0,
    createTime: '2022-10-19 20:56:47'
  },
  {
    id: 4,
    postKey: 'user',
    postName: '普通员工',
    postSort: 4,
    status: 0,
    createTime: '2022-10-19 20:56:47'
  }
])
</script>

<style lang="scss" scoped></style>

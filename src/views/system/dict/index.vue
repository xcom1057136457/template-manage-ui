<template>
  <crud-table
    :data="tableData"
    :option="option"
    v-model:page="pageParams.page"
    v-model:pageSize="pageParams.pageSize"
    :total="pageParams.total"
  >
    <template #menuleft>
      <el-button type="info" bg text :icon="Refresh">刷新缓存</el-button>
    </template>

    <template #dictType_slot="record">
      <el-link
        type="primary"
        :underline="false"
        @click="goDictDetail(record.row.id)"
        >{{ record.row.dictType }}</el-link
      >
    </template>

    <template #status_slot="record">
      <el-tag>{{ record.row.status === 0 ? ' 正常' : '停用' }}</el-tag>
    </template>
  </crud-table>
</template>

<script lang="ts">
export default {
  name: 'Dict'
}
</script>

<script lang="ts" setup>
import option from '@/crud/dict'
import { Refresh } from '@element-plus/icons-vue'
import { reactive } from 'vue'
import type { PageParams } from '@/types/curdTable.interface'
import { tableData } from './mock'
import { useRouter } from 'vue-router'

const router = useRouter()

const pageParams = reactive<PageParams>({
  page: 1,
  pageSize: 10,
  total: 0
})

const goDictDetail = (id: any) => {
  router.push({
    name: 'DictData',
    query: {
      id
    }
  })
}
</script>

<style lang="scss" scoped></style>

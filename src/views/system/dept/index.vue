<template>
  <crud-table
    :refreshTable="refreshTable"
    :option="crudOption"
    :data="tableData"
    v-model:page="pageParams.page"
    v-model:pageSize="pageParams.pageSize"
  >
    <template #menuleft>
      <el-button type="info" text bg :icon="Switch" @click="toggleExpandAll">
        展开/折叠
      </el-button>
    </template>

    <template #status_slot="record">
      <el-tag disable-transitions>{{
        record.row.status === 0 ? '正常' : '停用'
      }}</el-tag>
    </template>
  </crud-table>
</template>

<script lang="ts">
export default {
  name: 'Dept'
}
</script>

<script lang="ts" setup>
import type { CrudOption, PageParams } from '@/types/curdTable.interface'
import { reactive, ref, getCurrentInstance } from 'vue'
import option from '@/crud/dept'
import { Switch } from '@element-plus/icons-vue'

const { proxy }: any = getCurrentInstance()

const pageParams = reactive<PageParams>({
  page: 1,
  pageSize: 10,
  total: 10
})

const tableData = ref<any>([
  {
    id: 1,
    deptName: '健萌科技有限公司',
    sort: 0,
    status: 0,
    createTime: '2022-10-19 20:56:47',
    children: [
      {
        id: 2,
        deptName: '深圳总公司',
        sort: 1,
        status: 0,
        createTime: '2022-10-19 20:56:47',
        children: [
          {
            id: 4,
            deptName: '研发部门',
            sort: 1,
            status: 0,
            createTime: '2022-10-19 20:56:47'
          },
          {
            id: 5,
            deptName: '市场部门',
            sort: 2,
            status: 0,
            createTime: '2022-10-19 20:56:47'
          },
          {
            id: 6,
            deptName: '测试部门',
            sort: 3,
            status: 0,
            createTime: '2022-10-19 20:56:47'
          },
          {
            id: 7,
            deptName: '财务部门',
            sort: 4,
            status: 0,
            createTime: '2022-10-19 20:56:47'
          },
          {
            id: 8,
            deptName: '运维部门',
            sort: 5,
            status: 0,
            createTime: '2022-10-19 20:56:47'
          }
        ]
      },
      {
        id: 3,
        deptName: '长沙分公司',
        sort: 2,
        status: 0,
        createTime: '2022-10-19 20:56:47',
        children: [
          {
            id: 9,
            deptName: '市场部门',
            sort: 1,
            status: 0,
            createTime: '2022-10-19 20:56:47'
          },
          {
            id: 10,
            deptName: '财务部门',
            sort: 2,
            status: 0,
            createTime: '2022-10-19 20:56:47'
          }
        ]
      }
    ]
  }
])

const crudOption = ref<CrudOption>(option)

const refreshTable = ref<boolean>(true)

const toggleExpandAll = () => {
  refreshTable.value = false
  crudOption.value.defaultExpandAll = !crudOption.value.defaultExpandAll
  proxy?.$nextTick(() => {
    refreshTable.value = true
  })
}
</script>

<style lang="scss" scoped></style>

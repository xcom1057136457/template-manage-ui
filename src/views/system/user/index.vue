<template>
  <el-row :gutter="20">
    <el-col
      :span="5"
      class="border-y-0 border-l-0 border-r border-solid border-gray-100"
    >
      <div>
        <el-input
          v-model="filterText"
          placeholder="输入部门名称..."
          class="mb-3"
          :prefix-icon="Search"
        />

        <el-tree
          ref="treeRef"
          class="filter-tree"
          :data="data"
          highlight-current
          :props="defaultProps"
          default-expand-all
          :expand-on-click-node="false"
          :filter-node-method="filterNode"
        />
      </div>
    </el-col>
    <el-col :span="19">
      <crud-table
        :option="option"
        :data="tableData"
        v-model:page="pageParams.page"
        v-model:pageSize="pageParams.pageSize"
        :total="pageParams.total"
        @loadData="loadData"
      >
        <template #status_slot="record">
          <el-switch v-model="record.row.status" />
        </template>

        <template #menuslot>
          <el-dropdown>
            <span class="el-dropdown-link">
              <el-link :underline="false" type="warning">
                <template #icon>
                  <i-ic-sharp-more-horiz class="mr-1" />
                  <span>更多</span>
                </template>
              </el-link>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>
                  <div class="flex w-full items-center justify-center">
                    <el-icon><Key /></el-icon>
                    <span class="text-sm">重置密码</span>
                  </div>
                </el-dropdown-item>
                <el-dropdown-item>
                  <div class="flex w-full items-center justify-center">
                    <el-icon><CircleCheck /></el-icon>
                    <span class="text-sm">分配角色</span>
                  </div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </template>
      </crud-table>
    </el-col>
  </el-row>
</template>

<script lang="ts">
export default {
  name: 'User'
}
</script>

<script lang="ts" setup>
import { ref, watch, reactive } from 'vue'
import type { ElTree } from 'element-plus'
import { Search } from '@element-plus/icons-vue'
import type { PageParams } from '@/types/curdTable.interface'
import option from '@/crud/user'

const filterText = ref<any>('')

const treeRef = ref<InstanceType<typeof ElTree>>()

watch(filterText, (val: any) => {
  treeRef.value!.filter(val)
})

const defaultProps = {
  children: 'children',
  label: 'label'
}

const filterNode = (value: string, data: any) => {
  if (!value) {
    return true
  }
  return data.label.includes(value)
}

const data: any[] = [
  {
    id: 1,
    label: '健萌科技',
    children: [
      {
        id: 2,
        label: '长沙总部',
        children: [
          {
            id: 4,
            label: '研发部门'
          },
          {
            id: 5,
            label: '市场部门'
          },
          {
            id: 6,
            label: '测试部门'
          },
          {
            id: 7,
            label: '财务部门'
          },
          {
            id: 8,
            label: '运维部门'
          }
        ]
      },
      {
        id: 3,
        label: '江苏部门',
        children: [
          {
            id: 9,
            label: '市场部门'
          },
          {
            id: 9,
            label: '财务部门'
          }
        ]
      }
    ]
  }
]

const pageParams = reactive<PageParams>({
  page: 1,
  pageSize: 10,
  total: 0
})

const tableData = ref<any>([])

const loadData = () => {}
</script>

<style lang="scss" scoped></style>

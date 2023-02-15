<template>
  <crud-table
    :data="tableData"
    :option="option"
    v-model:page="pageParams.page"
    v-model:pageSize="pageParams.pageSize"
    :total="pageParams.total"
  >
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
</template>

<script lang="ts">
export default {
  name: 'Role'
}
</script>

<script lang="ts" setup>
import option from '@/crud/role'
import type { PageParams } from '@/types/curdTable.interface'
import { ref } from 'vue'

const pageParams = ref<PageParams>({
  page: 1,
  pageSize: 10,
  total: 0
})

const tableData = ref<any>([])
</script>

<style lang="scss" scoped></style>

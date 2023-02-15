<template>
  <el-container class="h-full">
    <el-aside
      :width="isCollapse ? '64px' : '220px'"
      class="transition-all"
      :class="{ 'overflow-hidden': isCollapse }"
    >
      <app-side />
    </el-aside>
    <el-container class="h-full">
      <el-header
        height="40px"
        class="z-10 border-x-0 border-t-0 border-b border-solid border-gray-100 p-0"
      >
        <app-head />
      </el-header>
      <el-main class="flex flex-col overflow-hidden !p-0">
        <tags-bar v-if="showTag" />

        <div class="view-wrapper flex-1 overflow-auto p-3">
          <el-backtop target=".view-wrapper  .el-scrollbar__wrap" />
          <el-scrollbar>
            <app-main />
          </el-scrollbar>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
export default {
  name: 'LayoutPage'
}
</script>

<script lang="ts" setup>
import AppSide from './components/AppSide/index.vue'
import AppHead from './components/AppHead/index.vue'
import AppMain from './components/AppMain/index.vue'
import { useGlobalStore } from '@/stores/global'
import { storeToRefs } from 'pinia'
import { useConfigStore } from '@/stores/config'

const { isCollapse } = storeToRefs(useGlobalStore())

const { showTag } = storeToRefs(useConfigStore())
</script>

<style lang="scss" scoped></style>

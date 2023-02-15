<template>
  <el-page-header :icon="ArrowLeft" @back="$router.back()">
    <template #content>
      <span class="text-large font-600 mr-3"> 用户性别 </span>
    </template>
  </el-page-header>

  <crud-table :option="option" />
</template>

<script lang="ts">
export default {
  name: 'DictData'
}
</script>

<script lang="ts" setup>
import { ArrowLeft } from '@element-plus/icons-vue'
import option from '@/crud/dict-data'
</script>

<style lang="scss" scoped></style>

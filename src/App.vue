<script setup lang="ts">
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '@/stores/global'
import { useWaterMarkStore } from '@/stores/waterMark'
import { useConfigStore } from '@/stores/config'

const { lockShow } = storeToRefs(useGlobalStore())
const { showWaterMark } = storeToRefs(useWaterMarkStore())
const { waterMarkText } = storeToRefs(useConfigStore())
</script>

<template>
  <el-config-provider :locale="zhCn">
    <router-view />
  </el-config-provider>

  <n-watermark
    v-if="showWaterMark"
    :content="waterMarkText"
    cross
    fullscreen
    :font-size="16"
    :line-height="16"
    :width="384"
    :height="384"
    :x-offset="12"
    :y-offset="60"
    :rotate="-15"
  />

  <lock-screen v-model:visible="lockShow" />
</template>

<style lang="scss" scoped></style>

<template>
  <el-drawer
    v-model="drawer"
    title="全局配置"
    direction="rtl"
    append-to-body
    size="27%"
  >
    <el-form label-position="right" label-width="140px">
      <el-form-item label="导航是否折叠:">
        <el-switch v-model="showCollapse" />
      </el-form-item>

      <el-form-item label="是否展示暗黑模式:">
        <el-switch v-model="showDarkMode" />
      </el-form-item>

      <el-form-item label="是否展示全屏模式:">
        <el-switch v-model="showFullScreen" />
      </el-form-item>

      <el-form-item label="是否展示锁屏模式:">
        <el-switch v-model="showLockScreen" />
      </el-form-item>

      <el-form-item label="是否展示LOGO:">
        <el-switch v-model="showLogo" />
      </el-form-item>

      <el-form-item label="是否展示信息列表:">
        <el-switch v-model="showMsg" />
      </el-form-item>

      <el-form-item label="是否展示TAG栏:">
        <el-switch v-model="showTag" />
      </el-form-item>

      <el-form-item label="是否展示水印模式:">
        <el-switch v-model="showWaterMarkMode" />
      </el-form-item>

      <el-form-item label="水印文字:">
        <el-input
          v-model="waterMarkText"
          placeholder="请输入水印文字..."
          clearable
        />
      </el-form-item>
    </el-form>
  </el-drawer>
</template>

<script lang="ts">
export default {
  name: 'SetConfig'
}
</script>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useConfigStore } from '@/stores/config'

const {
  showCollapse,
  showDarkMode,
  showFullScreen,
  showLockScreen,
  showLogo,
  showMsg,
  showTag,
  showWaterMarkMode,
  waterMarkText
} = storeToRefs(useConfigStore())

interface Props {
  visible: boolean
}

const props = withDefaults(defineProps<Props>(), {
  visible: false
})

const emits = defineEmits(['update:visible'])

const drawer = ref<boolean>(false)

watch(
  () => props.visible,
  (val, oldVal) => {
    if (val === oldVal) {
      return
    }
    drawer.value = val
  }
)

watch(drawer, (val, oldVal) => {
  if (val === oldVal) {
    return
  }
  emits('update:visible', val)
})
</script>

<style lang="scss" scoped></style>

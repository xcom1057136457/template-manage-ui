<template>
  <div
    class="app-head-wrapper flex h-full justify-between bg-white dark:bg-black"
  >
    <div class="left-wrapper flex items-center">
      <div
        class="ml-3 flex h-full cursor-pointer items-center transition-all hover:text-primary"
        v-show="showCollapse"
        @click="isCollapse = !isCollapse"
      >
        <el-icon :size="18">
          <Fold v-if="!isCollapse" />
          <Expand v-else />
        </el-icon>
      </div>
      <div class="bread-crump-wrapper ml-[15px]">
        <bread-crump />
      </div>
    </div>
    <div class="right-wrapper flex items-center">
      <el-tooltip
        class="box-item"
        effect="dark"
        content="锁定屏幕"
        placement="bottom"
      >
        <el-icon @click="lockShow = true" v-if="showLockScreen">
          <Lock />
        </el-icon>
      </el-tooltip>

      <el-tooltip
        class="box-item"
        effect="dark"
        :content="isFullscreen ? '缩小' : '全屏'"
        placement="bottom"
      >
        <el-icon @click="toggle" v-if="showFullScreen">
          <i-bytesize-fullscreen v-if="!isFullscreen" />
          <i-bytesize-fullscreen-exit v-else />
        </el-icon>
      </el-tooltip>

      <el-tooltip
        class="box-item"
        effect="dark"
        content="暗黑模式"
        placement="bottom"
      >
        <el-icon @click="changeDark()" v-if="showDarkMode">
          <i-carbon-moon v-if="!isDark" />
          <i-material-symbols-sunny-outline v-else />
        </el-icon>
      </el-tooltip>

      <el-tooltip
        class="box-item"
        effect="dark"
        :content="showWaterMark ? '隐藏水印' : '显示水印'"
        placement="bottom"
      >
        <el-icon
          @click="showWaterMark = !showWaterMark"
          v-if="showWaterMarkMode"
        >
          <i-ic-outline-branding-watermark />
        </el-icon>
      </el-tooltip>

      <el-tooltip
        class="box-item"
        effect="dark"
        content="配置设置"
        placement="bottom"
      >
        <el-icon @click="configShow = !configShow">
          <i-ion-settings-outline />
        </el-icon>
      </el-tooltip>

      <el-tooltip
        class="box-item"
        effect="dark"
        content="消息"
        placement="bottom"
      >
        <el-icon v-if="showMsg">
          <i-ph-bell-ringing />
        </el-icon>
      </el-tooltip>

      <div
        class="user-info-wrapper box-border flex h-10 cursor-pointer items-center bg-gray-50 px-4 transition-all hover:bg-gray-100"
        @click="onLogout"
      >
        <el-avatar :size="30" :src="userInfo.avatar" />
        <span class="username ml-3 text-[13px] font-semibold text-black/50">
          {{ userInfo.username }}
        </span>
        <i-ri-logout-circle-r-line
          class="logout-icon ml-3 text-sm text-black/50"
        />
      </div>
    </div>
  </div>

  <set-config v-model:visible="configShow" />
</template>

<script lang="ts">
export default {
  name: 'AppHead'
}
</script>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useRouter, useRoute } from 'vue-router'
import { useGlobalStore } from '@/stores/global'
import { useWaterMarkStore } from '@/stores/waterMark'
import { useConfigStore } from '@/stores/config'
import { useFullscreen, useDark, useToggle } from '@vueuse/core'
import { ref } from 'vue'

const { userInfo } = storeToRefs(useUserStore())
const { logout } = useUserStore()

const { showWaterMark } = storeToRefs(useWaterMarkStore())

const {
  showCollapse,
  showDarkMode,
  showFullScreen,
  showLockScreen,
  showMsg,
  showWaterMarkMode
} = storeToRefs(useConfigStore())

const { toggle, isFullscreen } = useFullscreen()

const isDark = useDark()
const changeDark = useToggle(isDark)

const { isCollapse, lockShow } = storeToRefs(useGlobalStore())

const router = useRouter()
const route = useRoute()

const onLogout = () => {
  ElMessageBox.confirm('确定退出登录吗？', '系统提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(async () => {
      await logout()
      router.replace({
        path: `/login`,
        query: {
          redirect: route.fullPath
        }
      })
      ElMessage.success('退出成功!')
    })
    .catch(() => {
      ElMessage.info('取消成功!')
    })
}

const configShow = ref<boolean>(false)
</script>

<style scoped>
.app-head-wrapper .right-wrapper .el-icon {
  @apply text-base mr-[5px] text-black/[.5] cursor-pointer rounded-full p-2 transition-all duration-300 hover:bg-black/[.05];
}
</style>

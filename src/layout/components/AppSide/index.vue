<template>
  <div
    class="app-side-wrapper flex h-full flex-col border-y-0 border-l-0 border-r border-solid border-el-menu-border-color bg-[#1d2124]"
  >
    <transition :name="logoShow ? 'el-fade-in' : ''">
      <router-link
        class="box-border flex h-[70px] cursor-pointer items-center justify-center py-1 no-underline"
        v-if="logoShow && showLogo"
        to="/"
      >
        <img
          src="https://cdnvue.gymcity.com.cn/uploads/pub-white-jm-logo"
          class="w-[130px] object-cover"
          alt=""
        />
      </router-link>
    </transition>
    <div class="menu-wrapper flex-1 overflow-y-auto overflow-x-hidden">
      <el-scrollbar>
        <el-menu
          :default-active="activeMenu"
          unique-opened
          class="border-r-0"
          mode="vertical"
          :collapse-transition="false"
          :collapse="isCollapse"
          active-text-color="#ffd04b"
          background-color="#1d2124"
          text-color="#fff"
          @select="changePage"
        >
          <side-bar-item
            v-for="(routeItem, index) in (sidebarRouters as any)"
            :key="routeItem.path + index"
            :item="routeItem"
            :base-path="routeItem.path"
          />
        </el-menu>
      </el-scrollbar>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'AppSide'
}
</script>

<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { usePermissionStore } from '@/stores/permission'
import SideBarItem from './SideBarItem.vue'
import { useGlobalStore } from '@/stores/global'
import { useConfigStore } from '@/stores/config'

const { sidebarRouters } = storeToRefs(usePermissionStore())
const { isCollapse } = storeToRefs(useGlobalStore())
const { showLogo } = storeToRefs(useConfigStore())

const route = useRoute()

const router = useRouter()

const activeMenu = ref<any>('')

const logoShow = ref<boolean>(!isCollapse.value)

watch(isCollapse, (collapse: boolean) => {
  if (!collapse) {
    setTimeout(() => {
      logoShow.value = true
    }, 150)
  }
  logoShow.value = false
})

watch(
  () => route,
  (val: any) => {
    if (route.meta?.activeMenu) {
      activeMenu.value = route.meta?.activeMenu
      return
    }
    activeMenu.value = val.path
  },
  { deep: true }
)

const changePage = (path: any) => {
  router.push({
    path
  })
}

onMounted(() => {
  if (route.meta?.activeMenu) {
    activeMenu.value = route.meta?.activeMenu
    return
  }
  activeMenu.value = route.path
})
</script>

<style lang="scss" scoped></style>

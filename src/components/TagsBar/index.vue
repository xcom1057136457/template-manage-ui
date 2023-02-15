<template>
  <div class="flex w-full">
    <div
      class="tags-bar-wrapper box-border flex-1 overflow-x-auto bg-white pl-3 dark:bg-black"
    >
      <el-tabs
        class="w-full"
        v-model="editableTabsValue"
        type="card"
        @tab-click="onPageChange"
        @tab-remove="onPageRemove"
      >
        <el-tab-pane
          v-for="item in tagsList"
          :key="item.path"
          :name="item.path"
          :closable="item.closeable"
        >
          <template #label>
            <div
              v-if="editableTabsValue === item.path"
              class="mr-2 inline-block h-2 w-2 rounded-full bg-primary transition-all"
            ></div>
            <span>{{ item.title }}</span>
          </template>
        </el-tab-pane>
      </el-tabs>
    </div>
    <el-dropdown>
      <div
        class="z-10 flex h-full cursor-pointer items-center justify-center border-y-0 border-l border-r-0 border-solid border-gray-100 bg-white px-2 transition-all hover:text-primary"
      >
        <el-icon>
          <i-cil-apps-settings />
        </el-icon>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            @click="onCloseCurrent"
            :disabled="route.path === '/dashboard'"
          >
            <div class="flex items-center justify-center">
              <i-mdi-close-circle-multiple-outline />
              <span class="ml-2 inline-block">关闭当前</span>
            </div>
          </el-dropdown-item>
          <el-dropdown-item @click="onCloseOther">
            <div class="flex items-center justify-center">
              <i-mdi-close-circle-multiple-outline />
              <span class="ml-2 inline-block">关闭其他</span>
            </div>
          </el-dropdown-item>
          <el-dropdown-item @click="onCloseAll">
            <div class="flex items-center justify-center">
              <i-mdi-close-circle-multiple-outline />
              <span class="ml-2 inline-block">关闭所有</span>
            </div>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
export default {
  name: 'TagsBar'
}
</script>

<script lang="ts" setup>
import { useTagViewStore } from '@/stores/tagview'
import { storeToRefs } from 'pinia'
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()

const route = useRoute()

const { tagsList } = storeToRefs(useTagViewStore())

const editableTabsValue = ref<any>('')

watch(
  () => route,
  (val: any) => {
    if (val.meta?.showTag === false) {
      return
    }
    editableTabsValue.value = val.path
    if (!tagsList.value.map((item: any) => item.path).includes(val.path)) {
      tagsList.value.push({
        path: val.path,
        title: val.meta?.title,
        closeable: true
      })
    }
  },
  { immediate: true, deep: true }
)

const onPageChange = (key: any) => {
  router.push({
    path: key?.paneName
  })
}

const onPageRemove = (name: any) => {
  const length = tagsList.value.length
  tagsList.value = tagsList.value.filter((item: any) => item.path !== name)
  if (route.path === name) {
    router.push({
      path: tagsList.value[length - 2].path
    })
  }
}

const onCloseCurrent = () => {
  const length = tagsList.value.length
  tagsList.value = tagsList.value.filter(
    (item: any) => item.path !== route.path
  )
  router.push({
    path: tagsList.value[length - 2].path
  })
}

const onCloseOther = () => {
  tagsList.value = tagsList.value.filter((item: any) => {
    return item.path === '/dashboard' || item.path === route.path
  })
}

const onCloseAll = () => {
  tagsList.value = [
    {
      path: '/dashboard',
      title: '数据舱',
      closeable: false
    }
  ]
  router.push('/')
}
</script>

<style lang="scss" scoped></style>

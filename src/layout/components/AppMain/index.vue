<template>
  <div
    :class="{ 'bg-white dark:bg-black p-3': !route.meta.customBg }"
    class="overflow-hidden"
  >
    <router-view v-slot="{ Component, route }">
      <keep-alive :include="cachedViews">
        <component :is="Component" :key="route.path" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script lang="ts">
export default {
  name: 'AppMain'
}
</script>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { useTagViewStore } from '@/stores/tagview'
import { storeToRefs } from 'pinia'
import { watch } from 'vue'

const { cachedViews } = storeToRefs(useTagViewStore())
const { addCachedView } = useTagViewStore()

const route = useRoute()

watch(
  () => route.path,
  () => {
    addCachedView(route)
  }
)

addCachedView(route)
</script>

<style lang="scss" scoped></style>

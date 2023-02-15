<template>
  <el-breadcrumb separator="/" class="text-[13px]">
    <el-breadcrumb-item v-for="(item, index) in breadCrumpList" :key="index">
      {{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts">
export default {
  name: 'BreadCrump'
}
</script>

<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { usePermissionStore } from '@/stores/permission'
import { storeToRefs } from 'pinia'

const { sidebarRouters } = storeToRefs(usePermissionStore())

const breadCrumpList = ref<any>([])

const route = useRoute()

watch(
  () => route.path,
  (path: any) => {
    findRouteLink(sidebarRouters.value, path)
  },
  { deep: true }
)

const findRouteLink = (list: any, path: any) => {
  if (path === '/login') {
    return
  }

  if (route.meta?.customBread) {
    breadCrumpList.value = (route.meta as any)?.customBread.map((item: any) => {
      return {
        name: item,
        meta: {
          title: item
        }
      }
    })

    return
  }
  const routeArr = getParentsById(
    list,
    path.split('/')[path.split('/').length - 1]
  )

  const breadCrumpArr = routeArr.filter((item: any) => {
    return item.meta && item.meta.title
  })
  breadCrumpList.value = breadCrumpArr.reverse()
}

const getParentsById = (list: any, path: any) => {
  for (const i in list) {
    if (list[i].path === path) {
      //查询到就返回该数组对象
      return [list[i]]
    }

    if (list[i].children) {
      const node: any = getParentsById(list[i].children, path)
      if (node !== undefined) {
        //查询到把父节点连起来
        return node.concat(list[i])
      }
    }
  }
}

onMounted(() => {
  findRouteLink(sidebarRouters.value, route.path)
})
</script>

<style lang="scss" scoped></style>

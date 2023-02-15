<template>
  <div v-if="!item.hidden">
    <template
      v-if="
        hasOneShowingChild(item.children, item) &&
        (!onlyOneChild.children || onlyOneChild.noShowingChildren) &&
        !item.alwaysShow
      "
    >
      <el-menu-item
        :index="resolvePath(onlyOneChild.path)"
        v-if="onlyOneChild.meta"
        :key="resolvePath(onlyOneChild.path)"
      >
        <template v-if="onlyOneChild.meta && onlyOneChild.meta.icon">
          <el-icon>
            <component
              :is="
                onlyOneChild.meta && onlyOneChild.meta.icon
                  ? onlyOneChild.meta.icon
                  : ''
              "
            />
          </el-icon>
        </template>
        <span>
          {{ item.meta ? item.meta.title : item.children[0].meta.title }}
        </span>
      </el-menu-item>
    </template>

    <el-sub-menu
      v-else
      :key="item.path"
      :index="resolvePath(item.path)"
      ref="subMenu"
      popper-append-to-body
    >
      <template #title>
        <template v-if="item.meta && item.meta.icon">
          <el-icon>
            <component
              :is="item.meta && item.meta.icon ? item.meta.icon : ''"
              class="active"
            />
          </el-icon>
        </template>
        <span v-if="item.meta">{{ item.meta.title }}</span>
      </template>
      <side-bar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />
    </el-sub-menu>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SideBarItem'
}
</script>

<script lang="ts" setup>
import { ref } from 'vue'
import { isExternal } from '@/utils/validate'
import { getNormalPath } from '@/utils/utils'
import SideBarItem from './SideBarItem.vue'

interface Props {
  item?: any
  isNest?: boolean
  basePath?: string
}

const props = withDefaults(defineProps<Props>(), {
  item: {},
  isNest: false,
  basePath: ''
})

const onlyOneChild = ref<any>({})

function hasOneShowingChild(children = [], parent?: any) {
  if (!children) {
    children = []
  }
  const showingChildren = children.filter((item: any) => {
    if (item.hidden) {
      return false
    }
    // Temp set(will be used if only has one showing child)
    onlyOneChild.value = item
    return true
  })

  // When there is only one child router, the child router is displayed by default
  if (showingChildren.length === 1) {
    return true
  }

  // Show parent if there are no child router to display
  if (showingChildren.length === 0) {
    onlyOneChild.value = { ...parent, path: '', noShowingChildren: true }
    return true
  }

  return false
}

function resolvePath(routePath?: any, routeQuery?: any) {
  if (isExternal(routePath)) {
    return routePath
  }
  if (isExternal(props.basePath)) {
    return props.basePath
  }
  if (routeQuery) {
    const query = JSON.parse(routeQuery)
    return {
      path: getNormalPath(props.basePath + '/' + routePath),
      query: query
    }
  }
  return getNormalPath(props.basePath + '/' + routePath)
}
</script>

<style lang="scss" scoped></style>

<template>
  <el-popover placement="bottom" :width="450" trigger="click">
    <div class="h-80 overflow-y-auto">
      <el-scrollbar>
        <el-row>
          <el-col :span="4" v-for="(item, key) in ElementIcon" :key="key">
            <div class="flex w-full items-center justify-center py-2">
              <el-icon
                class="cursor-pointer hover:text-primary"
                :size="20"
                @click="onIconClick(key)"
              >
                <component :is="key" />
              </el-icon>
            </div>
          </el-col>
        </el-row>
      </el-scrollbar>
    </div>
    <template #reference>
      <slot></slot>
    </template>
  </el-popover>
</template>

<script lang="ts">
export default {
  name: 'IconSelect'
}
</script>

<script lang="ts" setup>
import * as ElementIcon from '@element-plus/icons-vue'

const emits = defineEmits(['update:icon'])

const onIconClick = (key: string) => {
  emits('update:icon', key)
}
</script>

<style lang="scss" scoped></style>

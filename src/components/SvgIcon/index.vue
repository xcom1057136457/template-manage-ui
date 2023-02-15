<template>
  <svg aria-hidden="true" class="align-[-0.1em] text-[1em]">
    <use :xlink:href="symbolId" :fill="props.color" />
  </svg>
</template>

<script lang="ts">
export default {
  name: 'SvgIcon'
}
</script>

<script lang="ts" setup>
import { computed } from 'vue'

interface Props {
  name?: string
  color?: string
}

const props = withDefaults(defineProps<Props>(), {
  name: '',
  color: '#000'
})

const symbolId = computed(() => {
  const iconName = `#icon-${props.name}`
  return iconName
})
</script>

<style lang="scss" scoped></style>

<template>
  <el-popover
    width="180px"
    :disabled="props.disabled"
    popper-class="month-select-pop"
  >
    <div class="month-select-wrapper box-border flex h-[300px] w-full py-1">
      <div
        class="left-year-wrapper h-full flex-1 overflow-auto border-y-0 border-r border-l-0 border-solid border-gray-100"
      >
        <el-scrollbar>
          <div
            class="year-item mx-2 mb-2 cursor-pointer py-1 text-center text-sm"
            :class="{
              'mb-0': index === yearList.length - 1,
              'bg-[#0030dc]/70 text-white rounded-sm': currentYear === item
            }"
            v-for="(item, index) in yearList"
            :key="index"
            @click="timeClick(item, 'year')"
            >{{ item }}</div
          >
        </el-scrollbar>
      </div>
      <div class="right-month-wrapper h-full flex-1 overflow-auto">
        <el-scrollbar>
          <div
            class="month-item mx-2 mb-2 cursor-pointer py-1 text-center text-sm"
            :class="{
              'mb-0': index === yearList.length - 1,
              'bg-[#0030dc]/70 text-white rounded-sm': currentMonth === item
            }"
            v-for="(item, index) in 12"
            :key="index"
            @click="timeClick(item, 'month')"
            >{{ item }}</div
          >
        </el-scrollbar>
      </div>
    </div>

    <template #reference>
      <slot></slot>
    </template>
  </el-popover>
</template>

<script lang="ts">
export default {
  name: 'MonthSelect'
}
</script>

<script lang="ts" setup>
import { getYearBetween } from '@/utils/utils'
import { ref, onMounted, computed, watch } from 'vue'
import dayjs from 'dayjs'

interface Props {
  startYear?: string
  endYear?: string
  date?: any
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  startYear: '2021-01-01',
  endYear: '2099-01-01',
  date: new Date(),
  disabled: false
})

const emits = defineEmits(['update:date', 'finish'])

const selectDate = ref<any>(
  dayjs(dayjs(props.date).endOf('month')).format('YYYY-M')
)

watch(
  () => props.date,
  (val: any, oldVal: any) => {
    if (val === oldVal) {
      return
    }
    selectDate.value = val
  }
)

watch(
  selectDate,
  (val: any, oldVal: any) => {
    if (val === oldVal) {
      return
    }
    emits('update:date', val)
  },
  { immediate: true }
)

const currentYear = computed(() => {
  return dayjs(selectDate.value).year()
})

const currentMonth = computed(() => {
  return dayjs(selectDate.value).month() + 1
})

const yearList = ref<any>([])

const calcYear = () => {
  yearList.value = getYearBetween(props.startYear, props.endYear)
}

const timeClick = (date: any, type: string) => {
  if (type === 'year') {
    selectDate.value = `${date}-${currentMonth.value}`
  } else {
    selectDate.value = `${currentYear.value}-${date}`
  }
  emits('finish')
}

onMounted(() => {
  calcYear()
})
</script>

<style lang="scss" scoped></style>

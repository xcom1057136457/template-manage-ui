<template>
  <div class="dashboard-wrapper">
    <el-row :gutter="20" class="mb-[20px] w-full">
      <el-col :span="6" v-for="item in overviewBlockList" :key="item.id">
        <div class="flex justify-between bg-white px-[30px] py-[20px]">
          <template v-if="item.icon === 'i-icon-park-solid-peoples'">
            <i-icon-park-solid-peoples
              :style="{ color: item.color }"
              class="text-[48px]"
            />
          </template>

          <template v-if="item.icon === 'i-mdi-message-processing'">
            <i-mdi-message-processing
              :style="{ color: item.color }"
              class="text-[48px]"
            />
          </template>

          <template v-if="item.icon === 'i-ph-currency-dollar-bold'">
            <i-ph-currency-dollar-bold
              :style="{ color: item.color }"
              class="text-[48px]"
            />
          </template>

          <template
            v-if="item.icon === 'i-material-symbols-shopping-cart-rounded'"
          >
            <i-material-symbols-shopping-cart-rounded
              :style="{ color: item.color }"
              class="text-[48px]"
            />
          </template>

          <div class="flex flex-col justify-between">
            <div class="text-base font-bold text-black/50">
              {{ item.label }}
            </div>
            <div class="text-xl font-bold text-[#666]">{{
              Number(item.count).toLocaleString()
            }}</div>
          </div>
        </div>
      </el-col>
    </el-row>

    <div class="mb-[20px] h-[366px] bg-white p-4">
      <div id="dashboard-chart-1" class="h-full w-full"></div>
    </div>

    <el-row :gutter="20" class="mb-[20px] w-full">
      <el-col :span="8">
        <div class="h-[316px] bg-white p-4">
          <div id="dashboard-chart-2" class="h-full w-full"></div>
        </div>
      </el-col>

      <el-col :span="8">
        <div class="h-[316px] bg-white p-4">
          <div id="dashboard-chart-3" class="h-full w-full"></div>
        </div>
      </el-col>

      <el-col :span="8">
        <div class="h-[316px] bg-white p-4">
          <div id="dashboard-chart-4" class="h-full w-full"></div>
        </div>
      </el-col>
    </el-row>

    <el-row class="w-full" :gutter="20">
      <el-col :span="12">
        <div class="box-border h-full bg-white p-3">
          <el-table :data="tableData" stripe>
            <el-table-column
              label="Order_No"
              prop="orderNo"
              align="left"
              show-overflow-tooltip
            />
            <el-table-column
              label="Price"
              prop="price"
              align="center"
              width="110px"
              show-overflow-tooltip
            >
              <template #default="record">
                ￥{{ Number(record.row.price).toLocaleString() }}
              </template>
            </el-table-column>
            <el-table-column
              label="Status"
              prop="status"
              align="center"
              width="100px"
              show-overflow-tooltip
            >
              <template #default="record">
                <el-tag :type="record.row.status === 0 ? 'success' : 'danger'">
                  {{ record.row.status === 0 ? 'success' : 'pending' }}
                </el-tag>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="flex h-full flex-col bg-white">
          <div
            class="border-x-0 border-t-0 border-b border-solid border-gray-100 py-2 px-3 text-lg font-bold text-black/50"
            >Todo List</div
          >
          <div class="flex-1 px-3">
            <el-checkbox-group v-model="checkList">
              <div
                v-for="item in todolist"
                :key="item.id"
                class="border-0 border-b border-solid border-gray-100 py-[5px]"
              >
                <el-checkbox :label="item.id">{{ item.label }}</el-checkbox>
              </div>
            </el-checkbox-group>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="box-border h-full overflow-hidden bg-white">
          <img
            class="block w-full cursor-pointer transition-all hover:scale-110"
            src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png"
            alt=""
          />
          <div class="relative px-[10px] pt-[50px]">
            <div
              class="absolute top-[-35px] left-[10px] flex h-[70px] w-[70px] items-center justify-center overflow-hidden rounded-full bg-white"
            >
              <img
                class="h-[60px] w-[60px] rounded-full"
                src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"
                alt=""
              />
            </div>

            <div>
              <div
                v-for="(item, index) in technologyList"
                :key="item.id"
                class="mb-3"
                :class="{ 'mb-0': index === technologyList.length - 1 }"
              >
                <label for="">{{ item.label }}</label>
                <el-progress
                  :status="item.progress === 100 ? 'success' : ''"
                  class="w-full"
                  :percentage="item.progress"
                />
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
export default {
  name: 'DashBoard'
}
</script>

<script lang="ts" setup>
import { reactive, onMounted, ref } from 'vue'
import { nanoid } from 'nanoid'
import * as echarts from 'echarts'
import {
  chart1Option,
  chart2Option,
  chart3Option,
  chart4Option,
  tableData,
  todolist,
  technologyList
} from './constance'

const overviewBlockList = reactive<any>([
  {
    id: nanoid(),
    icon: 'i-icon-park-solid-peoples',
    label: 'New Visits',
    count: 102400,
    color: '#40c9c6'
  },
  {
    id: nanoid(),
    icon: 'i-mdi-message-processing',
    label: 'Messages',
    count: 81212,
    color: '#36a3f7'
  },
  {
    id: nanoid(),
    icon: 'i-ph-currency-dollar-bold',
    label: 'Purchases',
    count: 9280,
    color: '#f4516c'
  },
  {
    id: nanoid(),
    icon: 'i-material-symbols-shopping-cart-rounded',
    label: 'Shoppings',
    count: 13600,
    color: '#34bfa3'
  }
])

const initChart = () => {
  Promise.all([initChart1(), initChart2(), initChart3(), initChart4()])
}

const chart1 = ref<any>(null)
const initChart1 = () => {
  return new Promise((resolve) => {
    const chartDom: any = document.getElementById('dashboard-chart-1')
    if (!chart1.value) {
      chart1.value = echarts.init(chartDom)
    }
    chart1Option && chart1.value.setOption(chart1Option)
    resolve('')
  })
}

const chart2 = ref<any>(null)
const initChart2 = () => {
  return new Promise((resolve) => {
    const chartDom: any = document.getElementById('dashboard-chart-2')
    if (!chart2.value) {
      chart2.value = echarts.init(chartDom)
    }
    chart2Option && chart2.value.setOption(chart2Option)
    resolve('')
  })
}

const chart3 = ref<any>(null)
const initChart3 = () => {
  return new Promise((resolve) => {
    const chartDom: any = document.getElementById('dashboard-chart-3')
    if (!chart3.value) {
      chart3.value = echarts.init(chartDom)
    }
    chart3Option && chart3.value.setOption(chart3Option)
    resolve('')
  })
}

const chart4 = ref<any>(null)
const initChart4 = () => {
  return new Promise((resolve) => {
    const chartDom: any = document.getElementById('dashboard-chart-4')
    if (!chart4.value) {
      chart4.value = echarts.init(chartDom)
    }
    chart4Option && chart4.value.setOption(chart4Option)
    resolve('')
  })
}

const checkList = ref<any>([])

onMounted(() => {
  initChart()
})
</script>

<style lang="scss" scoped>
:deep(.el-checkbox__label) {
  font-size: 14px;
}
</style>

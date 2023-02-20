<template>
  <div class="s-canvas cursor-pointer">
    <canvas
      id="image-code"
      :width="props.contentWidth"
      :height="props.contentHeight"
    ></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ImageCode'
})
</script>

<script lang="ts" setup>
import { watch, onMounted } from 'vue'

interface Props {
  identifyCode?: string
  fontSizeMin?: number
  fontSizeMax?: number
  backgroundColorMin?: number
  backgroundColorMax?: number
  colorMin?: number
  colorMax?: number
  lineColorMin?: number
  lineColorMax?: number
  dotColorMin?: number
  dotColorMax?: number
  contentWidth?: number
  contentHeight?: number
}

const props = withDefaults(defineProps<Props>(), {
  identifyCode: '1234',
  fontSizeMin: 35,
  fontSizeMax: 35,
  backgroundColorMin: 180,
  backgroundColorMax: 240,
  colorMin: 50,
  colorMax: 160,
  lineColorMin: 100,
  lineColorMax: 200,
  dotColorMin: 0,
  dotColorMax: 255,
  contentWidth: 120,
  contentHeight: 40
})

// 生成一个随机数
const randomNum = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min)
}

// 生成一个随机颜色
const randomColor = (min: number, max: number) => {
  let r = randomNum(min, max)
  let g = randomNum(min, max)
  let b = randomNum(min, max)
  return `rgb(${r}, ${g}, ${b})`
}

// 绘制干扰线
const drawLine = (ctx: any) => {
  for (let i = 0; i < 3; i++) {
    ctx.strokeStyle = randomColor(props.lineColorMin, props.lineColorMax)
    ctx.beginPath()
    ctx.moveTo(
      randomNum(0, props.contentWidth),
      randomNum(0, props.contentHeight)
    )
    ctx.lineTo(
      randomNum(0, props.contentWidth),
      randomNum(0, props.contentHeight)
    )
    ctx.stroke()
  }
}

const drawText = (ctx: any, txt: any, i: any) => {
  ctx.fillStyle = randomColor(props.colorMin, props.colorMax)
  ctx.font = randomNum(props.fontSizeMin, props.fontSizeMax) + 'px SimHei'
  let x = (i + 1) * (props.contentWidth / (props.identifyCode.length + 1))
  let y = randomNum(props.fontSizeMax, props.contentHeight - 5)
  let deg = randomNum(-10, 10)
  ctx.translate(x, y)
  ctx.rotate((deg * Math.PI) / 100)
  ctx.fillText(txt, 0, 0)
  ctx.rotate((-deg * Math.PI) / 100)
  ctx.translate(-x, -y)
}

const drawDot = (ctx: any) => {
  for (let i = 0; i < 30; i++) {
    ctx.fillStyle = randomColor(0, 255)
    ctx.beginPath()
    ctx.arc(
      randomNum(0, props.contentWidth),
      randomNum(0, props.contentHeight),
      1,
      0,
      2 * Math.PI
    )
    ctx.fill()
  }
}

const drawPic = () => {
  let canvas: any = document.getElementById('image-code')
  let ctx = canvas.getContext('2d')
  ctx.textBaseline = 'bottom'
  ctx.fillStyle = randomColor(
    props.backgroundColorMin,
    props.backgroundColorMax
  )
  ctx.fillRect(0, 0, props.contentWidth, props.contentHeight)
  for (let i = 0; i < props.identifyCode.length; i++) {
    drawText(ctx, props.identifyCode[i], i)
  }
  drawLine(ctx)
  drawDot(ctx)
}

watch(
  () => props.identifyCode,
  () => {
    drawPic()
  }
)

onMounted(() => {
  drawPic()
})
</script>

<script lang="scss" scoped></script>

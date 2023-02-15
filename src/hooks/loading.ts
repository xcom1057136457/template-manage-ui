import { ElLoading } from 'element-plus'
import { ref } from 'vue'

export const useLoading = () => {
  const loading = ref<any>()

  // 开始loading
  const startLoad = () => {
    loading.value = ElLoading.service({ fullscreen: true, text: '加载中...' })
  }

  // 结束loading
  const endLoad = () => {
    loading.value.close()
  }

  return {
    startLoad,
    endLoad
  }
}

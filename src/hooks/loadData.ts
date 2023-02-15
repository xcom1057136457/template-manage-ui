import type { PageParams } from '@/types/curdTable.interface'
import { reactive, ref } from 'vue'

export const useLoadData = () => {
  const pageParams = reactive<PageParams>({
    page: 1,
    pageSize: 10,
    total: 0
  })

  const isLoading = ref<boolean>(false)

  const tableData = ref<any>([])

  const loadData = () => {
    return new Promise(() => {
      isLoading.value = true
    })
  }

  return {
    pageParams,
    isLoading,
    tableData,
    loadData
  }
}

import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'
import type { DirectiveBinding } from 'vue'

export default {
  // 在绑定元素的父组件
  // 及他自己的所有子节点都挂载完成后调用
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const { userInfo } = storeToRefs(useUserStore())
    let removeFlag = true
    binding.value.forEach((permission: any) => {
      if (userInfo.value.roles?.includes(permission)) {
        removeFlag = false
      }
    })
    removeFlag && el.remove()
  }
}

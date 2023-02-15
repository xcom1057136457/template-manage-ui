import router from '@/router'
import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useTitle } from '@vueuse/core'
import { useAuth } from '@/hooks/useAuth'
import { useUserStore } from '@/stores/user'
import { useGlobalStore } from '@/stores/global'
import { storeToRefs } from 'pinia'
import { usePermissionStore } from '@/stores/permission'
import { isHttp } from '@/utils/validate'

NProgress.configure({
  showSpinner: false
})

router.beforeEach(
  async (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    NProgress.start()
    useTitle(to.meta?.title ? '财务管理系统-' + to.meta?.title : '财务管理系统')
    const { getToken } = useAuth()
    const { getUserInfo } = useUserStore()
    const { userInfo } = storeToRefs(useUserStore())
    const { generateRoutes } = usePermissionStore()
    const { lockShow, isLock } = storeToRefs(useGlobalStore())
    const whiteList = ['/login']

    if (import.meta.env.MODE === 'development') {
      if (getToken()) {
        lockShow.value = isLock.value
        if (to.path === '/login') {
          next('/')
        } else if (!userInfo.value?.id) {
          await getUserInfo()
          const accessRoutes: any = await generateRoutes()
          accessRoutes.forEach((route: any) => {
            if (!isHttp(route.path)) {
              router.addRoute(route)
            }
          })
          next({ ...to, replace: true })
        } else {
          next()
        }
      } else if (whiteList.includes(to.path)) {
        next()
      } else {
        next(`/login?redirect=${to.fullPath}`)
      }
    } else {
      next()
    }
  }
)

router.afterEach(() => {
  NProgress.done()
})

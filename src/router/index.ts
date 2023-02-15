import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'
import type { MyRouteRecordRaw } from '@/types/menu.interface'

/**
 * Note: 路由配置项
 *
 * hidden: true                     // 当设置 true 的时候该路由不会再侧边栏出现 如401，login等页面，或者如一些编辑页面/edit/1
 * alwaysShow: true                 // 当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面
 *                                  // 只有一个时，会将那个子路由当做根路由显示在侧边栏--如引导页面
 *                                  // 若你想不管路由下面的 children 声明的个数都显示你的根路由
 *                                  // 你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由
 * name:'router-name'               // 设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
 * query: '{"id": 1, "name": "ry"}' // 访问路由的默认传递参数
 * meta : {
    keepAlive: true                 // 如果设置为false，则不会被 <keep-alive> 缓存(默认 true)
    title: 'title'                  // 设置该路由在侧边栏中展示的名字
    icon: 'svg-name'                // 设置该路由的图标，对应路径src/assets/icons/svg
    activeMenu: '/system/user'      // 当路由设置了该属性，则会高亮相对应的侧边栏。
    showTag: true                   // 设置是否显示TAG
    customBg: false                 // 设置是否自定义背景
    customBread: []                 // 自定义面包屑路径
  }
 */

export const constantRoutes: MyRouteRecordRaw[] = [
  {
    path: '',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'DashBoard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: {
          title: '数据舱',
          icon: 'DataAnalysis',
          customBread: ['数据舱'],
          customBg: true
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'LoginPage',
    hidden: true,
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录'
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoutes,
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    }
    return {
      top: 0
    }
  }
})

export default router

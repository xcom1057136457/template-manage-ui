import request from '@/utils/request'

const prefix = import.meta.env.VITE_WEB_AUTH_URL

const Api = {
  getRoutes: `${prefix}/auth/getRoutes`
}

// 获取权限菜单
export function getRoutes() {
  return request({
    url: Api.getRoutes,
    method: 'GET'
  })
}

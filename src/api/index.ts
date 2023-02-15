import request from '@/utils/request'

const Api = {
  getRoutes: `/auth/getRoutes`
}

// 获取权限菜单
export function getRoutes() {
  return request({
    url: Api.getRoutes,
    method: 'GET'
  })
}

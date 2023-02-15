import request from '@/utils/request'

const Api = {
  login: `/auth/login`,
  getUserInfo: `/auth/getUserInfo`
}
// 登录
export function login(data: any) {
  return request({
    url: Api.login,
    method: 'POST',
    data
  })
}

// 获取用户信息
export function getUserInfo() {
  return request({
    url: Api.getUserInfo,
    method: 'GET'
  })
}

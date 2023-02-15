import { defineStore } from 'pinia'
import { login, getUserInfo } from '@/api/login'
import { useAuth } from '@/hooks/useAuth'
import type { UserInfo } from '@/types/user.interface'

const { setToken, removeToken } = useAuth()

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      token: '' as string,
      userInfo: {} as UserInfo
    }
  },
  getters: {},
  actions: {
    // 登录
    login(loginParams: any) {
      const username = loginParams.username.trim()
      const password = loginParams.password.trim()
      return new Promise(async (resolve, reject) => {
        try {
          const { code, data }: any = await login({ username, password })
          if (code === 200) {
            setToken(data.accessToken)
            this.token = data.accessToken
            resolve('')
          } else {
            reject()
          }
        } catch (e) {
          reject()
        }
      })
    },
    // 退出登录
    logout() {
      return new Promise((resolve) => {
        this.token = ''
        this.userInfo = {}
        removeToken()
        resolve('')
      })
    },
    // 获取用户信息
    getUserInfo() {
      return new Promise(async (resolve, reject) => {
        try {
          const { code, data }: any = await getUserInfo()
          if (code === 200) {
            this.userInfo = {
              ...data,
              roles: ['menu:list:add', 'menu:list:delete', 'user:list:add']
            }
            resolve(data)
          } else {
            reject()
          }
        } catch (e) {
          reject(e)
        }
      })
    }
  }
})

import axios from 'axios'
import type { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'
import { useAuth } from '@/hooks/useAuth'
import cache from '@/plugins/cache'
import * as errorCode from './errorCode'
import { ElMessage, ElMessageBox, ElNotification } from 'element-plus'
import router from '@/router'

const service = axios.create({
  baseURL: '',
  // baseURL: import.meta.env.VITE_WEB_BASE_URL,
  withCredentials: true,
  timeout: 30000
})

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const { getToken } = useAuth()

    // 是否需要设置 token
    // @ts-ignore
    const isToken = (config.headers || {})?.isToken === false

    // 是否需要防止数据重复提交
    // @ts-ignore
    const isRepeatSubmit = (config.headers || {})?.isRepeatSubmit === false

    if (getToken() && !isToken) {
      // @ts-ignore
      config.headers.Authorization = 'Bearer ' + getToken() // 让每个请求携带自定义token
    }

    if (
      !isRepeatSubmit &&
      (config.method === 'post' || config.method === 'put')
    ) {
      const requestObj = {
        url: config.url,
        data:
          typeof config.data === 'object'
            ? JSON.stringify(config.data)
            : config.data,
        time: new Date().getTime()
      }
      const sessionObj = cache.session.getJSON('sessionObj')
      if (
        sessionObj === undefined ||
        sessionObj === null ||
        sessionObj === ''
      ) {
        cache.session.setJSON('sessionObj', requestObj)
      } else {
        const sUrl = sessionObj.url // 请求地址
        const sData = sessionObj.data // 请求数据
        const sTime = sessionObj.time // 请求时间
        const interval = 1000 // 间隔时间(ms)，小于此时间视为重复提交
        if (
          sData === requestObj.data &&
          requestObj.time - sTime < interval &&
          sUrl === requestObj.url
        ) {
          const message = '数据正在处理，请勿重复提交'
          return Promise.reject(new Error(message))
        }
        cache.session.setJSON('sessionObj', requestObj)
      }
    }

    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response: AxiosResponse) => {
    const { removeToken } = useAuth()

    // 未设置状态码则默认成功状态
    const code: any = response.data.code || 200

    // 获取错误信息
    const msg =
      errorCode.default[code as keyof typeof errorCode] ||
      response.data.msg ||
      errorCode.default.default

    if (code === 701 || code === 700) {
      ElMessageBox.confirm(
        '登录状态已过期，您可以继续留在该页面，或者重新登录',
        '系统提示',
        {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }
      ).then(async () => {
        removeToken()
        await router.push({
          path: '/login'
        })
      })
    } else if (code === 500) {
      ElMessage.error(msg)
      return Promise.reject(new Error(msg))
    } else if (code !== 200) {
      ElNotification.error({
        message: msg
      })
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  (error: AxiosError) => {
    const { removeToken } = useAuth()
    let { message: messageText } = error

    if (messageText.indexOf('Request failed with status code 401') !== -1) {
      ElMessageBox.confirm(
        '登录状态已过期，您可以继续留在该页面，或者重新登录',
        '系统提示',
        {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }
      ).then(async () => {
        removeToken()
        await router.push({
          path: `/login`
        })
      })
    } else if (messageText === 'Network Error') {
      messageText = '后端接口连接异常'
    } else if (messageText.includes('timeout')) {
      messageText = '系统接口请求超时'
    } else if (messageText.includes('Request failed with status code')) {
      messageText =
        '系统接口' + messageText.substr(messageText.length - 3) + '异常'
    }
    ElMessage.error({
      message: messageText
    })
    return Promise.reject(error)
  }
)

export default service

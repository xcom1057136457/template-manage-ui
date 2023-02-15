import { getCurrentInstance } from 'vue'

interface ConfigureScope {
  user_account?: string
  user_name?: string
  user_mobile?: string
}

export const useSentry = () => {
  const { proxy }: any = getCurrentInstance()

  // 设置用户信息
  const useConfigureScope = (config: ConfigureScope) => {
    proxy?.$sentry?.configureScope((scope: any) => {
      scope.setTag('user_account', config.user_account)
      scope.setTag('user_name', config.user_name)
      scope.setTag('user_mobile', config.user_mobile)
    })
  }

  // 使url 更醒目一些
  const useSetUrl = (url: string) => {
    proxy?.$sentry?.setTag('url', url)
  }

  // 主动上报错误
  const useCaptureException = (message?: string) => {
    proxy?.$sentry?.captureException(new Error(message || '出错了！'))
  }

  // 适当埋点
  const useCaptureMessage = (message?: string) => {
    proxy?.$sentry?.captureMessage(message || '埋了个点~')
  }

  return {
    useConfigureScope,
    useSetUrl,
    useCaptureException,
    useCaptureMessage
  }
}

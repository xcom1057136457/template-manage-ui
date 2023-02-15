/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_WEB_BASE_URL: string
  readonly VITE_SENTRY_ENV: string
  readonly VITE_SENTRY_DSN: string
  readonly VITE_WEB_AUTH_URL: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module 'element-plus/dist/locale/zh-cn.mjs'

declare module 'jsencrypt/bin/jsencrypt.min'

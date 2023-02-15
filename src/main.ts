import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'normalize.css/normalize.css'
import 'animate.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './permission'
import '@/assets/styles/element'
import '@/assets/styles/index.scss'
import '@/assets/styles/tailwind.css'
import * as Sentry from '@sentry/vue'
import { Integrations } from '@sentry/tracing'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'virtual:svg-icons-register'
import * as directives from '@/directives'

const app = createApp(App)

if (import.meta.env.VITE_SENTRY_ENV !== 'development') {
  Sentry.init({
    app,
    dsn: import.meta.env.VITE_SENTRY_DSN,
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
    environment: import.meta.env.VITE_SENTRY_ENV
  })

  app.config.errorHandler = (err) => {
    Sentry.captureException(err)
  }

  window.addEventListener('error', (event) => {
    Sentry.captureException(event)
  })

  window.addEventListener('unhandledrejection', (event) => {
    Sentry.captureException(event)
  })

  app.config.globalProperties.$sentry = Sentry
}

Object.keys(ElementPlusIconsVue).forEach((key: string) => {
  app.component(
    key,
    ElementPlusIconsVue[key as keyof typeof ElementPlusIconsVue]
  )
})

Object.keys(directives).forEach((key) => {
  app.directive(key, directives[key as keyof typeof directives])
})

app.use(createPinia().use(piniaPluginPersistedstate)).use(router).mount('#app')

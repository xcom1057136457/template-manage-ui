import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {
  ElementPlusResolver,
  NaiveUiResolver
} from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { resolve } from 'path'
import viteCompression from 'vite-plugin-compression'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar'
          ]
        }
      ],
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver(), IconsResolver(), NaiveUiResolver()]
    }),
    Icons({
      compiler: 'vue3',
      autoInstall: true
    }),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz'
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
      // 指定symbolId格式
      symbolId: 'icon-[name]',
      inject: 'body-last',
      customDomId: '__svg__icons__dom__'
    })
  ],
  server: {
    open: true,
    https: false,
    proxy: {
      '/api': {
        // target: 'http://admin.finance.com', // 本地
        target: 'https://tfinanceadmin.gymcity.com.cn', // 测试
        // target: 'https://financeadmin.gymcity.com.cn', // 正式
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, '')
      },
      '/authapi': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/authapi/, '')
      }
    }
  },
  preview: {
    open: true,
    https: false,
    proxy: {
      '/api': {
        // target: 'http://admin.finance.com', // 本地
        target: 'https://tfinanceadmin.gymcity.com.cn', // 测试
        // target: 'https://financeadmin.gymcity.com.cn', // 正式
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, '')
      },
      '/authapi': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/authapi/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  css: {
    devSourcemap: false,
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/styles/global.scss";'
      }
    }
  },
  build: {
    sourcemap: false,
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'esbuild',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
})

[![pSqCfTH.png](https://s1.ax1x.com/2023/02/17/pSqCfTH.png)](https://imgse.com/i/pSqCfTH)

<span style="color: teal; font-size: 25px; text-align: center; display: block; width:100%">TEMPLATE-MANAGE-UI</span>

<div align=center><a href="https://template.xiaomiaolxy.cn/">项目预览</a></div>

### 1. 技术栈

**Vue3 + Vue Router + Pinia + TypeScript + Element Plus + Naive UI + Axios**

### 2. 主要功能

1. UI组件按需加载（Tree Shaking），`src/components`目录下所有组件自动注册
2. CSS编写引入Tailwind CSS，无需费力定义class编写对应CSS，参考链接: https://tailwindcss.com/
3. SVG图片自定引入，将图片放入`assets/icons`即可，使用：

```
<svg-icon name="<SVG名>" />
```

4. 第三方图标库`icones`自动引入，参考链接: https://icones.netlify.app/
5. 打包文件自动GZIP，压缩率40%以上
6. 通过proxy进行API代理，使用方法：

```
server: {
    open: true,
    https: false,
    proxy: {
      '/api': {
        target: '<API地址>', // 线上
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, '')
      }
    }
}
```

7. 打包文件自动去除`console.log`以及`debugger`，打包文件名自动加入`timeStamp`防止项目更新缓存
8. 加入Sentry日志收集平台，自动收集线上环境错误日志
9. 加入Pinia持久化，使用方法：

```
export const useGlobalStore = defineStore('global', {
  persist: {
    key: '<KEY值>',
    storage: window.localStorage,
    paths: [<State集合>]
  },
  state: () => {
    return {}
  },
  getters: {},
  actions: {}
})
```

10. 具有完善的权限方案，包含：路由由接口数据控制并自动组装菜单栏、用户权限获取、按钮权限directive...等等
11. 具有一些小功能，如：锁屏、窗口最大化、暗黑模式、水印等等
12. 自定义设置

[![pSq9fGq.png](https://s1.ax1x.com/2023/02/17/pSq9fGq.png)](https://imgse.com/i/pSq9fGq)

13. 代码规范集成Eslint + Prettier
14. 完善的Axios配置，可进行二次自定义
15. 具有完善的CRUD组件，可以自定义修改

[![pSqCiod.png](https://s1.ax1x.com/2023/02/17/pSqCiod.png)](https://imgse.com/i/pSqCiod)

### 3. 项目预览

[![pSqC8Wq.png](https://s1.ax1x.com/2023/02/17/pSqC8Wq.png)](https://imgse.com/i/pSqC8Wq)

[![pSqCAJI.png](https://s1.ax1x.com/2023/02/17/pSqCAJI.png)](https://imgse.com/i/pSqCAJI)

[![pSqCZSP.png](https://s1.ax1x.com/2023/02/17/pSqCZSP.png)](https://imgse.com/i/pSqCZSP)
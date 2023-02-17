import { defineStore } from 'pinia'

export const useTagViewStore = defineStore('tagview', {
  persist: {
    key: '__tagviewstore__',
    storage: window.sessionStorage,
    paths: ['tagsList']
  },
  state: () => {
    return {
      cachedViews: [] as any,
      tagsList: [
        {
          path: '/dashboard',
          title: '数据舱',
          closeable: false
        }
      ] as any
    }
  },
  getters: {},
  actions: {
    addCachedView(view: any) {
      if (this.cachedViews.includes(view.name)) {
        return
      }

      if (view.meta?.keepAlive) {
        this.cachedViews.push(view.name)
      }
    }
  }
})

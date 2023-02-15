import { defineStore } from 'pinia'

export const useConfigStore = defineStore('config', {
  persist: {
    key: '__configstore__',
    storage: window.localStorage
  },
  state: () => {
    return {
      showCollapse: true,
      showTag: true,
      showWaterMarkMode: true,
      waterMarkText: 'WEGYMER FINANCE',
      showLockScreen: true,
      showFullScreen: true,
      showDarkMode: true,
      showMsg: true,
      showLogo: true
    }
  }
})

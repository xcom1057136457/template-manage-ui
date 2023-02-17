import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  persist: {
    key: '__globalstore__',
    storage: window.localStorage,
    paths: ['isCollapse', 'isLock', 'password']
  },
  state: () => {
    return {
      isCollapse: false,
      isLock: false,
      lockShow: false,
      password: ''
    }
  },
  getters: {},
  actions: {}
})

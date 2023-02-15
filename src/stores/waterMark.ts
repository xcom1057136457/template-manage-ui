import { defineStore } from 'pinia'

export const useWaterMarkStore = defineStore('waterMark', {
  persist: {
    key: '__watermarkstore__',
    paths: ['showWaterMark'],
    storage: window.localStorage
  },
  state: () => {
    return {
      showWaterMark: true
    }
  },
  getters: {},
  actions: {}
})

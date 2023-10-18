import { defineStore } from 'pinia'
import { ref } from 'vue'

// 用户模块 token setToken RemoveToken
export const useCounterStore = defineStore('big-count', () => {
  const count = ref(100)
  const add = (n) => {
    count.value += n
  }

  return {
    count,
    add
  }
})

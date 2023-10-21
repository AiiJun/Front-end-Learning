import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/api/layout'

export const useCategoryStore = defineStore('category', () => {
    // 导航列表的数据管理
    // 导航数据
    const categoryList = ref([])
    const getCategory = async () => {
      const { result } = await getCategoryAPI()
      categoryList.value = result
    }

    return {
        categoryList,
        getCategory
    }
})

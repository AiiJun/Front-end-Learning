import { defineStore } from "pinia"
import { ref, computed } from "vue"
import { useUserStore } from './user'
import { insertCartAPI, findNewCartListAPI, delCartAPI } from "@/api/cart"
export const useCartStore = defineStore('cart', () => {
  const userStore = useUserStore()
  const isLogin = computed(()=>userStore.userInfo.token)
  const cartList = ref([])
  // 获取最新购物车列表action函数
  const updateNewList = async () => {
    const res = await findNewCartListAPI()
    cartList.value = res.result
  }
  // 2. 定义action - addCart
  const addCart = async (goods) => {
    const { skuId, count } = goods
    if (isLogin.value) {
      // 登录之后的加入购物车逻辑
      await insertCartAPI({ skuId, count })
      updateNewList()
    } else {
        // 添加购物车操作
        // 已添加过 - count + 1
        // 没有添加过 - 直接push
        // 思路：通过匹配传递过来的商品对象中的skuId能不能在cartList中找到，找到了就是添加过
        const item = cartList.value.find((item) => goods.skuId === item.skuId)
        if (item) {
          // 找到了
          item.count += item.count
        } else {
          // 没找到
          cartList.value.push(goods)
        }
    }

  }
  // 删除购物车中对应的商品
  const delCart = async (skuId) => {
      if (isLogin.value){
        await delCartAPI([skuId])
        updateNewList()
      } else {
        // 找到要删除项的下标值
        const idx = cartList.value.findIndex(item => item.skuId === skuId)
        cartList.value.splice(idx, 1)
      }
  }

  // 清除购物车缓存
  const clearCart = () => {
    cartList.value = []
  }

  // 单选功能
  const singleCheck = (skuId, selected) => {
    const item = cartList.value.find(item=> item.skuId === skuId)
    item.selected = selected
  }
  // 全选功能
  const allCheck = (selected) => {
    cartList.value.forEach(item => item.selected = selected)
  }
  // 计算 allCount 总数
  const allCount = computed(() => cartList.value.reduce((sum, item) => sum + item.count, 0))
  // 计算allPrice总价
  const allPrice = computed(() => cartList.value.reduce((sum, item) => sum + item.count * item.price, 0).toFixed(2))
  // 是否全选
  const isAll = computed(() => cartList.value.every(item => item.selected))
  // 计算 已选择数量
  const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((sum, item) => sum + item.count, 0))
  // 计算 已选择商品总价
  const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((sum, item) => sum + item.count * item.price, 0).toFixed(2))
  return {
      cartList,
      allCount,
      allPrice,
      isAll,
      selectedCount,
      selectedPrice,
      updateNewList,
      addCart,
      delCart,
      singleCheck,
      allCheck,
      clearCart
  }
},{
    persist: true
})
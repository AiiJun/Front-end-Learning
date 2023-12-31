import { cancelOrder } from '@/api/order'
import { getInfo, setInfo } from '@/utils/storage'
export default {
  namespaced: true,
  state () {
    return {
      // 个人权证相关
      userInfo: getInfo()
    }
  },
  mutations: {
    // 所有mutations的第一个多参数, 都是state
    setUserInfo (state, obj) {
      state.userInfo = obj
      setInfo(obj)
    }
  },
  actions: {
    logout (context) {
      // 个人信息要重置
      context.commit('setUserInfo', {})

      // 购物车的信息要重置 (跨模块调用 mutation)  cart/setCartList
      context.commit('setCartList', [], { root: true })
    },
    async cancelOrder (context, orderId) {
      await cancelOrder(orderId)
    }
  },
  getters: {}
}

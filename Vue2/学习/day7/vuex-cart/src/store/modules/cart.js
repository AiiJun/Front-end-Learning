import axios from 'axios'
export default {
  namespaced: true,
  state () {
    return {
      // 购物车数据 [{}, {}]
      list: []
    }
  },
  mutations: {
    updateList (state, newList) {
      state.list = newList
    },
    updateCount (state, obj) {
      const goods = state.list.find(item => item.id === obj.id)
      goods.count = obj.newCount
    }
  },
  actions: {
    async getList (context) {
      const res = await axios.get('http://localhost:3000/cart')
      // console.log(res.data)
      context.commit('updateList', res.data)
    },
    async updateCountAsync (context, obj) {
      // console.log(obj)
      await axios.patch(`http://localhost:3000/cart/${obj.id}`, {
        count: obj.newCount
      })

      context.commit('updateCount', {
        id: obj.id,
        newCount: obj.newCount
      })
    }
  },
  getters: {
    total (state) {
      return state.list.reduce((sum, item) => sum + item.count, 0)
    },
    totalPrice (state) {
      return state.list.reduce((sum, item) => sum + item.count * item.price, 0)
    }
  }
}

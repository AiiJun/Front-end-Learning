const state = {
  userInfo: {
    name: 'ls',
    age: 19
  },
  desc: '描述'
}
const mutations = {
  setUser (state, newUserInfo) {
    state.userInfo = newUserInfo
  }
}
const actions = {
  setUserAction (context, user) {
    setTimeout(() => {
      context.commit('setUser', user)
    }, 1000)
  }
}
const getters = {
  // 分模块后, state指代子模块的state
  UpperCaseName (state) {
    return state.userInfo.name.toUpperCase()
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

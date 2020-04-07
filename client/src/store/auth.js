export const auth = {
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false,
    isAdminLoggedIn: false
  },
  mutations: {
    setStatus (state, status) {
      state.status = status
      state.isAdminLoggedIn = !!status
    },
    setToken (state, token) {
      state.token = token
      state.isUserLoggedIn = !!token
    },
    setUser (state, user) {
      state.user = user
    }
  },
  actions: {
    setStatus ({ commit }, status) {
      commit('setStatus', status)
    },
    setToken ({ commit }, token) {
      commit('setToken', token)
    },
    setUser ({ commit }, user) {
      commit('setUser', user)
    }
  }
}

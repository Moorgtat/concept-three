import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  plugins: [createPersistedState()],
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
  },
  modules: {
  }
})

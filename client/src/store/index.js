import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { auth } from './auth'
import { cart } from './cart'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  plugins: [createPersistedState({
    paths: ['auth', 'cart']
  })],
  modules: {
    auth,
    cart
  }
})

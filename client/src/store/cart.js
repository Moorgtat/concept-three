export const cart = {
  state: {
    count: 5,
    cartvuex: [{ id: 1, name: 'vuex', price: 10, quantity: 1 }]
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    }
  },
  actions: {
    increment ({ commit }) {
      commit('increment')
    },
    decrement ({ commit }) {
      commit('decrement')
    }
  }
}

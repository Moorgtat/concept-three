export const cart = {
  state: {
    count: 5,
    cartvuex: [{ id: 1, name: 'vuex', price: 10, quantity: 1 }]
  },
  mutations: {
    additem (state, item) {
      state.cartvuex.push(item)
      window.console.log('Item Added')
    },
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    }
  },
  actions: {
    additem ({ commit }, payload) {
      commit('additem', payload)
    },
    increment ({ commit }) {
      commit('increment')
    },
    decrement ({ commit }) {
      commit('decrement')
    }
  }
}

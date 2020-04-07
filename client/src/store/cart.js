export const cart = {
  state: {
    cart: [],
    item: {},
    itemsTotalNumber: '',
    itemsTotalPrice: ''
  },
  mutations: {
    saveCart () {},
    addItem ({ commit }) {
      const newCart = 'Hello World'
      commit('setCart', newCart)
    },
    removeItem () {},
    incrementItemQuantity () {},
    decrementItemQuantity () {}
  },
  actions: {
    setCart: (state, cart) => (state.cart = cart)
  }
}

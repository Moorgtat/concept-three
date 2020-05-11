export const cart = {
  state: {
    cart: [{
      name: 'essai',
      price: 14,
      quantity: 1
    }, {
      name: 'esi',
      price: 18,
      quantity: 1
    }
    ]
  },
  getters: {
    mycart: state => {
      return state.cart
    }
  },
  actions: {
    saveCart () {
      const parsed = JSON.stringify(this.state.cart)
      localStorage.setItem('cloneChamber', parsed)
    }
  },
  mutations: {
  }
}

export const cart = {
  state: {
    cart: JSON.parse(localStorage.getItem('cloneChamber')),
    cartPrice: '',
    cartItemNumber: '',
    item: {}
  },
  actions: {
    addItem () {},
    minorItem () {},
    deleteItem () {}
  },
  mutations: {
    setcart () {
      const parsed = JSON.stringify(this.state.cart)
      localStorage.setItem('cloneChamber', parsed)
      this.cloneChamber = JSON.parse(localStorage.getItem('cloneChamber'))
    }
  }
}

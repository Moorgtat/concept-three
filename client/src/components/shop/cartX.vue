<template>
  <div>
    <h1>Cart X</h1>
    <div v-for="item in cart" :key="item">
      <p> Name : <span>{{ item.name }}</span></p>
      <p> Price: <span>{{ item.price }}</span></p>
      <p> Quantity <span>{{ item.quantity }}</span></p>
    </div>
    <div>
      <p> Nombre d'articles: {{ getTotalArticle () }}</p>
      <p>Total: {{ getCartPrice () }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cartX',
  data () {
    return {
      cart: '',
      item: '',
      ship: {
        id: 6,
        name: 'Test',
        price: 666,
        quantity: 6
      }
    }
  },
  methods: {
    getTotalArticle () {
      let totalArticle = 0
      for (let i = 0; i < this.cart.length; i++) {
        totalArticle += parseInt(this.cart[i].quantity)
      }
      return totalArticle
    },
    getCartPrice () {
      let total = 0
      for (let i = 0; i < this.cart.length; i++) {
        total += parseInt(this.cart[i].price) * parseInt(this.cart[i].quantity)
      }
      return total
    }
  },
  mounted () {
    this.cart = this.$store.state.cart.cart
  }
}
</script>

<style scoped>

</style>

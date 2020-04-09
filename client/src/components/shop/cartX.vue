<template>
  <div>
    <h1>Cart X</h1>
    <div v-for="item in cart" :key="item">
      <p> Name : <span>{{ item.name }}</span></p>
      <p> Price: <span>{{ item.price }}</span></p>
      <p> Quantity <span>{{ item.quantity }}</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cartX',
  data () {
    return {
      cart: '',
      item: ''
    }
  },
  methods: {
  },
  mounted () {
    this.cart = this.$store.state.cart.cart
  }
}
</script>

<style scoped>

</style>

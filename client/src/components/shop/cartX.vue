<template>
  <div>
    <h1>Count X</h1>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <p> count: <strong> {{ this.$store.state.cart.count }} </strong></p>
    <h1> Cart VUEX</h1>
    <div v-for="item in this.$store.state.cart.cartvuex" :key="item.id">
      <p> Id : <span>{{ item.id }}</span></p>
      <p> Name : <span>{{ item.name }}</span></p>
      <p> Price: <span>{{ item.price }}</span></p>
      <p> Quantity: <span>{{ item.quantity }}</span></p>
      <button @click="additem(payload)"> PLUS </button>
    </div>
<!--    <div>-->
<!--      <p> Nombre d'articles: {{ getTotalArticle () }}</p>-->
<!--      <p>Total: {{ getCartPrice () }}</p>-->
<!--    </div>-->
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'cartX',
  data () {
    return {
      payload: { id: 2, name: 'vuexo', price: 10, quantity: 1 }
    }
  },
  methods: {
    ...mapActions(['decrement', 'increment', 'additem'])
    // ,
    // getTotalArticle () {
    //   let totalArticle = 0
    //   for (let i = 0; i < this.cart.length; i++) {
    //     totalArticle += parseInt(this.cart[i].quantity)
    //   }
    //   return totalArticle
    // },
    // getCartPrice () {
    //   let total = 0
    //   for (let i = 0; i < this.cart.length; i++) {
    //     total += parseInt(this.cart[i].price) * parseInt(this.cart[i].quantity)
    //   }
    //   return total
    // }
  },
  mounted () {}
}
</script>

<style scoped>

</style>

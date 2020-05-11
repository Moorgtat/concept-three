<template>
  <div>
    <h1>Cart X</h1>
    <div v-for="item in mycart" :key="item">
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
import { mapGetters } from 'vuex'
export default {
  name: 'cartX',
  data () {
    return {
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
    }
  },
  computed: {
    ...mapGetters('mycart')
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
  }
}
</script>

<style scoped>

</style>

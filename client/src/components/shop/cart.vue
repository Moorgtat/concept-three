<template>
<div>
  <h1>Cart</h1>
  <div>
    <h1>Chats</h1>
    <div v-for="(cat, n) in cats" :key="cat.name">
      <p> Name : <span>{{ cat.name }}</span></p>
      <p> Price: <span>{{ cat.price }}</span></p>
        <button style="margin: 5px" @click="removeCat(n)">Enlever</button>
    </div>
    <p>
      <input v-model="cat.name" placeholder="Cat name">
      <input v-model="cat.price" placeholder="Cat price">
      <button @click="addCat">Ajouter un chat</button>
    </p>
  </div>
</div>
</template>

<script>
export default {
  name: 'cart',
  data () {
    return {
      cats: [],
      cat: {
        name: '',
        price: ''
      }
    }
  },
  mounted () {
    if (localStorage.getItem('cats')) {
      try {
        this.cats = JSON.parse(localStorage.getItem('cats'))
      } catch (e) {
        localStorage.removeItem('cats')
      }
    }
  },
  methods: {
    addCat () {
      if (!this.cat) {
        return
      }
      this.cats.push(this.cat)
      this.saveCats()
      this.cat.name = ''
      this.cat.price = ''
      window.console.log(this.cats)
    },
    removeCat (x) {
      this.cats.splice(x, 1)
      this.saveCats()
      window.console.log(this.cats)
    },
    saveCats () {
      const parsed = JSON.stringify(this.cats)
      localStorage.setItem('cats', parsed)
      this.cats = JSON.parse(localStorage.getItem('cats'))
    }
  }
}
</script>

<style scoped>

</style>

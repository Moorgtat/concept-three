<template>
<div>
  <h1>Cart</h1>
  <div>
  <p>
    Mon nom est <input v-model="name">
    et j'ai <input v-model="age"> ans.
  </p>
  <p>
    <button @click="persist">Sauver</button>
  </p>
  </div>
  <div>
    <h2>Chats</h2>
    <div v-for="(cat, n) in cats" :key="cat">
      <p>
        <span class="cat">{{ cat }}</span>
        <button style="margin: 5px" @click="removeCat(n)">Enlever</button>
      </p>
    </div>
    <p>
      <input v-model="newCat">
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
      newCat: null,
      name: '',
      age: 0
    }
  },
  mounted () {
    if (localStorage.name) {
      this.name = localStorage.name
    }
    if (localStorage.age) {
      this.age = localStorage.age
    }
    if (localStorage.getItem('cats')) {
      try {
        this.cats = JSON.parse(localStorage.getItem('cats'))
      } catch (e) {
        localStorage.removeItem('cats')
      }
    }
  },
  methods: {
    persist () {
      localStorage.name = this.name
      localStorage.age = this.age
    },
    addCat () {
      if (!this.newCat) {
        return
      }
      this.cats.push(this.newCat)
      this.newCat = ''
      this.saveCats()
    },
    removeCat (x) {
      this.cats.splice(x, 1)
      this.saveCats()
    },
    saveCats () {
      const parsed = JSON.stringify(this.cats)
      localStorage.setItem('cats', parsed)
    }
  }
}
</script>

<style scoped>

</style>

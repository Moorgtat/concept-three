<template>
<div>
  <h1>Cart</h1>
<div class="general">
    <div class="first">
    <h1>Chats</h1>
    <div v-for="(cat, n) in cats" :key="cat.id">
      <p> Id : <span>{{ cat.id }}</span></p>
      <p> Name : <span>{{ cat.name }}</span></p>
      <p> Price: <span>{{ cat.price }}</span></p>
        <button style="margin: 5px" @click="removeCat(n)">Enlever</button>
        <button style="margin: 5px" @click="cloneCat(cat.id)">Clone</button>
    </div>
    </div>
  <div class="deuze">
    <h1>Clone Chamber</h1>
    <div v-for="(cat, n) in cloneChamber" :key="cat.id">
      <p> Id : <span>{{ cat.id }}</span></p>
      <p> Name : <span>{{ cat.name }}</span></p>
      <p> Price: <span>{{ cat.price }}</span></p>
      <button style="margin: 5px" @click="removeClone(n)">Enlever</button>
    </div>
  </div>
</div>
  <div>
    <p>
      <input v-model="cat.id" placeholder="Cat id">
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
      cloneChamber: [],
      cat: {
        id: '',
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
    if (localStorage.getItem('cloneChamber')) {
      try {
        this.cloneChamber = JSON.parse(localStorage.getItem('cloneChamber'))
      } catch (e) {
        localStorage.removeItem('cloneChamber')
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
      this.cat.id = ''
      this.cat.name = ''
      this.cat.price = ''
      window.console.log(this.cats)
    },
    getCatById (id) {
      const ret = this.cats.filter(function (cat) {
        return cat.id === id
      })
      return ret[0]
    },
    cloneCat (id) {
      const cat = this.getCatById(id)
      this.cloneChamber.push(cat)
      this.saveClones()
    },
    removeCat (x) {
      this.cats.splice(x, 1)
      this.saveCats()
      window.console.log(this.cats)
    },
    removeClone (x) {
      this.cloneChamber.splice(x, 1)
      this.saveClones()
    },
    saveCats () {
      const parsed = JSON.stringify(this.cats)
      localStorage.setItem('cats', parsed)
      this.cats = JSON.parse(localStorage.getItem('cats'))
    },
    saveClones () {
      const parsed = JSON.stringify(this.cloneChamber)
      localStorage.setItem('cloneChamber', parsed)
      this.cloneChamber = JSON.parse(localStorage.getItem('cloneChamber'))
    }
  }
}
</script>

<style scoped>
.general{
  display: flex;
  flex-direction: row;
}
.first{
  flex: 1;
}
.deuze{
  flex: 1;
}
</style>

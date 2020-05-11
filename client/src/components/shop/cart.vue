<template>
<div>
  <h1>Cart</h1>
<div class="general">
    <div class="Chats">
    <h1>Chats</h1>
    <div v-for="(cat, n) in cats" :key="cat.id">
      <p> Name : <span>{{ cat.name }}</span></p>
      <p> Price: <span>{{ cat.price }}</span></p>
        <button style="margin: 5px" @click="removeCat(n)">Enlever</button>
        <button style="margin: 5px" @click="cloneCat(cat.id)">Clone</button>
    </div>
    </div>
  <div class="CloneChamber">
    <h1>Clone Chamber</h1>
    <div v-for="(cat, n) in cloneChamber" :key="cat.id">
      <p> Name : <span>{{ cat.name }}</span></p>
      <p> Price: <span>{{ cat.price }}</span></p>
      <p>Quantity: <button @click="minorOne(cat.id, n)">-</button> {{ cat.quantity }} <button @click="plusOne(cat.id)">+</button></p>
      <button style="margin: 5px" @click="removeClone(n)">Enlever</button>
    </div>
    <p> Nombre d'article: {{ getTotalArticle() }}</p>
    <p> Total : {{ getTotal()}} </p>
  </div>
</div>
  <div class="chatForm">
    <p>
      <input v-model="cat.id" placeholder="Cat id">
      <input v-model="cat.name" placeholder="Cat name">
      <input v-model="cat.price" placeholder="Cat price">
      <input v-model="cat.quantity" placeholder="Cat quantity">
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
        price: '',
        quantity: ''
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
    plusOne (id) {
      for (let i = 0; i < this.cloneChamber.length; i++) {
        if (id === this.cloneChamber[i].id) {
          this.cloneChamber[i].quantity = parseInt(this.cloneChamber[i].quantity) + 1
        }
      }
      this.saveClones()
    },
    minorOne (id, x) {
      for (let i = 0; i < this.cloneChamber.length; i++) {
        if (id === this.cloneChamber[i].id) {
          if (parseInt(this.cloneChamber[i].quantity) > 1) {
            this.cloneChamber[i].quantity = parseInt(this.cloneChamber[i].quantity) - 1
          } else {
            this.removeClone(x)
          }
        }
      }
      this.saveClones()
    },
    getTotalArticle () {
      let totalArticle = 0
      for (let i = 0; i < this.cloneChamber.length; i++) {
        totalArticle += parseInt(this.cloneChamber[i].quantity)
      }
      return totalArticle
    },
    getTotal () {
      let total = 0
      for (let i = 0; i < this.cloneChamber.length; i++) {
        total += parseInt(this.cloneChamber[i].price) * parseInt(this.cloneChamber[i].quantity)
      }
      return total
    },
    addCat () {
      if (!this.cat) {
        return
      }
      this.cats.push(this.cat)
      this.saveCats()
      this.cat.id = ''
      this.cat.name = ''
      this.cat.price = ''
      this.cat.quantity = ''
      window.console.log(this.cats)
    },
    getCatById (id) {
      const ret = this.cats.filter(function (cat) {
        return cat.id === id
      })
      return ret[0]
    },
    cloneCat (id) {
      for (let i = 0; i < this.cloneChamber.length; i++) {
        if (id === this.cloneChamber[i].id) {
          window.console.log('there is a copy')
          this.cloneChamber[i].quantity = parseInt(this.cloneChamber[i].quantity) + 1
          this.saveClones()
          return
        }
      }
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
  .general {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  .Chats {
    width: 200px;
  }

  .CloneChamber {
    width: 200px;
  }

  .chatForm {
    margin: 20px 10%;
  }
</style>

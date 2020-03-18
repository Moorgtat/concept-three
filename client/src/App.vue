<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">home</router-link>
      <router-link to="/shop"> | shop</router-link>
      <router-link to="/upload"> | upload</router-link>
      <router-link v-if="this.$store.state.isUserLoggedIn && !this.$store.state.isAdminLoggedIn" to="/userboard"> | userboard</router-link>
      <router-link v-if="this.$store.state.isAdminLoggedIn" to="/admin"> | admin</router-link>
      <router-link v-if="!this.$store.state.isUserLoggedIn" to="/login"> | login</router-link>
      <router-link v-if="!this.$store.state.isUserLoggedIn" to="/register"> | register</router-link>
      <button id="btn-logout" v-if="this.$store.state.isUserLoggedIn" @click="logout" class="btn-one"><strong>Logout</strong></button>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setStatus', false)
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push('/')
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Oswald:200&display=swap');

  #app {
    text-align: center;
    font-family: 'Oswald', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #nav {
    margin-top: 25px;
    margin-bottom: 25px;
    font-size: 32px;
  }

  a {
    color: black;
    text-decoration: none;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  .btn-one {
    outline-style: none;
    font-family: 'Lacquer';
    height: 40px;
    width: 70px;
    background: white;
    border: 1px solid black;
    border-radius: 15px;
    transition: 1s ease;
    margin: 5px;
  }

  .btn-one:hover {
    background: rgba(103, 128, 159, 0.2);
  }

  #btn-logout {
    position: absolute;
    right: 20px;
    top: 20px;
  }
</style>

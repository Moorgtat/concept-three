<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">home</router-link>
      <router-link to="/admin"> | admin</router-link>
      <router-link to="/login"> | login</router-link>
      <router-link to="/register"> | register</router-link>
    </div>
    <router-view/>
  </div>
</template>

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
</style>

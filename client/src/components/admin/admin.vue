<template>
<div>
  <div id="nav">
    <RouterLink :to="{ name: 'postView' }">Posts</RouterLink>
    <RouterLink :to="{ name: 'productView' }"> | Products</RouterLink>
    <RouterLink :to="{ name: 'userView' }"> | Users</RouterLink>
  </div>
  <div>
    <router-view></router-view>
  </div>
</div>
</template>

<script>
export default {
  name: 'admin'
}
</script>

<style scoped>
  #nav {
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 22px;
  }
</style>

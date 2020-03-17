<template>
<div>
  <h1>Admin</h1>
  <div class="nav">
    <RouterLink :to="{ name: 'postView' }">
      <h2>my posts</h2>
    </RouterLink>
    <RouterLink :to="{ name: 'productView' }">
      <h2>my product</h2>
    </RouterLink>
    <h2>my history</h2>
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

</style>

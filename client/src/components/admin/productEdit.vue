<template>
    <div class="product-edit">
      <h1>Edit Product</h1>
      <p>{{ productId }}</p>
    </div>
</template>

<script>
export default {
  name: 'productEdit',
  data () {
    return {
      productId: null
    }
  },
  mounted () {
    this.productId = this.$store.state.route.params.productId
  }
}
</script>

<style scoped>

</style>

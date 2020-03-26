<template>
    <div class="product-view">
      <RouterLink :to="{ name: 'productAdd' }">
        <button class="btn-one">Add Product</button>
      </RouterLink>
      <div class="product-container">
        <div class="product" v-for="product in products" :key="product.id">
          <div class="product-title">{{ product.title }}</div>
          <div class="product-description">{{ product.description }}</div>
          <div class="product-price">{{ product.price }}</div>
          <img class="product-image" :src="product.imageUrl" alt="image produit"/>
          <br>
          <RouterLink :to="{ name: 'productEdit', params: {productId: product.id} }">
            <button class="btn-one">Edit</button>
          </RouterLink>
        </div>
      </div>
    </div>
</template>

<script>
import ProductService from '@/services/ProductService'
export default {
  name: 'productView',
  data () {
    return {
      products: []
    }
  },
  async mounted () {
    this.products = (await ProductService.index()).data
  }
}
</script>

<style scoped>
.product-image {
  width: 50%;
}
</style>

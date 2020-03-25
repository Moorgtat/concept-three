<template>
    <div class="product-view">
      <RouterLink :to="{ name: 'productAdd' }">
        <button>Add Product</button>
      </RouterLink>
      <div class="product-container">
        <div class="product" v-for="product in products" :key="product.id">
          <div class="product-title">{{ product.title }}</div>
          <div class="product-description">{{ product.description }}</div>
          <div class="product-price">{{ product.price }}</div>
          <img :src="product.imageUrl" alt="image produit"/>
          <br>
          <RouterLink :to="{ name: 'productEdit', params: {productId: product.id} }">
            <button>Edit</button>
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

</style>

<template>
<div>
  <h1>Shop</h1>
  <div class="product-container">
    <div class="product" v-for="product in products" :key="product.id">
      <div class="product-title">{{ product.title }}</div>
      <div class="product-description">{{ product.description }}</div>
      <div class="product-price">{{ product.price }}</div>
    </div>
  </div>
</div>
</template>

<script>
import ProductService from '@/services/ProductService'
export default {
  name: 'shop',
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
  .product-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  .product {
    height: 250px;
    width: 300px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .product-title {
    font-size: 22px;
  }
  .product-description {
    font-size: 14px;
  }
  .product-price {
    font-size: 9px;
  }
</style>

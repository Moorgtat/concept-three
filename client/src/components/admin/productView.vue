<template>
    <div class="product-view">
      <h1>Products</h1>
      <RouterLink :to="{ name: 'productAdd' }">
        <button class="btn-one">Add Product</button>
      </RouterLink>
      <div class="product-container">
        <div class="product" v-for="product in products" :key="product.id">
          <div class="product-title"><strong>{{ product.title }}</strong></div>
          <div class="product-description">{{ product.description }}</div>
          <div class="product-price">{{ product.price }}</div>
          <div class="product-quantity">{{ product.quantity }}</div>
          <img class="h150-img" :src="product.imageUrl" alt="image produit"/>
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

<style>
  .product-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  .product {
    width: 350px;
    margin: 20px;
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

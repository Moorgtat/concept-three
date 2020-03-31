<template>
<div>
  <div><h1>Shop</h1></div>
  <div class="product-container">
    <div class="product" v-for="product in products" :key="product.id">
       <div><img class="product-image" :src="product.imageUrl" alt="Image produit"/></div>
      <div class="product-title">{{ product.title }}</div>
      <div class="product-description"><strong>Description : </strong>{{ product.description }}</div>
      <div class="product-price"><strong>Price : </strong>{{ product.price }}</div>
      <div class="product-price"><strong>Quantity : </strong>{{ product.quantity }}</div>
      <div>
        <button class="btn-one"> More </button>
        <button class="btn-one"> Add to Cart </button>
      </div>
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

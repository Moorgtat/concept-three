<template>
  <div class="productadd">
    <label>
      <input type="text" name="title" v-model="product.title" placeholder="title"/>
    </label>
    <br>
    <label>
      <input type="text" name="description" v-model="product.description" placeholder="description"/>
    </label>
    <br>
    <label>
      <input type="text" name="price" v-model="product.price" placeholder="price"/>
    </label>
    <br>
    <label>
      <input type="text" name="quantity" v-model="product.quantity" placeholder="quantity"/>
    </label>
    <br>
    <label>
      <input type="text" name="imageUrl" v-model="product.imageUrl" placeholder="ImageUrl"/>
    </label>
    <br>
    <div v-html="error"></div>
    <button class="btn-one" @click="createProduct">Create</button>
  </div>
</template>

<script>
import ProductService from '@/services/ProductService'
export default {
  name: 'productAdd',
  data () {
    return {
      error: null,
      product: {
        title: null,
        description: null,
        price: null,
        quantity: null,
        imageUrl: null
      }
    }
  },
  methods: {
    async createProduct () {
      try {
        await ProductService.post(this.product)
        await this.$router.push('/productview')
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>

</style>

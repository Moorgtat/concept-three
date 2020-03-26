<template>
    <div class="product-edit">
      <h1>Edit Product</h1>
      <br>
      <label>
        <input type="text" name="title" v-model="product.title" placeholder="title"/>
      </label>
      <br>
      <label>
        <input type="text" name="title" v-model="product.description" placeholder="description"/>
      </label>
      <br>
      <label>
        <input type="number" name="title" v-model="product.price" placeholder="price"/>
      </label>
      <br>
      <label>
        <input type="number" name="title" v-model="product.quantity" placeholder="quantity"/>
      </label>
      <br>
      <label>
        <input type="text" name="title" v-model="product.imageUrl" placeholder="imageurl"/>
      </label>
      <br>
      <div v-html="error"></div>
      <button class="btn-one" @click="editProduct">Edit</button>
      <button class="btn-one" @click="deleteProduct(product.id)">Delete</button>
    </div>
</template>

<script>
import ProductService from '@/services/ProductService'
export default {
  name: 'productEdit',
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
    async editProduct () {
      try {
        await ProductService.put(this.product)
        await this.$router.push({
          name: 'productView'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    },
    async deleteProduct (productId) {
      const delproduct = { id: productId }
      try {
        await ProductService.delete(delproduct)
        await this.$router.push('/productview')
      } catch (error) {
        window.console.log(error)
      }
    }
  },
  async mounted () {
    const productId = this.$store.state.route.params.productId
    this.product = (await ProductService.show(productId)).data
  }
}
</script>

<style scoped>

</style>

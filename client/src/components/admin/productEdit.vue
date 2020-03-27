<template>
    <div class="product-edit">
      <h1>Edit Product</h1>
      <br>
      <form @submit.prevent="editProduct" enctype="multipart/form-data">
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
        <input
          type="file"
          ref="file"
          name="photo"
          id="photo"
          accept="image/jpeg"
          @change="selectFile"/>
        <br>
      <button class="btn-one">Edit</button>
      <button type="button" class="btn-one" @click="deleteProduct(product.id)">Delete</button>
      </form>
      <br>
      <div v-html="error"></div>
    </div>
</template>

<script>
import ProductService from '@/services/ProductService'
export default {
  name: 'productEdit',
  data () {
    return {
      error: null,
      file: null,
      product: {
        id: null,
        title: null,
        description: null,
        price: null,
        quantity: null
      }
    }
  },
  methods: {
    selectFile () {
      this.file = this.$refs.file.files[0]
    },
    editProduct () {
      const formData = new FormData()
      formData.append('photo', this.file)
      formData.append('id', this.product.id)
      formData.append('title', this.product.title)
      formData.append('description', this.product.description)
      formData.append('price', this.product.price)
      formData.append('quantity', this.product.quantity)
      try {
        ProductService.put(formData)
        this.$router.push('/productview')
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

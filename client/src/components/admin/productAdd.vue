<template>
  <div class="productadd">

    <form @submit.prevent="createProduct" enctype="multipart/form-data">
      <label>
        <input type="text" name="title" v-model="product.title" placeholder="title"/>
      </label>
      <label>
        <input type="text" name="description" v-model="product.description" placeholder="description"/>
      </label>
      <label>
        <input type="text" name="price" v-model="product.price" placeholder="price"/>
      </label>
      <label>
        <input type="text" name="quantity" v-model="product.quantity" placeholder="quantity"/>
      </label>
      <input
        type="file"
        ref="file"
        name="photo"
        id="photo"
        accept="image/jpeg"
        @change="selectFile"/>
      <button type="submit">Create</button>
    </form>
    <div v-html="error"></div>
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
        file: null,
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
    async createProduct () {
      const formData = new FormData()
      formData.append('photo', this.file)
      formData.append('title', this.product.title)
      formData.append('description', this.product.article)
      formData.append('price', this.product.price)
      formData.append('quantity', this.product.quantity)
      try {
        await ProductService.post(formData)
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

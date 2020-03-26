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
        <input type="number" name="price" v-model="product.price" placeholder="price"/>
      </label>
      <label>
        <input type="number" name="quantity" v-model="product.quantity" placeholder="quantity"/>
      </label>
      <input
        type="file"
        ref="file"
        name="photo"
        id="photo"
        accept="image/jpeg"
        @change="selectFile"/>
      <button class="btn-one">Create</button>
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
      file: null,
      product: {
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
    createProduct () {
      const formData = new FormData()
      formData.append('photo', this.file)
      formData.append('title', this.product.title)
      formData.append('description', this.product.description)
      formData.append('price', this.product.price)
      formData.append('quantity', this.product.quantity)
      try {
        ProductService.post(formData)
        this.$router.push('/productview')
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>

</style>

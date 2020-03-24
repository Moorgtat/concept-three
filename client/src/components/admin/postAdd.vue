<template>
<div class="postadd">
  <form @submit.prevent="createPost" enctype="multipart/form-data">
    <label>
    <input type="text" name="title" v-model="post.title" placeholder="title"/>
    </label>
    <label>
    <input type="text" name="article" v-model="post.article" placeholder="article"/>
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
import PostService from '@/services/PostService'
export default {
  name: 'postAdd',
  data () {
    return {
      error: null,
      post: {
        file: null,
        title: null,
        article: null
      }
    }
  },
  methods: {
    selectFile () {
      this.file = this.$refs.file.files[0]
    },
    async createPost () {
      const formData = new FormData()
      formData.append('photo', this.file)
      formData.append('title', this.post.title)
      formData.append('article', this.post.article)
      try {
        await PostService.post(formData)
        await this.$router.push('/postview')
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>

</style>

<template>
<div class="postadd">
  <label>
    <input type="text" name="title" v-model="post.title" placeholder="title"/>
  </label>
  <br>
  <label>
    <input type="text" name="article" v-model="post.article" placeholder="article"/>
  </label>
  <br>
  <label>
    <input type="text" name="imageUrl" v-model="post.imageUrl" placeholder="ImageUrl"/>
  </label>
  <br>
  <div v-html="error"></div>
  <button class="btn-one" @click="createPost">Create</button>
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
        title: null,
        article: null,
        imageUrl: null
      }
    }
  },
  methods: {
    async createPost () {
      try {
        await PostService.post(this.post)
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

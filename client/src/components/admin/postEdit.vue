<template>
    <div class="post-edit">
      <h1>Edit Post</h1>
      <form @submit.prevent="editPost" enctype="multipart/form-data">
        <label>
          <input type="text" name="title" v-model="post.title" placeholder="title"/>
        </label>
        <br>
        <label>
          <input type="text" name="article" v-model="post.article" placeholder="article"/>
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
        <button type="button" class="btn-one" @click="deletePost(post.id)">Delete</button>
      </form>
      <div v-html="error"></div>
    </div>
</template>

<script>
import PostService from '@/services/PostService'
export default {
  name: 'postEdit',
  data () {
    return {
      error: null,
      file: null,
      post: {
        id: null,
        title: null,
        article: null
      }
    }
  },
  methods: {
    selectFile () {
      this.file = this.$refs.file.files[0]
    },
    editPost () {
      const formData = new FormData()
      formData.append('photo', this.file)
      formData.append('id', this.post.id)
      formData.append('title', this.post.title)
      formData.append('article', this.post.article)
      try {
        PostService.put(formData)
        this.$router.push('/postview')
      } catch (error) {
        this.error = error.response.data.error
      }
    },
    async deletePost (postId) {
      const delpost = { id: postId }
      try {
        await PostService.delete(delpost)
        await this.$router.push('/postview')
      } catch (error) {
        window.console.log(error)
      }
    }
  },
  async mounted () {
    const postId = this.$store.state.route.params.postId
    this.post = (await PostService.show(postId)).data
  }
}
</script>

<style scoped>

</style>

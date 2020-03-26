<template>
    <div class="post-edit">
      <h1>Edit Post</h1>
      <br>
      <label>
        <input type="text" name="title" v-model="post.title" placeholder="title"/>
      </label>
      <br>
      <label>
        <input type="text" name="title" v-model="post.article" placeholder="article"/>
      </label>
      <br>
      <label>
        <input type="text" name="title" v-model="post.imageUrl" placeholder="imageurl"/>
      </label>
      <br>
      <div v-html="error"></div>
      <button class="btn-one" @click="editPost">Edit</button>
      <button class="btn-one" @click="deletePost(post.id)">Delete</button>
    </div>
</template>

<script>
import PostService from '@/services/PostService'
export default {
  name: 'postEdit',
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
    async editPost () {
      try {
        await PostService.put(this.post)
        await this.$router.push({
          name: 'postView'
        })
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

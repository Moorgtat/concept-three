<template>
    <div class="post-view">
      <h1>Posts</h1>
      <RouterLink :to="{ name: 'postAdd' }">
        <button class="btn-one">Add Post</button>
      </RouterLink>
      <div class="post-container">
        <div class="post" v-for="post in posts" :key="post.id">
          <div class="post-title">{{ post.title }}</div>
          <div class="post-article">{{ post.article }}</div>
          <img :src="post.imageUrl" alt="image du post"/>
          <br>
          <RouterLink :to="{ name: 'postEdit', params: {postId: post.id} }">
            <button class="btn-one">Edit</button>
          </RouterLink>
        </div>
      </div>
    </div>
</template>

<script>
import PostService from '@/services/PostService'
export default {
  name: 'postView',
  data () {
    return {
      posts: []
    }
  },
  async mounted () {
    this.posts = (await PostService.index()).data
  }
}
</script>

<style scoped>
  img {
    width: 20%;
  }
  div {
    margin: 10px;
  }
</style>

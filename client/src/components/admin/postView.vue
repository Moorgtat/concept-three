<template>
    <div class="post-view">
      <RouterLink :to="{ name: 'postAdd' }">
        <button>Add Post</button>
      </RouterLink>
      <div class="post-container">
        <div class="post" v-for="post in posts" :key="post.id">
          <div class="post-title">{{ post.title }}</div>
          <div class="post-article">{{ post.article }}</div>
          <div class="post-imageUrl">{{ post.imageUrl }}</div>
          <RouterLink :to="{ name: 'postEdit', params: {postId: post.id} }">
            <button>Edit</button>
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

</style>

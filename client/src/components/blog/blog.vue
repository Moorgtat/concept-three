<template>
<div class="blog">
  <h1>Home</h1>
  <div class="post-container">
    <div class="post" v-for="post in posts" :key="post.id">
      <div>
        <img :src=(post.imageUrl) class="post-imageUrl"/>
      </div>
      <div class="post-title">{{ post.title }}</div>
      <div class="post-article">{{ post.article }}</div>
    </div>
  </div>
</div>
</template>

<script>
import PostService from '@/services/PostService'
export default {
  name: 'blog',
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
  .post-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  .post {
    width: 350px;
    margin: 20px;
    flex-direction: column;
    justify-content: center;
  }
  .post-title {
    font-size: 22px;
  }
  .post-article {
    font-size: 14px;
  }
</style>

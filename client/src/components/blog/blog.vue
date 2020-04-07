<template>
<div class="blog">
  <div class="post-container">
    <div class="post" v-for="post in posts" :key="post.id">
      <div>
        <img :src=(post.imageUrl) class="post-imageUrl"/>
      </div>
      <div class="post-title"><strong>{{ post.title }}</strong></div>
      <div class="post-article">
        {{ post.article }}
        <router-link to="/post"><span class="more"><strong>more...</strong></span></router-link>
      </div>
      <div>
      </div>
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
  body {
    margin: 0;
  }
  .blog {
    display: flex;
    justify-content: center;
  }
  .post-container {
    margin: 0 20px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100vw;
    max-height: 850px;
  }
  .post {
    margin-bottom: 20px;
    flex-direction: column;
    justify-content: center;
  }
  .post-title {
    font-size: 22px;
  }
  .post-article {
    font-size: 14px;
  }
  .more {
    margin-left: 5px;
    font-size: 20px;
  }
</style>

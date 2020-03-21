<template>
    <div>
      <form @submit.prevent="sendFile" enctype="multipart/form-data">
        <input type="text" name="title" v-model="title" placeholder="title"/>
        <input type="text" name="article" v-model="article" placeholder="article"/>
        <input
          type="file"
          ref="file"
          name="photo"
          id="photo"
          accept="image/jpeg"
          @change="selectFile"/>
        <button type="submit">Submit</button>
      </form>
      <div v-for="upfile in upfiles" :key="upfile.id">
        <p>{{ upfile.title }}</p>
        <p>{{ upfile.article }}</p>
        <img :src='upfile.photo'/>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Upload',
  data () {
    return {
      upfiles: [],
      title: null,
      article: null,
      file: null
    }
  },
  methods: {
    selectFile () {
      this.file = this.$refs.file.files[0]
    },
    async sendFile () {
      const formData = new FormData()
      formData.append('photo', this.file)
      formData.append('title', this.title)
      formData.append('article', this.article)
      try {
        await axios.post('http://localhost:3005/upload', formData)
      } catch (error) {
        window.console.log(error)
      }
    }
  },
  async mounted () {
    this.upfiles = (await axios.get('http://localhost:3005/upload')).data
  }
}
</script>

<style scoped>

</style>

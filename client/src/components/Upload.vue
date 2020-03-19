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
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Upload',
  data () {
    return {
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
  }
}
</script>

<style scoped>

</style>

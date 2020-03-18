<template>
    <div>
      <form @submit.prevent="sendFile" enctype="multipart/form-data">
        <input
          type="file"
          ref="file"
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
      file: null
    }
  },
  methods: {
    selectFile () {
      this.file = this.$refs.file.files[0]
    },
    async sendFile () {
      const formData = new FormData()
      formData.append('file', this.file)
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

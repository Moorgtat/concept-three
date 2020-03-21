<template>
  <div class="upload">
    <form @submit.prevent="sendFile" enctype="multipart/form-data">
      <input type="text" name="title" v-model="upfile.title" placeholder="title"/>
      <input type="text" name="article" v-model="upfile.article" placeholder="article"/>
      <input
        type="file"
        ref="file"
        name="photo"
        id="photo"
        accept="image/jpeg"
        @change="selectFile"/>
      <button type="submit">Create</button>
    </form>
    <div class="Files-container">
      <div class="test-container">
        <h1> All Upfiles </h1>
        <div class="All-Upfiles" v-for="upfile in upfiles" :key="upfile.id">
          <div><p>{{ upfile.id }}</p></div>
          <div><p>{{ upfile.title }}</p></div>
          <div><p>{{ upfile.article }}</p></div>
          <div><img :src='upfile.photo'/></div>
        </div>
      </div>
      <div class="test-container">
        <h1> Edit Upfiles </h1>
        <div class="Edit-Upfiles" v-for="upfile in upfiles" :key="upfile.id">
          <form @submit.prevent="editFile" enctype="multipart/form-data">
          <div><p>{{ upfile.id }}</p></div>
          <div><p>{{ upfile.title }}</p></div>
          <input type="text" name="title" v-model="upfile.title" placeholder="title"/>
          <div><p>{{ upfile.article }}</p></div>
          <input type="text" name="article" v-model="upfile.article" placeholder="article"/>
          <div><img :src='upfile.photo'/></div>
          <input type="file"/>
          <div><button type="submit">Edit</button></div>
          </form>
          <div><button @click="deleteFile">Delete</button></div>
        </div>
      </div>
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
      upfile: {
        title: null,
        article: null,
        file: null
      }
    }
  },
  methods: {
    selectFile () {
      this.file = this.$refs.file.files[0]
    },
    async sendFile () {
      const formData = new FormData()
      formData.append('photo', this.file)
      formData.append('title', this.upfile.title)
      formData.append('article', this.upfile.article)
      try {
        await axios.post('http://localhost:3005/upload', formData)
      } catch (error) {
        window.console.log(error)
      }
    },
    async editFile () {
    },
    async deleteFile () {
    }
  },
  async mounted () {
    this.upfiles = (await axios.get('http://localhost:3005/upload')).data
  }
}
</script>

<style scoped>
.upload{
  width: 80%;
}
.Files-container{
  display: flex;
  flex-direction: column;
}
.test-container{
  display: flex;
  flex-direction: row;
}
.All-Upfiles{
  display: flex;
  flex-direction: column;
}
.Edit-Upfiles{
  display: flex;
  flex-direction: column;
}
/*Divers*/
input{
  margin: 5px;
}
img{
 width: 50%;
}
</style>

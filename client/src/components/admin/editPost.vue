<template>
    <div class="editpost">
      <h1>Edit Post</h1>
      <p>{{ postId }}</p>
    </div>
</template>

<script>
export default {
  name: 'editPost',
  data () {
    return {
      postId: null
    }
  },
  mounted () {
    this.postId = this.$store.state.route.params.postId
  }
}
</script>

<style scoped>

</style>

import Api from '@/services/Api'

export default {
  index () {
    return Api().get('posts')
  },
  post (post) {
    return Api().post('posts', post)
  }
}

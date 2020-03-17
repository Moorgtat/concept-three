import Api from '@/services/Api'

export default {
  index () {
    return Api().get('post')
  },
  show (postId) {
    return Api().get(`post/${postId}`)
  },
  post (post) {
    return Api().post('post', post)
  },
  put (post) {
    return Api().put(`post/${post.id}`, post)
  },
  delete (post) {
    return Api().delete('post', { params: post })
  }
}

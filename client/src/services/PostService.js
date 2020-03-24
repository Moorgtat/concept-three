import Api from '@/services/Api'

export default {
  index () {
    return Api().get('post')
  },
  show (postId) {
    return Api().get(`post/${postId}`)
  },
  post (formData) {
    return Api().post('post', formData)
  },
  put (post) {
    return Api().put(`post/${post.id}`, post)
  },
  delete (post) {
    return Api().delete('post', { params: post })
  }
}

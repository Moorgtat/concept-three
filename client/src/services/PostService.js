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
  put (formData) {
    return Api().put('post', formData)
  },
  delete (delpost) {
    return Api().post('deletepost', delpost)
  }
}

import Api from '@/services/Api'

export default {
  index () {
    return Api().get('product')
  },
  show (productId) {
    return Api().get(`product/${productId}`)
  },
  post (formData) {
    return Api().post('product', formData)
  },
  put (formData) {
    return Api().put('product', formData)
  },
  delete (delproduct) {
    return Api().post('deleteproduct', delproduct)
  }
}

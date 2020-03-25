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
  put (product) {
    return Api().put(`product/${product.id}`, product)
  },
  delete (delproduct) {
    return Api().post('deleteproduct', delproduct)
  }
}

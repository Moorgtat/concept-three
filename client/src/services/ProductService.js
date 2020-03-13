import Api from '@/services/Api'

export default {
  index () {
    return Api().get('products')
  },
  post (product) {
    return Api().post('products', product)
  }
}

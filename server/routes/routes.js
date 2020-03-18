const PostController = require('../controllers/PostController')
const ProductController = require('../controllers/ProductController')
const AuthenticationController = require('../controllers/AuthenticationController')

module.exports = (app) => {

  app.post('/register',
    AuthenticationController.register)
  app.post('/login',
    AuthenticationController.login)

  app.get('/post',
    PostController.index)
  app.get('/post/:postId',
    PostController.show)
  app.post('/post',
    PostController.post)
  app.put('/post/:postId',
    PostController.put)
  app.delete('/post',
    PostController.delete)

  app.get('/product',
    ProductController.index)
  app.get('/product/:productId',
    ProductController.show)
  app.post('/product',
    ProductController.post)
  app.put('/product/:productId',
    ProductController.put)
  app.delete('/product',
    ProductController.delete)

  app.get('/', (req, res) => {
    res.send('Hello World!')
    console.log('Basic')
  })

}

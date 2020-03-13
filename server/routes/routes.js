const PostsController = require('../controllers/PostsController')
const ProductsController = require('../controllers/ProductsController')
const AuthenticationController = require('../controllers/AuthenticationController')

module.exports = (app) => {

  app.post('/register',
    AuthenticationController.register)
  app.post('/login',
    AuthenticationController.login)

  app.get('/posts',
    PostsController.index)
  app.post('/posts',
    PostsController.post)
  app.put('/posts/:postId',
    PostsController.put)

  app.get('/products',
    ProductsController.index)
  app.post('/products',
    ProductsController.post)
  app.put('/products/:productId',
    ProductsController.put)

  app.get('/', (req, res) =>{
    res.send ('Hello World')
  })
}

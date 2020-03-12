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

  app.get('/products',
    ProductsController.index)

  app.get('/', (req, res) =>{
    res.send ('Hello World')
  })
}

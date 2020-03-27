const PostController = require('../controllers/PostController')
const ProductController = require('../controllers/ProductController')
const AuthenticationController = require('../controllers/AuthenticationController')
const UploadController = require('../controllers/UploadController')
const multer = require('multer')
const multerOptions = {
  storage: multer.memoryStorage(),
  fileFilter(req, file, next) {
    const isPhoto = file.mimetype.startsWith('image/')
    if(isPhoto) {
      next(null, true)
    } else {
      next({message: 'Wrong filetype'}, false)
    }
  }
}

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
    multer(multerOptions).single('photo'),
    UploadController.resize,
    PostController.post)
  app.put('/post',
    multer(multerOptions).single('photo'),
    UploadController.resize,
    PostController.put)
  app.post('/deletepost',
    PostController.delete)

  app.get('/product',
    ProductController.index)
  app.get('/product/:productId',
    ProductController.show)
  app.post('/product',
    multer(multerOptions).single('photo'),
    UploadController.resize,
    ProductController.post)
  app.put('/product/:productId',
    ProductController.put)
  app.post('/deleteproduct',
    ProductController.delete)

  app.get('/', (req, res) => {
    res.send('Hello World!')
    console.log('Basic')
  })

}

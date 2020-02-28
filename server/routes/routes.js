const PostsController = require('../controllers/PostsController')

module.exports = (app) => {
  app.get('/posts',
    PostsController.index)
}

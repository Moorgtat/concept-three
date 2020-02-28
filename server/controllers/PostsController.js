const {Post} = require('../models')

module.exports = {
  async index (req, res) {
    try {
        posts = await Post.findAll({
          limit: 100
        })
      res.send(posts)
    } catch (err) {
      res.status(500).send({
        error: 'fetching posts error'
      })
    }
  }
}

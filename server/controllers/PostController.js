const {Post} = require('../models')

module.exports = {
  async index (req, res) {
    try {
        const posts = await Post.findAll({
          limit: 100
        })
      res.send(posts)
    } catch (err) {
      res.status(500).send({
        error: 'fetching posts error'
      })
    }
  },
  async show (req, res) {
    try {
      const post = await Post.findByPk(req.params.postId)
      res.send(post)
    } catch (err) {
      res.status(500).send({
        error: 'fetching post error'
      })
    }
  },
  async post (req, res) {
    try {
      const post = await Post.create(req.body)
      res.send(post)
    } catch (err) {
      res.status(500).send({
        error: 'Creating posts error'
      })
    }
  },
  async put (req, res) {
    try {
      await Post.update(req.body, {
        where: {
          id: req.params.postId
        }
      })
      res.send(' Post updated')
    } catch (err) {
      res.status(500).send({
        error: 'Error editing the post'
      })
    }
  },
  async delete (req, res) {
  try {
    const { postId } = req.query
    const post = await Post.findByPk(postId)
    await post.destroy()
    res.send(post)
  } catch (error) {
    res.status(500).send({
      error: 'Error deleting post'
    })
  }
}
}

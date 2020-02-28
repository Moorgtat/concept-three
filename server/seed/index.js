const {
  sequelize,
  Post
} = require('../models')

const Promise = require('bluebird')
const posts = require('./posts')

sequelize.sync({force: true})
  .then( async function () {
    await Promise.all(
      posts.map(post => {
        Post.create(post)
      })
    )
  })

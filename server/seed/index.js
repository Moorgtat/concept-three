const {
  sequelize,
  User,
  Post
} = require('../models')

const Promise = require('bluebird')
const users = require('./users')
const posts = require('./posts')

sequelize.sync({force: true})
  .then( async function () {

    await Promise.all(
      users.map(user => {
        User.create(user)
      })
    )

    await Promise.all(
      posts.map(post => {
        Post.create(post)
      })
    )
  })

const {
  sequelize,
  User,
  Post,
  Product
} = require('../models')

const Promise = require('bluebird')
const users = require('./users')
const posts = require('./posts')
const products = require('./products')

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

    await Promise.all(
      products.map(product => {
        Product.create(product)
      })
    )
  })

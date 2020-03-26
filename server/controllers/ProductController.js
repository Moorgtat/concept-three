const {Product} = require('../models')
const fs = require('fs')

module.exports = {
  async index (req, res) {
    try {
      const products = await Product.findAll({
        limit: 100
      })
      res.send(products)
    } catch (err) {
      res.status(500).send({
        error: 'fetching products error'
      })
    }
  },
  async show (req, res) {
    try {
      const product = await Product.findByPk(req.params.productId)
      res.send(product)
    } catch (err) {
      res.status(500).send({
        error: 'fetching product error'
      })
    }
  },
  async post (req, res) {
    const product = {
      title: req.body.title,
      description: req.body.description,
      price: parseInt(req.body.price),
      quantity: parseInt(req.body.quantity),
      imageUrl: req.body.imageUrl
    }
    console.log(product)
    try {
      await Product.create(product)
      res.send(product)
    } catch (err) {
      res.status(500).send({
        error: 'Creating product error'
      })
    }
  },
  async put (req, res) {
    try {
      await Product.update(req.body, {
        where: {
          id: req.params.productId
        }
      })
      res.send(' Product updated')
    } catch (err) {
      res.status(500).send({
        error: 'Error editing the product'
      })
    }
  },
  async delete (req, res) {
    try {
      // const path = '../client/public/'
      const product = await Product.findByPk(req.body.id)
      // fs.unlinkSync(path + product.imageUrl)
      await product.destroy()
      res.send(product)
    } catch (error) {
      res.status(500).send({
        error: 'Error deleting product'
      })
    }
  }
}

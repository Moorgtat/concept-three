const {Product} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      products = await Product.findAll({
        limit: 100
      })
      res.send(products)
    } catch (err) {
      res.status(500).send({
        error: 'fetching products error'
      })
    }
  },
  async post (req, res) {
    try {
      const product = await Product.create(req.body)
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
  }
}

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
  }
}

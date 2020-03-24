const jimp = require('jimp')
const uuid = require('uuid')

module.exports = {
  async resize (req, res, next) {
    if( !req.file) {
      console.log('No image to resize')
    }
    try {
      const extension = req.file.mimetype.split('/')[1];
      req.body.imageUrl = `${uuid.v4()}.${extension}`
      const photo = await jimp.read(req.file.buffer)
      await photo.resize(300, jimp.AUTO)
      await photo.write(`../client/public/${req.body.imageUrl}`)
      next()
    } catch (err) {
      res.status(500).send({
        err: 'Resize.js error'
      })
    }
  }
}

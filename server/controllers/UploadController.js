const jimp = require('jimp')
const uuid = require('uuid')
const multer = require('multer')
const multerOptions = {
  storage: multer.memoryStorage(),
  fileFilter(req, file, next) {
    const isPhoto = file.mimetype.startsWith('image/')
    if(isPhoto) {
      next(null, true)
    } else {
      next({message: 'Wrong filetype'}, false)
    }
  }
}
module.exports = {
  async upload (req, res, next) {
    try {
      await multer(multerOptions).single('image')
      next()
    } catch (err) {
      res.status(500).send({
        err: 'Upload.js error'
      })
    }
  },
  async resize (req, res, next) {
    if( !req.file) {
      console.log('No image to resize')
    }
    try {
      const extension = req.file.mimetype.split('/')[1];
      req.body.photo = `${uuid.v4()}.${extension}`
      const photo = await jimp.read(req.file.buffer)
      await photo.resize(300, jimp.AUTO)
      await photo.write(`../client/public/${req.body.photo}`)
      next()
    } catch (err) {
      res.status(500).send({
        err: 'Resize.js error'
      })
    }
  }
}

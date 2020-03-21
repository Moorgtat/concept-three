const express = require('express')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const cors = require('cors')
const config = require('./config/config')
const { sequelize } = require('./models')
const multer = require('multer')
const jimp = require('jimp')
const uuid = require('uuid')
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

const app = express()

app.use(morgan('combine'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

require('./routes/routes')(app)


const upload = multer(multerOptions).single('photo')
const resize = async (req, res, next) => {
  if( !req.file) {
    next()
  }
  const extension = req.file.mimetype.split('/')[1];
  req.body.photo = `${uuid.v4()}.${extension}`
  const photo = await jimp.read(req.file.buffer)
  await photo.resize(300, jimp.AUTO)
  await photo.write(`../client/public/${req.body.photo}`)
  next()
}
const {Upfile} = require('./models')

app.post('/upload', upload, resize, async (req, res) => {
  const upfile = {
    title: req.body.title,
    article: req.body.article,
    photo: req.body.photo
  }
  try {
    await Upfile.create(upfile)
    res.send(product)
  } catch (error) {
    res.status(500).send({
      error: 'Post upfile error'
    })
  }
})

app.get('/upload', async (req, res) => {
  try {
    const upfiles = await Upfile.findAll({
      limit: 100
    })
    res.send(upfiles)
  } catch (err) {
    res.status(500).send({
      error: 'fetching upfiles error'
    })
  }
})

sequelize.sync()
  .then(() => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })

module.exports = app

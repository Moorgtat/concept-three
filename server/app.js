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
const upload = multer(multerOptions).single('photo')
const resize = async (req, res, next) => {
  if( !req.file) {
    next()
  }
  console.log(req.file)
}

const app = express()

app.use(morgan('combine'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

require('./routes/routes')(app)

app.post('/upload', upload, resize)

sequelize.sync()
  .then(() => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })

module.exports = app

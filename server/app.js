const express = require('express')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const cors = require('cors')
const config = require('./config/config')
const { sequelize } = require('./models')

const multer = require('multer')

const app = express()

app.use(morgan('combine'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

require('./routes/routes')(app)

const upload = multer({
  dest:'./uploads/'
})
app.post('/upload', upload.single('file'), (req, res) => {
 res.json({ file: req.file })
})

sequelize.sync()
  .then(() => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })

module.exports = app

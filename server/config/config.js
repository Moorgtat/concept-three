const path = require('path')

module.exports = {
  port: process.env.PORT || 3005,
  db: {
    database: process.env.DB_NAME || 'conceptdb',
    user: process.env.DB_USER || 'conceptdb',
    password: process.env.DB_PASS || 'conceptdb',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: path.resolve(__dirname, '../conceptdb.sqlite')
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hello World!')
});

router.get('/users', function(req, res, next) {
  res.send('Hello users!')
});

module.exports = router;

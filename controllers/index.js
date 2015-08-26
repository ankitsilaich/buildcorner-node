var express = require('express')
  , router = express.Router()

router.use('/sellers', require('./seller/'))
//router.use('/users', require('./users/'))

router.get('/', function(req, res) {
  res.render('index')
  console.log("hello")
})

module.exports = router;

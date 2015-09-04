var express = require('express')
  , router = express.Router()

router.get('/', function(req, res) {
  res.render('index')
  console.log("hello")
})

module.exports = router;

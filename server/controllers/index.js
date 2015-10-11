var express = require('express')
  , router = express.Router()

router.get('/', function(req, res) {
  res.render('index')
  console.log("hello")
})
router.get('/buildcorner', function(req, res) {
  res.render('buildcorner')
})
module.exports = router;

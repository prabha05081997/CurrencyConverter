var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('api key', process.env.API_KEY)
  res.render('currency', { 
    title: 'Express',
    api_key: process.env.API_KEY
  });
});

module.exports = router;

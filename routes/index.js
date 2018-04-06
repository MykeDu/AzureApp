var express = require('express');
var router = express.Router();

const appTitle = process.env.TITLE;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { appTitle });
});

module.exports = router;

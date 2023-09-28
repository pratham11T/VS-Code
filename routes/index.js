var express = require('express');
var router = express.Router();
var fs = require('fs');


router.get('/', function(req, res, next) {
  fs.readdir("./files", function(err, files){
    res.render('index',{files});
  });
});

module.exports = router;

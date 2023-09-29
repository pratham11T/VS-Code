var express = require('express');
var router = express.Router();
var fs = require('fs');


router.get('/', function(req, res, next) {
  fs.readdir("./files",{withFileTypes: true}, function(err, files){
    res.render('index',{files});
  });
});
router.get('/filecreate', function(req, res, next){
  fs.writeFile(`./files/${req.query.filename}`, "", function(err){
    if(err) throw err ;
    res.redirect("/");
  });
});


module.exports = router;

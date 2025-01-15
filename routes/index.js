var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {inf_indice:{
    uno : "base de datos",
    dos : "tipos de datos",
    tres : "hardware" ,
    cuatro : "software" ,
    cinco : "ejemplos de BD"


  },
  });
});

module.exports = router;

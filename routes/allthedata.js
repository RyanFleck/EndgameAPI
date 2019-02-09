var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({everything: [{youve: 'come to expect'},{feels: 'like regret'}]});
});

module.exports = router;

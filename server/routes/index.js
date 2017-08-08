var express = require('express');
var router = express.Router();
var changeContent = require('./userData');

module.exports = function () {

	router.use('/fetchWebData', changeContent);
	
  return router;
};

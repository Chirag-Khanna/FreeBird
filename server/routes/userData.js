const express = require('express');
const router = express.Router();

var UserDataJson=null;

router.get("/:username?",function(req,res){
console.log("Hello")
})

module.exports = router;
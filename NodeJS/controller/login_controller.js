const e = require('express');
const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { adminReg } = require('../models/admindetail');



router.post('/',(req,res)=>{
    adminReg.findOne({email:req.body.email,password:req.body.password}, function(err,obj) {
         if(obj){
            res.sendStatus(200)
         }
         else{
            res.sendStatus(500)
         }
    });
})

module.exports = router;
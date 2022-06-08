const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { adminReg } = require('../models/admindetail');

router.get('/' , (req,res)=>{
    adminReg.find((err,docs)=>{
        if(!err){ 
            res.send(docs);
            console.log("Data successfully sent")
        }
        else
        {
            console.log("Error getting data from database: "+JSON.stringify(err,undefined,2));
        }

    })
})


router.post('/',(req,res)=>{
    var adminreg=new adminReg({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password

    })
    console.log(adminreg)
    adminreg.save(('/',(err,doc)=>{
        if(!err){
            console.log(doc)
            res.send(doc)
        }
        else
        {
            console.log(err);
        }
    }))
})

module.exports = router;
const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Assessment } = require('../models/assessmentdetails.js');

router.get('/' , (req,res)=>{
    Assessment.find((err,docs)=>{
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
    var assessment=new Assessment({
    Assessm:       req.body,    
    // Options:         req.body.Options,

    })
    console.log(assessment)
    assessment.save(('/',(err,doc)=>{
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
const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Course } = require('../models/coursedetail.js');

router.get('/' , (req,res)=>{
    Course.find((err,docs)=>{
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
    var course=new Course({
    name :       req.body.name,    
    overview :   req.body.overview,
    image1 :     req.body.image1,
    deadline :   req.body.deadline,
    start_date : req.body.start_date,
    end_date :   req.body.end_date

    })
    console.log(course)
    course.save(('/',(err,doc)=>{
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
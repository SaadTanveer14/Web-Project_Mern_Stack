const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;


var { Car } = require('../models/cardetails.js');


router.get('/' , (req,res)=>{
    Car.find((err,docs)=>{
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


router.delete('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record found with id: ${req.params.id}');

    Car.findByIdAndDelete(req.params.id,(err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            console.log("Error deleting Vehicle: "+JSON.stringify(err,defined,2));
        }
    })

})

router.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record found with id: ${req.params.id}');

    Car.findById(req.params.id,(err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            console.log("Error getting Vehicle: "+JSON.stringify(err,defined,2));
        }
    })

})

router.put('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record found with id: ${req.params.id}');

    var car = {
        image :         req.body.image,
        title :         req.body.title,
        location :      req.body.location,
        price :         req.body.price,
        dateAdded :     req.body.dateAdded,
        rating :        req.body.rating,
        type :          req.body.type,
        mileage :       req.body.mileage,
        color :         req.body.color,
        engine :        req.body.engine,
        features :      req.body.features,
        model :         req.body.model,
        transmission :  req.body.transmission,
        fuel :          req.body.fuel,
        registerstatus : req.body.registerstatus,
        assembly :      req.body.assembly,
        bodytype :      req.body.bodytype,
        phoneno :       req.body.phoneno,
        condition :   req.body.condition,
        comment :       req.body.comment
    }

    Car.findByIdAndUpdate(req.params.id,{ $set: car },{ new: true },(err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            console.log("Error getting Vehicle: "+JSON.stringify(err,defined,2));
        }
    })

})


router.post('/',(req,res)=>{
    var car=new Car({
    image :       req.body.image,    
    title :       req.body.title,
    location :    req.body.location,
    price :       req.body.price,
    dateAdded :   req.body.dateAdded,
    rating :      req.body.rating,
    type :        req.body.type,
    mileage :     req.body.mileage,
    color :       req.body.color,
    engine :      req.body.engine,
    features :    req.body.features,
    model :       req.body.model,
    transmission :req.body.transmission,
    fuel :        req.body.fuel,
    registerstatus :req.body.registerstatus,
    assembly :    req.body.assembly,
    bodytype :    req.body.bodytype,
    phoneno :     req.body.phoneno,
    condition :   req.body.condition,
    comment :     req.body.comment
    })

    car.save(('/',(err,doc)=>{
        if(!err){
            console.log("Data Entered Successfully")
            res.send(doc)
        }
        else
        {
            console.log(err);
        }
    }))
})

module.exports = router;

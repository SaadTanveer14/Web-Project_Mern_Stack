const express = require('express');
const bodyParser = require('body-parser');
var cors= require('cors')


const {mongoose} =  require('./db.js');
var cardetailController= require('./controller/cardetail_Controller.js');
var courseController = require('./controller/courses_Controller.js')


var app=express();
app.use(cors())


app.use(bodyParser.json());

app.listen(3000,()=>console.log("Server Started at localhost:3000"));

// app.use('/car',cardetailController);

app.use('/course',courseController)
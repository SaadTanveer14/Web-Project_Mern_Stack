const express = require('express');
const bodyParser = require('body-parser');
var cors= require('cors')


const {mongoose} =  require('./db.js');
var cardetailController= require('./controller/cardetail_Controller.js');
var courseController = require('./controller/courses_Controller.js')
var addAssessController = require('./controller/assessment_controller')
var adminRegController = require('./controller/adminreg_controller.js')
var loginController = require('./controller/login_controller.js')


var app=express();
app.use(cors())


app.use(bodyParser.json());

app.listen(3000,()=>console.log("Server Started at localhost:3000"));

// app.use('/car',cardetailController);

app.use('/course',courseController)

app.use('/addAssess',addAssessController)

app.use('/adminReg',adminRegController)
app.use('/login',loginController)
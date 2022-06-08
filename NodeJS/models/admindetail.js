const mongoose = require('mongoose');
var adminReg =mongoose.model('adminReg',
{
    name:{type:String},
    email:{type:String },
    password:{type:String}
}
)

module.exports = { adminReg }; 
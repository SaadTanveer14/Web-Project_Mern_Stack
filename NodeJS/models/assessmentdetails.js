const mongoose = require('mongoose');
var Assessment =mongoose.model('assessment',
{
    Assessm:[]
    // Statement: { type:String},
    // Options:[
        // {Option1: {type:String},correctoption1:{type:String}},
        // {Option2: {type:String},correctoption2:{type:String}},
        // {Option3: {type:String},correctoption3:{type:String}},
        // {Option4: {type:String},correctoption4:{type:String}}
    // ]
}
)

module.exports = { Assessment }; 
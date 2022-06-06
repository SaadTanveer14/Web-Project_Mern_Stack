const mongoose = require('mongoose');

var Car =mongoose.model('cardetails',

{

    image :         { type:String,unique : true, dropDups: true },
    title :         { type:String },
    location :      { type:String },
    price :         { type:Number},
    dateAdded :     { type : String },
    rating :      [ { type : Number } ],
    type :          { type : String },
    mileage :       { type : String },
    color :         { type : String },
    engine :        { type : String },
    features :    [ { type : String } ],
    model :         { type : String },
    transmission :  { type : String },
    fuel :          { type : String },
    registerstatus : { type : String },
    assembly :      { type : String },
    bodytype :      { type : String },
    phoneno :       { type : String },
    condition :   [ { type : Number } ],
    comment :       { type : String }
})

module.exports = { Car }; 
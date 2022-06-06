const mongoose = require('mongoose');
var Course =mongoose.model('Courses',
{
    name: { type:String,unique : true, dropDups: true },
    overview: { type:String},
    image1:  { type:String},
    deadline:  { type:Date},
    start_date: { type:Date},
    end_date: { type:Date}
}
)

module.exports = { Course }; 
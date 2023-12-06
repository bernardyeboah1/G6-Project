// Coding/Commenting Done By Anish Mistry 

let mongoose = require('mongoose');

// create a model class
let itemModel = mongoose.Schema({ // Define The Schema
    Name: String,
    Sport: String,
    EndDate: String,
    StartDate: String,
    Type: String
},
{
    collection:"TourTable"
});
module.exports = mongoose.model('Item',itemModel); // Export The Page

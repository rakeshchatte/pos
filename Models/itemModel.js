const mongoose = require('mongoose');
const itemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please enter the Item Name']
    },
    price:{
        type:Number,
        required:[true,'Please enter the Item price']
    },
    category:{
        type:String,
        required:[true,'Please enter the Item category']
    },
    image:{
        type:String,
    },
})

module.exports = mongoose.model('Items', itemSchema)
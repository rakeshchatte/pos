const mongoose = require('mongoose');
require('colors');
const connectDB = async(URL)=>{
    try {
        let conn = await mongoose.connect(URL);
        console.log('Successfully connected to DB'.bgYellow)
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;
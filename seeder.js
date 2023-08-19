require('./app');
const itemModel = require('./Models/itemModel');
const data = require('./Utils/data')
const importItem = async()=>{
    await itemModel.deleteMany();
    let res = itemModel.insertMany(data);
    console.log("Data Imported");
}
importItem()
const ItemsModel = require('../Models/itemModel')
const getItemController = async(req, res)=>{
    try {
        const items = await ItemsModel.find();
        res.status(200).json(items)
    } catch (error) {
        console.log(error)
    }
}
const addItemController = async(req, res)=>{
    try {
        let newItem = new ItemsModel(req.body);
        let data = newItem.save();
        res.status(201).json(newItem)
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    getItemController, addItemController
}
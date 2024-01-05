const mongoose = require("mongoose")
const { inventory } = require("../model/inventory");
mongoose.connect("mongodb://127.0.0.1:27017/test");

const getinventorController = async(req,res,next)=>{
    try {
        const data = await inventory.find({})
        res.send({
            message:"lay thong tin thanh cong",
            data:data
        })
    } catch (error) {
        next(error)
    }
};

const createinventorController = async(req,res,next)=>{
    try {
        const {id,sku,description,instock} = req.body;
        const createInventory = await inventory.create({
            id,sku,description,instock
        })
        res.status(201).send({
            message:"cap nhat thong tin thanh cong",
            data:createInventory
        })
    } catch (error) {
        next(error)
    }
};

const updateinventorController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { sku, description, instock } = req.body;
        const updatedInventory = await inventory.findByIdAndUpdate(id, { sku, description, instock }, { new: true });

        if (!updatedInventory) {
            return res.status(404).send({
                message: "Không tìm thấy bản ghi để cập nhật",
            });
        }

        res.status(201).send({
            message: "Cập nhật thông tin thành công",
            data: updatedInventory,
        });
    } catch (error) {
        next(error);
    }
};

const deleteinventorController = async(req,res,next)=>{
    try {
        const { id } = req.params;
        await inventory.deleteOne({ _id: id })
        res.status(201).send({
            message: "xóa thành công",
        });
    } catch (error) {
        next(error)
    }
};
const getlowquanti = async(req,res,next) =>{
    try {
        const lowQuanti = await inventory.find({ instock: { $lt: 100 } });
        
        res.status(200).send({
            message: "Lọc dữ liệu thành công",
            data: lowQuanti,
        });
    } catch (error) {
        next(error)
    }
}
module.exports = {getinventorController,createinventorController,updateinventorController,deleteinventorController,getlowquanti}

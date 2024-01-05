const mongoose = require("mongoose");
const { order } = require("../model/order");
const { inventory } = require("../model/inventory");
mongoose.connect("mongodb://127.0.0.1:27017/test");
const getOders = async(req,res,next)=>{
    try {
        const orderss  = await order.find({})
        const inventorys  = await inventory.find({})
        const addDescriptionToOrders = (orders, inventory) => {
 
            const ordersWithDescription = orders.map((order) => {

              const matchedInventory = inventory.find(
                (item) => item.sku === order.item
              );
          
              return matchedInventory
                ? { ...order, description: matchedInventory.description }
                : order;
            });
          
            return ordersWithDescription;
          };
          const ordersWithDescription = addDescriptionToOrders(orderss, inventorys);
          res.send({
            meseage:"thanh công",
            data:ordersWithDescription
          })
    } catch (error) {
        next(error)
    }
};
module.exports = {getOders}
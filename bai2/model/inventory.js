const { Schema, default: mongoose } = require("mongoose");

const inventorySchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  sku: {
    type: String,
  },
  description: {
    type : String,
  },
  instock: {
    type: Number,

  }
});

const inventory = mongoose.model("inventory", inventorySchema);

module.exports = { inventory };
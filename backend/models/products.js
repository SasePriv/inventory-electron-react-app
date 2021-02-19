const mongoose = require("mongoose");

const productsSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String, required: true, unique: true},
    price: {type: Number, required: true},
    cost: {type: Number, required: true},
    brand: {type: String, default: null},
    stock: {type: Number, default: 0},
    vendor: {type: String, default: null},
    vendorId: mongoose.Schema.Types.ObjectId,
    category: {type: String, default: null},
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Products", productsSchema);
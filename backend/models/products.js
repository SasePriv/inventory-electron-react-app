const mongoose = require('mongoose');

const productsSchema = mongoose.Schema(
    {
      _id: mongoose.Schema.Types.ObjectId,
      name: {type: String, required: true, unique: true},
      sku: String,
      code: String,
      brand: {type: String, default: null},
      description: String,
      data: [{
        invoicesIn: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'InvoiceVendor',
        },
        cost: {type: Number, default: 0},
        stock: {type: Number, default: 0},
        price: {type: Number, default: 0},
      }],
      images: [{
        name: {type: String},
        path: {type: String},
        file: {type: Number},
        type: {type: String},
      }],
      category: {type: String, default: null},
      sales: [{
        invoiceId: {type: String},
        stockSales: {type: Number, default: 0},
        price: {type: Number, default: 0},
        clientId: String,
      }],
    },
    {
      timestamps: true,
    },
    {typeKey: '$type'},
);

module.exports = mongoose.model('Products', productsSchema);

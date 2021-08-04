const mongoose = require('mongoose');

const invoiceVendorSchema = mongoose.Schema(
    {
      _id: mongoose.Schema.Types.ObjectId,
      vendor: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Vendor',
      },
      date: {type: Date},
      number: {type: String, required: true},
      productsList: [{
        product: {type: mongoose.Schema.Types.ObjectId, ref: 'Products'},
        cost: {type: Number, default: 0},
        stock: {type: Number, default: 0},
      }],
    },
    {
      timestamps: true,
    },
);

module.exports = mongoose.model('InvoiceVendor', invoiceVendorSchema);

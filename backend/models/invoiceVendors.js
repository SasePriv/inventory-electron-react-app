const mongoose = require('mongoose');

const invoiceVendorSchema = mongoose.Schema(
    {
      _id: mongoose.Schema.Types.ObjectId,
      vendorId: {type: mongoose.ObjectId, required: true},
      date: {type: Date},
      number: {type: String, required: true},
      products: [{
        id: String,
        cost: Number,
        stock: Number,
      }],
    },
    {
      timestamps: true,
    },
);

module.exports = mongoose.model('InvoiceVendor', invoiceVendorSchema);

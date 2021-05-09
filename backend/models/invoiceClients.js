const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const invoiceClientSchema = mongoose.Schema(
    {
      _id: mongoose.Schema.Types.ObjectId,
      date: {type: Date},
      clientId: {type: String},
      products: [{
        id: String,
        price: Number,
        stock: Number,
        vendorId: {type: String},
      }],
    },
    {
      timestamps: true,
    },
);

invoiceClientSchema.plugin(AutoIncrement, {inc_field: 'number'});

module.exports = mongoose.model('InvoiceClient', invoiceClientSchema);

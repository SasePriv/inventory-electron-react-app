const mongoose = require('mongoose');

const vendorSchema = mongoose.Schema(
    {
      _id: mongoose.Schema.Types.ObjectId,
      name: {type: String, required: true},
      // adress: {type: String},
      country: {type: String},
      phone: {type: String},
      email: {type: String,
        match: [
          // eslint-disable-next-line max-len
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
          'Please enter a valid email',
        ],
      },
      invoices: [{type: mongoose.Schema.Types.ObjectId, ref: 'InvoiceVendor'}],
    },
    {
      timestamps: true,
    },
);

module.exports = mongoose.model('Vendor', vendorSchema);

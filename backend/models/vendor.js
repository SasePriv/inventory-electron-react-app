const mongoose = require('mongoose');

const vendorSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    companyName: {type: String, required: true},
    adress: {type: String},
    country: {type: String},
    phone: {type: String},
    email: {type: String, 
      match: [
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
        "Please enter a valid email",
      ],
    }
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("Vendor", vendorSchema);
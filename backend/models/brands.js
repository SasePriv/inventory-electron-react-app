const mongoose = require('mongoose');

const brandSchema = mongoose.Schema(
    {
      _id: mongoose.Schema.Types.ObjectId,
      name: {
        type: String,
        require: true,
      },
      companyId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
      },
    },
    {
      timestamps: true,
    },
);

module.exports = mongoose.model('Brand', brandSchema);

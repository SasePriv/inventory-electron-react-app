const mongoose = require('mongoose');

const categorySchema = mongoose.Schema(
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

module.exports = mongoose.model('Category', categorySchema);

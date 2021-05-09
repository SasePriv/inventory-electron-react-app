const mongoose = require('mongoose');

const clientSchema = mongoose.Schema(
    {
      _id: mongoose.Schema.Types.ObjectId,
      name: {type: String, required: true},
      ci: {type: Number},
      phone: {type: String},
      email: {type: String,
        match: [
          // eslint-disable-next-line max-len
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
          'Please enter a valid email',
        ],
      },
      invoicesId: [{type: String}],
    },
    {
      timestamps: true,
    },
);

module.exports = mongoose.model('Client', clientSchema);

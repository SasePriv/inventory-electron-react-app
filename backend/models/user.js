const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
      _id: mongoose.Schema.Types.ObjectId,
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        unique: true,
        match: [
          // eslint-disable-next-line max-len
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
          'Please enter a valid email',
        ],
      },
      username: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      role: {
        type: String,
        required: true,
        enum: ['admin', 'moderator', 'readOnly'],
      },
      companyName: {
        type: String,
        required: true,
      },
      companyId: {
        type: mongoose.Schema.Types.ObjectId,
        // required: true
      },
      phone: {
        type: Number,
      },
    },
    {
      timestamps: true,
    },
);

module.exports = mongoose.model('User', userSchema);

const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

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
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
          "Please enter a valid email",
        ],
      },
      username: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true,
      },
      role: {
        type: String,
        required: true,
        enum: ["admin", "moderator", "readOnly"]
      },
      companyName: {
        type: String,
        required: true,
      },
      companyId: {
        type: mongoose.ObjectId,
        // required: true
      },
      phone: {
        type: Number,
      }
    },
    {
      timestamps: true,
    }
);

module.exports = mongoose.model("User", userSchema);

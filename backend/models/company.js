const mongoose = require("mongoose");

const companySchema = mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        companyName: {
            type: String,
            required: true
        },
        adress: {
            type: String,            
        },
        phone: {
            type: Number,
        },
        userPropertyId: {
            type: mongoose.ObjectId,
            // required: true
        },
        email: {
            type: String,
            unique: true
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Company", companySchema);
const mongoose = require('mongoose');
const VendorSchema = require('../models/vendor');

exports.createVendor = async(data) => {

  try {
    const {
      companyName,
      adress,
      country,
      phone,
      email
    } = data;
  
    const findCompany = await VendorSchema.find({companyName: companyName.toLowerCase()});
  
    if(findCompany >= 1){
      return({message: "company-exist"})
    }
  
    const newCompany = new VendorSchema({
      _id: new mongoose.Types.ObjectId,
      companyName: companyName.toLowerCase(),
      adress,
      country,
      phone,
      email
    });
  
    const resultCompany = newCompany.save();
  
    if(!resultCompany){
      return({message: "error-company"});
    }
  
    return({message: "Successful", dataVendor: resultCompany});
  } catch (error) {
    console.log(error)
    return({message: "error-general"})
  }

}
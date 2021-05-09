const BrandModel = require('../models/brands');
const mongoose = require('mongoose');

exports.createBrand = async (data) => {
  const {
    companyId,
    name,
  } = data;

  try {
    const findBrand = await BrandModel.find({name: name.toLowerCase()});

    if (findBrand.length > 0) {
      return ({message: 'brand-exist'});
    }

    const newBrand = new BrandModel({
      _id: new mongoose.Types.ObjectId(),
      name: name.toLowerCase(),
      companyId,
    });

    const resultBrand = await newBrand.save();

    if (!resultBrand) {
      return ({message: 'error-brand'});
    }

    return ({message: 'Successful', brandData: resultBrand});
  } catch (error) {
    console.log(error);
    return ({message: 'error-general'});
  }
};

exports.getAllBrand = async () => {
  try {
    const findAllBrand = await BrandModel.find();
    return ({message: 'Successful', brandData: findAllBrand});
  } catch (error) {
    console.log(error);
    return ({message: 'error-general'});
  }
};

exports.deleteBrand = async (id) => {
  try {
    const findBrand = await BrandModel.findByIdAndDelete(id);
    if (!findBrand) return ({message: 'error-delete-brand'});
    return ({message: 'Successful'});
  } catch (error) {
    console.log(error);
    return ({message: 'error-general'});
  }
};


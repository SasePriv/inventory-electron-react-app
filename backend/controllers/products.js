const ProductModel = require('../models/products');
const mongoose = require('mongoose');

exports.createProduct = async (data) => {
  try {
    const {
      name,
      price,
      cost,
      brand,
      vendor,
      vendorId,
      category,
    } = data;

    const findProduct = await ProductModel.find({name: name.toLowerCase()});

    if (findProduct >= 1) {
      return ({message: 'product-exist'});
    }

    const newProduct = new ProductModel({
      // eslint-disable-next-line new-cap
      _id: mongoose.Types.ObjectId(),
      name,
      price,
      cost,
      brand,
      vendor,
      vendorId,
      category,
    });

    const resultProduct = newProduct.save();

    if (!resultProduct) {
      return ({message: 'error-product'});
    }

    return ({message: 'Successful', dataProduct: resultProduct});
  } catch (error) {
    console.log(error);
    return ({message: 'error-general'});
  }
};

exports.getAllProducts = async () => {
  try {
    const productData = await ProductModel.find();

    if (!productData) {
      return ({message: 'error-products'});
    }

    return ({message: 'Successful', dataProducts: productData});
  } catch (error) {
    console.log(error);
    return ({message: 'error-general'});
  }
};

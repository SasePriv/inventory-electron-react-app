const ProductModel = require('../models/products');
const mongoose = require('mongoose');

exports.createProduct = async (data) => {
  try {
    const {
      name,
      brand,
      category,
      description,
      sku,
      code,
      images,
    } = data;

    const findProduct = await ProductModel.find({name: name.toLowerCase()});

    if (findProduct.length) {
      return ({message: 'product-exist'});
    }

    const newProduct = new ProductModel({
      // eslint-disable-next-line new-cap
      _id: mongoose.Types.ObjectId(),
      name,
      brand,
      description,
      sku,
      code,
      category,
      images: [...images],
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

    // console.log(productData)

    return ({message: 'Successful', dataProducts: productData});
  } catch (error) {
    console.log(error);
    return ({message: 'error-general'});
  }
};

exports.updateProductPrice = async (data) => {
  try {
    const {
      vendorId,
      price,
      productId,
    } = data;

    const findProduct = await ProductModel.findById(productId);

    if (findProduct.length === 0) {
      return ({message: 'error-product-find'});
    };

    const vendorArray = [...findProduct.vendor];

    for (let index = 0; index < vendorArray.length; index++) {
      if (vendorArray[index].vendorId.toString() === vendorId) {
        vendorArray[index].price = price;
      }
    }

    findProduct.vendor = vendorArray;

    await findProduct.save();

    return ({message: 'Successful'});
  } catch (error) {
    console.log(error);
    return ({message: 'error-general'});
  };
};

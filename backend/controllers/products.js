const ProductModel = require('../models/products');
const InvoiceVendorModal = require('../models/invoiceVendors');
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

    if (findProduct.length > 0) {
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
    const productData = await ProductModel.find().populate('data.invoicesIn');
    if (!productData) {
      return ({message: 'error-products'});
    }

    return ({message: 'Successful', dataProducts: productData});
  } catch (error) {
    console.log(error);
    return ({message: 'error-general'});
  }
};

exports.updateProductPrice = async (data) => {
  try {
    const {
      invoiceId,
      price,
      productId,
    } = data;

    // const invoice = await InvoiceVendorModal.findById(invoiceId);
    const product = await ProductModel.findById(productId);

    if (!product) {
      return ({message: 'error-no-product'});
    }

    for (const index in product.data) {
      if (product.data[index].invoicesIn.toString() === invoiceId.toString()) {
        product.data[index].price = price;
        break;
      }
    };

    product.save();

    // const product = await ProductModel.findById(productId).populate('invoicesIn');
    // const findProduct = await ProductModel.findById(productId);

    // if (findProduct.length === 0) {
    //   return ({message: 'error-product-find'});
    // };

    // const vendorArray = [...findProduct.vendor];

    // for (let index = 0; index < vendorArray.length; index++) {
    //   if (vendorArray[index].vendorId.toString() === vendorId) {
    //     vendorArray[index].price = price;
    //   }
    // }

    // findProduct.vendor = vendorArray;

    // const newProductData = await findProduct.save();

    return ({message: 'Successful', productData: product});
  } catch (error) {
    console.log(error);
    return ({message: 'error-general'});
  };
};

exports.updateProductData = async (data) => {
  try {
    const {
      name,
      brand,
      category,
      description,
      sku,
      code,
      images,
      _id,
    } = data;

    const findProduct = await ProductModel.findByIdAndUpdate(_id, {
      name,
      brand,
      category,
      description,
      sku,
      code,
      images,
    }, {new: true});

    if (findProduct === null) {
      return ({message: 'product-no-exist', productData: findProduct});
    }

    return ({message: 'Successful'});
  } catch (error) {
    console.log(error);
    return ({message: 'error-general'});
  }
};

exports.deleteProduct = async (data) => {
  try {
    const {
      productId,
    } = data;

    const product = await ProductModel.findById(productId);

    if (!product) {
      return ({message: 'error-no-product'});
    }

    if (product.sales.length > 0) {
      return ({message: 'product-has-sale'});
    }

    if (product.data.length > 0) {
      return ({message: 'product-has-data'});
    }

    await ProductModel.findByIdAndDelete(productId);

    return ({message: 'Successful'});
  } catch (error) {
    console.log(error);
    return ({message: 'error-general'});
  }
};

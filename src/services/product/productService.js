const {remote} = require('electron');
const {products: {createProduct, getAllProducts, updateProductPrice, updateProductData}} = remote.require('./main');

module.exports = {
  createProduct,
  getAllProducts,
  updateProductPrice,
  updateProductData,
};


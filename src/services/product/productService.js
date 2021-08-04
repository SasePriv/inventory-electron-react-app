const {remote} = require('electron');
const {products: {createProduct, getAllProducts, updateProductPrice, updateProductData, deleteProduct}} = remote.require('./main');

module.exports = {
  createProduct,
  getAllProducts,
  updateProductPrice,
  updateProductData,
  deleteProduct,
};


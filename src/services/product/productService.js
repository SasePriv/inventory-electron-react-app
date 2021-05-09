const {remote} = require('electron');
const {products: {createProduct, getAllProducts, updateProductPrice}} = remote.require('./main');

module.exports = {
  createProduct,
  getAllProducts,
  updateProductPrice,
};


const {remote} = require('electron');
const {brand: {createBrand, getAllBrand, deleteBrand}} = remote.require('./main');

module.exports = {
  createBrand,
  getAllBrand,
  deleteBrand,
};

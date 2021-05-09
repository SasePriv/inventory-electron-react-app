const {remote} = require('electron');
const {category: {getAllCategory, createCategory, deleteCategory}} = remote.require('./main');

module.exports = {
  getAllCategory,
  createCategory,
  deleteCategory,
};

const {remote} = require('electron');
const {vendor: {
  createVendor,
  getVendorList,
  createInvoiceVendor,
  getInvoiceVendorList,
  updateVendorData,
}} = remote.require('./main');

module.exports = {
  createVendor,
  getVendorList,
  createInvoiceVendor,
  getInvoiceVendorList,
  updateVendorData
};


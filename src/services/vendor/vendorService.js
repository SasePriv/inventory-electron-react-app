const {remote} = require('electron');
const {vendor: {
  createVendor,
  getVendorList,
  createInvoiceVendor,
  getInvoiceVendorList,
}} = remote.require('./main');

module.exports = {
  createVendor,
  getVendorList,
  createInvoiceVendor,
  getInvoiceVendorList,
};


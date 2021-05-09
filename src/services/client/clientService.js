const {remote} = require('electron');
const {client: {
  createClient,
  getAllClients,
  createInvoiceClient,
  getInvoiceClientList,
}} = remote.require('./main');

module.exports = {
  createClient,
  getAllClients,
  createInvoiceClient,
  getInvoiceClientList,
};

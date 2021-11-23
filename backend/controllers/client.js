const mongoose = require('mongoose');
const ClientSchema = require('../models/clients');
const InvoiceClientSchema = require('../models/invoiceClients');
const ProductsSchema = require('../models/products');

exports.createClient = async (data) => {
  try {
    const {
      name,
      ci,
      phone,
      email,
    } = data;


    const findClient = await ClientSchema.find({ci});

    if (findClient.length) {
      return ({message: 'client-exist'});
    }

    const newClient = new ClientSchema({
      _id: mongoose.Types.ObjectId(),
      name,
      ci,
      phone,
      email,
    });

    const resultClient = newClient.save();

    if (!resultClient) {
      console.log('erro aqui')
      return ({message: 'error-client'});
    }

    return ({message: 'Successful'});
  } catch (error) {
    console.log('aqui')
    console.log(error);
    return ({message: 'error-general'});
  }
};

exports.getAllClients = async () => {
  try {
    const clientData = await ClientSchema.find();

    if (!clientData) {
      console.log('errpr')
      return ({message: 'error-clients'});
    }

    return ({message: 'Successful', dataClients: clientData});
  } catch (error) {
    console.log(error);
    return ({message: 'error-general'});
  }
};

exports.createInvoiceClient = async (data) => {
  try {
    const {
      clientId,
      date,
      products,
    } = data;

    const newInvoice = new InvoiceClientSchema({
      _id: new mongoose.Types.ObjectId,
      date,
      products,
      clientId,
    });

    const resultsInvoice = await newInvoice.save();

    if (!resultsInvoice) {
      return ({message: 'error-invoice-client'});
    }

    const client = await ClientSchema.findById(clientId);

    try {
      products.map(async (each) => {
        const product = await ProductsSchema.findById(each.id);

        const productsVendor = [...product.vendor];
        let vendorFindIndex = null;

        for (let index = 0; index < productsVendor.length; index++) {
          if (productsVendor[index].vendorId === each.vendorId) {
            vendorFindIndex = index;
          };
        }

        if (vendorFindIndex !== null) {
          productsVendor[vendorFindIndex].stock -= Number(each.stock);
          if (productsVendor[vendorFindIndex].stock < 0) {
            return ({message: 'error-client-invoice-stock'});
          }
        } else {
          return ({message: 'error-client-invoice-product'});
        }

        product.sales = [
          ...product.sales,
          {
            invoiceId: resultsInvoice._id,
            stockSales: each.stock,
            price: each.price,
            clientId,
          },
        ];

        product.vendor = productsVendor;
        await product.save();
        console.log('Producto Guardado');
      });
    } catch (error) {
      console.log(error);
      return ({message: 'error-general'});
    }

    if (client.invoicesId) {
      client.invoicesId = [
        ...client.invoicesId,
        resultsInvoice._id,
      ];
    } else {
      vendor.invoicesId = [resultsInvoice._id];
    }

    await client.save();
    return ({message: 'Successful'});
  } catch (error) {
    console.log(error);
    return ({message: 'error-general'});
  }
};

exports.getInvoiceClientList = async (data) => {
  const {
    clientId,
  } = data;
  try {
    const dataInvoiceClient = await InvoiceClientSchema.find({clientId});
    return ({message: 'Successful', dataInvoiceClient});
  } catch (error) {
    console.log(error);
    return ({message: 'error-general'});
  }
};

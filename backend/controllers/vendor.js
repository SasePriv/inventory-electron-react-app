/* eslint-disable max-len */
const mongoose = require('mongoose');
const VendorSchema = require('../models/vendor');
const InvoiceVendorSchema = require('../models/invoiceVendors');
const ProductsSchema = require('../models/products');

exports.createVendor = async (data) => {
  try {
    const {
      name,
      country,
      phone,
      email,
    } = data;

    const findCompany = await VendorSchema.find({name: name.toLowerCase()});

    if (findCompany >= 1) {
      return ({message: 'company-exist'});
    }

    const newCompany = new VendorSchema({
      _id: new mongoose.Types.ObjectId,
      name: name.toLowerCase(),
      country,
      phone,
      email,
    });

    const resultCompany = newCompany.save();

    if (!resultCompany) {
      return ({message: 'error-company'});
    }

    return ({message: 'Successful', dataVendor: resultCompany});
  } catch (error) {
    console.log(error);
    return ({message: 'error-general'});
  }
};

exports.getVendorList = async () => {
  try {
    const dataVendor = await VendorSchema.find();
    return ({message: 'Successful', dataVendor});
  } catch (error) {
    console.log(error);
    return ({message: 'error-general'});
  }
};

exports.createInvoiceVendor = async (data) => {
  try {
    const {
      vendorId,
      date,
      number,
      products,
    } = data;

    const newInvoice = new InvoiceVendorSchema({
      _id: new mongoose.Types.ObjectId,
      date,
      number,
      productsList: products,
      vendor: vendorId,
    });

    const resultsInvoice = await newInvoice.save();

    if (!resultsInvoice) {
      return ({message: 'error-vendor'});
    }

    try {
      products.map(async (each) => {
        const product = await ProductsSchema.findById(each.product);
        // product.invoicesIn = product.invoicesIn.concat(resultsInvoice._id);
        product.data = product.data.concat({
          invoicesIn: resultsInvoice._id,
          cost: each.cost,
          stock: each.stock,
        });
        await product.save();
        console.log('Producto Guardado');
      });
    } catch (error) {
      console.log(error);
      return ({message: 'error-general'});
    }

    const vendor = await VendorSchema.findById(vendorId);
    vendor.invoices = vendor.invoices.concat(resultsInvoice._id);
    await vendor.save();
    return ({message: 'Successful'});
  } catch (error) {
    console.log(error);
    return ({message: 'error-general'});
  }
};

exports.deleteInvoice = async (data) => {
  const {
    invoiceId,
  } = data;

  let ifDelete = false;
  let count = 0;

  const invoice = await InvoiceVendorSchema.findById(invoiceId);
  const productList = invoice.productsList;

  for (let index = 0; index < productList.length; index++) {
    const product = await ProductsSchema.findById(productList[index].product);

    for (let j = 0; j < product.data.length; j++) {
      console.log('ProductListSotck', productList[index].stock);
      console.log('ProductDataStock', product.data[j].stock);
      if (productList[index].stock === product.data[j].stock) {
        ifDelete = true;
        count++;
      }
    }
  }

  if (count === productList.length && ifDelete) {
    try {
      await InvoiceVendorSchema.findByIdAndDelete(invoiceId);

      for (let index = 0; index < productList.length; index++) {
        const product = await ProductsSchema.findById(productList[index].product);
        product.data = product.data.filter((item) => item.invoicesIn.toString() !== invoiceId.toString());
        console.log('productData', product.data);
        await product.save();
      }

      const vendor = await VendorSchema.findById(invoice.vendor);
      vendor.invoices = vendor.invoices.filter((item) => item.toString() !== invoiceId);
      await vendor.save();

      return ({message: 'Successful'});
    } catch (error) {
      console.log(error);
      return ({message: 'error-delete-invoice-none'});
    }
  }

  return ({message: 'invoice-can-not'});
};

exports.getInvoiceVendorList = async (data) => {
  const {
    vendorId,
  } = data;
  try {
    const dataInvoiceVendor = await InvoiceVendorSchema.find({vendor: vendorId})
        .populate('productsList.product')
        .populate('vendor');
    return ({message: 'Successful', dataInvoiceVendor});
  } catch (error) {
    console.log(error);
    return ({message: 'error-general'});
  }
};

exports.updateVendorData = async (data) => {
  try {
    const {
      name,
      country,
      phone,
      email,
      _id,
    } = data;

    const findVendor = await VendorSchema.findByIdAndUpdate(_id, {
      name,
      country,
      phone,
      email,
    }, {new: true});

    if (findVendor === null) {
      return ({message: 'vendor-no-exist'});
    }

    return ({message: 'Successful', vendor: findVendor});
  } catch (error) {
    console.log(error);
    return ({message: 'error-general'});
  }
};

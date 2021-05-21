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
      products,
      vendorId,
    });

    const resultsInvoice = await newInvoice.save();

    if (!resultsInvoice) {
      return ({message: 'error-vendor'});
    }

    const vendor = await VendorSchema.findById(vendorId);

    try {
      products.map(async (each) => {
        const product = await ProductsSchema.findById(each.id);

        let productsVendor = [...product.vendor];
        let vendorFindIndex = null;

        for (let index = 0; index < productsVendor.length; index++) {
          if (productsVendor[index].vendorId === vendorId) {
            vendorFindIndex = index;
          };
        }

        if (vendorFindIndex !== null) {
          productsVendor[vendorFindIndex].cost = each.cost;
          productsVendor[vendorFindIndex].stock += Number(each.stock);

          productsVendor[vendorFindIndex].invoicesId = [
            ...productsVendor[vendorFindIndex].invoicesId,
            resultsInvoice._id,
          ];
        } else {
          productsVendor = [
            ...productsVendor,
            {
              vendorName: vendor.name,
              vendorId,
              cost: each.cost,
              stock: each.stock,
              invoicesId: [resultsInvoice._id],
            },
          ];
        }

        product.vendor = productsVendor;
        await product.save();
        console.log('Producto Guardado');
      });
    } catch (error) {
      console.log(error);
      return ({message: 'error-general'});
    }

    if (vendor.invoicesId) {
      vendor.invoicesId = [
        ...vendor.invoicesId,
        resultsInvoice._id,
      ];
    } else {
      vendor.invoicesId = [resultsInvoice._id];
    }

    await vendor.save();
    return ({message: 'Successful'});
  } catch (error) {
    console.log(error);
    return ({message: 'error-general'});
  }
};

exports.getInvoiceVendorList = async (data) => {
  const {
    vendorId,
  } = data;
  try {
    const dataInvoiceVendor = await InvoiceVendorSchema.find({vendorId});
    return ({message: 'Successful', dataInvoiceVendor});
  } catch (error) {
    console.log(error);
    return ({message: 'error-general'});
  }
};

exports.updateVendorData = async(data) => {
  try {
    const {
      name,
      country,
      phone,
      email,
      _id,
    } = data;

    console.log(data);

    const findVendor = await VendorSchema.findByIdAndUpdate(_id, {
      name,
      country,
      phone,
      email,
    }, {new: true});

    if (findVendor === null) {
      return ({message: 'vendor-no-exist'});
    }

    return ({message: 'Successful'});
  } catch (error) {
    console.log(error);
    return ({message: 'error-general'});
  }
};

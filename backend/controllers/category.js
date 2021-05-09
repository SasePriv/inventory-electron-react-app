const CategoryModel = require('../models/category');
const mongoose = require('mongoose');

exports.createCategory = async (data) => {
  const {
    companyId,
    name,
  } = data;

  try {
    const findCategory = await CategoryModel.find({name: name.toLowerCase()});

    if (findCategory.length > 0) {
      return ({message: 'category-exist'});
    }

    const newCategory = new CategoryModel({
      _id: new mongoose.Types.ObjectId(),
      name: name.toLowerCase(),
      companyId,
    });

    const resultCategory = await newCategory.save();

    if (!resultCategory) {
      return ({message: 'error-category'});
    }

    return ({message: 'Successful', categoryData: resultCategory});
  } catch (error) {
    console.log(error);
    return ({message: 'error-general'});
  }
};

exports.getAllCategory = async () => {
  try {
    const findAllCategory = await CategoryModel.find();
    // console.log(findAllCategory)
    return ({message: 'Successful', categoryData: findAllCategory});
  } catch (error) {
    console.log(error);
    return ({message: 'error-general'});
  }
};

exports.deleteCategory = async (id) => {
  try {
    const findCategory = await CategoryModel.findByIdAndDelete(id);
    if (!findCategory) return ({message: 'error-delete-category'});
    return ({message: 'Successful'});
  } catch (error) {
    console.log(error);
    return ({message: 'error-general'});
  }
};


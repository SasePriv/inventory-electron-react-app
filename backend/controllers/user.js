const UserModel = require('../models/user');
const CompanyModel = require('../models/company');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

exports.createUserWithCompany = async (data) => {
  try {
    const {
      name,
      email,
      username,
      password,
      role,
      companyName,
      adress,
      phone,
    } = data;

    const uperCompanyName = companyName.toUpperCase();

    const findEmail = await UserModel.find({email: email.toLowerCase(), companyName: uperCompanyName});

    if (findEmail.length >= 1) {
      return ({message: 'email-exist'});
    } else {
      const hash = await bcrypt.hash(password, 10);

      const newUser = new UserModel({
        _id: new mongoose.Types.ObjectId(),
        name,
        email,
        username,
        password: hash,
        role,
        companyName: uperCompanyName,
        phone,
      });

      const newCompany = new CompanyModel({
        _id: new mongoose.Types.ObjectId(),
        companyName: uperCompanyName,
        adress,
        phone,
        email,
        userPropertyId: newUser._id,
      });

      newUser.companyId = newCompany._id;

      const resultUser = await newUser.save();
      const resultCompany = await newCompany.save();

      if (!resultUser) {
        return ({message: 'error-email'});
      }


      if (!resultCompany) {
        return ({message: 'error-company'});
      }

      const dataUser = {
        _id: resultUser._id,
        email: resultUser.email,
        username: resultUser.username,
        role: resultUser.role,
        companyId: resultUser.companyId,
        phone: resultUser.phone,
        name: resultUser.name,
      };

      return ({'message': 'Successful', dataUser, 'dataCompany': resultCompany});
    }
  } catch (error) {
    console.log(error);
    return ({message: 'error-general'});
  }
};

exports.login = async (data) => {
  const {
    email,
    username,
    password,
  } = data;

  try {
    let user = null;

    if (email) {
      user = await UserModel.findOne({email: email.toLowerCase()});
    } else {
      user = await UserModel.findOne({username: username.toLowerCase()});
    }


    if (!user) {
      return ({message: 'email-not-exist'});
    }

    bcrypt.compare(password, user.password, async (err, result) => {
      if (err) {
        return ({message: 'auth-fail'});
      }
    });

    const companyId = user.companyId;

    const companyUser = await CompanyModel.findById(companyId);

    if (!companyUser) {
      return ({message: 'error-company-login'});
    }

    const dataUser = {
      _id: user._id,
      email: user.email,
      username: user.username,
      role: user.role,
      companyId: user.companyId,
      phone: user.phone,
      name: user.name,
    };

    return ({message: 'Logged in successfully', dataUser: dataUser, dataCompany: companyUser});
  } catch (error) {
    console.log('Error in log in');
    console.log(error);
    return ({message: 'error-general'});
  }
};

exports.getDataFromUser = async (data) => {
  const {
    id,
  } = data;

  try {
    const findUser = UserModel.findById(id);

    if (findUser) {
      const dataUser = {
        _id: findUser._id,
        email: findUser.email,
        username: findUser.username,
        role: findUser.role,
        companyId: findUser.companyId,
        phone: findUser.phone,
        name: findUser.name,
      };

      return ({message: 'Successful', dataUser});
    } else {
      return ({message: 'user-not-found'});
    }
  } catch (error) {
    console.log('Error in getting the data from a user');
    console.log(error);

    return ({message: 'error-general'});
  }
};

const CompanyModal = require('../models/company');

exports.getDataFromCompany = async (id) => {

  try {
    const findCompany = await CompanyModal.findById(id);

    if (findCompany) {
      return ({message: 'Successful', dataCompany: findCompany});
    } else {
      return ({message: 'company-not-found'});
    }
  } catch (error) {
    console.log('Error in getting the data from a user');
    console.log(error);

    return ({message: 'error-general'});
  }
};

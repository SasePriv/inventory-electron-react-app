const {remote} = require('electron');
const {company: {getDataFromCompany}} = remote.require('./main');

const getDataCompany = async (id) => {
  const result = await getDataFromCompany(id);
  return result;
};

module.exports = {
  getDataCompany,
};

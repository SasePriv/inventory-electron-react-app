const {remote} = require('electron');
const {user: {getDataFromUser}} = remote.require('./main');

const getDataUser = async (id) => {
  const result = await getDataFromUser(id);
  return result;
};

module.exports = {
  getDataUser,
};

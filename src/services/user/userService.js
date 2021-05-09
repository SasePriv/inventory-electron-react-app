const {remote} = require('electron');
const {user: {getDataFromUser, ifFristUserExist}} = remote.require('./main');

const getDataUser = async (id) => {
  const result = await getDataFromUser(id);
  return result;
};

const getIfFristUserExist = async () => {
  const result = await ifFristUserExist();
  return result;
}

module.exports = {
  getDataUser,
  getIfFristUserExist
};

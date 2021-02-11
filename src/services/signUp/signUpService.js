const { remote } = require("electron");
const { user:{ createUserWithCompany } } = remote.require("./main");

const signUpAsync = async(data) => {
    
    const result = await createUserWithCompany(data);    
    return result;
}

module.exports = {
    signUpAsync
}
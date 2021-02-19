const { remote } = require("electron");
const { user:{ login } } = remote.require("./main");

const loginAsync = async(data) => {
    const results = await login(data);
    return results;
}

module.exports = {    
    loginAsync,
}


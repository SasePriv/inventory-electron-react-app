const { remote } = require("electron");
const { user:{ login } } = remote.require("./main");

const example = () => {
    console.log("User")
    console.log(controllers)
}

const loginAsync = async(data) => {
    const results = await login(data);
    return results;
}

module.exports = {
    example,
    loginAsync,
}


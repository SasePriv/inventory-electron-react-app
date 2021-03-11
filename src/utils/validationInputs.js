const validationEmptyInput = (input, typeOfInput) => {
  if (input === '') {
    return {status: false, type: typeOfInput, message: 'empty'};
  }

  return {status: true, message: 'successful'};
};

const validationEmail = (email) => {
  // eslint-disable-next-line max-len
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const emailEmpty = validationEmptyInput(email, 'email');

  if (!emailEmpty.status) {
    return {status: false, type: 'email', message: emailEmpty.message};
  } else if (!re.test(email)) {
    return {status: false, type: 'email', message: 'bad-email'};
  }

  return {status: true, message: 'successful'};
};


const validationPassword = (pass1, pass2 = null) => {
  const passEmpty = validationEmptyInput(pass1, 'password');

  if (!passEmpty.status) {
    return {status: false, type: 'password', message: passEmpty.message};
  } else if (pass1.length < 6) {
    return {status: false, type: 'password', message: 'short'};
  }

  if (pass2 || pass2 === '') {
    if (pass1 !== pass2) {
      return {status: false, type: 'password', message: 'not equal'};
    }
  }

  return {status: true, message: 'successful'};
};

const signupValidationsForm = (singUpData, pass2) => {
  const {
    name,
    email,
    username,
    password,
    companyName,
    adress,
    phone,
  } = singUpData;

  const nameCheck = validationEmptyInput(name, 'name');
  const emailCheck = validationEmail(email);
  const userCheck = validationEmptyInput(username, 'username');
  const passCheck = validationPassword(password, pass2);
  const companyNameCheck = validationEmptyInput(companyName, 'companyName');
  const adressCheck = validationEmptyInput(adress, 'adress');
  const phoneCheck = validationEmptyInput(phone, 'phone');

  if (!nameCheck.status) {
    return nameCheck;
  }

  if (!emailCheck.status) {
    return emailCheck;
  }

  if (!userCheck.status) {
    return userCheck;
  }

  if (!passCheck.status) {
    return passCheck;
  }

  if (!companyNameCheck.status) {
    return companyNameCheck;
  }

  if (!adressCheck.status) {
    return adressCheck;
  }

  if (!phoneCheck.status) {
    return phoneCheck;
  }

  return {status: true, message: 'singnUp-form-checked'};
};

module.exports = {
  signupValidationsForm,
};

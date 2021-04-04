import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setFormData, signInAsync} from '../../../../redux/signin/signin-actions';
import {createStructuredSelector} from 'reselect';
import {
  selectSignUpFormData,
  selectSignInFailure,
  selectSignInError,
} from '../../../../redux/signin/signin-selectors';

import './LoginForm.scss';

const LoginForm = (
    {toggleStatus, signInFormData, setFormData, signInAsync, signInFailure, signInError},
) => {
  const handleChangeInput = (event, nameInput) => {
    setFormData({[nameInput]: event.target.value});
  };

  const handleLogin = () => {
    signInAsync(signInFormData);
  };

  return (
    <div className=" p-5 LoginForm">
      <h4>Inciar Sesion</h4>

      <div className="form-group">
        <div className="label">Usuario o Email</div>
        <input
          type="email"
          id="name"
          className="form-control"
          aria-describedby="emailHelp"
          name="usuario"
          placeholder="Ej: your_email@your_dominion.com"
          onChange={(e) => handleChangeInput(e, 'username')}
          value={signInFormData.username}
        />
      </div>
      <div className="form-group">
        <div className="label">Contraseña</div>
        <input
          type="password"
          className="form-control"
          name="password"
          laceholder="Password"
          onChange={(e) => handleChangeInput(e, 'password')}
          value={signInFormData.password}
        />
      </div>

      {
        signInFailure ?
        <div className="errorLoginInput">*{signInError}</div> :
        null
      }

      <div className="d-flex justify-content-between">
        <button onClick={handleLogin} className="btn btn-primary">Iniciar Session</button>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  signInFormData: selectSignUpFormData,
  signInFailure: selectSignInFailure,
  signInError: selectSignInError,
});

const mapDispatchToProps = (dispatch) => ({
  setFormData: (formData) => dispatch(setFormData(formData)),
  signInAsync: (formData) => dispatch(signInAsync(formData)),

});

LoginForm.propTypes = {
  toggleStatus: PropTypes.bool,
  signInAsync: PropTypes.func,
  signInFormData: PropTypes.object,
  signInFailure: PropTypes.bool,
  signInError: PropTypes.string,
  setFormData: PropTypes.func,
};


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

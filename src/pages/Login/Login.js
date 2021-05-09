// React
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Animated} from 'react-animated-css';
// Redux
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectIsSignUpIn} from '../../redux/signup/signup-selectors';
import {selectIsSigningIn} from '../../redux/signin/signin-selectors';
import {selectErrorInputsData} from '../../redux/errorsInputs/errorsInputs-selectors';
import {resetErrorData} from '../../redux/errorsInputs/errorsInputs-actions';
import {checkExistUser} from '../../redux/user/user-actions';
import {selectUserDbExist} from '../../redux/user/user-selectors';
// Component
import SignInForm from '../../components/Login/SignInForm/SignInForm';
import SignUpForm from '../../components/Login/SignUpForm/SignUpForm';
import Spinner from '../../utils/spinner/spinner';
// Styles and assets
import './Login.scss';
import VideoBackground from '../../../assets/videos/backgroundVideoLogin3.mp4';

const Login = ({isSignUp, isSignIn, errorInputs, resetErrorData, checkExistUser, userExistDB}) => {
  const [status, setStatus] = useState(true);

  useEffect(() => {
    checkExistUser();
  },[])

  const toggleStatus = () => {
    setStatus(!status);
    resetErrorData();
  };

  return (
    <div>

      {isSignUp || isSignIn ? <Spinner /> : null}

      <video autoPlay muted loop id="myVideo">
        <source src={VideoBackground} type="video/mp4" />
      </video>
      <div className="Login ">
        <div className={`square d-flex ${false && 'justify-content-center'}`}>

          <Animated
            animationIn="fadeIn"
            animationOut="fadeOut"
            isVisible={userExistDB}
            style={{width: '100%', display: userExistDB ? '' : 'none'}}
            animationInDelay={100} animationOutDelay={100}
          >
            <SignInForm/>
          </Animated>

          <Animated
            animationIn="fadeIn"
            animationOut="fadeOut"
            isVisible={!userExistDB}
            style={{width: '100%', display: userExistDB ? 'none' : ''}}
            animationInDelay={100}
            animationOutDelay={100}
          >
            <SignUpForm/>
          </Animated>

        </div>
        {
          errorInputs.statusError && errorInputs.typeError === 'server' ?
              <div className="errorServer">{errorInputs.errorMessage}</div> :
          null
        }
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isSignUp: selectIsSignUpIn,
  isSignIn: selectIsSigningIn,
  errorInputs: selectErrorInputsData,
  userExistDB: selectUserDbExist
});

const mapDispatchToProps = (dispatch) => ({
  resetErrorData: () => dispatch(resetErrorData()),
  checkExistUser: () => dispatch(checkExistUser())
});

Login.propTypes = {
  isSignUp: PropTypes.bool,
  isSignIn: PropTypes.bool,
  errorInputs: PropTypes.object,
  statusError: PropTypes.bool,
  resetErrorData: PropTypes.func,
  checkExistUser: PropTypes.func,
  userExistDB: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

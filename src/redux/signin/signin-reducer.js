import SigninActionTypes from './signin-types';

const INITIAL_STATE = {
    formData: {
        username: "",
        email: "",
        password: "",
        company: ""
    },
    isSigningIn: false,
    signInFailure: false,
    signInError: undefined,
}

const SignInReducer = (state = INITIAL_STATE, action) => {
		const { type, payload } = action;
		
    switch (type) {

        case SigninActionTypes.SET_FORM_DATA: {
            return{
                ...state,
                formData: { ...state.formData, ...payload}
            }
        }
      
        case SigninActionTypes.SIGN_IN_START: {
            return {
                ...state,
                isSigningIn: true
            };
        }
        case SigninActionTypes.SIGN_IN_SUCCESS: {
            return {
                ...state,
                isSigningIn: false,
            };
        }
        case SigninActionTypes.SIGN_IN_FAILURE: {
            return {
                ...state,
                isSigningIn: false,
                signInFailure: payload
            };
        }
        case SigninActionTypes.SIGN_IN_ERROR: {
            return {
                ...state,
                isSigningIn: false,
                signInError: payload
            };
        }
        case SigninActionTypes.RESET_SIGN_IN: {
            return INITIAL_STATE;
        }

      default:
        return state;
    }
  };
  
  export default SignInReducer;
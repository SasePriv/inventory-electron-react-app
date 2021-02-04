import SignupActionType from './signup-types';
import SignUpActionTypes from './signup-types';

const INITIAL_STATE = {
    formData: {
        name: "",
        emial: "",
        username: "",
        password: "",
        role: "",
        companyName: "",
        adress: "",
        phone: "",
    },
    isSignupIn: false,
    signUpFailure: false,
    signUpError: undefined,
}

const SignUpReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case SignupActionType.SET_FORM_DATA: {
            return{
                ...state,
                formData: { ...state.formData, ...payload }
            }
        }

        case SignupActionType.SIGN_UP_START: {
            return{
                ...state,
                isSignupIn: true
            }
        }

        case SignupActionType.SIGN_UP_SUCCESS: {
            return{
                ...state,
                isSignupIn: false,
            }
        }

        case SignupActionType.SIGN_UP_FAILURE: {
            return{
                ...state,
                isSignupIn: false,
                signUpFailure: payload
            }
        }

        case SignupActionType.SIGN_UP_ERROR: {
            return{
                ...state,
                isSignupIn: false,
                signUpError: payload
            }
        }

        case SignupActionType.RESET_SIGN_UP: {
            return INITIAL_STATE;
        }
    
        default:
            return state;
    }


}
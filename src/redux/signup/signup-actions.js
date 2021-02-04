import SignupActionType from './signup-types';
import { signUpAsync } from '../../services/signUp/signUpService';
import { setCurrentUser } from '../user/user-actions';

export const setFormData = (formData) => ({
    types: SignupActionType.SET_FORM_DATA,
    payload: formData
});

export const signUpStart = () => ({
    type: SignupActionType.SIGN_UP_START
});

export const signUpSucces = () => ({
    type: SignupActionType.SIGN_UP_SUCCESS
});

export const signUpFailure = (status) => ({
    type: SignupActionType.SIGN_UP_FAILURE,
    payload: status
});

export const signUpError = (error) => ({
    type: SignupActionType.SIGN_UP_ERROR,
    payload: error
});

export const resetSignUp = () => ({
    type: SignupActionType.RESET_SIGN_UP
});

export const signUpAsync = (signUpData) => {
    return dispatch => {
        dispatch(signUpStart());
        try {
            const data = await signUpAsync(signUpData);

            if (data.message === "Successful") {
                dispatch(signUpSucces());
                dispatch(setCurrentUser(data.dataUser));
                //Here will be the data company to

                //
            } else {
                dispatch(signUpFailure(true));
                dispatch(signUpError(data.message));
            }

        } catch (error) {
            dispatch(signUpFailure(true));
            dispatch(signUpError(error));
        }
    }
}

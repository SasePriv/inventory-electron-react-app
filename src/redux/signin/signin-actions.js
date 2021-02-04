import SigninActionTypes from "./signin-types";
import { loginAsync } from '../../services/signIn/signInService'
import { setCurrentUser } from '../user/user-actions'

export const setFormData = (formData) => ({
    type: SignInActionTypes.SET_FORM_DATA,
    payload: formData
});

export const signInStart = () => ({
    type: SignInActionTypes.SIGN_IN_START
})

export const signInSucces = () => ({
    type: SignInActionTypes.SIGN_IN_SUCCESS
})

export const signInFailure = (status) => ({
    type: SigninActionTypes.SIGN_IN_FAILURE,
    payload: status
})

export const signInError = (error) => ({
    type: SigninActionTypes.SIGN_IN_ERROR,
    payload: error
})

export const resetSignIn = () => ({
    type: SigninActionTypes.RESET_SIGN_IN
})

export const signInAsync = async (signInData) => {
    return dispatch => {
        dispatch(signInStart());
        try {
            const data = await loginAsync(signInData);

            if(data.message === "Logged in successfully"){
                dispatch(signInSucces());
                dispatch(setCurrentUser(data.dataUser));
            }else{
                dispatch(signInFailure(true));
                dispatch(signInError(data.message))
            }
        } catch (error) {
            dispatch(signInFailure(true));
            dispatch(signInError(error))
        }
    }
}
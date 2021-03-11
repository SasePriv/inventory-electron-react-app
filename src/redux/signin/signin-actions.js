import SigninActionTypes from './signin-types';
import {loginAsync} from '../../services/signIn/signInService';
import {setCurrentUser} from '../user/user-actions';
import {setCurrentCompany} from '../company/company-actions';
import {store} from '../../../store/storeUserData';
import {handleError} from '../../utils/handleErrors';

export const setFormData = (formData) => ({
  type: SigninActionTypes.SET_FORM_DATA,
  payload: formData,
});

export const signInStart = () => ({
  type: SigninActionTypes.SIGN_IN_START,
});

export const signInSucces = () => ({
  type: SigninActionTypes.SIGN_IN_SUCCESS,
});

export const signInFailure = (status) => ({
  type: SigninActionTypes.SIGN_IN_FAILURE,
  payload: status,
});

export const signInError = (error) => ({
  type: SigninActionTypes.SIGN_IN_ERROR,
  payload: error,
});

export const resetSignIn = () => ({
  type: SigninActionTypes.RESET_SIGN_IN,
});

export const signInAsync = (signInData) => {
  return async (dispatch) => {
    dispatch(signInStart());

    const {
      password,
      username,
    } = signInData;

    try {
      const dataToSend = {password};

      // eslint-disable-next-line max-len
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (re.test(username)) {
        dataToSend.email = username;
      } else {
        dataToSend.username = username;
      }

      const data = await loginAsync(dataToSend);
      console.log(data);
      if (data.message === 'Logged in successfully') {
        dispatch(signInSucces());
        dispatch(setCurrentUser(data.dataUser));
        dispatch(setCurrentCompany(data.dataCompany));
        store.set('userData', {userId: data.dataUser._id, companyId: data.dataCompany._id});
      } else {
        dispatch(signInFailure(true));
        dispatch(signInError(handleError(data.message)));
      }
    } catch (error) {
      console.log(error);
      dispatch(signInFailure(true));
      dispatch(signInError(error));
    }
  };
};

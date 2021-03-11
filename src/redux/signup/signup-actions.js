import SignupActionType from './signup-types';
import {signUpAsync} from '../../services/signUp/signUpService';
import {setCurrentUser} from '../user/user-actions';
import {setErrorData, resetErrorData} from '../errorsInputs/errorsInputs-actions';
import {handleError} from '../../utils/handleErrors';
import {setCurrentCompany} from '../company/company-actions';
import {store} from '../../../store/storeUserData';

export const setFormData = (formData) => ({
  type: SignupActionType.SET_FORM_DATA,
  payload: formData,
});

export const signUpStart = () => ({
  type: SignupActionType.SIGN_UP_START,
});

export const signUpSucces = () => ({
  type: SignupActionType.SIGN_UP_SUCCESS,
});

export const signUpFailure = (status) => ({
  type: SignupActionType.SIGN_UP_FAILURE,
  payload: status,
});

export const signUpError = (error) => ({
  type: SignupActionType.SIGN_UP_ERROR,
  payload: error,
});

export const resetSignUp = () => ({
  type: SignupActionType.RESET_SIGN_UP,
});

export const signUpCreate = (signUpData) => {
  return (dispatch) => {
    dispatch(signUpStart());
    console.log('Estoy aqui2');
    const dataSend = signUpData;
    dataSend.role = 'admin';

    signUpAsync(dataSend).then((data) => {
      if (data.message === 'Successful') {
        dispatch(signUpSucces());
        dispatch(setCurrentUser(data.dataUser));
        dispatch(setCurrentCompany(data.dataCompany));
        dispatch(resetErrorData());
        store.set('userData', {userId: data.dataUser._id, companyId: data.dataCompany._id});
      } else {
        dispatch(signUpFailure(true));
        dispatch(signUpError(data.message));
        dispatch(setErrorData({
          typeError: 'server',
          errorMessage: handleError(data.message),
          statusError: true,
        }));
      }
    })
        .catch((err) => {
          console.log(err);
        });

    //     const data = await signUpAsync(dataSend);
    //     if (data.message === "Successful") {
    //         dispatch(signUpSucces());
    //         dispatch(setCurrentUser(data.dataUser));
    //         dispatch(setCurrentCompany(data.dataCompany));
    //         dispatch(resetErrorData());
    //         store.set('userData', { userId: data.dataUser._id, companyId: data.dataCompany._id });
    //     } else {
    //         dispatch(signUpFailure(true));
    //         dispatch(signUpError(data.message));
    //         dispatch(setErrorData({
    //             typeError: 'server',
    //             errorMessage: handleError(data.message),
    //             statusError: true
    //         }))
    //     }
  };
};

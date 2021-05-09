import UserActionTypes from './user-types';
import {getDataUser, getIfFristUserExist} from '../../services/user/userService';
import {getDataCompany} from '../../services/company/companyService';
import {handleError} from '../../utils/handleErrors';
import {setErrorData, resetErrorData} from '../errorsInputs/errorsInputs-actions';
import {setCurrentCompany} from '../company/company-actions';

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const setUserDbExist = (status) => ({
  type: UserActionTypes.SET_USER_DB_EXIST,
  payload: status
})

export const checkExistUser = () => {
  return async (dispatch) => {
    const ifUserExist = await getIfFristUserExist();

    if (ifUserExist.message === 'userExist') {
      dispatch(setUserDbExist(true));
    }else if (ifUserExist.message === 'userNotExist'){
      dispatch(setUserDbExist(false));
    }else if (ifUserExist.message === 'error-general'){
      dispatch(setErrorData({
        typeError: 'server',
        errorMessage: handleError(ifUserExist.message),
        statusError: true,
      }));
    }
    
  }
}

export const autoLogInUser = ({userId, companyId}) => {
  return async (dispatch) => {
    const dataGetUser = await getDataUser(userId);
    const dataGetCompany = await getDataCompany(companyId);

    if (dataGetUser.message === 'Successful' && dataGetCompany.message === 'Successful') {
      dispatch(setCurrentUser(dataGetUser.dataUser));
      dispatch(setCurrentCompany(dataGetCompany.dataCompany));
      dispatch(resetErrorData());
    } else {
      dispatch(setErrorData({
        typeError: 'server',
        errorMessage: handleError(dataGetCompany.message),
        statusError: true,
      }));
    }
  };
};

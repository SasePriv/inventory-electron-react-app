import ErrorInputsTypes from './errorsInputs-types';

export const setErrorData = (errorData) => ({
  type: ErrorInputsTypes.SET_ERROR_DATA,
  payload: errorData,
});

export const resetErrorData = () => ({
  type: ErrorInputsTypes.RESET_ERROR_DATA,
});


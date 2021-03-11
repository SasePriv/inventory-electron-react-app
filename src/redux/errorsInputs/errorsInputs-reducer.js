import ErrorInputsTypes from './errorsInputs-types';

const INITIAL_STATE = {
  typeError: '',
  errorMessage: '',
  statusError: false,
};

const ErrorInputsReducer = (state = INITIAL_STATE, action) => {
  const {type, payload} = action;

  switch (type) {
    case ErrorInputsTypes.SET_ERROR_DATA: {
      return {
        ...state,
        ...payload,
      };
    }

    case ErrorInputsTypes.RESET_ERROR_DATA: {
      return INITIAL_STATE;
    }

    default:
      return state;
  }
};

export default ErrorInputsReducer;

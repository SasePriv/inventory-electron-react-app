import {toast} from 'react-toastify';
import {handleError} from './handleErrors';

export const emitErrorMessage = (error, customMessBool) => {
  toast.warn(`🦄 ${customMessBool ? error : handleError(error)}`, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const emitSuccessfulMessage = (message) => {
  toast.success(`🦄 ${message}`, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

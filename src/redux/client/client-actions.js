import ClientActionTypes from './client-types';
import {handleError} from '../../utils/handleErrors';
import {setErrorData} from '../errorsInputs/errorsInputs-actions';
import {emitErrorMessage, emitSuccessfulMessage} from '../../utils/notifications';
import {
  getAllClients,
  createClient,
  createInvoiceClient,
  getInvoiceClientList,
} from '../../services/client/clientService';

export const setClientList = (data) => ({
  type: ClientActionTypes.SET_CLIENT_LIST,
  payload: data,
});

export const setOneClient = (data) => ({
  type: ClientActionTypes.SET_ONE_CLIENT,
  payload: data,
});

export const setInvoiceOfClientList = (data) => ({
  type: ClientActionTypes.SET_INVOICE_OF_CLIENT_LIST,
  payload: data,
});

export const getAllClient = () => {
  return async (dispatch) => {
    const responseData = await getAllClients();
    console.log('aqui');
    if (responseData.message === 'Successful') {
      dispatch(setClientList(responseData.dataClients));
    } else {
      emitErrorMessage(responseData.message);
      dispatch(setErrorData({
        typeError: 'server',
        errorMessage: handleError(respondeData.message),
        statusError: true,
      }));
    }
  };
};

export const clientCreate = (data) => {
  return async (dispatch) => {
    try {
      const responseData = await createClient(data);
      if (responseData.message === 'Successful') {
        dispatch(getAllClient());
        emitSuccessfulMessage('Se ha creado el cliente');
      } else {
        emitErrorMessage(responseData.message);
        dispatch(setErrorData({
          typeError: 'server',
          errorMessage: handleError(responseData.message),
          statusError: true,
        }));
      }
    } catch (error) {
      emitErrorMessage(error);
      dispatch(setErrorData({
        typeError: 'server',
        errorMessage: handleError(error),
        statusError: true,
      }));
    }
  };
};

export const getAllInvoiceOfClients = (data) => {
  return async (dispatch) => {
    const responseData = await getInvoiceClientList(data);
    if (responseData.message === 'Successful') {
      dispatch(setInvoiceOfVendorList(responseData.dataInvoiceClient));
    } else {
      emitErrorMessage(responseData.message);
      dispatch(setErrorData({
        typeError: 'server',
        errorMessage: handleError(respondeData.message),
        statusError: true,
      }));
    }
  };
};

export const invoiceClientCreate = (data) => {
  return async (dispatch) => {
    try {
      const responseData = await createInvoiceClient(data);
      if (responseData.message === 'Successful') {
        dispatch(getAllInvoiceOfClients(data.vendorId));
        emitSuccessfulMessage('Se ha creado la factura');
        dispatch(setOneClient(null));
      } else {
        emitErrorMessage(responseData.message);
        dispatch(setErrorData({
          typeError: 'server',
          errorMessage: handleError(responseData.message),
          statusError: true,
        }));
      }
    } catch (error) {
      emitErrorMessage(error);
      dispatch(setErrorData({
        typeError: 'server',
        errorMessage: handleError(error),
        statusError: true,
      }));
    }
  };
};

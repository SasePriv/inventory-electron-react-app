import VendorActionTypes from './vendor-type';
import {handleError} from '../../utils/handleErrors';
import {setErrorData} from '../errorsInputs/errorsInputs-actions';
import {emitErrorMessage, emitSuccessfulMessage} from '../../utils/notifications';
import {
  getVendorList,
  createVendor,
  createInvoiceVendor,
  getInvoiceVendorList,
  updateVendorData
} from '../../services/vendor/vendorService';

export const setVendorList = (data) => ({
  type: VendorActionTypes.SET_VENDOR_LIST,
  payload: data,
});

export const setOneVendor = (data) => ({
  type: VendorActionTypes.SET_ONE_VENDOR,
  payload: data,
});

export const setInvoiceOfVendorList = (data) => ({
  type: VendorActionTypes.SET_INVOICE_OF_VENDOR_LIST,
  payload: data,
});

export const searchVendorList = (data) => ({
  type: VendorActionTypes.SET_SEARCH_VENDOR_LIST,
  payload: data,
});

export const getAllVendors = () => {
  return async (dispatch) => {
    const responseData = await getVendorList();
    if (responseData.message === 'Successful') {
      dispatch(setVendorList(responseData.dataVendor));
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

export const vendorCreate = (data) => {
  return async (dispatch) => {
    try {
      const responseData = await createVendor(data);
      if (responseData.message === 'Successful') {
        dispatch(getAllVendors());
        emitSuccessfulMessage('Se ha creado el provedor');
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

export const getAllInvoiceOfVendors = (data) => {
  return async (dispatch) => {
    const responseData = await getInvoiceVendorList(data);
    if (responseData.message === 'Successful') {
      dispatch(setInvoiceOfVendorList(responseData.dataInvoiceVendor));
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

export const invoiceVendorCreate = (data) => {
  return async (dispatch) => {
    try {
      const responseData = await createInvoiceVendor(data);
      if (responseData.message === 'Successful') {
        dispatch(getAllInvoiceOfVendors(data.vendorId));
        emitSuccessfulMessage('Se ha creado la factura');
        dispatch(setOneVendor(null));
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

export const updateDataVendor = (data) => {
  return async (dispatch) => {
    try {
      const respondeData = await updateVendorData(data);
      console.log(respondeData);
      if (respondeData.message === 'Successful') {
        console.log('Producto Actualizado');
        dispatch(getAllVendors());
        emitSuccessfulMessage('Se ha actualizado el proveedor');
      } else {
        emitErrorMessage(respondeData.message);
        dispatch(setErrorData({
          typeError: 'server',
          errorMessage: handleError(respondeData.message),
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

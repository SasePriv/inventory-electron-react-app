import ClientActionTypes from './client-types';

const INITIAL_STATE = {
  clientList: [],
  oneClient: null,
  invoiceListOfClient: [],
};

const ClientReducer = (state = INITIAL_STATE, action) => {
  const {type, payload} = action;

  switch (type) {
    case ClientActionTypes.SET_CLIENT_LIST:
      return {
        ...state,
        clientList: [...payload],
      };
    case ClientActionTypes.SET_ONE_CLIENT:
      return {
        ...state,
        oneClient: payload,
      };
    case ClientActionTypes.SET_INVOICE_OF_CLIENT_LIST:
      return {
        ...state,
        invoiceListOfClient: [...payload],
      };
    default:
      return state;
  }
};

export default ClientReducer;

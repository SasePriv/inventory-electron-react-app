import VendorActionTypes from './vendor-type';

const INITIAL_STATE = {
  vendorList: [],
  oneVendor: null,
  invoiceListOfVendor: [],
};

const VendorReducer = (state = INITIAL_STATE, action) => {
  const {type, payload} = action;

  switch (type) {
    case VendorActionTypes.SET_VENDOR_LIST:
      return {
        ...state,
        vendorList: [...payload],
      };
    case VendorActionTypes.SET_ONE_VENDOR:
      return {
        ...state,
        oneVendor: payload,
      };
    case VendorActionTypes.SET_INVOICE_OF_VENDOR_LIST:
      return {
        ...state,
        invoiceListOfVendor: [...payload],
      };
    default:
      return state;
  }
};

export default VendorReducer;

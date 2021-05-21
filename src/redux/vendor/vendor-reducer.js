import VendorActionTypes from './vendor-type';

const INITIAL_STATE = {
  vendorList: [],
  originalData: [],
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
        originalData: [...payload],
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
    case VendorActionTypes.SET_SEARCH_VENDOR_LIST:
      const vendorList = state.originalData.filter((each) => {
        const lowerName = each.name.toLowerCase();
        if (lowerName.includes(payload.toLowerCase())) {
          return each;
        }
      });
      return {
        ...state,
        vendorList: [...vendorList],
      };
    default:
      return state;
  }
};

export default VendorReducer;

import InventoryActionTypes from './inventory-type';

const INITIAL_STATE = {
  categoryList: [],
  brandList: [],
  productsList: [],
};

const InventoryReducer = (state = INITIAL_STATE, action) => {
  const {type, payload} = action;

  switch (type) {
    case InventoryActionTypes.SET_CATEGORY_LIST:
      return {
        ...state,
        categoryList: [...payload],
      };

    case InventoryActionTypes.SET_BRAND_LIST:
      return {
        ...state,
        brandList: [...payload],
      };

    case InventoryActionTypes.SET_PRODUCTS_LIST:
      return {
        ...state,
        productsList: [...payload],
      };
    default:
      return state;
  }
};

export default InventoryReducer;

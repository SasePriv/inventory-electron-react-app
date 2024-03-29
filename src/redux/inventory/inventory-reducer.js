import InventoryActionTypes from './inventory-type';

const INITIAL_STATE = {
  categoryList: [],
  brandList: [],
  productsList: [],
  originalData: [],
  productUpdated: null,
};

const InventoryReducer = (state = INITIAL_STATE, action) => {
  const {type, payload} = action;
  let productsList;
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
        originalData: [...payload],
      };

    case InventoryActionTypes.SET_SEARCH_LIST:
      productsList = state.originalData.filter((each) => {
        const lowerName = each.name.toLowerCase();
        if (payload !== '' && lowerName.includes(payload.toLowerCase())) {
          return each;
        }
      });

      if (payload === '') {
        productsList = state.originalData;
      }

      return {
        ...state,
        productsList,
      };
    case InventoryActionTypes.SET_SEARCH_CATEGORY_LIST:
      productsList = state.originalData.filter((each) => {
        if (each.category.includes(payload)) {
          return each;
        }
      });
      return {
        ...state,
        productsList: [...productsList],
      };
    case InventoryActionTypes.SET_SEARCH_BRAND_LIST:
      productsList = state.originalData.filter((each) => {
        if (each.brand.includes(payload)) {
          return each;
        }
      });
      return {
        ...state,
        productsList: [...productsList],
      };
    case InventoryActionTypes.SET_PRODUCT_UPDATED:
      return {
        ...state,
        productUpdated: payload,
      };
    default:
      return state;
  }
};

export default InventoryReducer;

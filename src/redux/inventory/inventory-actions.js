import InventoryActionTypes from './inventory-type';
import {getAllCategory, createCategory, deleteCategory} from '../../services/category/categoryService';
import {createProduct, getAllProducts, updateProductPrice} from '../../services/product/productService';
import {getAllBrand, createBrand, deleteBrand} from '../../services/brand/brandService';
import {handleError} from '../../utils/handleErrors';
import {setErrorData} from '../errorsInputs/errorsInputs-actions';
import {emitErrorMessage, emitSuccessfulMessage} from '../../utils/notifications';

export const setProductsList = (data) => ({
  type: InventoryActionTypes.SET_PRODUCTS_LIST,
  payload: data,
});

export const getProductsList = () => {
  return async (dispatch) => {
    const respondeData = await getAllProducts();
    if (respondeData.message === 'Successful') {
      dispatch(setProductsList(respondeData.dataProducts));
    } else {
      emitErrorMessage(respondeData.message);
      dispatch(setErrorData({
        typeError: 'server',
        errorMessage: handleError(respondeData.message),
        statusError: true,
      }));
    }
  };
};

export const newProduct = (data) => {
  return async (dispatch) => {
    try {
      const respondeData = await createProduct(data);
      if (respondeData.message === 'Successful') {
        console.log('Producto Creado');
        dispatch(getProductsList());
        emitSuccessfulMessage('Se ha creado el producto');
      } else {
        console.log(respondeData);
        emitErrorMessage(respondeData.message);
        dispatch(setErrorData({
          typeError: 'server',
          errorMessage: handleError(respondeData.message),
          statusError: true,
        }));
      }
    } catch (error) {
      console.log(error);
      emitErrorMessage(error);
      dispatch(setErrorData({
        typeError: 'server',
        errorMessage: handleError(error),
        statusError: true,
      }));
    }
  };
};

export const updatePriceProduct = (data) => {
  return async (dispatch) => {
    try {
      const respondeData = await updateProductPrice(data);
      if (respondeData.message === 'Successful') {
        console.log('Precio Actualizado');
        dispatch(getProductsList());
        emitSuccessfulMessage('Se ha actualizado el precio del producto');
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

// ------- Category

export const setCategoryList = (data) => ({
  type: InventoryActionTypes.SET_CATEGORY_LIST,
  payload: data,
});

export const newCategory = (dataCategory) => {
  return async (dispatch) => {
    console.log('New Category');
    try {
      const respondeData = await createCategory(dataCategory);
      if (respondeData.message === 'Successful') {
        dispatch(getCategoryList());
        emitSuccessfulMessage('Se ha creado la categoria');
        console.log('Se ha creado la categoria');
      } else {
        emitErrorMessage(respondeData.message);

        dispatch(setErrorData({
          typeError: 'server',
          errorMessage: handleError(respondeData.message),
          statusError: true,
        }));
      }
    } catch (error) {
      emitErrorMessage(respondeData.message);

      dispatch(setErrorData({
        typeError: 'server',
        errorMessage: handleError(respondeData.message),
        statusError: true,
      }));
    }
  };
};

export const deleteOneCategory = (categoryID) => {
  return async (dispatch) => {
    console.log('Delete Category');
    try {
      const responseData = await deleteCategory(categoryID);
      if (responseData.message === 'Successful') {
        dispatch(getCategoryList());
        emitSuccessfulMessage('Se ha eliminado la categoria');
        console.log('Se ha eliminado la categoria');
      } else {
        emitErrorMessage(respondeData.message);

        dispatch(setErrorData({
          typeError: 'server',
          errorMessage: handleError(respondeData.message),
          statusError: true,
        }));
      }
    } catch (error) {
      dispatch(setErrorData({
        typeError: 'server',
        errorMessage: handleError(respondeData.message),
        statusError: true,
      }));
    }
  };
};

export const getCategoryList = () => {
  return async (dispatch) => {
    const respondeData = await getAllCategory();
    if (respondeData.message === 'Successful') {
      dispatch(setCategoryList(respondeData.categoryData));
    } else {
      emitErrorMessage(respondeData.message);

      dispatch(setErrorData({
        typeError: 'server',
        errorMessage: handleError(respondeData.message),
        statusError: true,
      }));
    }
  };
};
// ----- BRAND

export const setBrandList = (data) => ({
  type: InventoryActionTypes.SET_BRAND_LIST,
  payload: data,
});

export const newBrand = (dataBrand) => {
  return async (dispatch) => {
    console.log('New Brand');
    try {
      const respondeData = await createBrand(dataBrand);
      if (respondeData.message === 'Successful') {
        dispatch(getBrandList());
        emitSuccessfulMessage('Se ha creado la marca');
        console.log('Se ha creado la brand');
      } else {
        emitErrorMessage(respondeData.message);

        dispatch(setErrorData({
          typeError: 'server',
          errorMessage: handleError(respondeData.message),
          statusError: true,
        }));
      }
    } catch (error) {
      emitErrorMessage(respondeData.message);

      dispatch(setErrorData({
        typeError: 'server',
        errorMessage: handleError(respondeData.message),
        statusError: true,
      }));
    }
  };
};

export const deleteOneBrand = (brandID) => {
  return async (dispatch) => {
    console.log('Delete Brand');
    try {
      const responseData = await deleteBrand(brandID);
      if (responseData.message === 'Successful') {
        dispatch(getBrandList());
        emitSuccessfulMessage('Se ha eliminado la marca');
        console.log('Se ha eliminado la marca');
      } else {
        emitErrorMessage(respondeData.message);

        dispatch(setErrorData({
          typeError: 'server',
          errorMessage: handleError(respondeData.message),
          statusError: true,
        }));
      }
    } catch (error) {
      dispatch(setErrorData({
        typeError: 'server',
        errorMessage: handleError(respondeData.message),
        statusError: true,
      }));
    }
  };
};

export const getBrandList = () => {
  return async (dispatch) => {
    const brandList = await getAllBrand();
    if (brandList.message === 'Successful') {
      dispatch(setBrandList(brandList.brandData));
    } else {
      emitErrorMessage(respondeData.message);

      dispatch(setErrorData({
        typeError: 'server',
        errorMessage: handleError(brandList.message),
        statusError: true,
      }));
    }
  };
};


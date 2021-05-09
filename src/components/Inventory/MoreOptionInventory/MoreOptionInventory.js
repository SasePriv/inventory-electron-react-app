/* eslint-disable react/prop-types */
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
// Redux
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import OptionPopoverBtn from './optionPopoverBtn';

import {
  getCategoryList,
  newCategory,
  deleteOneCategory,
  getBrandList,
  newBrand,
  deleteOneBrand,
} from '../../../redux/inventory/inventory-actions';
import {selectCategoryList, selectBrandList} from '../../../redux/inventory/inventory-selector';
import {selectCompanyInfo} from '../../../redux/company/company-selectors';

import {emitErrorMessage} from '../../../utils/notifications';

import './MoreOptionInventory.scss';

// eslint-disable-next-line max-len
const MoreOptionInventory = ({getCategoryList, newCategory, allCategoryList, companyInfo, deleteOneCategory, getBrandList, newBrand, deleteOneBrand, allBrandList}) => {
  useEffect(() => {
    getOnCategoryList();
    getOnBrandList();
  }, []);

  const getOnCategoryList = async () => {
    await getCategoryList();
  };

  const onEliminateCategory = async (id) => {
    console.log('Eliminating...', id);
    if (id !== '') {
      await deleteOneCategory(id);
    } else {
      emitErrorMessage('Error eliminando la categoria', true);
      console.log('Error eliminando la categoria');
    }
  };

  const onAddCategory = async (value) => {
    if (value !== '') {
      await newCategory({companyId: companyInfo.id, name: value});
    } else {
      emitErrorMessage('Error creando la categoria', true);
      console.log('Error creando categoria');
    }
  };

  const getOnBrandList = async () => {
    await getBrandList();
  };

  const onEliminateBrand = async (id) => {
    console.log('Eliminating...', id);
    if (id !== '') {
      await deleteOneBrand(id);
    } else {
      emitErrorMessage('Error eliminando la marca', true);
      console.log('Error eliminando la marca');
    }
  };

  const onAddBrand = async (value) => {
    if (value !== '') {
      await newBrand({companyId: companyInfo.id, name: value});
    } else {
      emitErrorMessage('Error creando la marca', true);
      console.log('Error creando marca');
    }
  };

  return (
    <div className="moreOptionInventory">
      <div className='d-flex justify-content-around'>
        {/* <div>Manejar Categorias</div> */}
        <OptionPopoverBtn
          name="Manejar Categorias"
          data={allCategoryList}
          onEliminate={onEliminateCategory}
          onAdd={onAddCategory}
        />
        <OptionPopoverBtn
          name="Manejar Marcas"
          data={allBrandList}
          onEliminate={onEliminateBrand}
          onAdd={onAddBrand}
        />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  allCategoryList: selectCategoryList,
  companyInfo: selectCompanyInfo,
  allBrandList: selectBrandList,
});

const mapDispatchtoProps = (dispatch) =>( {
  getCategoryList: () => dispatch(getCategoryList()),
  newCategory: (data) => dispatch(newCategory(data)),
  deleteOneCategory: (id) => dispatch(deleteOneCategory(id)),
  getBrandList: () => dispatch(getBrandList()),
  newBrand: (data) => dispatch(newBrand(data)),
  deleteOneBrand: (id) => dispatch(deleteOneBrand(id)),
});

MoreOptionInventory.propTypes = {
  getCategoryList: PropTypes.func,
  newCategory: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchtoProps)(MoreOptionInventory);

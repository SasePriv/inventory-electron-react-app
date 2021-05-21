/* eslint-disable max-len */
// React
import React, {useState} from 'react';

// Custom Componets
import CustomSelect from '../../Utils/CustomSelect/CustomSelect';
import CustomSearch from '../../Utils/CustomSearch/CustomSearch';
import AddProduct from '../AddProduct/AddProduct';

// redux
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import {searchProductList, searchCategoyList, searchBrandList} from '../../../redux/inventory/inventory-actions';
import {selectBrandList, selectCategoryList} from '../../../redux/inventory/inventory-selector';

// Styles
import './HeaderInventory.scss';

// eslint-disable-next-line react/prop-types
const HeaderInventory = ({searchProductList, brandList, categoryList, searchCategoyList, searchBrandList}) => {
  const onchange = (event) => {
    searchProductList(event.target.value);
  };

  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
    searchCategoyList(event.target.value);
    setBrand('');
  };

  const handleChangeBrand = (event) => {
    setBrand(event.target.value);
    searchBrandList(event.target.value);
    setCategory('');
  };

  return (
    <div className='HeaderInvetory'>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <h3 className='darkText ml-3 mr-3'>Inventory</h3>
          <CustomSelect
            label="Categoria"
            items={categoryList}
            value={category}
            handleChange={handleChangeCategory}
          />
          <CustomSelect
            label="Marca"
            items={brandList}
            value={brand}
            handleChange={handleChangeBrand}
          />
          <CustomSearch onChange={onchange} />
        </div>
        <div>
          <AddProduct nameLabel={'Añadir Producto'}/>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  brandList: selectBrandList,
  categoryList: selectCategoryList,
});

const mapDispatchtoProps = (dispatch) =>( {
  searchProductList: (data) => dispatch(searchProductList(data)),
  searchCategoyList: (data) => dispatch(searchCategoyList(data)),
  searchBrandList: (data) => dispatch(searchBrandList(data)),
});


export default connect(mapStateToProps, mapDispatchtoProps)(HeaderInventory);

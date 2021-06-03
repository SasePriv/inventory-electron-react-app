import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

import HeaderInventory from '../../components/Inventory/HeaderInventory/HeaderInventory';
import TableInventory from '../../components/Inventory/TableInventory/TableInventory';
import TableCollapse from '../../components/Inventory/TableCollapse/TableCollapse';
import MoreOptionInventory from '../../components/Inventory/MoreOptionInventory/MoreOptionInventory';
import LeftNav from '../../components/NavBar/LeftNav/LeftNav';

import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import {getProductsList} from '../../redux/inventory/inventory-actions';
import {selectProductsList} from '../../redux/inventory/inventory-selector';

import Grid from '@material-ui/core/Grid';


import './Inventory.scss';

const headerList = ['#', 'SKU', 'Nombre', 'Categoria', 'Precio', 'Stock'];

const Inventory = ({getProductsList, productsList}) => {
  useEffect(() => {
    getProductsList();
  }, []);

  return (
    <div className="inventoryPage">
      <LeftNav>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <HeaderInventory />
          </Grid>
          <Grid item xs={12}>
            <div className='tableContainer'>
              {/* <TableInventory data={productsList}/> */}
              <TableCollapse headerList={headerList} data={productsList}/>
            </div>
          </Grid>
        </Grid>
        <MoreOptionInventory />
      </LeftNav>
    </div>
  );
};

const mapDispatchtoProps = (dispatch) =>( {
  getProductsList: () => dispatch(getProductsList()),
});

const mapStateToProps = createStructuredSelector({
  productsList: selectProductsList,
});

Inventory.propTypes = {
  productsList: PropTypes.array,
  getProductsList: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchtoProps)(Inventory);

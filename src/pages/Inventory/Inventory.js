import React from 'react';

import HeaderInventory from '../../components/Inventory/HeaderInventory/HeaderInventory';
import TableInventory from '../../components/Inventory/TableInventory/TableInventory';
import MoreOptionInventory from '../../components/Inventory/MoreOptionInventory/MoreOptionInventory';
import LeftNav from '../../components/NavBar/LeftNav/LeftNav';

import Grid from '@material-ui/core/Grid';


import './Inventory.scss';

const exampleDataTable = [
  {sku: '101-lz', name: 'Example name for a product maybe is so long', price: 105, stock: 5},
  {sku: '399-lz', name: 'This text is not than long', price: 5, stock: 15},
  {sku: '101-lz', name: 'Example name for a product maybe is so long', price: 105, stock: 5},
  {sku: '399-lz', name: 'This text is not than long', price: 5, stock: 15},
];

const Inventory = () => {
  return (
    <div className="inventoryPage">
      <LeftNav>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <HeaderInventory />
          </Grid>
          <Grid item xs={12}>
            <div className='tableContainer'>
              <TableInventory data={exampleDataTable}/>
            </div>
          </Grid>
        </Grid>
        <MoreOptionInventory />
      </LeftNav>
    </div>
  );
};

export default Inventory;

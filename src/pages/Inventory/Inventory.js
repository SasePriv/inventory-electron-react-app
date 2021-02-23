import React from 'react';

import HeaderInventory from '../../components/Inventory/HeaderInventory/HeaderInventory'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';

import './Inventory.scss';

const Inventory = () => {

  return(
    <div className="inventoryPage">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <HeaderInventory />
        </Grid>
      </Grid>
    </div>
  )

}

export default Inventory;
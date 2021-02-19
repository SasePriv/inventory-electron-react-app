import React from 'react';

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';

import './Inventory.scss';

const Inventory = () => {

  return(
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={0}>Invetory</Paper>
        </Grid>
      </Grid>
    </div>
  )

}

export default Inventory;
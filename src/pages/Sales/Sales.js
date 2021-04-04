import React from 'react';
import './sales.scss';

import HeaderSales from '../../components/Sales/HeaderSales/HeaderSales';
import LeftNav from '../../components/NavBar/LeftNav/LeftNav';
import AddSales from '../../components/Sales/AddSales/AddSales';

import Grid from '@material-ui/core/Grid';

const Sales = () => {
  return (
    <div className="salesPage">
      <LeftNav>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <HeaderSales />
          </Grid>
          <Grid xs={12}>
            <AddSales />
          </Grid>
        </Grid>
      </LeftNav>
    </div>
  );
};

export default Sales;

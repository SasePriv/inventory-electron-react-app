import React from 'react';

// Components
import LeftNav from '../../components/NavBar/LeftNav/LeftNav';
import HeaderSales from '../../components/Sales/HeaderSales/HeaderSales';
import SalesTable from '../../components/Sales/SalesTable/SalesTable';
import SalesForm from '../../components/Sales/SalesForm/SalesForm';
import SalesBill from '../../components/Sales/SalesBill/SalesBill';
// Material
import Grid from '@material-ui/core/Grid';

// Styles
import './Sales.scss';

const Sales = () => {
  return (
    <div className='salesPage'>
      <LeftNav>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <HeaderSales />
          </Grid>
          <Grid item xs={6}>
            <SalesTable />
          </Grid>
          <Grid item xs={6}>
            <Grid item xs={12}>
              <SalesForm />
            </Grid>
            <Grid item xs={12}>
              <SalesBill />
            </Grid>
          </Grid>
        </Grid>
      </LeftNav>
    </div>
  );
};

export default Sales;

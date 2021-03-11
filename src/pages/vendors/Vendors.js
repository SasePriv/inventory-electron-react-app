import React from 'react';

// Components
import LeftNav from '../../components/NavBar/LeftNav/LeftNav';
import HeaderVendors from '../../components/Vendors/HeaderVendors/HeaderVendors';
import VendorsTable from '../../components/Vendors/VendrosTable/VendorsTable';
// Material
import Grid from '@material-ui/core/Grid';

// Styles
import './Vendors.scss';

const Vendors = () => {
  return (
    <div className='vendorsPage'>
      <LeftNav>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <HeaderVendors />
          </Grid>
          <Grid item xs={6}>
            <VendorsTable />
          </Grid>
          <Grid item xs={6}>
            <h3>hola</h3>
          </Grid>
        </Grid>
      </LeftNav>
    </div>
  );
};

export default Vendors;

import React from 'react';

// Components
import LeftNav from '../../components/NavBar/LeftNav/LeftNav';

// Material
import Grid from '@material-ui/core/Grid';

// Styles
import './Vendor.scss';

const Vendors = () => {
  return (
    <div className='vendorsPage'>
      <LeftNav>
        <Grid container spacing={3}>
          <Grid item xs={12}>

          </Grid>
          <Grid item xs={6}>
            <h2>hola</h2>
          </Grid>
          <Grid item xs={6}>
            <h2>hola</h2>
          </Grid>
        </Grid>
      </LeftNav>
    </div>
  );
};

export default Vendors;

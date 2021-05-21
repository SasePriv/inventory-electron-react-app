import React from 'react';

import LeftNav from '../../components/NavBar/LeftNav/LeftNav';
import HeaderDB from '../../components/Databases/HeaderDB/HeaderDB';
import OptionDB from '../../components/Databases/OptionDB/OptionDB';

import Grid from '@material-ui/core/Grid';

import './Database.scss';

const Database = () => {
  return (
    <div className="database">
      <LeftNav>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <HeaderDB />
          </Grid>
          <Grid item xs={12}>
            <OptionDB />
          </Grid>
        </Grid>
      </LeftNav>
    </div>
  );
};

export default Database;

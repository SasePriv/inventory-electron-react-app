import React from 'react';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';

import './CustomSearch.scss';

const CustomSearch = () => {
  return (
    <div className="CustomSearch">
      <Grid container alignItems="flex-end">
        <Grid item>
          <SearchIcon className="iconSearch"/>
        </Grid>
        <Grid item>
          <TextField className="inputSearch" placeholder="Busqueda rapida" id="input-with-icon-grid" />
        </Grid>
      </Grid>
    </div>
  );
};

export default CustomSearch;

/* eslint-disable react/prop-types */
// React
import React, {useState, useEffect} from 'react';
// Material UI
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import {selectOneVendor} from '../../../redux/vendor/vendor-selectos';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

// Styles
import './VendorsForm.scss';

const VendorsForm = ({vendor}) => {
  const [form, setForm] = useState({
    name: '',
    country: '',
    email: '',
    phone: '',
  });

  useEffect(()=> {
    if (vendor) {
      setForm({
        name: vendor.name,
        country: vendor.country,
        email: vendor.email,
        phone: vendor.phone,
      });
    }
  }, [vendor]);


  return (
    <Paper elevation={3} className="vendorsFormPaper">
      <Grid container className="gridContainer" spacing={2}>
        <Grid item xs={12}>
          <div className="titleForm">Provedor Seleccionado</div>
        </Grid>
        <Grid container item xs={12} spacing={2}>
          <Grid item xs={8}>
            <TextField
              id="standard-basic"
              label="Nombre de la Compañia"
              className="w-100"
              value={form.name}
              disabled
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="standard-basic"
              className="w-100"
              label="Pais"
              value={form.country}
              disabled
            />
          </Grid>
        </Grid>
        <Grid container item xs={12} spacing={2}>
          <Grid item xs={8}>
            <TextField
              id="standard-basic"
              className="w-100"
              label="Email"
              value={form.email}
              disabled
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="standard-basic"
              className="w-100"
              label="Telefono"
              value={form.phone}
              disabled
            />
          </Grid>
        </Grid>
        <Grid container item xs={12} justify="flex-end" spacing={2}>
          <div className="btnContainer">
            <Button variant="contained" color="primary" disabled={vendor === null ? true : false}>
              Editar
            </Button>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

const mapStateToProps = createStructuredSelector({
  vendor: selectOneVendor,
});

const mapDispatchToProps = (dispatch) => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(VendorsForm);

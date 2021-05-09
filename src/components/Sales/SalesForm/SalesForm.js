/* eslint-disable react/prop-types */
// React
import React, {useState, useEffect} from 'react';
// Material UI
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

// import {selectOneVendor} from '../../../redux/vendor/vendor-selectos';
import {selectOneClient} from '../../../redux/client/client-selectors';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

// Styles
import './SalesForm.scss';

const SalesForm = ({client}) => {
  const [form, setForm] = useState({
    name: '',
    ci: '',
    email: '',
    phone: '',
  });

  useEffect(()=> {
    if (client) {
      setForm({
        name: client.name,
        ci: client.ci,
        email: client.email,
        phone: client.phone,
      });
    }
  }, [client]);


  return (
    <Paper elevation={3} className="salesFormPaper">
      <Grid container className="gridContainer" spacing={2}>
        <Grid item xs={12}>
          <div className="titleForm">Cliente Seleccionado</div>
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
              label="Cedula"
              value={form.ci}
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
            <Button
              variant="contained"
              color="primary"
              disabled={client === null ? true : false}
            >
              Editar
            </Button>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

const mapStateToProps = createStructuredSelector({
  client: selectOneClient,
});

const mapDispatchToProps = (dispatch) => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(SalesForm);

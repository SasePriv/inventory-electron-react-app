// React
import React from 'react';
// Material UI
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
// Styles
import './VendorsForm.scss';

const VendorsForm = () => {
  return (
    <Paper elevation={3} className="vendorsFormPaper">
      <Grid container className="gridContainer" spacing={2}>
        <Grid item xs={12}>
          <div className="titleForm">Detalles del Provedor</div>
        </Grid>
        <Grid container item xs={12} spacing={2}>
          <Grid item xs={8}>
            <TextField
              id="standard-basic"
              label="Nombre de la Compañia"
              className="w-100"/>
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="standard-basic"
              className="w-100"
              label="Pais"/>
          </Grid>
        </Grid>
        <Grid container item xs={12} spacing={2}>
          <Grid item xs={8}>
            <TextField
              id="standard-basic"
              className="w-100"
              label="Email" />
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="standard-basic"
              className="w-100"
              label="Telefono" />
          </Grid>
        </Grid>
        <Grid container item xs={12} justify="flex-end" spacing={2}>
          <div className="btnContainer">
            <Button variant="contained" color="primary">
              Nuevo Provedor
            </Button>
            <Button variant="contained" color="primary">
              Editar
            </Button>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default VendorsForm;

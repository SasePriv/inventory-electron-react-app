import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import './AddSales.scss';

const AddSales = () => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Paper elevation={3} className="addSales">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h4>Crear factura de Venta</h4>
        </Grid>
        <Grid item xs={12}>
          <div className="d-flex">
            <TextField id="standard-basic" label="Standard" />
            <Button variant="contained" color="primary">
              Buscar
            </Button>
            <div>
              No se encontro un cliente con este numero de cedula
            </div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="standard-required"
            label="Required"
            defaultValue="Nombre"
            className="w-100"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="standard-required"
            label="Required"
            defaultValue="Numero de Telefono"
            className="w-100"
          />
        </Grid>
        <Grid item xs={4}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              id="date-picker-inline"
              label="Date picker inline"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item container spacing={3}>
          <Grid item xs={4}>
            <TextField
              id="standard-required"
              label="Cedula"
              defaultValue="Numero de Telefono"
              className="w-100"
            />
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <FormControl variant="outlined">
            <InputLabel id="demo-simple-select-outlined-label">Producto</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              // value={age}
              // onChange={handleChange}
              label="Producto"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" color="primary">
            Agregar
          </Button>
        </Grid>

        <Grid item xs={12}>
          <TableContainer className="tableContianer">
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    Producto
                  </TableCell>
                  <TableCell>
                    Cantidad
                  </TableCell>
                  <TableCell>
                    Costo
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div>Nombre del Producto</div>
                  </TableCell>
                  <TableCell>
                    <div>50</div>
                  </TableCell>
                  <TableCell>
                    <div>50$</div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

      </Grid>
    </Paper>
  );
};

export default AddSales;

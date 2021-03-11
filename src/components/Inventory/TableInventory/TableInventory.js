import React from 'react';
import PropTypes from 'prop-types';

import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';

import CustomSelect from '../../Utils/CustomSelect/CustomSelect';
import example from '../../../../assets/images/example1.png';

import './TableInventory.scss';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

const Row = ({row}) => {
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={`${classes.root} eachProductRow`}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>
          <img className='imageTableRow' alt="imagen-producto" src={example}/>
        </TableCell>
        <TableCell>
          {row.sku}
        </TableCell>
        <TableCell align="left">{row.name}</TableCell>
        <TableCell align="left"><CustomSelect /></TableCell>
        <TableCell align="left">{row.price}</TableCell>
        <TableCell align="left">{row.stock}</TableCell>
      </TableRow>
      <TableRow className='eachDetailProduct'>
        <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1} className="containerDetail">

              <Grid container spacing={3}>
                <Grid item xs={2} className="imagesOption">
                  <img className='imageDetailRow' alt="imagen-producto" src={example}/>
                  <div>1 of 3</div>
                  <div className='addImageBtn'>+ Add Image</div>
                </Grid>
                <Grid item xs={10}>
                  <Grid container item xs={12} spacing={3}>
                    <Grid item xs={5}>
                      <TextField
                        className="w-100"
                        id="standard-basic"
                        label="Nombre"
                        value='Nombre de Ejemplo'
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <TextField
                        className="w-100"
                        id="standard-basic"
                        label="Precio"
                        value='45'
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <TextField
                        className="w-100"
                        id="standard-basic"
                        label="Costo"
                        value='25'
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        className="w-100"
                        id="standard-basic"
                        label="SKU"
                        value='145-lke'
                      />
                    </Grid>
                  </Grid>
                  <Grid container item xs={12} spacing={3}>
                    <Grid item xs={3}>
                      <TextField className="w-100" id="standard-basic" label="Marca" value='Teen'/>
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        id="standard-select-currency"
                        select
                        label="Provedor"
                        className='w-100'
                        // value={currency}
                        // onChange={handleChange}
                        // helperText="Please select your currency"
                      >
                        <MenuItem value={'hola'}>
                            Hola
                        </MenuItem>
                      </TextField>
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        className="w-100"
                        id="standard-basic"
                        label="Stock"
                        value='5'
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        className="w-100"
                        id="standard-basic"
                        label="Precio en Bolivares"
                        value='1.000.000'
                      />
                    </Grid>
                  </Grid>
                  <Grid container item xs={12} spacing={3}>
                    <Grid item xs={12} className="mt-4 btnSaveContainer">
                      <Button variant="contained" color="primary">
                        Guardar
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

Row.propTypes = {
  row: PropTypes.object,
};

const TableInventory = ({data}) => {
  return (
    <TableContainer className='TableInventory'>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow className='headerTable'>
            <TableCell align="center">#</TableCell>
            <TableCell />
            <TableCell>SKU</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Categoria</TableCell>
            <TableCell>Precio</TableCell>
            <TableCell>Stock</TableCell>
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <Row key={index} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

TableInventory.propTypes = {
  data: PropTypes.array,
};

export default TableInventory;

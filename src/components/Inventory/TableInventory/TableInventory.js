/* eslint-disable react/prop-types */
import React, {useState, useEffect} from 'react';
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
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

import example from '../../../../assets/images/example1.png';

import AddProduct from '../AddProduct/AddProduct';

import FsLightbox from 'fslightbox-react';

import './TableInventory.scss';

// redux
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import {updatePriceProduct} from '../../../redux/inventory/inventory-actions';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

// eslint-disable-next-line react/prop-types
const Row = ({row, updatePriceProduct}) => {
  const [open, setOpen] = useState(false);
  const [firstImage, setFirstImage] = useState('');
  const classes = useRowStyles();
  const [allImages, setAllImages] = useState([]);
  const [vendorIndex, setVendorIndex] = useState(0);
  const [vendor, setVendor] = useState('');
  const [toggleBtn, setToggleBtn] = useState(false);
  const [toggler, setToggler] = useState(false);

  useEffect(() => {
    mininImage();
    loadImages();
    loadFirstVendor();
  }, []);

  const mininImage = () => {
    if (row.images) {
      for (let i = 0; i < row.images.length; i++) {
        if (row.images[i].name !== '') {
          setFirstImage(row.images[i].path);
          break;
        }
      }
    }
  };

  const loadFirstVendor = () => {
    if (row.vendor.length > 0) {
      setVendor({
        vendorId: row.vendor[0].vendorId,
        price: row.vendor[0].price,
        cost: row.vendor[0].cost,
        stock: row.vendor[0].stock,
      });
    }
  };

  const loadImages = () => {
    const data = [];
    if (row.images) {
      for (let i = 0; i < row.images.length; i++) {
        if (row.images[i].name !== '') {
          data.push(String.raw`${row.images[i].path}`);
        }
      }
      if (data.length > 0) {
        setAllImages(data);
      } else {
        setAllImages([example]);
      }
    }
  };

  const handleChangeVendor = (event) => {
    setVendorIndex(event.target.value);
    setVendor({
      vendorId: row.vendor[event.target.value].vendorId,
      price: row.vendor[event.target.value].price,
      cost: row.vendor[event.target.value].cost,
      stock: row.vendor[event.target.value].stock,
    });
  };

  const handleChangePrice = (event) => {
    setVendor({
      ...vendor,
      price: event.target.value,
    });
    price: row.vendor[event.target.value].price = event.target.value;
  };

  const togglePrice = () => {
    if (toggleBtn) {
      updatePriceProduct({
        vendorId: vendor.vendorId,
        price: parseInt(vendor.price),
        productId: row._id,
      });
    }
    setToggleBtn(!toggleBtn);
  };

  const getGain = () => {
    return vendor.price !== 0 ? Math.round(((vendor.price - vendor.cost) / vendor.cost) * 100) : 0;
  };

  const countImages = () => {
    let contador = 0;
    if (row.images) {
      for (let i = 0; i < row.images.length; i++) {
        if (row.images[i].name !== '') {
          contador += 1;
        }
      }
    }
    return contador;
  };

  return (
    <React.Fragment>
      <TableRow className={`${classes.root} eachProductRow`}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>
          <img
            className='imageTableRow'
            alt="imagen-producto"
            src={firstImage !== '' ? firstImage : example}
          />
        </TableCell>
        <TableCell>
          {row.sku ? row.sku : '-'}
        </TableCell>
        <TableCell align="left">{row.name}</TableCell>
        <TableCell align="left">{row.category ? row.category : '-'}</TableCell>
        <TableCell align="left">{vendor !== '' ? vendor.price + '$' : '-'}</TableCell>
        <TableCell align="left">{vendor !== '' ? vendor.stock : '-'}</TableCell>
      </TableRow>
      <TableRow className='eachDetailProduct'>
        <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1} className="containerDetail">

              <Grid container spacing={3}>
                <Grid item xs={2} className="imagesOption">
                  <img
                    className='imageDetailRow'
                    alt="imagen-producto"
                    src={firstImage !== '' ? firstImage : example}
                  />
                  <Button
                    onClick={() => setToggler(!toggler)}
                    variant="contained"
                    color="primary"
                    className="verMas"
                  >
                  Ver Mas
                  </Button>
                  <FsLightbox
                    toggler={toggler}
                    sources={allImages}
                  />

                  <div>{countImages()} fotos</div>
                </Grid>
                <Grid item xs={10}>
                  <Grid container item xs={12} spacing={3}>
                    <Grid item xs={6}>
                      <TextField
                        className="w-100"
                        id="standard-basic"
                        label="Nombre"
                        value={row.name}
                        disabled={true}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        id="standard-select-currency"
                        select
                        label="Provedor"
                        className='w-100'
                        value={vendorIndex}
                        onChange={handleChangeVendor}
                        // helperText="Please select your currency"
                      >
                        {row.vendor.length > 0 ?
                          row.vendor.map((each, index) => {
                            return (
                              <MenuItem value={index} key={index}>
                                {each.vendorName}
                              </MenuItem>
                            );
                          }) :
                          <MenuItem value=''>
                            Sin provedor para este producto
                          </MenuItem>
                        }
                      </TextField>
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        className="w-100"
                        id="standard-basic"
                        label="SKU"
                        value={row.sku ? row.sku : '-'}
                        disabled={true}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        className="w-100"
                        id="standard-basic"
                        label="Marca"
                        value={row.category ? row.category : '-'}
                        disabled={true}
                      />
                    </Grid>
                    <Grid container item xs={12} spacing={2}>
                      <Grid item xs={2}>
                        <InputLabel htmlFor="standard-basic-stock">Stock</InputLabel>
                        <Input
                          className="w-100"
                          id="standard-basic-stock"
                          value={vendor ? vendor.stock : 0}
                          type='number'
                          disabled={true}
                        />
                      </Grid>
                      <Grid item xs={2}>
                        <InputLabel htmlFor="standard-basic-cost">Costo</InputLabel>
                        <Input
                          className="w-100"
                          id="standard-basic-cost"
                          value={vendor ? vendor.cost : 0}
                          disabled={true}
                          type='number'
                          endAdornment={<InputAdornment position="end">$</InputAdornment>}
                        />
                      </Grid>
                      <Grid item xs={2}>
                        <InputLabel htmlFor="standard-basic-price">Precio</InputLabel>
                        <Input
                          className="w-100"
                          id="standard-basic-price"
                          value={vendor ? vendor.price : 0}
                          onChange={handleChangePrice}
                          disabled={!toggleBtn}
                          type='number'
                          endAdornment={<InputAdornment position="end">$</InputAdornment>}
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <div className={`gain ${getGain() > 0 ? 'positive' : 'negative'}`}>
                          % {getGain()}
                        </div>
                      </Grid>
                      <Grid item={2}>
                        <Button
                          variant="contained"
                          color="primary"
                          disabled={vendor === '' ? true : false}
                          onClick={togglePrice}
                          className="mt-3"
                        >
                          {toggleBtn ? 'Guardar Precio' : 'Editar Precio'}
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid container item xs={12} spacing={3}>
                    <Grid item xs={12} className="btnSaveContainer">
                      <AddProduct nameLabel={'Editar Producto'} product={row} iconToggle={true}/>
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

const TableInventory = ({data, updatePriceProduct}) => {
  const [time, setTime] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTime(true);
    }, 500);
  }, []);


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
          {time && data.map((row, index) => (
            <Row key={index} row={row} updatePriceProduct={updatePriceProduct}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

TableInventory.propTypes = {
  data: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({

});

const mapDispatchtoProps = (dispatch) =>( {
  updatePriceProduct: (data) => dispatch(updatePriceProduct(data)),
});

export default connect(mapStateToProps, mapDispatchtoProps)(TableInventory);

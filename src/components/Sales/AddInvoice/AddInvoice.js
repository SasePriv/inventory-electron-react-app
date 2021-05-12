/* eslint-disable react/prop-types */
import React, {useState, useEffect} from 'react';
// Material
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
// Redux
import {invoiceClientCreate} from '../../../redux/client/client-actions';
import {selectOneClient} from '../../../redux/client/client-selectors';
import {selectProductsList} from '../../../redux/inventory/inventory-selector';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
// Styles
import './AddInvoice.scss';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    maxWidth: 800,
  },
  container: {
    maxHeight: 345,
  },
}));

const AddInvoice = ({podructList, oneClient, invoiceClientCreate}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    clientId: '',
    date: new Date(),
    products: [],
  });
  const [errorForm, setErrorForm] = useState({
    errorDate: '',
    errorProducts: '',
  });
  const [clientName, setClientName] = useState('');
  const [productForm, setProductForm] = useState({
    product: '',
    stock: 0,
    price: 0,
    vendor: '',
  });
  const [errorProductForm, setErrorProductForm] = useState({
    errorProduct: '',
    errorStock: '',
    errorPrice: '',
    errorVendor: '',
  });
  const [productTableList, setProductTableList] = useState([]);

  const initialStates = () => {
    setForm({
      ...form,
      clientId: '',
      date: '',
      products: [],
    });
    setErrorForm({
      errorDate: '',
      errorProducts: '',
    });
    setProductForm({
      product: '',
      stock: 0,
      price: 0,
      vendor: '',
    });
    setErrorProductForm({
      errorProduct: '',
      errorStock: '',
      errorPrice: '',
      errorVendor: '',
    });
    setProductTableList([]);
    setClientName('');
  };

  useEffect(() => {
    if (oneClient !== null) {
      setForm({
        ...form,
        clientId: oneClient._id.toString(),
      });
      setClientName(oneClient.name);
    };
  }, [oneClient]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    initialStates();
    setOpen(false);
  };

  const handleChangeForm = (event, formNameValue) => {
    setForm({
      ...form,
      [formNameValue]: event.target.value,
    });
  };

  const handleChangeProductForm = (event, formNameValue) => {
    setProductForm({
      ...productForm,
      [formNameValue]: event.target.value,
    });
  };

  const handleChangeProductFormVendor = (event) => {
    setProductForm({
      ...productForm,
      vendor: event.target.value,
      price: event.target.value.price,
    });
  };

  const validFormProduct = () => {
    if (productForm.product === '') {
      setErrorProductForm({
        ...errorProductForm,
        errorProduct: 'No deje este campo vacio',
      });
      console.log('produtco')
      return false;
    } else {
      setErrorProductForm({
        ...errorProductForm,
        errorProduct: '',
      });
    }

    if (productForm.stock === 0) {
      setErrorProductForm({
        ...errorProductForm,
        errorStock: 'No deje este campo vacio',
      });
      console.log('stock')
      return false;
    } else {
      setErrorProductForm({
        ...errorProductForm,
        errorStock: '',
      });
    }

    if (productForm.price === 0) {
      setErrorProductForm({
        ...errorProductForm,
        errorPrice: 'No deje este campo vacio',
      });
      console.log('precio')
      return false;
    } else {
      setErrorProductForm({
        ...errorProductForm,
        errorPrice: '',
      });
    }

    setErrorProductForm({
      errorProduct: '',
      errorStock: '',
      errorPrice: '',
      errorVendor: '',
    });

    return true;
  };

  const handleAddProduct = () => {
    const isValid = validFormProduct();
    if (isValid) {
      setProductTableList([...productTableList, productForm]);
      setForm({
        ...form,
        products: [
          ...form.products,
          {
            id: productForm.product._id,
            price: productForm.price,
            stock: productForm.stock,
            vendorId: productForm.vendor.vendorId,
          },
        ],
      });
      setProductForm({
        product: '',
        stock: 0,
        price: 0,
        vendor: '',
      });
      setErrorProductForm({
        errorProduct: '',
        errorStock: '',
        errorPrice: '',
        errorVendor: '',
      });
    };
  };

  const handleValidationForm = () => {
    if (form.date === '') {
      setErrorForm({
        ...errorForm,
        errorDate: 'No deje este campo vacio',
      });
      return false;
    } else {
      setErrorForm({
        ...errorForm,
        errorDate: '',
      });
    }
    if (form.products.length === 0) {
      setErrorForm({
        ...errorForm,
        errorProducts: 'No deje este campo vacio',
      });
      return false;
    } else {
      setErrorForm({
        ...errorForm,
        errorProducts: '',
      });
    }

    return true;
  };

  const onCreateInvoice = () => {
    const isValid = handleValidationForm();
    if (isValid) {
      invoiceClientCreate(form);
      handleClose();
    }
  };

  return (
    <div className="addInvoice">
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpen}
        disabled={oneClient === null ? true : false}
      >
        Agregar Nueva Factura
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={`${classes.paper} addInvoice`}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <div className='titleInvoice'>Nueva Factura</div>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-number"
                  label="Cliente"
                  variant="outlined"
                  className="w-100"
                  disabled={true}
                  value={clientName}
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel id="demo-simple-select-outlined-label">Fecha de la Factura</InputLabel>
                <TextField
                  id="outlined-number"
                  type="date"
                  variant="outlined"
                  className="w-100"
                  value={form.date}
                  onChange={(e) => handleChangeForm(e, 'date')}
                  error={errorForm.errorDate !== '' ? true : false}
                  helperText={errorForm.errorDate}
                />
              </Grid>
              <Grid item xs={12}>
                <div>Agregar Productos</div>
              </Grid>
              <Grid item xs={6}>
                <InputLabel id="demo-simple-select-outlined-label">Producto</InputLabel>
                <div
                  className={`errorInputtext ${errorProductForm.errorProduct !== '' ? '' : 'hide'}`}
                >
                  {errorProductForm.errorProduct}
                </div>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={productForm.product}
                  onChange={(e) => handleChangeProductForm(e, 'product')}
                  variant="outlined"
                  label="Producto"
                  className="w-100"
                >
                  {podructList ?
                    podructList.map((each, index) => {
                      return (
                        <MenuItem key={index} value={each}>{each.name}</MenuItem>
                      );
                    }) :
                    <MenuItem value=''>Ningun producto registrado</MenuItem>
                  }
                </Select>
              </Grid>
              <Grid item xs={6}>
                <InputLabel id="demo-simple-select-outlined-label">Provedor</InputLabel>
                <div
                  className={`errorInputtext ${errorProductForm.errorVendor !== '' ? '' : 'hide'}`}
                >
                  {errorProductForm.errorVendor}
                </div>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={productForm.vendor}
                  onChange={(e) => handleChangeProductFormVendor(e)}
                  variant="outlined"
                  label="Producto"
                  className="w-100"
                  disabled={productForm.product === '' ? true : false}
                >
                  {productForm.product.vendor?.length > 0 ?
                    productForm.product.vendor.map((each, index) => {
                      return (
                        <MenuItem key={index} value={each}>{each.vendorName}</MenuItem>
                      );
                    }) :
                    <MenuItem value=''>Ningun provedor registrado</MenuItem>
                  }
                </Select>
              </Grid>
              <Grid item xs={3}>
                <InputLabel id="demo-simple-select-outlined-label">Cantidad</InputLabel>
                <TextField
                  id="outlined-number"
                  type="number"
                  variant="outlined"
                  className="w-100"
                  defaultValue="0"
                  value={productForm.stock}
                  onChange={(e) => handleChangeProductForm(e, 'stock')}
                  error={errorProductForm.errorStock !== '' ? true : false}
                  helperText={errorProductForm.errorStock}
                  disabled={productForm.vendor === '' ? true : false}
                  InputProps={{inputProps: {min: '0', max: productForm.vendor.stock, step: '1'}}}
                />
              </Grid>
              <Grid item xs={3}>
                <InputLabel id="demo-simple-select-outlined-label">Precio</InputLabel>
                <OutlinedInput
                  id="outlined-required"
                  defaultValue="0"
                  // variant="outlined"
                  type="number"
                  startAdornment={<InputAdornment position="end">$</InputAdornment>}
                  value={productForm.price}
                  error={errorProductForm.errorPrice !== '' ? true : false}
                  helperText={errorProductForm.errorPrice}
                  disabled={true}
                />
              </Grid>
              <Grid item xs={2}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleAddProduct}
                  className="addPro"
                >
                  Agregar
                </Button>
              </Grid>
              <Grid item xs={12}>
                <div
                  className={`errorInputtext ${errorForm.errorProducts !== '' ? '' : 'hide'}`}
                >
                  {errorForm.errorProducts}
                </div>
                <TableContainer className={classes.container}>
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
                          Precio
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {productTableList.length > 0 &&
                        productTableList.map((row, index) => {
                          return (
                            <TableRow key={index}>
                              <TableCell>
                                <div>{row.product.name}</div>
                              </TableCell>
                              <TableCell>
                                <div>{row.stock}</div>
                              </TableCell>
                              <TableCell>
                                <div>{row.price}$</div>
                              </TableCell>
                            </TableRow>
                          );
                        })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" onClick={onCreateInvoice}>
                Crear Factura
              </Button>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  oneClient: selectOneClient,
  podructList: selectProductsList,
});

const mapDispatchToProps = (dispatch) => ({
  invoiceClientCreate: (data) => dispatch(invoiceClientCreate(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddInvoice);

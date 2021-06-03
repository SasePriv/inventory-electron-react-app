/* eslint-disable react/prop-types */
import React, {useState, useEffect} from 'react';
// Sass
import './TableCollapse.scss';
// Material
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
// Other modules
import AddProduct from '../AddProduct/AddProduct';
import FsLightbox from 'fslightbox-react';
// Imagen default
import imageDefault from '../../../../assets/images/example1.png';
// redux
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import {updatePriceProduct} from '../../../redux/inventory/inventory-actions';

const TableCollapse = ({headerList, data, updatePriceProduct}) => {

  const TableRow = ({keyNumber, row}) => {
    const [open, setOpen] = useState(false);
    const [firstImage, setFirstImage] = useState('');
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
          setAllImages([imageDefault]);
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
        <tr
          data-toggle="collapse"
          data-target={`#row${keyNumber}`}
          className="accordion-toggle"
        >
          <td>
            <IconButton size="small">
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </td>
          <td>{row.sku ? row.sku : '-'}</td>
          <td>{row.name}</td>
          <td>{row.category ? row.category : '-'}</td>
          <td>{vendor !== '' ? vendor.price + '$' : '-'}</td>
          <td>{vendor !== '' ? vendor.stock : '-'}</td>
        </tr>
        <tr>
          <td colSpan="12" className="hiddenRow">
            <div className="accordian-body collapse" id={`row${keyNumber}`}>
              <Box margin={1} className="containerDetail">
                <Grid container spacing={3}>
                  <Grid item xs={2} className="imagesOption">
                    <img
                      className="imageDetailRow"
                      alt="imagen-producto"
                      src={firstImage !== '' ? firstImage : imageDefault}
                    />
                    <Button
                      onClick={() => setToggler(!toggler)}
                      variant="contained"
                      color="primary"
                      className="verMas"
                    >
                      Ver Mas
                    </Button>
                    <FsLightbox toggler={toggler} sources={allImages} />

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
                          className="w-100"
                          value={vendorIndex}
                          onChange={handleChangeVendor}
                          helperText="Please select your currency"
                        >
                          {row.vendor.length > 0 ? (
                            row.vendor.map((each, index) => {
                              return (
                                <MenuItem value={index} key={index}>
                                  {each.vendorName}
                                </MenuItem>
                              );
                            })
                          ) : (
                            <MenuItem value="">
                              Sin provedor para este producto
                            </MenuItem>
                          )}
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
                          <InputLabel htmlFor="standard-basic-stock">
                            Stock
                          </InputLabel>
                          <Input
                            className="w-100"
                            id="standard-basic-stock"
                            value={vendor ? vendor.stock : 0}
                            type="number"
                            disabled={true}
                          />
                        </Grid>
                        <Grid item xs={2}>
                          <InputLabel htmlFor="standard-basic-cost">
                            Costo
                          </InputLabel>
                          <Input
                            className="w-100"
                            id="standard-basic-cost"
                            value={vendor ? vendor.cost : 0}
                            disabled={true}
                            type="number"
                            endAdornment={
                              <InputAdornment position="end">
                                $
                              </InputAdornment>
                            }
                          />
                        </Grid>
                        <Grid item xs={2}>
                          <InputLabel htmlFor="standard-basic-price">
                            Precio
                          </InputLabel>
                          <Input
                            className="w-100"
                            id="standard-basic-price"
                            value={vendor ? vendor.price : 0}
                            onChange={handleChangePrice}
                            disabled={!toggleBtn}
                            type="number"
                            endAdornment={
                              <InputAdornment position="end">
                                $
                              </InputAdornment>
                            }
                          />
                        </Grid>
                        <Grid item xs={3}>
                          <div
                            className={`gain ${
                              getGain() > 0 ? 'positive' : 'negative'
                            }`}
                          >
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
                        <AddProduct
                          nameLabel={'Editar Producto'}
                          product={row}
                          iconToggle={true}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </div>
          </td>
        </tr>
      </React.Fragment>
    );
  };

  return (
    <div className="table-collapse container">
      <table className="table table-condensed table-striped">
        <thead>
          <tr>
            {headerList && headerList.map((eachName, index) => (
              <th key={index}>{eachName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data && data.map((each, index) => (
            <TableRow key={index} keyNumber={index} row={each} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({

});

const mapDispatchtoProps = (dispatch) =>( {
  updatePriceProduct: (data) => dispatch(updatePriceProduct(data)),
});

export default connect(mapStateToProps, mapDispatchtoProps)(TableCollapse);

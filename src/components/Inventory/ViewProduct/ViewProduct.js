/* eslint-disable react/prop-types */
import React, {useState, useEffect} from 'react';
import FsLightbox from 'fslightbox-react';
import AddProduct from '../AddProduct/AddProduct';
// Styles
import './ViewProduct.scss';
// Material
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
// custom
import DeleteModal from '../../Modals/DeleteModal/DeleteModal';
// Assets
import imageDefault from '../../../../assets/images/example1.png';
// redux
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import {updatePriceProduct, deleteOneProduct} from '../../../redux/inventory/inventory-actions';

const ViewProduct = ({handleClose, open, data, updatePriceProduct, deleteOneProduct}) => {
  const [invoiceIndex, setInvoiceIndex] = useState(0);
  const [invoice, setInvoice] = useState({
    invoiceData: data.data[0]?.invoicesIn,
    stock: data.data[0]?.stock,
    price: data.data[0]?.price,
    cost: data.data[0]?.cost,
  });
  const [firstImage, setFirstImage] = useState('');
  const [allImages, setAllImages] = useState([]);
  const [togglePrice, setTogglePrice] = useState(false);
  const [toggler, setToggler] = useState(false);
  // console.log('products', JSON.stringify(data, 0, 2));

  // console.log('invoices', invoice);

  useEffect(() => {
    console.log('actualiza')
    loadImages();
    mininImage();
  }, [data]);

  const handleChangeSelect = (event) => {
    // console.log(event.target.value)
    setInvoiceIndex(event.target.value);
    setInvoice({
      invoiceData: data.data[event.target.value].invoicesIn,
      stock: data.data[event.target.value].stock,
      price: data.data[event.target.value].price,
      cost: data.data[event.target.value].cost,
    });
  };

  const handleSeeMore = () => {
    setToggler(!toggler);
  };

  const getPorcentaje = () => {
    return invoice.price !== 0 ? Math.round(((invoice.price - invoice.cost) / invoice.cost) * 100) : 0;
  };

  const handleEditPrice = () => {
    if (togglePrice) {
      updatePriceProduct({
        invoiceId: invoice.invoiceData._id,
        price: parseInt(invoice.price),
        productId: data._id,
      });
    }
    setTogglePrice(!togglePrice);
  };

  const loadImages = () => {
    const dataImages = [];
    if (data.images) {
      for (let i = 0; i < data.images.length; i++) {
        if (data.images[i].name !== '') {
          dataImages.push(String.raw`${data.images[i].path}`);
        }
      }
      if (dataImages.length > 0) {
        setAllImages(dataImages);
      } else {
        setAllImages([imageDefault]);
      }
    }
  };

  const mininImage = () => {
    console.log('miniImages')
    if (data.images) {
      for (let i = 0; i < data.images.length; i++) {
        if (data.images[i].name !== '') {
          setFirstImage(data.images[i].path);
          break;
        } else {
          setFirstImage('');
        }
      }
    }
  };

  const handleChangePrice = (event) => {
    if (event.target.value >= 0) {
      setInvoice({
        ...invoice,
        price: event.target.value,
      });
    }
  };


  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className="ModalViewProduct"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className="ViewProduct">
          <div className="row">
            <div className="col-12">
              <div className="ViewProduct__header">
                <div className="ViewProduct__header__title">Detalles del Producto</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="img-thumbnail img-fluid ViewProduct__imageContainer">
                <img src={firstImage !== '' ? firstImage : imageDefault} alt="imagenDefault" />
              </div>
              <div className="ViewProduct__view-more">
                <Button
                  variant="contained"
                  color="primary"
                  className="ViewProduct__button"
                  onClick={handleSeeMore}
                >
                  Ver Mas
                </Button>
              </div>
            </div>
            <div className="col-8">
              <div className="row">
                <div className="col-12">
                  <div className="ViewProduct__text">Titulo: <span>{data.name}</span></div>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="ViewProduct__text">Sku: <span>{data.sku}</span></div>
                </div>
                <div className="col-6">
                  <div className="ViewProduct__text">Codigo: <span>{data.code}</span></div>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="ViewProduct__text">Marca: <span>{data.brand}</span></div>
                </div>
                <div className="col-6">
                  <div className="ViewProduct__text">Categoria: <span>{data.category}</span></div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="ViewProduct__text">Descripcion</div>
                  <div className="ViewProduct__description">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <FormControl variant="outlined" className="w-100 mt-2">
                <InputLabel htmlFor="outlined-age-native-simple">{invoice.invoiceData === undefined ? 'No hay factura registrada' :'Factura'}</InputLabel>
                <Select
                  native
                  value={invoiceIndex}
                  onChange={handleChangeSelect}
                  label="Factura"
                  // inputProps={{
                  //   name: 'factura',
                  //   id: 'outlined-age-native-simple',
                  // }}
                >
                  {data.data.map((each, index) => {
                    return (<option key={index} value={index}>{each.invoicesIn?.number}</option>);
                  })}
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-3">
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">Stock</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  value={invoice.stock}
                  // onChange={handleChange('amount')}
                  // startAdornment={<InputAdornment position="start">$</InputAdornment>}
                  labelWidth={60}
                  disabled
                />
              </FormControl>
            </div>
            <div className="col-3">
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">Costo</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  value={invoice.cost}
                  // onChange={handleChange('amount')}
                  startAdornment={<InputAdornment position="start">$</InputAdornment>}
                  labelWidth={60}
                  disabled
                />
              </FormControl>
            </div>
            <div className="col-3">
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">Precio</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  value={invoice.price}
                  onChange={handleChangePrice}
                  startAdornment={<InputAdornment position="start">$</InputAdornment>}
                  type="number"
                  labelWidth={60}
                  disabled={!togglePrice}
                />
              </FormControl>
            </div>
            {invoice.invoiceData === undefined ? null : <div className="col-1">
              <div className="d-flex justify-content-center align-items-center h-100">
                <div className="priceBtnEdit" onClick={handleEditPrice}>
                  {togglePrice ? <SaveIcon/> : <EditIcon />}
                </div>
              </div>
            </div>}
            <div className="col-2">
              <div className="d-flex justify-content-center align-items-center h-100">
                <div
                  className={`porcentaje ${getPorcentaje() > 0 ? 'green' : 'red'}`}
                >{`${getPorcentaje()}%`}</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-around">
                <AddProduct nameLabel={'Editar Producto'} product={data} iconToggle={true}/>
                {/* <Button
                  variant="contained"
                  color="secondary"
                  className="ViewProduct__button"
                >
                  Eliminar Producto
                </Button> */}
                <div className="ViewProduct__button">
                  <DeleteModal
                    title="Seguro que desea eliminar el producto PENE?"
                    message="Solo se podra eliminar el producto solo
                    si no ha tenido ventas ni introducido inventario al mimso"
                    eventDelete={() => deleteOneProduct({productId: data._id})}
                  />
                </div>
              </div>
            </div>
          </div>
          <FsLightbox
            toggler={toggler}
            sources={allImages}
          />
        </div>
      </Fade>
    </Modal>
  );
};

const mapStateToProps = createStructuredSelector({

});

const mapDispatchtoProps = (dispatch) =>( {
  updatePriceProduct: (data) => dispatch(updatePriceProduct(data)),
  deleteOneProduct: (data) => dispatch(deleteOneProduct(data)),
});

export default connect(mapStateToProps, mapDispatchtoProps)(ViewProduct);

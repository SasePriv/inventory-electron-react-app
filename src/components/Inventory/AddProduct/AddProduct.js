/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, {useState, useEffect} from 'react';

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';
import AddBoxIcon from '@material-ui/icons/AddBox';

import CustomSelect from '../../Utils/CustomSelect/CustomSelect';
import {emitErrorMessage} from '../../../utils/notifications';

import {selectBrandList, selectCategoryList} from '../../../redux/inventory/inventory-selector';
import {newProduct, updateDataProduct} from '../../../redux/inventory/inventory-actions';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import './AddProduct.scss';

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
    maxWidth: 1100,
    borderRadius: 10,
  },
}));

const AddProduct = ({categoryList, brandList, newProduct, nameLabel, iconToggle = false, product = null, updateDataProduct}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    name: '',
    sku: '',
    code: '',
    category: '',
    brand: '',
    description: '',
    images: [],
  });

  const [addImages, setAddImage] = useState([
    {file: 1, name: '', path: '', type: ''},
    {file: 2, name: '', path: '', type: ''},
    {file: 3, name: '', path: '', type: ''},
    {file: 4, name: '', path: '', type: ''},
  ]);

  useEffect(() => {
    if (product !== null) {
      const imageList = product.images.map((each) => {
        return {
          file: each.file,
          name: each.name,
          path: each.path,
          type: each.type,
        };
      });

      if (imageList.length > 0) {
        setAddImage(imageList);
      }

      setForm({
        ...form,
        name: product.name,
        sku: product.sku,
        code: product.code,
        category: product.category,
        brand: product.brand,
        description: product.description,
      });
    }
  }, [product]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    if (product === false) {
      initialValues();
    }
  };

  const initialValues = () => {
    setForm({
      name: '',
      sku: '',
      code: '',
      category: '',
      brand: '',
      description: '',
      images: [],
    });

    setAddImage([
      {file: 1, name: '', path: '', type: ''},
      {file: 2, name: '', path: '', type: ''},
      {file: 3, name: '', path: '', type: ''},
      {file: 4, name: '', path: '', type: ''},
    ]);
  };

  const handleAddImages = (event, idImage) => {
    const file = event.target.files[0];

    const updateImageState = addImages.map((eachImageState) => {
      if (eachImageState.file === idImage) {
        eachImageState.name = file.name;
        eachImageState.path = file.path;
        eachImageState.type = file.path;
      }
      return eachImageState;
    });

    setForm({...form, images: updateImageState});
    setAddImage(updateImageState);
  };

  const handleCloseAddImages = (idImage) => {
    const updateImageState = addImages.map((eachImageState) => {
      if (eachImageState.file === idImage) {
        eachImageState.name = '';
        eachImageState.path = '';
        eachImageState.type = '';
      }

      return eachImageState;
    });

    setForm({...form, images: updateImageState});
    setAddImage(updateImageState);
  };

  const handleChangeForm = (event, formNameValue) => {
    setForm({
      ...form,
      [formNameValue]: event.target.value,
    });
  };

  const checkForm = () => {
    if (form.name === '') {
      emitErrorMessage('No deje el campo nombre vacio', true);
      return false;
    };
    return true;
  };

  const onCreate = () => {
    const isValid = checkForm();
    if (isValid) {
      if (product === null) {
        newProduct(form);
      } else {
        updateDataProduct({...form, _id: product._id});
      }
      handleClose();
    };
  };

  console.log(addImages);

  return (
    <div>
      <div className={`d-flex AddProduct ${iconToggle === true ? 'editProduct' : ''}`} onClick={handleOpen}>
        {iconToggle === false && <AddShoppingCartIcon />}
        <div className="textProduct">{nameLabel}</div>
      </div>
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
          <div className={`${classes.paper} formModal`}>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Grid item container >
                  <Grid item xs={12}><h4>Imagenes del Producto</h4></Grid>
                  <Grid item xs={12} className='addingImageContainer'>
                    {
                        addImages[0]?.name !== '' ?

                        <div className='containerImage'>
                          <div className='clearIconBtn'>
                            <ClearIcon onClick={() => handleCloseAddImages(1)}/>
                          </div>
                          <img alt='images' src={addImages[0]?.path} width={150} height={150}/>
                        </div> :

                        <label className='containerImage'>
                          <AddBoxIcon className='addImageBtn'/>
                          <input type="file" onChange={(e) => handleAddImages(e, 1)}/>
                        </label>

                    }
                    {
                        addImages[1]?.name !== '' ?

                        <div className='containerImage'>
                          <div className='clearIconBtn'>
                            <ClearIcon onClick={() => handleCloseAddImages(2)}/>
                          </div>
                          <img alt='images' src={addImages[1]?.path} width={150} height={150}/>
                        </div> :

                        <label className='containerImage'>
                          <AddBoxIcon className='addImageBtn'/>
                          <input type="file" onChange={(e) => handleAddImages(e, 2)}/>
                        </label>

                    }
                  </Grid>
                  <Grid item xs={12}>
                    {
                        addImages[2]?.name !== '' ?

                        <div className='containerImage'>
                          <div className='clearIconBtn'>
                            <ClearIcon onClick={() => handleCloseAddImages(3)}/>
                          </div>
                          <img alt='images' src={addImages[2]?.path} width={150} height={150}/>
                        </div> :

                        <label className='containerImage'>
                          <AddBoxIcon className='addImageBtn'/>
                          <input type="file" onChange={(e) => handleAddImages(e, 3)}/>
                        </label>

                    }
                    {
                        addImages[3]?.name !== '' ?

                        <div className='containerImage'>
                          <div className='clearIconBtn'>
                            <ClearIcon onClick={() => handleCloseAddImages(4)}/>
                          </div>
                          <img alt='images' src={addImages[3]?.path} width={150} height={150}/>
                        </div> :

                        <label className='containerImage'>
                          <AddBoxIcon className='addImageBtn'/>
                          <input type="file" onChange={(e) => handleAddImages(e, 4)}/>
                        </label>

                    }
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={8}>
                <Grid container className='dataProduct'>
                  <Grid item xs={12} >
                    <div className='d-flex justify-content-between'>
                      <h4>Datos del Nuevo Producto</h4>
                      <ClearIcon className='closeModal' onClick={handleClose}/>
                    </div>
                  </Grid>
                  <Grid container spacing={3}>
                    <Grid item xs={8}>
                      <TextField
                        className="w-100"
                        id="standard-basic"
                        label="Nombre"
                        value={form.name}
                        onChange={(e) => handleChangeForm(e, 'name')}
                      / >
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        className="w-100"
                        id="standard-basic"
                        label="SKU"
                        value={form.sku}
                        onChange={(e) => handleChangeForm(e, 'sku')}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        className="w-100"
                        id="standard-basic"
                        label="Codigo"
                        value={form.code}
                        onChange={(e) => handleChangeForm(e, 'code')}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <div className="customSelectSpace">
                        <CustomSelect
                          label="Marca"
                          items={brandList}
                          value={form.brand}
                          handleChange={(e) => handleChangeForm(e, 'brand')}
                        />
                      </div>
                    </Grid>
                    <Grid item xs={4}>
                      <div className="customSelectSpace">
                        <CustomSelect
                          label="Categoria"
                          items={categoryList}
                          value={form.category}
                          handleChange={(e) => handleChangeForm(e, 'category')}
                        />
                      </div>
                    </Grid>
                    <Grid item xs={12}>
                      <div>Descripcion</div>
                      <TextareaAutosize
                        rowsMax={5}
                        rowsMin={5}
                        aria-label="maximum height"
                        placeholder="Descripcion del producto"
                        className="w-100"
                        value={form.description}
                        onChange={(e) => handleChangeForm(e, 'description')}
                      />
                    </Grid>
                    <Grid item xs={12} className='createBtnContainer'>
                      <Button
                        className="createBtn"
                        variant="contained"
                        color="primary"
                        onClick={onCreate}
                      >
                        {product === null ? 'Crear Producto' : 'Editar el producto'}
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  categoryList: selectCategoryList,
  brandList: selectBrandList,
});

const mapDispatchToProps = (dispatch) => ({
  newProduct: (data) => dispatch(newProduct(data)),
  updateDataProduct: (data) => dispatch(updateDataProduct(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);

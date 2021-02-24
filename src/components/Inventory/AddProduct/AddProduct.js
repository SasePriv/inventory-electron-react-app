import React from 'react';

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';
import AddBoxIcon from '@material-ui/icons/AddBox';

import example from '../../../../assets/images/example1.png'

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
    borderRadius: 10
  },
}));

const AddProduct = () => {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return(
    <div>
      <div className='d-flex AddProduct' onClick={handleOpen}>
        <AddShoppingCartIcon />
        <div className='textProduct'>Añadir Producto</div>
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
                      <div className='containerImage'>
                        <div className='clearIconBtn'>
                          <ClearIcon />
                        </div>
                        <img alt='images' src={example} width={150} height={150}/>
                      </div>
                      <div className='containerImage'>
                        {/* <img alt='images' src={example} width={150} height={150}/> */}
                        <AddBoxIcon className='addImageBtn'/>
                      </div>
                  </Grid>
                  <Grid item xs={12}>
                      <div className='containerImage'>
                        {/* <img alt='images' src={example} width={150} height={150}/> */}
                      </div>
                      <div className='containerImage'>
                        {/* <img alt='images' src={example} width={150} height={150}/> */}
                      </div>
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
                  <Grid container spacing={5}>
                    <Grid item xs={8}>
                      <TextField className="w-100" id="standard-basic" label="Nombre" value='Luis Sanchez'/>
                    </Grid>
                    <Grid item xs={4}>
                      <TextField className="w-100" id="standard-basic" label="SKU" value='305-54'/>
                    </Grid>
                    <Grid item xs={3}>
                      <TextField className="w-100" id="standard-basic" label="Precio $" value='500'/>
                    </Grid>
                    <Grid item xs={3}>
                      <TextField className="w-100" id="standard-basic" label="Costo $" value='200'/>
                    </Grid>
                    <Grid item xs={3}>
                      <TextField className="w-100" id="standard-basic" label="Precio Bolivares" value='200000'/>
                    </Grid>
                    <Grid item xs={3}>
                      <TextField className="w-100" id="standard-basic" label="Stock" value='50'/>
                    </Grid>
                    <Grid item xs={3}>
                      <TextField className="w-100" id="standard-basic" label="Marca" value='Adiddas'/>
                    </Grid>
                    <Grid item xs={3}>
                      <TextField className="w-100" id="standard-basic" label="Provedor" value='cumaca.com'/>
                    </Grid>
                    <Grid item xs={12} className='createBtnContainer'>
                      <Button className="createBtn" variant="contained" color="primary" >
                        Crear Producto  
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            {/* <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p> */}
          </div>
        </Fade>
      </Modal>
    </div>
  )
}

export default AddProduct;
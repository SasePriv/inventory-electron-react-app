/* eslint-disable react/prop-types */
import React, {useState} from 'react';

import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import {emitErrorMessage} from '../../../utils/notifications';
import {clientCreate} from '../../../redux/client/client-actions';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import './AddClients.scss';
import { set } from 'mongoose';

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
    borderRadius: 10,
  },
}));

const AddClients = ({clientCreate}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: '',
    ci: '',
    email: '',
    phone: '',
  });
  const [errorMessage, setErrorMessage] = useState({
    errorName: '',
    errorCi: '',
    errorEmail: '',
    errorPhone: '',
  });

  const initialValues = () => {
    setForm({
      name: '',
      ci: '',
      phone: '',
      email: '',
    });
    setErrorMessage({
      errorName: '',
      errorCi: '',
      errorEmail: '',
      errorPhone: '',
    });
  };

  const handleChangeForm = (event, formNameValue) => {
    setForm({
      ...form,
      [formNameValue]: event.target.value,
    });
  };

  const validateForm = () => {
    // eslint-disable-next-line max-len
    const re = /\S+@\S+\.\S+/;
    const emailCheck = re.test(String(form.email).toLowerCase());
    if (form.email === '') {
      setErrorMessage({
        ...errorMessage,
        errorEmail: 'No deje este campo vacio.',
      });
      return false;
    } else if (!emailCheck) {
      setErrorMessage({
        ...errorMessage,
        errorEmail: 'Introduzca un email valido.',
      });
      return false;
    } else {
      setErrorMessage({
        ...errorMessage,
        errorEmail: '',
      });
    }

    if (form.name === '') {
      setErrorMessage({
        ...errorMessage,
        errorName: 'No deje este campo vacio.',
      });
      return false;
    } else {
      setErrorMessage({
        ...errorMessage,
        errorName: '',
      });
    }

    if (form.ci === '') {
      setErrorMessage({
        ...errorMessage,
        errorCi: 'No deje este campo vacio.',
      });
      return false;
    } else {
      setErrorMessage({
        ...errorMessage,
        errorCi: '',
      });
    }

    return true;
  };

  const handleCreate = () => {
    const isValid = validateForm();
    if (isValid) {
      clientCreate(form);
      handleClose();
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    initialValues();
  };

  return (
    <div>
      <div className='d-flex AddClient' onClick={handleOpen}>
        {/* <AddShoppingCartIcon /> */}
        <div className='textClient'>Añadir Cliente</div>
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
          <div className={`${classes.paper} addClientModal`}>
            <Grid container className="gridContainer" spacing={2}>
              <Grid item xs={12}>
                <div className="titleForm">Creacion del Cliente</div>
              </Grid>
              <Grid container item xs={12} spacing={2}>
                <Grid item xs={8}>
                  <TextField
                    id="standard-basic"
                    label="Nombre del Cliente"
                    className="w-100"
                    value={form.name}
                    onChange={(e) => handleChangeForm(e, 'name')}
                    error={errorMessage.errorName !== '' && true}
                    helperText={errorMessage.errorName}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    id="standard-basic"
                    className="w-100"
                    label="Cedula"
                    value={form.ci}
                    type="number"
                    onChange={(e) => handleChangeForm(e, 'ci')}
                    error={errorMessage.errorCi !== '' && true}
                    helperText={errorMessage.errorCi}
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
                    onChange={(e) => handleChangeForm(e, 'email')}
                    error={errorMessage.errorEmail !== '' && true}
                    helperText={errorMessage.errorEmail}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    id="standard-basic"
                    className="w-100"
                    label="Telefono"
                    value={form.phone}
                    onChange={(e) => handleChangeForm(e, 'phone')}
                    error={errorMessage.errorPhone !== '' && true}
                    helperText={errorMessage.errorPhone}
                  />
                </Grid>
              </Grid>
              <Grid container item xs={12} justify="flex-end" spacing={2}>
                <div className="btnContainer">
                  <Button variant="contained" color="primary" onClick={handleCreate}>
                  Crear Cliente
                  </Button>
                </div>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({

});

const mapDispatchToProps = (dispatch) => ({
  clientCreate: (data) => dispatch(clientCreate(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddClients);

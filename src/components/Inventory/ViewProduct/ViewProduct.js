/* eslint-disable react/prop-types */
import React from 'react';
// Styles
import './ViewProduct.scss';
// Material
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';

const ViewProduct = ({handleClose, open}) => {
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
          is hard, i know...
        </div>
      </Fade>
    </Modal>
  );
};


export default ViewProduct;

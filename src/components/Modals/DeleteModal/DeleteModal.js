/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import './DeleteModal.scss';

const DeleteModal = ({title, message, eventDelete}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className="deleteModalBody">
      <h2 id="simple-modal-title">{title}</h2>
      <p id="simple-modal-description">
        {message}
      </p>
      <div className="d-flex justify-content-center">
        <Button
          variant="contained"
          color="primary"
          onClick={handleClose}
        >
          Cancelar
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={eventDelete}
        >
          Eliminar
        </Button>
      </div>
    </div>
  );

  return (
    <React.Fragment>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleOpen}
      >
        Eliminar Producto
      </Button>
      <div className="deleteModal">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div>
    </React.Fragment>
  );
};

export default DeleteModal;

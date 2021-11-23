/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import './WatchVendorBill.scss';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const WatchVendorBill = ({bill, handleDelete}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getTotalCost = () => {
    let cost = 0;
    for (const product of bill.productsList) {
      cost += product.cost;
    }
    return cost;
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Ver
      </button>
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
          <div className={classes.paper}>
            <div className="viewBill">
              <div className="row">
                <div className="col-12">
                  <div className="viewBill__header ">
                    <div className="viewBill__title">Detalles de la Facutra del Proveedor</div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="d-flex justify-content-start">
                    <div className="viewBill__subtitle">Numero de Factura: </div>
                    <div className="viewBill__content">{bill.number}</div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="d-flex justify-content-start">
                    <div className="viewBill__subtitle">Fechade la Factura: </div>
                    <div className="viewBill__content">{bill.date.getDate() + '/' + (bill.date.getMonth()+1) + '/' + bill.date.getFullYear()}</div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="d-flex justify-content-start">
                    <div className="viewBill__subtitle">Fecha Introducia: </div>
                    <div className="viewBill__content">{bill.createdAt.getDate() + '/' + (bill.createdAt.getMonth()+1) + '/' + bill.createdAt.getFullYear()}</div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="d-flex justify-content-start">
                    <div className="viewBill__subtitle">Provedor: </div>
                    <div className="viewBill__content">{bill.vendor.name}</div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <TableContainer className="viewBill__table">
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
                          Costo
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {bill.productsList.length > 0 &&
                        bill.productsList.map((row, index) => {
                          return (
                            <TableRow key={index}>
                              <TableCell>
                                <div>{row.product.name}</div>
                              </TableCell>
                              <TableCell>
                                <div>{row.stock}</div>
                              </TableCell>
                              <TableCell>
                                <div>{row.cost}$</div>
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="d-flex justify-content-center">
                    <div className="viewBill__subtitle">Total de la Factura: </div>
                    <div className="viewBill__content">{getTotalCost()}$</div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="d-flex justify-content-center">
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleDelete({invoiceId: bill._id, vendorId: bill.vendor._id})}
                    >Eliminar</button>
                  </div>
                  <div>Solo se podran eliminar las facturas las cuales los productos no hayan realizada una venta</div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default WatchVendorBill;

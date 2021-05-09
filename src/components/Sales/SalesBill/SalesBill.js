/* eslint-disable react/prop-types */
// React
import React, {useState, useEffect} from 'react';

// Material UI
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// Components
import AddInvoice from '../AddInvoice/AddInvoice';
// Styles
import './SalesBill.scss';
// Redux
// import {getAllInvoiceOfVendors} from '../../../redux/vendor/vendor-actions';
// import {selectInvoiceOfVendorList, selectOneVendor} from '../../../redux/vendor/vendor-selectos';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

const SalesBill = ({}) => {
  // useEffect(() => {
  //   if (oneVendor) {
  //     getAllInvoiceOfVendors({vendorId: oneVendor._id});
  //   }
  // }, [oneVendor]);
  return (
    <Paper elevation={3} className="salesBillPaper mt-4">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className="titleInovice">Facturas de Clientes</div>
        </Grid>
        <Grid item xs={12}>
          <TableContainer className="tableContainer">
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    Numero de Factura
                  </TableCell>
                  <TableCell>
                    Fecha
                  </TableCell>
                  <TableCell>
                    Accion
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* {invoiceList ?
                  invoiceList.map((each, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell>
                          {each.number}
                        </TableCell>
                        <TableCell>
                          {each.date.getDate() + '/' + (each.date.getMonth()+1) + '/' + each.date.getFullYear()}
                        </TableCell>
                        <TableCell>
                           Ver
                        </TableCell>
                      </TableRow>
                    );
                  }) : null
                } */}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid container item xs={12} justify="flex-end" spacing={2}>
          <AddInvoice />
        </Grid>
      </Grid>
    </Paper>
  );
};

const mapStateToProps = createStructuredSelector({
  // invoiceList: selectInvoiceOfVendorList,
  // oneVendor: selectOneVendor,
});

const mapDispatchToProps = (dispatch) => ({
  // getAllInvoiceOfVendors: (data) => dispatch(getAllInvoiceOfVendors(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SalesBill);

// React
import React from 'react';

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
import './VendorsBill.scss';

const VendorBill = () => {
  return (
    <Paper elevation={3} className="vendorBillPaper mt-4">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className="titleInovice">Facturas del Provedor</div>
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
                <TableRow>
                  <TableCell>
                    Ejemplo1
                  </TableCell>
                  <TableCell>
                    26/05/2021
                  </TableCell>
                  <TableCell>
                    Ver
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid container item xs={12} justify="flex-end" spacing={2}>
          <AddInvoice />
          {/* <Button variant="contained" color="primary" className="btnAddInvoice">
            Agregar nueva factura
          </Button> */}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default VendorBill;

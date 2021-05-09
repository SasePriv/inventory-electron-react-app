/* eslint-disable react/prop-types */
// React
import React, {useEffect} from 'react';
// Material
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// import {getAllVendors, setOneVendor} from '../../../redux/vendor/vendor-actions';
// import {selectVendorList} from '../../../redux/vendor/vendor-selectos';
import {getAllClient, setOneClient} from '../../../redux/client/client-actions';
import {selectClientList} from '../../../redux/client/client-selectors';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

// Styles
import './SalesTable.scss';

const column = [
  {id: 155, label: 'Nombre del Cliente'},
  {id: 156, label: 'Cedula'},
];

const SalesTable = ({clientList, getAllClient, setOneClient}) => {
  useEffect(() => {
    getAllClient();
  }, []);

  const selectOneClient = (row) => {
    setOneClient(row);
  };

  return (
    <Paper elevation={3} className="salesTablePaper">
      <div className="salesTable">
        <TableContainer className="container">
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {column.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{minWidth: column.minWidth}}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {
                clientList ?
                clientList.map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row._id}
                      onClick={() => selectOneClient(row)}
                    >
                      <TableCell key={column.id} >
                        {row.name}
                      </TableCell>
                      <TableCell key={column.id} >
                        {row.ci}
                      </TableCell>
                    </TableRow>
                  );
                }) :
                <TableRow hover role="checkbox" tabIndex={-1}>
                  <TableCell>
                    No hay provedores registrados
                  </TableCell>
                </TableRow>
              }
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Paper>
  );
};

const mapStateToProps = createStructuredSelector({
  clientList: selectClientList,
});

const mapDispatchToProps = (dispatch) => ({
  getAllClient: () => dispatch(getAllClient()),
  setOneClient: (data) => dispatch(setOneClient(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SalesTable);

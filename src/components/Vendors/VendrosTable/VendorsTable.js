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

import {getAllVendors, setOneVendor} from '../../../redux/vendor/vendor-actions';
import {selectVendorList} from '../../../redux/vendor/vendor-selectos';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

// Styles
import './VendorsTable.scss';

const column = [
  {id: 155, label: 'Nombre del provedor'},
];

const VendorsTable = ({vendorList, getAllVendors, setOneVendor}) => {
  useEffect(() => {
    getAllVendors();
  }, []);

  const selectOneVendor = (row) => {
    setOneVendor(row);
  };

  return (
    <Paper elevation={3} className="vendorsTablePaper">
      <div className="vendorsTable">
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
                vendorList ?
                vendorList.map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row._id}
                      onClick={() => selectOneVendor(row)}
                    >
                      <TableCell key={column.id} >
                        {row.name}
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
  vendorList: selectVendorList,
});

const mapDispatchToProps = (dispatch) => ({
  getAllVendors: () => dispatch(getAllVendors()),
  setOneVendor: (data) => dispatch(setOneVendor(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VendorsTable);

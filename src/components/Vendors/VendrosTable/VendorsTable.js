// React
import React from 'react';
// Material
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// Styles
import './VendorsTable.scss';

const column = [
  {id: 155, label: 'Nombre del provedor'},
];

const exampleData = [
  {id: 1, nameVendor: 'example1'},
  {id: 2, nameVendor: 'example2'},
  {id: 3, nameVendor: 'example3'},
  {id: 4, nameVendor: 'example4'},
  {id: 5, nameVendor: 'example5'},
  {id: 5, nameVendor: 'example5'},
  {id: 5, nameVendor: 'example5'},
  {id: 5, nameVendor: 'example5'},
  {id: 5, nameVendor: 'example5'},
  {id: 5, nameVendor: 'example5'},
  {id: 5, nameVendor: 'example5'},
  {id: 5, nameVendor: 'example5'},
  {id: 5, nameVendor: 'example5'},
  {id: 5, nameVendor: 'example5'},
  {id: 5, nameVendor: 'example5'},
  {id: 5, nameVendor: 'example5'},
  {id: 5, nameVendor: 'example5'},
];

const VendorsTable = () => {
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
                    <div>{column.label}</div>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {exampleData.map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    <TableCell key={column.id}>
                      {row.nameVendor}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Paper>
  );
};

export default VendorsTable;

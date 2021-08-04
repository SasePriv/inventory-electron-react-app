/* eslint-disable react/prop-types */
import React, {useState, useEffect} from 'react';
// Sass
import './TableCollapse.scss';
// Material
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
// Other modules
import AddProduct from '../AddProduct/AddProduct';
import FsLightbox from 'fslightbox-react';
// Imagen default
import imageDefault from '../../../../assets/images/example1.png';
// redux
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
// Components
import ViewProduct from '../ViewProduct/ViewProduct';

const TableRow = ({keyNumber, row}) => {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const genStock = () => {
    let stock = 0;
    row.data.map((each) => {
      stock += each.stock;
    });
    return stock;
  };

  const rangePrice = () => {
    let numMayor = row.data[0]?.price;
    let numMeno = row.data[0]?.price;
    let final = '';
    row.data.map((each) => {
      if (each.price > numMayor) {
        numMayor = each.price;
      };
      if (each.price < numMeno) {
        numMeno = each.price;
      };
    });

    if (numMayor === numMeno) {
      final = numMayor;
    } else {
      final = `${numMeno}-${numMayor}`;
    }

    return final;
  };

  return (
    <React.Fragment>
      <tr
        className="rowTable"
        onClick={handleOpenModal}
      >
        <td>{row.sku ? row.sku : '-'}</td>
        <td>{row.name}</td>
        <td>{row.category ? row.category : '-'}</td>
        <td>{rangePrice() !== undefined ? `${rangePrice()}$` : '-'}</td>
        <td>{`${genStock()}`}</td>
      </tr>
      <ViewProduct
        open={open}
        handleClose={handleCloseModal}
        data={row}
      />
    </React.Fragment>
  );
};

const TableCollapse = ({headerList, data}) => {
  return (
    <div className="table-collapse container">
      <table className="table table-condensed table-striped">
        <thead>
          <tr>
            {headerList && headerList.map((eachName, index) => (
              <th key={index}>{eachName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data && data.map((each, index) => (
            <TableRow key={index} keyNumber={index} row={each} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableCollapse;

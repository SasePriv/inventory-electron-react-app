import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import './CustomSelect.scss';

const CustomSelect = ({label = null, items=[], value = '', handleChange = () => ''}) => {
  return (
    <div className='CustomSelect'>
      {/* <FormControl className={classes.formControl}> */}
      <div className='d-flex'>
        <div className='labelName'>{label ? `${label}:` : null} </div>
        <Select
          value={value}
          onChange={handleChange}
          displayEmpty
          className={`selectInput ${label ? null : 'w-100' }`}
          inputProps={{'aria-label': 'Without label'}}
        >
          <MenuItem value="">
            <em>Ninguno</em>
          </MenuItem>
          {
            items.length > 0 ?
            items.map((item, index) => {
              return (
                <MenuItem
                  className="eachSelectItem"
                  key={index}
                  value={item.name}>
                  <em>{item.name}</em>
                </MenuItem>
              );
            }) :
            <MenuItem value="">
              <em>No hay {label}</em>
            </MenuItem>
          }

        </Select>
      </div>
      {/* </FormControl> */}
    </div>
  );
};

CustomSelect.propTypes = {
  label: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

export default CustomSelect;

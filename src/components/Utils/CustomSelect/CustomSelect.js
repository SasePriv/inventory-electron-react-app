import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import './CustomSelect.scss';

const CustomSelect = ({label = null, items = []}) => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className='CustomSelect'>
      {/* <FormControl className={classes.formControl}> */}
      <div className='d-flex'>
        <div className='labelName'>{label ? `${label}:` : null} </div>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          className={`selectInput ${label ? null : 'w-100' }`}
          inputProps={{'aria-label': 'Without label'}}
        >
          <MenuItem value="">
            <em>Ninguno</em>
          </MenuItem>
          { items.map((item, index) => {
            return (
              <MenuItem className="eachSelectItem" key={index} value={item.value}>{item.name}</MenuItem>
            );
          }) }

          {/* <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </div>
      {/* </FormControl> */}
    </div>
  );
};

CustomSelect.propTypes = {
  label: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
};

export default CustomSelect;

// React
import React from 'react';

// Custom Components
// import CustomSelect from '../../Utils/CustomSelect/CustomSelect';
import Button from '@material-ui/core/Button';
import CustomSearch from '../../Utils/CustomSearch/CustomSearch';

import AddVendors from '../AddVendors/AddVendors';

// Styles
import './HeaderVendors.scss';

const HeaderVendors = () => {
  return (
    <div className='HeaderVendors'>
      <div className='d-flex justify-content-between align-items-center'>
        <div className='d-flex align-items-center'>
          <h3 className='darkText ml-3 mr-3'>Provedores</h3>
          <CustomSearch />
        </div>
        <AddVendors />
      </div>
    </div>
  );
};

export default HeaderVendors;

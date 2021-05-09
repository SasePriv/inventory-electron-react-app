// React
import React from 'react';

// Custom Components
// import CustomSelect from '../../Utils/CustomSelect/CustomSelect';
import Button from '@material-ui/core/Button';
import CustomSearch from '../../Utils/CustomSearch/CustomSearch';

import AddClients from '../AddClients/AddClients';

// Styles
import './HeaderVendors.scss';

const HeaderSales = () => {
  return (
    <div className='HeaderSales'>
      <div className='d-flex justify-content-between align-items-center'>
        <div className='d-flex align-items-center'>
          <h3 className='darkText ml-3 mr-3'>Ventas</h3>
          <CustomSearch />
        </div>
        <AddClients />
      </div>
    </div>
  );
};

export default HeaderSales;

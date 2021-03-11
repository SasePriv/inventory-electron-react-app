// React
import React from 'react';

// Custom Components
// import CustomSelect from '../../Utils/CustomSelect/CustomSelect';
import CustomSearch from '../../Utils/CustomSearch/CustomSearch';

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
      </div>
    </div>
  );
};

export default HeaderVendors;

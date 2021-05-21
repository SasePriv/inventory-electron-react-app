// React
import React from 'react';

// Custom Components
import CustomSearch from '../../Utils/CustomSearch/CustomSearch';

import AddVendors from '../AddVendors/AddVendors';

import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import {searchVendorList} from '../../../redux/vendor/vendor-actions';

// Styles
import './HeaderVendors.scss';

const HeaderVendors = ({searchVendorList}) => {
  const handleVendorList = (event) => {
    searchVendorList(event.target.value);
  };

  return (
    <div className='HeaderVendors'>
      <div className='d-flex justify-content-between align-items-center'>
        <div className='d-flex align-items-center'>
          <h3 className='darkText ml-3 mr-3'>Provedores</h3>
          <CustomSearch onChange={handleVendorList} />
        </div>
        <AddVendors />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({

});

const mapDispatchtoProps = (dispatch) =>( {
  searchVendorList: (data) => dispatch(searchVendorList(data)),
});

export default connect(mapStateToProps, mapDispatchtoProps)(HeaderVendors);

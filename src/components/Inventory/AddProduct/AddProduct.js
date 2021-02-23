import React from 'react';

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


import './AddProduct.scss';

const AddProduct = () => {

  return(
    <div className='d-flex AddProduct'>
      <AddShoppingCartIcon />
      <div className='textProduct'>Add product</div>
    </div>
  )
}

export default AddProduct;
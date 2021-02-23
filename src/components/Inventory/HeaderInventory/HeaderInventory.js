import React from 'react';

import CustomSelect from '../../Utils/CustomSelect/CustomSelect';
import CustomSearch from '../../Utils/CustomSearch/CustomSearch';
import AddProduct from '../AddProduct/AddProduct';

import './HeaderInventory.scss';

const dataExample = [
    {value: 0, name: "uno"},
    {value: 1, name: "dos"},
    {value: 3, name: "tres"},
]

const HeaderInventory = () => {


    return(
        <div className='HeaderInvetory'>
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <h3 className='darkText ml-3 mr-3'>Inventory</h3>
                    <CustomSelect label="Categoria" items={dataExample}/>
                    <CustomSelect label="Marca" items={dataExample}/>
                    <CustomSearch />
                </div>
                <div>
                    <AddProduct />
                </div>
            </div>
        </div>
    )
};

export default HeaderInventory;
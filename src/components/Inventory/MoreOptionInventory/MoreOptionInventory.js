import React from 'react';

import OptionPopoverBtn from './optionPopoverBtn';

import './MoreOptionInventory.scss';

const dataExmaple = [
  {id: 1, category: "hola"},
  {id: 2, category: "adios"},
  {id: 3, category: "como estas"},
  {id: 4, category: "bien"},
  {id: 4, category: "bien"},
  {id: 4, category: "bien"},
  {id: 4, category: "bien"},
  {id: 4, category: "bien"},
  {id: 4, category: "bien"},
  {id: 4, category: "bien"},
  {id: 4, category: "bien"},
  {id: 4, category: "bien"},
  {id: 4, category: "bien"},
  {id: 4, category: "bien"},
  {id: 4, category: "bien"},
  {id: 4, category: "bien"},
  {id: 4, category: "bien"},
  {id: 4, category: "bien"},
];

const MoreOptionInventory = () => {

  const onEliminateAction = (id) => {
    console.log('Eliminating...',id);
  }

  const onAdd = () => {
    console.log('Adding...')
  } 

  return(
    <div className="moreOptionInventory">
      <div className='d-flex justify-content-around'>
        {/* <div>Manejar Categorias</div> */}
        <OptionPopoverBtn
          name="Manejar Categorias"
          data={dataExmaple}
          onEliminate={onEliminateAction}
          onAdd={onAdd}
        />
        <OptionPopoverBtn
          name="Manejar Marcas"
          data={dataExmaple}
          onEliminate={onEliminateAction}
          onAdd={onAdd}
        />
      </div>
    </div>
  )
}

export default MoreOptionInventory;
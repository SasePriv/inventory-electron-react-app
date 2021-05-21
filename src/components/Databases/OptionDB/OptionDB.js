import React from 'react';

import Button from '@material-ui/core/Button';

import './OptionDB.scss';

const OptionDB = () => {
  return (
    <div className="optionDB">
      <div className="d-flex justify-content-center">
        <div className="container">
          <div className="m-3">
            <h4>Exportar la Base de Datos:</h4>
            <Button variant="contained" color="primary" disabled={true}>
            Exportar
            </Button>
          </div>
          <div className="m-3">
            <h4>Importar la Base de Datos:</h4>
            <Button variant="contained" color="primary" disabled={true}>
            Importar
            </Button>
          </div>
          <div className="m-3">
            <h4>Exportar los productos a un archivo csv:</h4>
            <Button variant="contained" color="primary" disabled={true}>
            Exportar CSV
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionDB;

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons'


import './SignUpForm.scss'

const SignUpForm = ({toggleStatus}) => {

    return(
        <div className="SignUpForm">
            <div className="d-flex" onClick={toggleStatus}>
                <FontAwesomeIcon icon={faArrowAltCircleLeft} className="mr-3 iconArrow"/>
                <h4>Registrar una Empresa</h4>                
            </div>
            <div className="separatorX" />
            <div className="w-100 d-flex mt-4">
                <div className="w-50 mr-5">                    
                    <div class="form-group">
                        <label>Nombre de la Empresa</label>
                        <input type="text" class="form-control" placeholder="Example input" />
                    </div>
                    <div class="form-group">
                        <label>Nombre Completo del Dueño</label>
                        <input type="text" class="form-control" placeholder="Another input" />
                    </div>
                    <div class="form-group">
                        <label>Usuario</label>
                        <input type="text" class="form-control" placeholder="Another input" />
                    </div> 
                    <div className="form-group">
                        <label>Correo Electronico</label>
                        <input type="email" id="name" className="form-control" aria-describedby="emailHelp" name="usuario" placeholder="Ej:your_email@your_dominion.com"/>
                    </div>

                    <div className="form-group">
                        <label>Logo de la Empresa</label>
                        <div class="custom-file">                            
                            <input type="file" class="custom-file-input" id="validatedCustomFile" required />
                            <label class="custom-file-label" for="validatedCustomFile">Choose file...</label>
                            <div class="invalid-feedback">Example invalid custom file feedback</div>
                        </div>
                    </div>

                    <div className="imagenContainer">

                    </div>

                </div>

                <div className="w-50">     

                    <div class="form-group">
                        <label>Contraseña</label>
                        <input type="text" class="form-control" placeholder="Another input" />
                    </div>                   
                    <div class="form-group">
                        <label>Confirmar Contraseña</label>
                        <input type="text" class="form-control" placeholder="Another input" />
                    </div>

                    <div class="form-group">
                        <label for="formGroupExampleInput">Telefono</label>
                        <input type="text" class="form-control" placeholder="Example input" />
                    </div>

                    <div class="form-group">
                        <label for="formGroupExampleInput2">Direccion de la Empresa</label>
                        <input type="text" class="form-control" placeholder="Another input" />
                    </div> 
                                       
                </div>                
            </div>

            <div className="w-100 btn-section">
                <button className="btn btn-primary">Crear Empresa</button>
            </div>

        </div>
    )
}

export default SignUpForm;
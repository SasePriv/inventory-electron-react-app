import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons'
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectSignUpFormData } from '../../../redux/signup/signup-selectors'
import { setFormData, signUpCreate } from '../../../redux/signup/signup-actions'
import { signupValidationsForm } from '../../../utils/validationInputs'
import { handleError } from '../../../utils/handleErrors'


import './SignUpForm.scss'

const SignUpForm = ({toggleStatus, signUpFormData, setFormData, signUpAsync}) => {

    const [confirmationPass, setConfirmationPass] = useState('');
    const [errorInputs, setErrorInputs] = useState(
        {
            typeError: '',
            errorMessage: '',
            statusError: false
        }
    )

    const handleChangeInput = (event, nameInput) => {
        setFormData({[nameInput]: event.target.value });
    }

    const handleSecondPassword = (event) => {
        setConfirmationPass(event.target.value);
    }

    const handleCreate = () => {
        const result = signupValidationsForm(signUpFormData, confirmationPass)

        if (result.status) {
            
        } else {
            console.log(result)
            console.log("error", handleError(result.message))
            setErrorInputs({
                typeError: result.type,
                errorMessage: handleError(result.message),
                statusError: true
            })
        }

        // console.log(result)
    }

    return(
        <div className="SignUpForm">
            <div className="d-flex" onClick={toggleStatus}>
                <FontAwesomeIcon icon={faArrowAltCircleLeft} className="mr-3 iconArrow"/>
                <h4>Registrar una Empresa</h4>                
            </div>
            <div className="separatorX" />
            <div className="w-100 d-flex mt-4">
                <div className="w-50 mr-5">                    
                    <div className="form-group">
                        <label>Nombre de la Empresa</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Example input" 
                            onChange={(e) => handleChangeInput(e, "companyName")}
                            value={signUpFormData.companyName}
                        />
                        {
                            errorInputs.statusError && errorInputs.typeError === "companyName" 
                            ?
                            <div className="errorText">*{errorInputs.errorMessage}</div>    
                            : null
                        }
                        
                    </div>
                    <div className="form-group">
                        <label>Nombre Completo del Dueño</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Another input"
                            onChange={(e) => handleChangeInput(e, 'name')}
                            value={signUpFormData.name}
                        />
                        {
                            errorInputs.statusError && errorInputs.typeError === "name" 
                            ?
                            <div className="errorText">*{errorInputs.errorMessage}</div>    
                            : null
                        }
                    </div>
                    <div className="form-group">
                        <label>Usuario</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Another input" 
                            onChange={(e) => handleChangeInput(e, 'username')}
                            value={signUpFormData.username}
                        />
                        {
                            errorInputs.statusError && errorInputs.typeError === "username" 
                            ?
                            <div className="errorText">*{errorInputs.errorMessage}</div>    
                            : null
                        }
                    </div> 
                    <div className="form-group">
                        <label>Correo Electronico</label>
                        <input 
                            type="email" 
                            id="name" 
                            className="form-control" 
                            aria-describedby="emailHelp" 
                            name="usuario" 
                            placeholder="Ej:your_email@your_dominion.com"
                            onChange={(e) => handleChangeInput(e, 'email')}
                            value={signUpFormData.email}
                        />
                        {
                            errorInputs.statusError && errorInputs.typeError === "email" 
                            ?
                            <div className="errorText">*{errorInputs.errorMessage}</div>    
                            : null
                        }
                    </div>

                    {/* <div className="form-group">
                        <label>Logo de la Empresa</label>
                        <div className="custom-file">                            
                            <input type="file" className="custom-file-input" id="validatedCustomFile" required />
                            <label className="custom-file-label">Choose file...</label>
                            <div className="invalid-feedback">Example invalid custom file feedback</div>
                        </div>
                    </div>

                    <div className="imagenContainer">

                    </div> */}

                </div>

                <div className="w-50">     

                    <div className="form-group">
                        <label>Contraseña</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Another input" 
                            onChange={(e) => handleChangeInput(e, 'password')}
                            value={signUpFormData.password}
                        />
                        {
                            errorInputs.statusError && errorInputs.typeError === "password" 
                            ?
                            <div className="errorText">*{errorInputs.errorMessage}</div>    
                            : null
                        }
                    </div>                   
                    <div className="form-group">
                        <label>Confirmar Contraseña</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Another input" 
                            onChange={handleSecondPassword}
                            value={confirmationPass}
                        />
                    </div>

                    <div className="form-group">
                        <label>Telefono</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Example input" 
                            onChange={(e) => handleChangeInput(e, 'phone')}
                        />
                        {
                            errorInputs.statusError && errorInputs.typeError === "phone" 
                            ?
                            <div className="errorText">*{errorInputs.errorMessage}</div>    
                            : null
                        }
                    </div>

                    <div className="form-group">
                        <label>Direccion de la Empresa</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Another input" 
                            onChange={(e) => handleChangeInput(e, 'adress')}
                        />
                        {
                            errorInputs.statusError && errorInputs.typeError === "adress" 
                            ?
                            <div className="errorText">*{errorInputs.errorMessage}</div>    
                            : null
                        }
                    </div> 
                                       
                </div>                
            </div>

            <div className="w-100 btn-section">
                <button onClick={handleCreate} className="btn btn-primary">Crear Empresa</button>
            </div>

        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    signUpFormData: selectSignUpFormData
});

const mapDispatchToProps = dispatch => ({
    setFormData: (formData) => dispatch(setFormData(formData)),
    signUpCreate: (signUpData) => dispatch(signUpCreate(signUpData))
});   

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
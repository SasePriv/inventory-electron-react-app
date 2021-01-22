import React from 'react'
import './LoginForm.scss'

const LoginForm = () => {

    return(
        <div className=" p-5 LoginForm">
            <h4>Inciar Sesion</h4>

            <div class="form-group">
                <label className="label">Selecionar una Empresa Registrada</label>
                <select class="form-control" id="exampleFormControlSelect1">
                <option hidden selected>Selecciona una opción</option>
                <option>PEPE ENTERPRISE</option>
                </select>
            </div>

            <div className="form-group">
                <div className="label">Usuario</div>
                <input type="email" id="name" className="form-control" aria-describedby="emailHelp" name="usuario" placeholder="Ej:your_email@your_dominion.com"/>
            </div>
            <div className="form-group">
                <div className="label">Contraseña</div>
                <input type="password" className="form-control" name="password" laceholder="Password"/> 
            </div>

            <div className="d-flex justify-content-between">
                <button className="btn btn-primary">Iniciar Session</button>
                <div className="register">Registrar Empresa</div>
            </div>            
        </div>
    )
}

export default LoginForm;
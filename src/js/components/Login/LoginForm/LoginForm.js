import React from 'react'
import './LoginForm.scss'

const LoginForm = () => {

    return(
        <div className=" p-5 LoginForm">
            <h4>Inciar Sesion</h4>

            <div className="form-group">
                <div className="label">Usuario</div>
                <input type="email" id="name" name="usuario" placeholder="Ej:your_email@your_dominion.com"/>
            </div>
            <div className="form-group">
                <div className="label">Contraseña</div>
                <input type="password" name="password"/> 
            </div>

            <button>Iniciar Session</button>
        </div>
    )
}

export default LoginForm;
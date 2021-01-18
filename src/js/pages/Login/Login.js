import React from 'react'
import LoginForm from '../../components/Login/LoginForm/LoginForm'
import LoginInfo from '../../components/Login/LoginInfo/LoginInfo'
import './Login.scss'

const Login = () => {

    return(
        <div className="Login">
            <div className="square d-flex">
                <LoginInfo />
                <div className="separator-line" />
                <LoginForm />
            </div>
        </div>
    )
}

export default Login;
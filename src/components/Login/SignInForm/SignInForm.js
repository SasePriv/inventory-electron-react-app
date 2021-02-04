import React from 'react'
import LoginForm from './LoginForm/LoginForm'
import LoginInfo from './LoginInfo/LoginInfo'

import './SignInForm.scss'

const SignInForm = ({toggleStatus}) => {

    return(
        <div className="SignInForm d-flex">
            <div className="w-50 middle">
                <LoginInfo/>
            </div>
            <div className="separator-line" />
            <div className="w-50 middle">
                <LoginForm toggleStatus={toggleStatus}/>
            </div>
        </div>
    )

}

export default SignInForm;
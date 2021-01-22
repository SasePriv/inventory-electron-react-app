import React from 'react'
import LoginForm from '../../components/Login/LoginForm/LoginForm'
import LoginInfo from '../../components/Login/LoginInfo/LoginInfo'
import SignUpForm from '../../components/Login/SignUpForm/SignUpForm'
import VideoBackground from '../../../../assets/videos/backgroundVideoLogin2.mp4'
import './Login.scss'

const Login = () => {

    return(
        <div>
            <video autoPlay muted loop id="myVideo">
                <source src={VideoBackground} type="video/mp4" />
            </video>
            <div className="Login ">
                <div className={`square d-flex ${false && "justify-content-center"}`}>
                    {/* <div className="w-50 middle">
                        <LoginInfo />
                    </div>
                    <div className="separator-line" />
                    <div className="w-50 middle">
                        <LoginForm />
                    </div> */}
                        
                    <SignUpForm />

                </div>
            </div>
        </div>
    )
}

export default Login;
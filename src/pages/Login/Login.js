import React, {useState} from 'react'
import SignInForm from '../../components/Login/SignInForm/SignInForm'
import SignUpForm from '../../components/Login/SignUpForm/SignUpForm'
import VideoBackground from '../../../assets/videos/backgroundVideoLogin3.mp4'
import {Animated} from "react-animated-css";
import {example} from '../../../services/signIn/signInService'
import './Login.scss'

const Login = () => {

    const [status, setStatus] = useState(true);

    const toggleStatus = () => {
        setStatus(!status);
    }

    console.log(example)

    return(
        <div>
            <video autoPlay muted loop id="myVideo">
                <source src={VideoBackground} type="video/mp4" />
            </video>
            <div className="Login ">
                <div className={`square d-flex ${false && "justify-content-center"}`}>

                    <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={status} style={{width: "100%", display: status ? "" : "none"}} animationInDelay={100} animationOutDelay={100}>

                        <SignInForm toggleStatus={toggleStatus}/>

                    </Animated>
                
                    <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={!status} style={{width: "100%", display: status ? "none" : ""}} animationInDelay={100} animationOutDelay={100}>

                        <SignUpForm toggleStatus={toggleStatus}/>

                    </Animated>
                                               

                </div>
            </div>
        </div>
    )
}

export default Login;
import React, {useState} from 'react'
import SignInForm from '../../components/Login/SignInForm/SignInForm'
import SignUpForm from '../../components/Login/SignUpForm/SignUpForm'
import VideoBackground from '../../../assets/videos/backgroundVideoLogin3.mp4'
import {Animated} from "react-animated-css";
import { connect } from 'react-redux'
import './Login.scss'
import Spinner from '../../utils/spinner/spinner'
import { createStructuredSelector } from "reselect";
import { selectIsSignUpIn } from '../../redux/signup/signup-selectors'
import { selectIsSigningIn } from '../../redux/signin/signin-selectors'

const Login = ({isSignUp, isSignIn}) => {

    const [status, setStatus] = useState(true);

    const toggleStatus = () => {
        setStatus(!status);
    }

    return(
        <div>

            {isSignUp || isSignIn 
            ? 
                <Spinner />
            : null}            

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

const mapStateToProps = createStructuredSelector({
    isSignUp: selectIsSignUpIn,
    isSignIn: selectIsSigningIn
})

export default connect(mapStateToProps)(Login);
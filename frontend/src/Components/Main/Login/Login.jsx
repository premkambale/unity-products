import React, { useState } from 'react';
import "./Login.css";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
import Success from "../Sources/Animations/Success.json"
import Warning from "../Sources/Animations/Warning.json"


const Login = () => {
    const navigate = useNavigate()
    const [showHide, setShowHide] = useState(false);
    const [showError, setShowError] = useState(false);


    const handleShowPassword = () => {
        const password = document.getElementById('password');
        if (password.type === "text") {
            password.type = "password";
            setShowHide(false);
        } else {
            password.type = "text";
            setShowHide(true);
        }
    }

    const [loginData, setLoginData] = useState({
        "email": "",
        "password": ""

    });
    console.log('loginData', loginData)


    const StaticUserData = [
        {
            "email": "Ashu@gmail.com",
            "password": "Ashu@123",
            "role": "Admin"

        },
        {
            "email": "premkambale@example.com",
            "password": "premkambale@example.com",
            "role": "User"

        },
    ]



    const handleLogin = () => {
        if (StaticUserData[0].email === loginData.email && StaticUserData[0].password === loginData.password) {

            alert("login successful")
            navigate("/Admin")
        }
        else {
            setShowError(true)
        }
    }



    const handleChange = (inputName, inputValue) => {
        setLoginData(prevFormData => ({
            ...prevFormData,
            [inputName]: inputValue
        }));
    }

    const handleErrorPopup = () => {
        setShowError(false)
    }


    return (
        <div className="loginBackground">
            {showError && <div className="loginErrorPopup loginErrorPopup-hidden">
                <Lottie animationData={Warning} className='loginErrorAmin' />
                <p style={{ fontSize: '15px' }}>Please enter valid username and password</p>
                <button className='loginErrorPopupBtn' onClick={handleErrorPopup}>ok</button>
            </div>}
            <section className="Login_section">
                <div className="LoginCard">
                    {/* <img className="top-svg" src={Rnt_Logo} alt="Rnt Logo" /> */}
                    <div className="LoginContent">
                        <div className="LoginInput">
                            <label className='inputLabel' htmlFor="Username">Username <span className='mandatory_span'>*</span></label>
                            <input className='login_input' id='' name='email' type="text" placeholder='Enter Name'
                                onChange={e => handleChange(e.target.name, e.target.value)}
                            />
                        </div>

                        <div className="LoginInput">
                            <label className='inputLabel' htmlFor="Password">Password <span className='mandatory_span'>*</span></label>
                            <div className="passwordInput">
                                <input className='login_input' name='password' id='password' type={showHide ? "text" : "password"} placeholder='Enter Password'
                                    onChange={e => handleChange(e.target.name, e.target.value)}
                                />
                                <span className="passwordShowAndHide" onClick={handleShowPassword}>
                                    {showHide ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                                </span>
                            </div>
                        </div>

                        <div className="remember">
                            <div className="remember_me">
                                <input className='login_checkbox' type="checkbox" id="rememberMe" name="rememberMe" />
                                <label style={{ marginLeft: "5px", color: "#03232F" }} htmlFor="rememberMe">Remember Me</label>
                            </div>

                        </div>

                        <div className="loginBTN">
                            <button onClick={handleLogin}>Login</button>
                        </div>
                    </div>

                    <div className="LoginFooter">
                        <span>Powered by</span>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <p className='footer_text'>&copy;Copyright {new Date().getFullYear()} Lorem ipsum dolor sit amet consectetur.</p>

                </div>
            </section>
        </div>
    );
}

export default Login;



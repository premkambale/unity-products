import React, { useState } from 'react';
import "./Login.css";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const [showHide, setShowHide] = useState(false);
    const [showError, setShowError] = useState(false);
    const [switchTabs, setSwitchTabs] = useState(false)

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

    const [RegisterData, setRegisterData] = useState({
        FullName: '',
        email: '',
        password: '',
        MobileNo: '',

    })

    console.log("RegisterData", RegisterData)

    const handleRegister = () => {
        fetch("http://localhost:5500/users/register", {
            method: "POST",
            headers: {
                'content-type': "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify(RegisterData)

        }).then((res) => res.json())
            .then((resData) => {

                if (resData.succces == true) {
                    alert(resData.message)

                    setShowError(false)
                }
                else {
                    setShowError(true)
                    alert(resData.message)

                }

            })
            .catch((err) => {
                console.log("error while login", err.message)
            })

    }

    const handleLogin = () => {

        fetch("http://localhost:5500/users/login-user", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(loginData)
        })
            .then((res) => res.json())
            .then((resData) => {
                console.log("resData", resData)
                if (resData.success == true) {
                    setShowError(false)
                    sessionStorage.setItem("Role", (resData.role))
                    sessionStorage.setItem("token", (resData.token))



                    debugger
                    navigate("/Home")
                    alert(resData.message)

                }
                else {
                    setShowError(true)
                    alert(resData.message)

                }

            })
            .catch((err) => {
                console.log("error while login", err.message)
            })



    }



    const handleChange = (inputName, inputValue) => {
        if (switchTabs == true) {
            setLoginData(prevFormData => ({
                ...prevFormData,
                [inputName]: inputValue
            }));
        }
        else {
            setRegisterData(prevFormData => ({
                ...prevFormData,
                [inputName]: inputValue
            }))
        }
    }


    const handleLoginSwitch = () => {
        setSwitchTabs(true)
        document.querySelector('.loginTab').classList.add('active');
        document.querySelector('.registerTab').classList.remove('active');
    }

    const handleRegisterSwitch = () => {
        setSwitchTabs(false)
        document.querySelector('.loginTab').classList.remove('active');
        document.querySelector('.registerTab').classList.add('active');
    }


    return (
        <div className="loginBackground">

            <section className="Login_section">

                <div className="switchTabs">
                    <button className="loginTab" onClick={handleLoginSwitch}>
                        login
                    </button>

                    <button className="registerTab" onClick={handleRegisterSwitch}>
                        register
                    </button>

                </div>

                {switchTabs ? <div className="LoginCard">
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


                </div>
                    :

                    <div className="registerCard">

                        <div className="LoginContent">
                            <div className="LoginInput">
                                <label className='inputLabel' htmlFor="FullName">Full Name <span className='mandatory_span'>*</span></label>
                                <input className='login_input' id='FullName' name='FullName' type="text" placeholder='Enter Full Name'
                                    onChange={e => handleChange(e.target.name, e.target.value)}
                                />
                            </div>


                            <div className="LoginInput">
                                <label className='inputLabel' htmlFor="MobileNo">Mobile No <span className='mandatory_span'>*</span></label>
                                <input className='login_input' id='MobileNo' name='MobileNo' type="text" placeholder='Enter Mobile No'
                                    onChange={e => handleChange(e.target.name, e.target.value)}
                                />
                            </div>
                            <div className="LoginInput">
                                <label className='inputLabel' htmlFor="email">Email<span className='mandatory_span'>*</span></label>
                                <input className='login_input' id='email' name='email' type="text" placeholder='Enter email'
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

                            <div className="loginBTN">
                                <button onClick={handleRegister}>Register</button>
                            </div>
                        </div>

                    </div>}
            </section>
            {showError && (
                <div className="errorModal">
                    <div className="errorModalContent">
                        <h2>Login Error</h2>
                        <p>Incorrect username or password. Please try again.</p>
                        <button onClick={() => setShowError(false)}>OK</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Login;



import React, { useState } from 'react';
import "./Login.css";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { LOGIN_POST, POST, REG_POST } from '../../../Constants/FetchMethods';
import { Url } from '../../../Constants/ApiUrlConstant';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
    const navigate = useNavigate()
    const [showHide, setShowHide] = useState(false);
    const [errors, setErrors] = useState({
        emailError: "",
        passwordError: "",
    });
    const [rememberMe, setRememberMe] = useState(false)
    const [loginData, setLoginData] = useState({
        "email": "",
        "password": ""

    });

    const handleCheckboxChange = () => {
        setRememberMe(!rememberMe); // Toggle the checkbox status
    };



    console.log("errors", errors)

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



    const handleRememberMe = () => {
        if (rememberMe) {
            let today = new Date();
            var expire = new Date();
            expire.setTime(today.getTime() + 3600000 * 24 * 17);
            document.cookie = "UserId=" + loginData?.email + ";path=/http://localhost:3002/Login#/login;expires=" + expire.toUTCString();
            document.cookie = "Password=" + loginData?.password + ";path=/http://localhost:3002/Login#/login;expires=" + expire.toUTCString();
        } else {
            // console.log('Not remembering login details.');
        }
    };


    React.useEffect(() => {
        GetLoginDetailsFromCokkie()
    }, [])


    const GetLoginDetailsFromCokkie = () => {
        let cokkieUser = getDataFromCokkie("UserId");
        let cokkiePass = getDataFromCokkie("Password");
        if (cokkieUser != "" || cokkiePass != "") {
            setLoginData(prevState => ({
                ...prevState,
                email: cokkieUser,
                password: cokkiePass
            }));
        }
    }

    const getDataFromCokkie = (Name) => {
        var CokkieName = Name + "=";
        var CokkieData = decodeURIComponent(document.cookie);
        var cData = CokkieData?.split(";");
        for (var i = 0; i < cData?.length; i++) {
            var Data = cData[i];
            while (Data?.charAt(0) == ',') {
                Data = Data?.substring(1)
            }
            if (Name == 'UserName') {
                if (Data?.indexOf(CokkieName) == 0) {
                    return Data?.substring(CokkieName?.length, Data?.length)
                }
            } else {
                if (Data?.indexOf(CokkieName) == 1) {

                    var Pasword = Data?.substring(CokkieName?.length, Data?.length);
                    let RetunrnVar = Pasword.replaceAll('=', '');
                    return RetunrnVar;
                }
            }
        }
        return '';
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const newErrors = {};

            if (!loginData?.email) {
                newErrors.emailError = "Please Enter Your email";
            }
            if (!loginData?.password) {
                newErrors.passwordError = "Please Enter Your password";
            }

            if (newErrors.emailError || newErrors.passwordError) {
                setErrors(newErrors);
            } else {
                setErrors({
                    emailError: "",
                    passwordError: "",
                });

                const response = await LOGIN_POST(Url.login, loginData);
                const responseData = await response.json();
                console.log("responseData", responseData)

                if (responseData.success == true) {
                    handleRememberMe()

                    console.log("responseData", responseData);
                    sessionStorage.setItem("Role", responseData?.role);
                    sessionStorage.setItem("token", responseData?.token);
                    toast.success(responseData.message, {
                        position: "bottom-right",
                        theme: "colored",
                        className: "custom-success-msg"
                    });
                    navigate("/Home");
                } else {
                    toast.error(responseData.message, {
                        position: "bottom-right",
                        theme: "colored",
                        className: "custom-error-msg"

                    });
                }
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }




    const handleChange = (inputName, inputValue) => {

        if (errors.emailError) {
            setErrors({
                emailError: "",
            })
        } else if (errors.passwordError) {
            setErrors({
                passwordError: ""
            })
        }
        setLoginData(prevFormData => ({
            ...prevFormData,
            [inputName]: inputValue
        }));
    }




    return (<>
        <ToastContainer />
        <div style={{ background: "linearGradient(#141e30, #243b55)" }} className="loginBack">


            <div className="login-box">
                <h2>Login</h2>
                <form>
                    <div className="user-box">
                        <input type="text"
                            id='LoginName' name='email'
                            value={loginData?.email}
                            placeholder='Enter Name'
                            onChange={e => handleChange(e.target.name, e.target.value)} />
                        <label htmlFor="Username" >Username<span className='mandatory_span'>*</span></label>
                        {errors.emailError ? <div className="error-message">{errors.emailError}</div> : <div className="error-message"> </div>}

                    </div>
                    <div className="user-box">
                        <input
                            name='password'
                            id='password'
                            value={loginData?.password}
                            type={showHide ? "text" : "password"}
                            placeholder='Enter Password'
                            onChange={e => handleChange(e.target.name, e.target.value)}
                        />
                        <span className="passwordShowAndHide" onClick={handleShowPassword}>
                            {showHide ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                        </span>
                        <label htmlFor="Password">Password<span className='mandatory_span'>*</span></label>
                        {errors.passwordError ? <div className="error-message">{errors.passwordError}</div> : <div className="error-message"></div>}

                    </div>
                    <div className="remember">
                        <div className="remember_me">
                            <label className="checkContainer">
                                <input
                                    type="checkbox"
                                    onChange={handleCheckboxChange}
                                />
                                <div className="checkmark"></div>
                            </label>
                            <label  className="rem" htmlFor="rememberMe">
                                Remember Me
                            </label>
 

                        </div>
                    </div>

                    <a style={{ color: "white" }} onClick={handleLogin}>

                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit
                    </a>
                </form>
            </div>
        </div>
    </>
    );
}

export default Login;

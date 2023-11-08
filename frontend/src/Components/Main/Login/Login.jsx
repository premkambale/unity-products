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
    const [isChecked, setIsChecked] = useState(true);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
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

    const [loginData, setLoginData] = useState({
        "email": "",
        "password": ""

    });

    // const [RegisterData, setRegisterData] = useState({
    //     FullName: '',
    //     email: '',
    //     password: '',
    //     MobileNo: '',

    // })


    // const handleRegister = async () => {

    //     try {
    //         const response = await REG_POST(Url.register, RegisterData);
    //         if (response.ok) {
    //             const responseData = await response.json();
    //             setShowError(false)
    //             // alert(responseData.message)
    //             toast.success(responseData.message, {
    //                 position: "bottom-right",
    //                 theme: "colored",
    //             });

    //         }
    //         else {
    //             toast.error(response.message, {
    //                 position: "bottom-right",
    //                 theme: "colored",
    //             });
    //             // setShowError(true)
    //             // alert(response.message)
    //         }

    //     } catch (error) {
    //         console.log("error", error)
    //     }
    // }
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
                            placeholder='Enter Name'
                            onChange={e => handleChange(e.target.name, e.target.value)} />
                        <label htmlFor="Username" >Username<span className='mandatory_span'>*</span></label>
                        {errors.emailError ? <div className="error-message">{errors.emailError}</div> : <div className="error-message"> </div>}

                    </div>
                    <div className="user-box">
                        <input
                            name='password'
                            id='password'
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
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                />
                                <div className="checkmark"></div>
                            </label>
                            <label className="rem" htmlFor="rememberMe">
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





// import React, { useState } from 'react';

// function YourComponent() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [showHide, setShowHide] = useState(false);
//     const [errors, setErrors] = useState({});
//     const [isSuccess, setIsSuccess] = useState(false);

//     const handleChange = (name, value) => {
//         if (name === 'email') {
//             setEmail(value);
//         } else if (name === 'password') {
//             setPassword(value);
//         }
//     };

//     const handleShowPassword = () => {
//         setShowHide(!showHide);
//     };

//     const handleLogin = (e) => {
//         e.preventDefault();

//         // Basic validation
//         const newErrors = {};
//         if (!email.trim()) {
//             newErrors.email = 'Email is required';
//         }
//         if (!password.trim()) {
//             newErrors.password = 'Password is required';
//         }

//         // Check if there are errors
//         if (Object.keys(newErrors).length === 0) {
//             setIsSuccess(true);
//             setErrors({});
//             // You can proceed with form submission here
//         } else {
//             setIsSuccess(false);
//             setErrors(newErrors);
//         }
//     };

//     return (
//         <div style={{ background: "linear-gradient(#141e30, #243b55)" }} className="loginBack">
//             <div className="login-box">
//                 <h2>Login</h2>
//                 <form>
//                     <div className="user-box">
//                         <input
//                             type="text"
//                             id='LoginName'
//                             name='email'
//                             placeholder='Enter Name'
//                             value={email}
//                             onChange={e => handleChange(e.target.name, e.target.value)}
//                         />
//                         <label htmlFor="Username">Username<span className='mandatory_span'>*</span></label>
//                         {errors.email && <div className="error-message">{errors.email}</div>}
//                     </div>
//                     <div className="user-box">
//                         <input
//                             name='password'
//                             id='password'
//                             type={showHide ? "text" : "password"}
//                             placeholder='Enter Password'
//                             value={password}
//                             onChange={e => handleChange(e.target.name, e.target.value)}
//                         />
//                         <span className="passwordShowAndHide" onClick={handleShowPassword}>
//                             {showHide ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
//                         </span>
//                         <label htmlFor="Password">Password<span className='mandatory_span'>*</span></label>
//                         {errors.password && <div className="error-message">{errors.password}</div>}
//                     </div>

//                     <div className="remember">
//                         <div className="remember_me">
//                             <input className='login_checkbox' type="checkbox" id="rememberMe" name="rememberMe" />
//                             <label style={{ marginLeft: "5px", color: "black" }} htmlFor="rememberMe">Remember Me</label>
//                         </div>
//                     </div>
//                     {isSuccess && <div className="success-message">Login successful!</div>}
//                     <a style={{ color: "white" }} onClick={handleLogin}>
//                         <span></span>
//                         <span></span>
//                         <span></span>
//                         <span></span>
//                         Submit
//                     </a>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default YourComponent;

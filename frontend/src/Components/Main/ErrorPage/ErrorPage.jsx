import React from 'react'
import Lottie from "lottie-react";
import "./ErrorPage.css"
import ErrorCode from "../Sources/Animations/ErrorCode.json"
import { Link } from 'react-router-dom';
import Home from '../Home/Home';
const ErrorPage = () => {
  return (
    <div className='error-margin-left'>
    <div className="errorPage">
      <Lottie animationData={ErrorCode} />
      <Link className='ErrorBtn' to={"/Home"}>Go Back</Link>
    </div>
  </div>  )
}

export default ErrorPage
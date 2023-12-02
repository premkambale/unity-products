import React from 'react'
import Header from '../Layout/Header/Header'
import Footer from '../Layout/Header/Footer'
import { useNavigate } from 'react-router-dom'
import { BiHome } from 'react-icons/bi'

const OurCustomers = () => {

  const navigate= useNavigate()

  return (
    <>
      <Header />
      <div className='UnityWhyTab'>
        <div className="breadCrump">
          <span onClick={() => navigate("/Home")} className='breadItems'> <BiHome fontSize='13px' /> Home &gt;
          </span>
          <span onClick={() => navigate("/WhyUnity")} className='breadItems2'>Our Customers</span>
        </div>
        <h1 className='headingOfHistory' style={{ textAlign: "center" }}>Our Customers  </h1>
      </div>
      <Footer />
    </>
  )
}

export default OurCustomers
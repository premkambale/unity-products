import React from 'react'
import "./Press.css"
import Header from '../Layout/Header/Header'
import Footer from '../Layout/Header/Footer'
import OurNews from '../OurNews/OurNews'
import { Container, Breadcrumb } from 'react-bootstrap';
import { BiHome } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'



const Press = () => {
  const navigate = useNavigate()
    return (
        <>
            <Header />
            <div className='UnityWhyTab'>
                <div className="breadCrump">
                    <span onClick={() => navigate("/Home")} className='breadItems'> <BiHome fontSize='13px' /> Home &gt;
                    </span>
                    <span onClick={() => navigate("/OurHistory")} className='breadItems2'>Our History</span>
                </div>
                <h1 className='headingOfHistory' style={{ textAlign: "center" }}>  Press & Media</h1>
            </div>
            <OurNews />
            <Footer />
        </>
    )
}

export default Press

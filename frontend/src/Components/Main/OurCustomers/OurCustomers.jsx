import React from 'react'
import Header from '../Layout/Header/Header'
import Footer from '../Layout/Header/Footer'
import { useNavigate } from 'react-router-dom'
import { BiHome } from 'react-icons/bi'
import advent from "../Sources/advent.png"
import arinuma from "../Sources/arunima.jpg"
import bangla from "../Sources/bangla.png"
import ifad from "../Sources/ifad.png"
import mercantile from "../Sources/Mercantile_Bank_Limited_logo.jpg"
import npcil from "../Sources/NPCIL_Logo.svg.png"
import scr from "../Sources/Screenshot 2024-02-28 114527.png"
import scr2 from "../Sources/Screenshot 2024-02-28 114656.png"
import "./OurCustomers.css"


const OurCustomers = () => {
  const imageArray = [advent, arinuma, bangla, ifad, mercantile, npcil, scr, scr2];


  const navigate = useNavigate()

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
      <div className="image-grid">
        {imageArray.map((image, index) => (
          <img className='our-client-img' key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </div>
      <Footer />
    </>
  )
}

export default OurCustomers
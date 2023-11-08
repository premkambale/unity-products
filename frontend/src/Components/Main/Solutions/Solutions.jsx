import React from 'react'
import "./Solutions.css"
import { Container, Breadcrumb } from 'react-bootstrap';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Header/Footer';
import OurSolutions from '../OurSolutions/OurSolutions';
import { useNavigate } from 'react-router-dom';
import { BiHome } from 'react-icons/bi';


const Solutions = () => {


  const navigate = useNavigate()


  return (
    <>
      <Header />

      <div className="soln">
        <div style={{
          position: "absolute",
          zIndex: "111",
          color: "white"
        }} className="breadCrump">
          <span onClick={() => navigate("/Home")} className='breadItems'> <BiHome fontSize='13px' /> Home &gt;
          </span>
          <span onClick={() => navigate("/OurSolutions")} className='breadItems2'>Our Solutions</span>
        </div>


        <OurSolutions />
      </div >
      <Footer />
    </>
  )
}

export default Solutions

import React from 'react'
import { Container, Breadcrumb } from 'react-bootstrap';

import "./Products.css"
import OurProducts from '../OurProducts/OurProducts'
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Header/Footer';
import { useNavigate } from 'react-router-dom';
import { BiHome } from 'react-icons/bi';
const Products = () => {

const navigate = useNavigate()

  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'Our Products' },
  ];
  return (
    <>
      <Header />
      <div className='UnityWhyTab'>
        <div className="breadCrump">
          <span onClick={() => navigate("/Home")} className='breadItems'> <BiHome fontSize='13px' /> Home &gt;
          </span>
          <span onClick={() => navigate("/OurHistory")} className='breadItems2'>Our History</span>
        </div>
        <h1 className='headingOfHistory' style={{ textAlign: "center" }}>  Our Products</h1>
      </div>
      <OurProducts />
      <Footer />
    </>
  )
}

export default Products

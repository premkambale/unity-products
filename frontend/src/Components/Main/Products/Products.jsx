import React from 'react'
import { Container, Breadcrumb } from 'react-bootstrap';

import "./Products.css"
import OurProducts from '../OurProducts/OurProducts'
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Header/Footer';
const Products = () => {
  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'Our Products' },
];
  return (
    <>
    <Header />
    <div className='UnityWhyTab'>
                    <Breadcrumb>
                        {breadcrumbItems.map((item, index) => (
                            <Breadcrumb.Item key={index} href={item.link}>{item.label}</Breadcrumb.Item>
                        ))}
                    </Breadcrumb>
                    <h1 className='headingOfHistory' style={{ textAlign: "center" }}>  Our Products</h1>
                </div>
       <OurProducts />
 <Footer />
 </>
  )
}

export default Products

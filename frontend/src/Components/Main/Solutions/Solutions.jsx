import React from 'react'
import "./Solutions.css"
import { Container, Breadcrumb } from 'react-bootstrap';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Header/Footer';
import OurSolutions from '../OurSolutions/OurSolutions';


const Solutions = () => {
  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'Our Solutions' },
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
        <h1 className='headingOfHistory' style={{ textAlign: "center" }}>  Our Solutions</h1>
      </div>
      <OurSolutions />
      <Footer />
    </>
  )
}

export default Solutions

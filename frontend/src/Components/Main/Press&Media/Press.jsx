import React from 'react'
import "./Press.css"
import Header from '../Layout/Header/Header'
import Footer from '../Layout/Header/Footer'
import OurNews from '../OurNews/OurNews'
import { Container, Breadcrumb } from 'react-bootstrap';



const Press = () => {
  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: ' Press & Medi' },
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
                    <h1 className='headingOfHistory' style={{ textAlign: "center" }}>  Press & Media</h1>
                </div>
            <OurNews />
      <Footer />
      </>
    )
}

export default Press

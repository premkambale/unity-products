import React from 'react'
import "./Main.css"
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Admin from '../Admin/Admin';
import WhyUnity from '../../Main/WhyUnity/WhyUnity';
import OurHistory from '../../Main/OurHistory/OurHistory';
import Solutions from '../../Main/Solutions/Solutions';
import Products from '../Products/Products';
import Press from '../Press&Media/Press';
import ContactUsForm from '../ContactUs/ContactUsForm';
import Projects from '../Projects/Projects';
import LandingPage from '../LandingPage/LandingPage';
import OurCustomers from '../OurCustomers/OurCustomers';
import SamplePage from '../LandingPage/SamplePage';
import Login from '../Login/Login';
import ErrorPage from '../ErrorPage/ErrorPage';

const Main = () => {
    const role = "";
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Navigate to={'/LandingPage'} />} />
                    <Route path='/LandingPage' element={<LandingPage />} />
                    <Route path='/Home' element={<Home />} />
                    {

                        role == "ADMIN" ?
                            <Route path='/Admin/*' element={<Admin />} />
                            :
                            <Route path='*' element={<ErrorPage />} />
                    }
                    <Route path='/WhyUnity' element={<WhyUnity />} />
                    <Route path='/OurHistory' element={<OurHistory />} />
                    <Route path='/Solutions' element={<Solutions />} />
                    <Route path='/Projects' element={<Projects />} />
                    <Route path='/Press' element={<Press />} />
                    <Route path='/Products' element={<Products />} />
                    <Route path='/ContactUs' element={<ContactUsForm />} />
                    <Route path='/OurCustomers' element={<OurCustomers />} />
                    <Route path='/Login' element={<Login />} />
                    <Route path='*' element={<ErrorPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
 
export default Main;

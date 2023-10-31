import React from 'react'
import "./Home.css"
import Header from '../Layout/Header/Header'
import Footer from '../Layout/Header/Footer'
import { Routes, Route } from 'react-router-dom'
import MainProductPage from '../MainProductPage/MainProductPage'


const Home = () => {
    return (
        <>
            <div className="homeContainer">


                <Header />
                <Routes>
                    <Route path={"/"} element={<MainProductPage />} ></Route>
                </Routes>

                <Footer />
            </div>
        </>

    )
}

export default Home

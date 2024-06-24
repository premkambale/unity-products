import React, { useContext } from 'react'
import "./CategoryProducts.css"
import { Url } from '../../../../Constants/ApiUrlConstant'
import { useState } from 'react'
import PdfModal from '../../OurProducts/PdfModal'
import { contextData } from '../../../../Context/UnityContext'
import Header from './Header'
import Footer from './Footer'
import { BiHome } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import Loader from '../../Loader/Loader'

const CategoryProducts = () => {

    const [selectedPdfUrl, setSelectedPdfUrl] = useState("")
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const { catProducts, isLoading } = useContext(contextData);

    const navigate = useNavigate()


    const handleProductOverView = (pdfUrl) => {
        setSelectedPdfUrl(pdfUrl);
        setModalIsOpen(true);
    };


    const closeModal = () => {
        setModalIsOpen(false);
    };


    return (
        <>
            <Header />
            {isLoading && <Loader />}
            <div className='UnityWhyTab'>
                <div className="breadCrump">
                    <span onClick={() => navigate("/Home")} className='breadItems'> <BiHome fontSize='13px' /> Home &gt;
                    </span>
                    <span onClick={() => navigate("/WhyUnity")} className='breadItems2'>Categories</span>
                </div>
                <h1 className='headingOfHistory' style={{ textAlign: "center" }}>{catProducts.product_category ? catProducts.product_category : "Categories"}</h1>
            </div>
            <div style={{ marginTop: "2rem" }} className="trending_MainDiv">
                <div className="trendingGrid">
                    {catProducts?.data?.length > 0 ? (
                        catProducts.data.map((article, index) => (
                            <div className="product-card" key={index}>
                                <div className="product-image-container">
                                    <img src={Url.getImage + article.product_image[0]} alt={article.product_name} className="product-image" />
                                    <div className="overlay">
                                        <button onClick={() => handleProductOverView(Url.getImage + article.product_doc)} data-aos="fade-down" className="overlay-button">
                                            Quick view
                                        </button>
                                    </div>
                                </div>
                                <div className="product-details">
                                    <p className="product-title">{article.product_name}</p>
                                    <p className="productCompany">
                                        {article.company_name}
                                    </p>
                                    <p className="product-Description" title={article.product_description}>
                                        <span className="discription">{article.product_description}</span>
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        Array.from({ length: 4 }).map((_, index) => (
                            <div className="product-card empty" key={index}>
                                <div className="product-image-container">
                                    <div className="empty-image"></div>
                                </div>
                                <div className="product-details">
                                    <p className="product-title">No product available</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
            <PdfModal isOpen={modalIsOpen} closeModal={closeModal} pdfUrl={selectedPdfUrl} />
            <Footer />
        </>
    )
}

export default CategoryProducts
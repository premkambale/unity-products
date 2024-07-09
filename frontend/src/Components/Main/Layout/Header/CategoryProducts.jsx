import React, { useContext, useEffect } from 'react'
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

import mv1 from "../../Sources/categoryimages/mv SWITCHGEAR/MV1.png"
import mv2 from "../../Sources/categoryimages/mv SWITCHGEAR/MV2.png"
import mv3 from "../../Sources/categoryimages/mv SWITCHGEAR/MV3.png"
import mv4 from "../../Sources/categoryimages/mv SWITCHGEAR/MV4.png"
import mv5 from "../../Sources/categoryimages/mv SWITCHGEAR/MV5.png"

import LV1 from "../../Sources/categoryimages/LV PANEL/LV1.png"
import LV2 from "../../Sources/categoryimages/LV PANEL/LV2.png"
import LV3 from "../../Sources/categoryimages/LV PANEL/LV3.png"
import LV4 from "../../Sources/categoryimages/LV PANEL/LV4.png"

import solar1 from "../../Sources/categoryimages/SOLAR/SOLAR1.png"
import solar2 from "../../Sources/categoryimages/SOLAR/SOLAR2.png"

import W1 from "../../Sources/categoryimages/WIRE/W1.png"
import W2 from "../../Sources/categoryimages/WIRE/W2.png"

import E1 from "../../Sources/categoryimages/EARTHING/E1.png"
import E2 from "../../Sources/categoryimages/EARTHING/E2.png"
import E3 from "../../Sources/categoryimages/EARTHING/E3.png"
import E4 from "../../Sources/categoryimages/EARTHING/E4.png"

const CategoryProducts = () => {

    const [selectedPdfUrl, setSelectedPdfUrl] = useState("")
    const [modalIsOpen, setModalIsOpen] = useState(false)
    // const {  isLoading } = useContext(contextData);
    const selectedCategory = sessionStorage.getItem("Category");


    const catProducts = [
        {
            "_id": "668301da97e136aed23c440f",
            "product_name": "GIS Panel",
            "product_description": "Compact gas-insulated switchgear, optimal for high-voltage power distribution systems",
            // "company_name": "EnlightenTech Solutions",
            "product_category": "MV Switchgear",
            // "product_quantity": 3,
            "product_image": mv1,
            "product_doc": "",
            "__v": 0
        },
        {
            "_id": "668301da97e136aed23c440f",
            "product_name": "VCB Panel",
            "product_description": "Vacuum Circuit Breaker panel, reliable for medium-voltage circuit protection.",
            // "company_name": "limit and foot switches",
            "product_category": "MV Switchgear",
            "product_quantity": 3,
            "product_image": mv2,
            "product_doc": "",
            "__v": 0
        },
        {
            "_id": "668301da97e136aed23c440f",
            "product_name": "ACB PANEL",
            "product_description": "Air Circuit Breaker panel, designed for low-voltage circuit interruption.",
            // "company_name": "EnlightenTech Solutions",
            "product_category": "MV Switchgear",
            "product_quantity": 3,
            "product_image": mv3,
            "product_doc": "",
            "__v": 0
        },
        {
            "_id": "668301da97e136aed23c440f",
            "product_name": "Circuit Breaker",
            "product_description": "Device automatically interrupts electrical flow to prevent damage or overloads.",
            "company_name": "GIS,VCB,ACB Spares",
            "product_category": "MV Switchgear",
            "product_quantity": 3,
            "product_image": mv4,
            "product_doc": "",
            "__v": 0
        },
        {
            "_id": "668301da97e136aed23c440f",
            "product_name": "Tripping coil",
            "product_description": "Electromagnetic coil triggering circuit breaker operation during fault conditions.",
            "company_name": "GIS,VCB,ACB Spares",
            "product_category": "MV Switchgear",
            "product_quantity": 3,
            "product_image": mv5,
            "product_doc": "",
            "__v": 0
        }
        ,
        {
            "_id": "668301da97e136aed23c440f",
            "product_name": "ACB PANEL",
            "product_description": "Air Circuit Breaker panel, designed for low-voltage circuit interruption.",
            // "company_name": "GIS,VCB,ACB Spares",
            "product_category": "LV Panel",
            "product_quantity": 3,
            "product_image": LV1,
            "product_doc": "",
            "__v": 0
        }
        ,
        {
            "_id": "668301da97e136aed23c440f",
            "product_name": "MCCB Panel",
            "product_description": "Molded Case Circuit Breaker panel, protects against overloads and faults.",
            // "company_name": "GIS,VCB,ACB Spares",
            "product_category": "LV Panel",
            "product_quantity": 3,
            "product_image": LV2,
            "product_doc": "",
            "__v": 0
        }
        ,
        {
            "_id": "668301da97e136aed23c440f",
            "product_name": "PANEL ACCESSORIES",
            "product_description": "Molded Case Circuit Breaker panel, protects against overloads and faults.",
            // "company_name": "GIS,VCB,ACB Spares",
            "product_category": "LV Panel",
            "product_quantity": 3,
            "product_image": LV3,
            "product_doc": "",
            "__v": 0
        }
        ,
        {
            "_id": "668301da97e136aed23c440f",
            "product_name": "AMC Services",
            "product_description": "Annual Maintenance Contract (AMC) services ensure optimal equipment performance and longevity.",
            // "company_name": "GIS,VCB,ACB Spares",
            "product_category": "LV Panel",
            "product_quantity": 3,
            "product_image": LV4,
            "product_doc": "",
            "__v": 0
        }
        ,
        {
            "_id": "668301da97e136aed23c440f",
            "product_name": "Solar panel",
            "product_description": "Solar panel harnesses sunlight to generate clean electricity for various applications.",
            // "company_name": "GIS,VCB,ACB Spares",
            "product_category": "Solar",
            "product_quantity": 3,
            "product_image": solar1,
            "product_doc": "",
            "__v": 0
        }
        ,
        {
            "_id": "668301da97e136aed23c440f",
            "product_name": "Solar structure",
            "product_description": "Solar structure supports and positions solar panels for optimal energy capture.",
            // "company_name": "GIS,VCB,ACB Spares",
            "product_category": "Solar",
            "product_quantity": 3,
            "product_image": solar2,
            "product_doc": "",
            "__v": 0
        }
        ,
        {
            "_id": "668301da97e136aed23c440f",
            "product_name": "Flexible Wire",
            "product_description": "Flexible wire bends easily, ideal for electrical connections and installations.",
            // "company_name": "GIS,VCB,ACB Spares",
            "product_category": "Wire",
            "product_quantity": 3,
            "product_image": W1,
            "product_doc": "",
            "__v": 0
        }
        ,
        {
            "_id": "668301da97e136aed23c440f",
            "product_name": "Armoured cable",
            "product_description": "Armored cable protects electrical wiring with metal sheathing, ensuring durability and safety.",
            // "company_name": "GIS,VCB,ACB Spares",
            "product_category": "Wire",
            "product_quantity": 3,
            "product_image": W2,
            "product_doc": "",
            "__v": 0
        }
        ,
        {
            "_id": "668301da97e136aed23c440f",
            "product_name": "GI ROD",
            "product_description": "Galvanized iron rod used in solar panel mounting and grounding systems.",
            // "company_name": "GIS,VCB,ACB Spares",
            "product_category": "Earthing Material",
            "product_quantity": 3,
            "product_image": E1,
            "product_doc": "",
            "__v": 0
        },
        {
            "_id": "668301da97e136aed23c440f",
            "product_name": "Copper Bonded Earthing Rod",
            "product_description": "Copper bonded earthing rod ensures effective grounding with corrosion-resistant copper coating.",
            // "company_name": "GIS,VCB,ACB Spares",
            "product_category": "Earthing Material",
            "product_quantity": 3,
            "product_image": E2,
            "product_doc": "",
            "__v": 0
        }, {
            "_id": "668301da97e136aed23c440f",
            "product_name": "Earthing Compound",
            "product_description": "Earthing compound enhances soil conductivity for effective electrical grounding systems.",
            // "company_name": "GIS,VCB,ACB Spares",
            "product_category": "Earthing Material",
            "product_quantity": 3,
            "product_image": E3,
            "product_doc": "",
            "__v": 0
        },
        {
            "_id": "668301da97e136aed23c440f",
            "product_name": "Earthing Clamps",
            "product_description": "Earthing clamps securely connect conductors to grounding rods for safety and stability.",
            // "company_name": "GIS,VCB,ACB Spares",
            "product_category": "Earthing Material",
            "product_quantity": 3,
            "product_image": E4,
            "product_doc": "",
            "__v": 0
        }
    ]


    const navigate = useNavigate()

    const [filteredProducts, setFilteredProducts] = useState([]);

    const fetchProductsByCategory = () => {
        const filtered = catProducts.filter(product => product.product_category === selectedCategory);
        setFilteredProducts(filtered);
    };
    const handleProductOverView = (pdfUrl) => {
        setSelectedPdfUrl(pdfUrl);
        setModalIsOpen(true);
    };

    useEffect(() => {
        fetchProductsByCategory();
    }, [selectedCategory]);


    const closeModal = () => {
        setModalIsOpen(false);
    };


    return (
        <>
            <Header />
            <div className='UnityWhyTab'>
                <div className="breadCrump">
                    <span onClick={() => navigate("/Home")} className='breadItems'>
                        <BiHome fontSize='13px' /> Home &gt;
                    </span>
                    <span onClick={() => navigate("/WhyUnity")} className='breadItems2'>Categories</span>
                </div>
                <h1 className='headingOfHistory' style={{ textAlign: "center" }}>
                    {selectedCategory ? selectedCategory : "Categories"}
                </h1>
            </div>
            <div style={{ marginTop: "2rem" }} className="trending_MainDiv">
                <div className="trendingGrid">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((article, index) => (
                            <div className="product-card" key={index}>
                                <div className="product-image-container">
                                    <img src={article.product_image} alt={article.product_name} className="product-image" />
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
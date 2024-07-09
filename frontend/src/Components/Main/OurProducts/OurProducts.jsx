import React, { useContext, useState } from 'react';
import "./OurProducts.css";
import PdfModal from './PdfModal';
import { contextData } from '../../../Context/UnityContext';
import { GET, GETExcept } from '../../../Constants/FetchMethods';
import { Url } from '../../../Constants/ApiUrlConstant';
import { FaEye } from "react-icons/fa";
import product1 from "../Sources/Product image/product1.png"
import product2 from "../Sources/Product image/product2.png"
import product3 from "../Sources/Product image/product3.png"
import product4 from "../Sources/Product image/product4.png"



const OurProducts = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [productData, setProductData] = useState([]);
  const [selectedPdfUrl, setSelectedPdfUrl] = useState('');
  const [visibleProducts, setVisibleProducts] = useState(6);



  const productData = [
    {
      "_id": "668301da97e136aed23c440f",
      "product_name": "GIS Panel",
      "product_description": "GIS Panel Solutions",
      // "company_name": "EnlightenTech Solutions",
      "product_category": "Panels",
      // "product_quantity": 3,
      "product_image": product1,
      "product_doc": "",
      "__v": 0
    },
    {
      "_id": "668301da97e136aed23c440f",
      "product_name": "limit and foot switches",
      "product_description": "We offer a diverse range of limit switches, including series PC 100, PC 200, PC 300, PC 400, PC 600, PC 900, and PC 1500, each tailored for specific applicaƟons. Our foot switches come in various types, such as compact, heavy-duty, domesƟc, mini, and meditwin. Key features include normal/snap acƟon types, precision contacts, versaƟle mounƟng heads, rugged aluminum die-cast housing, and opƟonal zinc diecast housing.",
      "company_name": "limit and foot switches",
      "product_category": "Industrial Components",
      "product_quantity": 3,
      "product_image": product2,
      "product_doc": "",
      "__v": 0
    },
    {
      "_id": "668301da97e136aed23c440f",
      "product_name": "Earthing material",
      "product_description": "Our high-quality earthing materials ensure effecƟve grounding for electrical installaƟons. These materials, including copper rods, earthing strips, and grounding plates, provide excellent conducƟvity,durability, and corrosion resistance. Ideal for various industrial and commercial applicaƟons, they enhance safety and performance by prevenƟng electrical faults and ensuring stable grounding system",
      // "company_name": "EnlightenTech Solutions",
      "product_category": "Earthing",
      "product_quantity": 3,
      "product_image": product3,
      "product_doc": "",
      "__v": 0
    },
    {
      "_id": "668301da97e136aed23c440f",
      "product_name": "Solenoid coil",
      "product_description": "Our solenoid coils offer reliable performance for various applications, providing efficient electromagnetic actuation. Available in multiple voltage ratings and sizes, they ensure precise and consistent operation, making them ideal for industrial and commercial use. Durable and easy to install, these coils are built to meet rigorous standards and deliver long-lasting functionality. ",
      "company_name": "EnlightenTech Solutions",
      "product_category": "Lighting",
      "product_quantity": 3,
      "product_image": product4,
      "product_doc": "",
      "__v": 0
    }
  ]

  const closeModal = () => {
    setModalIsOpen(false);
  };


  const products = [
    {
      id: 1,
      image: "https://via.placeholder.com/300",
      discount: 68,
      title: "Multi color Sequence Thread work Desi...",
      originalPrice: "10,999.00",
      discountedPrice: "3,499.00",
      reviews: 3,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300",
      discount: 50,
      title: "Elegant Floral Print Anarkali...",
      originalPrice: "8,999.00",
      discountedPrice: "4,499.00",
      reviews: 5,
    },
    {
      id: 3,
      image: "https://via.placeholder.com/300",
      discount: 40,
      title: "Designer Lehenga Choli...",
      originalPrice: "12,999.00",
      discountedPrice: "7,799.00",
      reviews: 8,
    },
    {
      id: 4,
      image: "https://via.placeholder.com/300",
      discount: 30,
      title: "Stylish Party Wear Gown...",
      originalPrice: "6,999.00",
      discountedPrice: "4,899.00",
      reviews: 10,
    },
    {
      id: 5,
      image: "https://via.placeholder.com/300",
      discount: 25,
      title: "Traditional Silk Saree...",
      originalPrice: "5,499.00",
      discountedPrice: "4,199.00",
      reviews: 12,
    },
    {
      id: 3,
      image: "https://via.placeholder.com/300",
      discount: 40,
      title: "Designer Lehenga Choli...",
      originalPrice: "12,999.00",
      discountedPrice: "7,799.00",
      reviews: 8,
    },
    {
      id: 4,
      image: "https://via.placeholder.com/300",
      discount: 30,
      title: "Stylish Party Wear Gown...",
      originalPrice: "6,999.00",
      discountedPrice: "4,899.00",
      reviews: 10,
    },
    {
      id: 5,
      image: "https://via.placeholder.com/300",
      discount: 25,
      title: "Traditional Silk Saree...",
      originalPrice: "5,499.00",
      discountedPrice: "4,199.00",
      reviews: 12,
    },
  ];

  const handleViewMore = () => {
    setVisibleProducts(visibleProducts + 6);
  };

  const handleViewLess = () => {
    setVisibleProducts(6);
  };

  // const getAllProducts = async () => {
  //   try {
  //     const productDataResponse = await GETExcept(Url.getAllProducts);
  //     const getAllProduct = await productDataResponse.json();
  //     setProductData(getAllProduct);
  //   } catch (error) {
  //     console.error('Error occurred:', error);
  //   }
  // };

  // React.useEffect(() => {
  //   getAllProducts();
  // }, []);

  const handleProductOverView = (pdfUrl) => {
    setSelectedPdfUrl(pdfUrl);
    setModalIsOpen(true);
  };

  const [expandedStates, setExpandedStates] = useState(Array(productData?.data?.length).fill(false));

  const handleToggle = (index) => {
    setExpandedStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <>
      <div className="trending_MainDiv">
        <div className="trending-header">
          <div className="line"></div>
          <h2 className='trendingH2'> </h2>
          <div className="line"></div>
        </div>
        <div className="trendingGrid">
          {console.log('productData', productData)}
          {productData?.length > 0 ? (
            productData.slice(0, visibleProducts).map((article, index) => (
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
    </>

  );
};

export default OurProducts;

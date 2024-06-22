import React, { useContext, useState } from 'react';
import "./OurProducts.css";
import PdfModal from './PdfModal';
import electricalImg from "../Sources/electricity-generation-transmission-distribution-guides.jpg";
import { contextData } from '../../../Context/UnityContext';
import { GET, GETExcept } from '../../../Constants/FetchMethods';
import { Url } from '../../../Constants/ApiUrlConstant';
import { FaEye } from "react-icons/fa";

const OurProducts = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [productData, setProductData] = useState([]);
  const [selectedPdfUrl, setSelectedPdfUrl] = useState('');
  const [visibleProducts, setVisibleProducts] = useState(6);


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

  const getAllProducts = async () => {
    try {
      const productDataResponse = await GETExcept(Url.getAllProducts);
      const getAllProduct = await productDataResponse.json();
      setProductData(getAllProduct);
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  React.useEffect(() => {
    getAllProducts();
  }, []);

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
          <h2 className='trendingH2'>Our Products</h2>
          <div className="line"></div>
         </div>
        <div className="trendingGrid">
          {productData?.data?.length > 0 ? (
            productData.data.slice(0, visibleProducts).map((article, index) => (
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

    </>

  );
};

export default OurProducts;

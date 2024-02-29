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
      <h2 className='OurProductTitle'>Our Products</h2>
      <div className="HomeOfProduct">
        <section className="ProductArticles">
          {productData?.data?.slice(0, visibleProducts).map((article, index) => (
            <article className="productArticle" key={index}>
              <div className="article-wrapper_Products">
                <img
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  src={Url.getImage + article.product_image}
                  alt=""
                />
                <div className="ProductArticle-body">
                  <p>{article.product_name}</p>
                  <p className="productCategory">{article.product_category}</p>
                  <p
                    title={article.product_description}
                    className={`productDesc ${expandedStates[index] ? 'expanded' : ''}`}
                    onClick={() => handleToggle(index)}
                  >
                    {article.product_description}
                  </p>

                  <p onClick={() => handleProductOverView(Url.getImage + article.product_doc)} className="viewprodDOC">
                    View <FaEye />
                  </p>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
      {productData?.data?.length > visibleProducts ? (
        <p className='viewMoreLink' onClick={handleViewMore}>
          View More
        </p>
      ) : (
        <p className='viewMoreLink' onClick={handleViewLess}>
          View Less
        </p>
      )}
      <PdfModal isOpen={modalIsOpen} closeModal={closeModal} pdfUrl={selectedPdfUrl} />
    </>
  );
};

export default OurProducts;

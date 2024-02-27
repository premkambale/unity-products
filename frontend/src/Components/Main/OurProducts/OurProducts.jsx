import React, { useContext, useState } from 'react';
import "./OurProducts.css";
import PdfModal from './PdfModal'; // Import the PdfModal component
import electricalImg from "../Sources/electricity-generation-transmission-distribution-guides.jpg"
import document from "../Sources/Sample Product Description.pdf"
import { contextData } from '../../../Context/UnityContext';
import { GET, GETExcept } from '../../../Constants/FetchMethods';
import { Url } from '../../../Constants/ApiUrlConstant';
import { FaEye } from "react-icons/fa";


const OurProducts = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [productData, setProductData] = useState([])
  const [selectedPdfUrl, setSelectedPdfUrl] = useState('');


  const getAllProducts = async () => {
    try {
      const productDataResponse = await GETExcept(Url.getAllProducts);

      const getAllProduct = await productDataResponse.json();
      console.log("getAllProduct", getAllProduct)
      setProductData(getAllProduct);
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  React.useEffect(() => {
    getAllProducts()
  }, [])


  const articlesData = [
    {product_name:"Ns200",
    product_description: "A living beast",
    company_name:"Bajaj",
    product_price: "450000",
    product_category: "Sportz",},
    
    {product_name:"Ns200",
    product_description: "A living beast",
    company_name:"Bajaj",
    product_price: "450000",
    product_category: "Sportz"
  },
  {product_name:"Ns200",
  product_description: "A living beast",
  company_name:"Bajaj",
  product_price: "450000",
  product_category: "Sportz"
},
{product_name:"Ns200",
product_description: "A living beast",
company_name:"Bajaj",
product_price: "450000",
product_category: "Sportz"
},
{product_name:"Ns200",
product_description: "A living beast",
company_name:"Bajaj",
product_price: "450000",
product_category: "Sportz"
},
{product_name:"Ns200",
product_description: "A living beast",
company_name:"Bajaj",
product_price: "450000",
product_category: "Sportz"
}

  ];

  const handleProductOverView = (pdfUrl) => {
    setSelectedPdfUrl(pdfUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };


  return (
    <>
      <h2 className='OurProductTitle'>our Products</h2>
      <div className="HomeOfProduct">
        <section className="ProductArticles">
           {articlesData.map((article, index) => (
            <article className="productArticle" key={index}>
              {console.log("article", article)}
              <div className="article-wrapper_Products">
                <figure style={{
                  width: '330px', height: '200px' , display: "flex",
                  alignItems: "center",
                  justifyContent: "center" }}>
                <img
                  style={{ width: '100%', height: 'auto', }}
                  src={electricalImg}
                  alt=""
                />
              </figure>

              <div className="ProductArticle-body">
                <p >
                  {article.product_name}
                </p>
                <p className="productCategory">
                  {article.product_category}
                </p>
                <p className="productDesc">
                  {article.product_description}

                </p>
                <p onClick={() => handleProductOverView(Url.getImage + article.product_doc)} className="viewprodDOC">
                  view<FaEye />

                </p>

              </div>
            </div>
            </article>
          ))}
      </section>
      {/* <p className='viewMoreLink'> view more</p> */}
    </div >
      <PdfModal isOpen={modalIsOpen} closeModal={closeModal} pdfUrl={document} />

    </>
  );
};

export default OurProducts;

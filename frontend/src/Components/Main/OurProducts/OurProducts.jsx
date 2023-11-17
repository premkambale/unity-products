import React, { useContext, useState } from 'react';
import "./OurProducts.css";
import PdfModal from './PdfModal'; // Import the PdfModal component
import electricalImg from "../Sources/electricity-generation-transmission-distribution-guides.jpg"
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
    {
      id: 1,
      imageUrl: 'https://picsum.photos/id/1011/800/450',
      title: 'This is some title 1',
      content:
        "Lorem 1"
    },
    {
      id: 2,
      imageUrl: 'https://picsum.photos/id/1005/800/450',
      title: 'This is some title 2',
      content:
        "lorem 2"
    },
    {
      id: 3,
      imageUrl: 'https://picsum.photos/id/103/800/450',
      title: 'This is some title 3',
      content:
        "lorem 3"
    },
    {
      id: 1,
      imageUrl: 'https://picsum.photos/id/1011/800/450',
      title: 'This is some title 1',
      content:
        "lorem 4"
    },
    {
      id: 2,
      imageUrl: 'https://picsum.photos/id/1005/800/450',
      title: 'This is some title 2',
      content:
        "lorem 5"
    },
    {
      id: 3,
      imageUrl: 'https://picsum.photos/id/103/800/450',
      title: 'This is some title 3',
      content:
        "lorem 6"
    },
    {
      id: 1,
      imageUrl: 'https://picsum.photos/id/1011/800/450',
      title: 'This is some title 1',
      content:
        "lorem 7"
    },
    {
      id: 2,
      imageUrl: 'https://picsum.photos/id/1005/800/450',
      title: 'This is some title 2',
      content:
        "lorem 8"
    },

  ];

  const handleProductOverView = (pdfUrl) => {
    setSelectedPdfUrl(pdfUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };


  //   {
  //     "_id": "654bc3083ac3fc8d625181df",
  //     "product_name": "N32232",
  //     "company_name": "dasdqwd`asdasd",
  //     "product_price": 98239042323213220,
  //     "product_category": "productCat2",
  //     "product_quantity": 2,
  //     "product_image": [
  //         "product_images\\1699463943860NS200.jpg"
  //     ],
  //     "product_doc": "product_doc\\1699463943863dummy.pdf",
  //     "__v": 0,
  //     "product_description": "prem weds n"
  // }

  return (
    <>
      <h2 className='OurProductTitle'>our Products</h2>
      <div className="HomeOfProduct">
        <section className="ProductArticles">
          {console.log(productData)}
          {productData?.data?.map((article, index) => (
            <article className="productArticle" key={index}>
              {console.log("article", article)}
              <div className="article-wrapper_Products">
                <figure style={{ width: '200px', height: '200px', overflow: 'hidden' }}>
                  <img
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    src={Url.getImage + article.product_image}
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
        <p className='viewMoreLink'> view more</p>
      </div>
      <PdfModal isOpen={modalIsOpen} closeModal={closeModal} pdfUrl={Url.getImage + productData.product_doc} />

    </>
  );
};

export default OurProducts;

import React, { useState } from 'react';
import "./OurProducts.css";
import PdfModal from './PdfModal'; // Import the PdfModal component
import electricalImg from "../Sources/electricity-generation-transmission-distribution-guides.jpg"
import pdf from "../Sources/Sample Product Description.pdf"

const OurProducts = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPdfUrl, setSelectedPdfUrl] = useState('');

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

  return (
    <>
      <h2 className='OurProductTitle'>our Products</h2>
      <div className="HomeOfProduct">
        <section className="ProductArticles">
          {articlesData.map((article, index) => (
            <article className="productArticle" key={article.id}>
              <div className="article-wrapper_Products">
                <figure>
                  <img src={electricalImg} alt="" />
                </figure>
                <div className="ProductArticle-body">
                  <p onClick={() => handleProductOverView(article.pdfUrl)}>
                    {article.content}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>

      <PdfModal isOpen={modalIsOpen} closeModal={closeModal} pdfUrl={pdf} />
    </>
  );
};

export default OurProducts;

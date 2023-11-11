import React, { useState } from 'react';
import './OurNews.css';
import electric1 from "../../Main/Sources/Daily-News-Wrap-Up-Power-Ministry-Amends-License-Rules-to-Distribute-Electricity.png";
import { BiArrowBack } from "react-icons/bi"
import { useNavigate } from 'react-router-dom';
import { MdModeEditOutline } from 'react-icons/md';

const OurNews = () => {
    const [selectedCard, setSelectedCard] = useState(-1);
    const [role, setRole] = useState("")
    const navigate = useNavigate()

    const handleReadMore = (index) => {
        setSelectedCard(index);
    };

    const handleBackToFront = () => {
        setSelectedCard(-1);
    };

    const handleEditNews = () => {
        navigate("/Admin/EditNews")
    }

    const articlesData = [
        {
            id: 1,
            imageUrl: "electric1",
            title: 'This is some title 1',
            content:
                'Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.',
            animate: "fade-right"
        },
        {
            id: 2,
            imageUrl: 'https://picsum.photos/id/1005/800/450',
            title: 'This is some title 2',
            content:
                'Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.',
            animate: "fade-up"

        },
        {
            id: 3,
            imageUrl: 'https://picsum.photos/id/103/800/450',
            title: 'This is some title 3',
            content:
                'Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.',
            animate: "fade-left"

        },
    ];


   React.useEffect(() => {
  setRole(sessionStorage.getItem("Role"))
   }, [])
   

    return (
        <>
            <h2 className='OurNewsTitle'>our news</h2>
            <div className="HomeOfNews">

                <section className="articles">
                    {articlesData.map((article, index) => (
                        <article key={article.id} className={index % 2 === 0 ? 'business' : ''} data-aos={article.animate} data-aos-duration="1900">
                            <div className={`article-wrapper ${selectedCard === index ? 'flipped' : ''}`}>
                                <div className="front">
                                    <figure className='imag-container'>
                                        <img style={{ width: "width: 100%" }} className='News-img' src={electric1} alt="" />
                                    </figure>
                                    <div className="article-body">
                                        <p>{article.title} {role == "ADMIN" && <button onClick={handleEditNews} className='NewsEditBTN'><MdModeEditOutline /></button>} </p>
                                        <p>{article.content}</p>
                                        <a onClick={() => handleReadMore(index)} className="read-more">
                                            Read more <span className="sr-only">about {article.title}</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="icon"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div className="back">
                                    <div className="back-content">
                                        <button onClick={handleBackToFront} className="back-button">
                                            <BiArrowBack />
                                        </button>
                                        <p>Back of the card - Text description goes here. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis voluptatibus quidem doloribus vel vero a nobis officia eaque dolore expedita accusamus nam in quis at ipsum quisquam ut tenetur ea modi numquam, deserunt voluptate sint totam minus. Mollitia maxime, aut exercitationem laborum beatae tempore, consectetur fugit asperiores tenetur adipisci delectus voluptas. Eligendi fugiat quae eaque delectus voluptate ad similique commodi, autem provident facilis facere! Placeat, fuga temporibus ea id impedit velit dolores maiores aut dolorum, dolorem corrupti assumenda nemo officia iste commodi, adipisci tempora obcaecati?  </p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </section>
            </div >
        </>
    );
};

export default OurNews;

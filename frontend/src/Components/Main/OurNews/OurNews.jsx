import React, { useContext, useState } from 'react';
import './OurNews.css';
import electric1 from "../../Main/Sources/Daily-News-Wrap-Up-Power-Ministry-Amends-License-Rules-to-Distribute-Electricity.png";
import { BiArrowBack } from "react-icons/bi"
import { useNavigate } from 'react-router-dom';
import { MdModeEditOutline } from 'react-icons/md';
import { Url } from '../../../Constants/ApiUrlConstant';
import { GET } from '../../../Constants/FetchMethods';
import { contextData } from '../../../Context/UnityContext';

const OurNews = () => {
    const [selectedCard, setSelectedCard] = useState(-1);
    const [projectData, setProjectData] = useState([])

    const { setNewsId } = useContext(contextData)

    // console.log("projectData", projectData)


    const [role, setRole] = useState("")
    const navigate = useNavigate()

    const handleReadMore = (index) => {
        setSelectedCard(index);
    };

    const handleBackToFront = () => {
        setSelectedCard(-1);
    };

    const handleEditNews = (newsId) => {
        setNewsId(newsId)
        navigate("/Admin/EditNews")
    }


    const location = window.location.pathname;

    const getAllNewsData = async () => {
        try {
            const getprojectRaw = await fetch(Url.getAllNewsData);
            const getprojectDataJson = await getprojectRaw.json();

            if (location === '/Home') {
                if (getprojectDataJson.success) {
                    setProjectData(getprojectDataJson.data.slice(0, 3));
                } else {
                    console.log("API request successful but response indicates failure.");
                }
            } else {
                if (getprojectDataJson.success) {
                    setProjectData(getprojectDataJson.data);
                } else {
                    console.log("API request successful but response indicates failure.");
                }
            }
        } catch (error) {
            console.log("Error fetching or parsing data:", error);
        }
    }



    React.useEffect(() => {
        setRole(sessionStorage.getItem("Role"))
        getAllNewsData()
    }, [])


    return (
        <>
            <div className="trending-header">
                <div className="line"></div>
                <h2 className='trendingH2'>Our News</h2>
                <div className="line"></div>
            </div>            <div className="HomeOfNews">
                <section className="articles">
                    {projectData.length > 0 ? (
                        projectData.map((article, index) => (
                            <article key={article._id} className={index % 2 === 0 ? 'business' : ''} data-aos={article.animate} data-aos-duration="1900">
                                <div className={`article-wrapper ${selectedCard === index ? 'flipped' : ''}`}>
                                    <div className="front">
                                        <figure className='imag-container' key={article._id}>
                                            <img
                                                style={{ width: '100%', height: 'auto' }}
                                                className='News-img'
                                                // src={`${Url.getImage}${article.blog_image[0].replace(/\\/g, '/')}`}
                                                src={`${Url.getImage + article.blog_image[0]}`}
                                                alt='Image'
                                            />
                                        </figure>
                                        <div className="article-body">
                                            <p style={{ fontWeight: "600" }}>{article.blog_name} {role === "ADMIN" && <button onClick={() => handleEditNews(article._id)} className='NewsEditBTN'><MdModeEditOutline /></button>} </p>
                                            <p>{new Date(article.create_date).toLocaleDateString()}</p>
                                            <p>{article.blog_Summary}</p>
                                            <a onClick={() => handleReadMore(index)} className="read-more">
                                                Read more <span className="sr-only">about {article.blog_name}</span>
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
                                            <p className='backDesc'>{article.blog_description}</p>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))
                    ) : (
                        <>
                            {[1, 2, 3].map((_, index) => (
                                <article key={index} className="placeholder-card">
                                    <div className="article-wrapper">
                                        <div className="front">
                                            <figure className='imag-container'>
                                                <img
                                                    style={{ width: '100%', height: 'auto' }}
                                                    className='News-img'
                                                    src="https://via.placeholder.com/300"
                                                    alt='Placeholder'
                                                />
                                            </figure>
                                            <div className="article-body">
                                                <p>No Data Available</p>
                                                <p>Please check back later</p>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </>
                    )}
                </section>
            </div>
        </>


    );
};

export default OurNews;

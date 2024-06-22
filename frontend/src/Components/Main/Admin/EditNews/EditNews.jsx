import React, { useState, useEffect, useContext } from 'react';
import { Badge, Button, Form } from 'react-bootstrap';
import { contextData } from '../../../../Context/UnityContext';
import { GET, GETExcept, PUT } from '../../../../Constants/FetchMethods';
import { Url } from '../../../../Constants/ApiUrlConstant';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const EditNews = () => {
    const { newsId } = useContext(contextData);
    console.log('newsId', newsId);

    const token = sessionStorage.getItem("token");

    const navigate = useNavigate();

    const [newsData, setNewsData] = useState({
        blog_name: "",
        blog_Summary: "",
        blog_description: "",
        blog_image: [],
        create_date: ""
    });

    const formatDateString = (dateString) => {
        const date = new Date(dateString);
        return date.toISOString().split('T')[0]; // Format to "yyyy-MM-dd"
    };

    const handleChange = (inputName, inputValue) => {
        setNewsData(prevNewsData => ({
            ...prevNewsData,
            [inputName]: inputValue
        }));
    };

    const getNewsDataById = async () => {
        try {
            const getNews = await GETExcept(Url.getNewsById.replace(':blogId', newsId));
            const getNewsData = await getNews.json();
            const {
                blog_name,
                blog_Summary,
                blog_description,
                blog_image,
                create_date,
            } = getNewsData.data[0];
            setNewsData({
                blog_name: blog_name,
                blog_Summary: blog_Summary,
                blog_description: blog_description,
                blog_image: blog_image,
                create_date: formatDateString(create_date)
            });
        } catch (error) {
            console.log("err", error);
        }
    };

    useEffect(() => {
        getNewsDataById();
    }, []);

    const handleFileChange = (e) => {
        const files = e.target.files;
        if (files) {
            const fileList = Array.from(files);
            setNewsData({
                ...newsData,
                blog_image: fileList,
            });
        }
    };

    const handleEditNews = async (e) => {
        e.preventDefault();
        try {
            const editResp = await PUT(Url.editNews.replace(':blogId', newsId), token, newsData);
            const jsonResp = await editResp.json();
            console.log("jsonResp", jsonResp);
            if (jsonResp.success) {
                toast.success(jsonResp.message, {
                    position: "bottom-right",
                    theme: "colored",
                    className: "custom-success-msg"
                });
                navigate("/Admin");
            } else {
                toast.error(jsonResp.message, {
                    position: "bottom-right",
                    theme: "colored",
                    className: "custom-error-msg"
                });
            }
        } catch (error) {
            console.log('failed to Edit product');
        }
    };

    return (
        <>
            <ToastContainer />

            <div className="addNewsPage">
                <div className="AddproductTitle">
                    <Badge bg="info">Edit News</Badge>
                </div>
                <div className="scrollable-form">
                    <Form className="form-container" onSubmit={handleEditNews}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>News Title</Form.Label>
                            <Form.Control
                                onChange={(e) => handleChange(e.target.name, e.target.value)}
                                name="blog_name"
                                type="text"
                                value={newsData.blog_name}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label> News Summary</Form.Label>
                            <Form.Control name="blog_Summary" onChange={e => handleChange(e.target.name, e.target.value)} type="text" value={newsData.blog_Summary} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>News Description</Form.Label>
                            <Form.Control name="blog_description" onChange={e => handleChange(e.target.name, e.target.value)} type="textarea" value={newsData.blog_description} />
                        </Form.Group>

                        <Form.Group controlId="formFileImage" className="mb-3">
                            <Form.Label> News Image</Form.Label>
                            <Form.Control name="blog_image" onChange={handleFileChange} type="file" />
                            <img src={newsData.blog_image} alt="" />
                        </Form.Group>
                        <Button style={{ marginTop: "15px" }} type="submit" className='addNewsBTn'>
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    );
};

export default EditNews;

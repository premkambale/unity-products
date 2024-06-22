import React, { useState } from 'react'
import "./CreateNews.css"
import { Badge, Button, Form } from 'react-bootstrap'
import { POST } from '../../../../../Constants/FetchMethods'
import { Url } from '../../../../../Constants/ApiUrlConstant'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

const CreateNews = () => {
    const token = sessionStorage.getItem("token")
    const navigate = useNavigate()

    const [newsData, setNewsData] = useState({
        blog_name: "",
        blog_Summary: "",
        blog_description: "",
        blog_image: null,
        create_date: ""
    })


    // Set initial state for loading and success
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');


    console.log("newsData", newsData)

    const handleFileChange = (e) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            setNewsData({
                ...newsData,
                blog_image: files[0],
            });
        }
    };


    const handleChange = (inputName, inputValue) => {
        console.log("inputName", inputName, "inputValue", inputValue)
        setNewsData(prevProductData => ({
            ...prevProductData,
            [inputName]: inputValue
        }))
    }


    const handleNewsEdit = () => {
        navigate("/Admin/EditNews")
    }

    const handleAddNews = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            const myHeaders = new Headers();
            myHeaders.append("Authorization", token);
            const formdata = new FormData();
            formdata.append("blog_name", newsData?.blog_name);
            formdata.append("blog_Summary", newsData?.blog_Summary);
            formdata.append("blog_description", newsData?.blog_description);
            formdata.append("blog_image", newsData?.blog_image);
            formdata.append("create_date", newsData?.create_date);
            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: formdata,
                redirect: 'follow'
            };
            const response = await fetch(Url.createNews, requestOptions);
            const data = await response.json(); // Assuming response is JSON

            if (response.success) {
                setSuccess(true);
                toast.success(response.message, {
                    position: "bottom-right",
                    theme: "colored",
                    className: "custom-success-msg"
                });
                navigate("/Admin")
                setLoading(false);
            } else {
                toast.error(response.message, {
                    position: "bottom-right",
                    theme: "colored",
                    className: "custom-error-msg"
                });
                throw new Error(data.message || "Failed to create blog");
            }
        } catch (error) {
            setErrorMessage(error.message || "Something went wrong");
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };


    return (
        <>
              <ToastContainer />

            <div className="addNewsPage">
                <div className="AddproductTitle">
                    <Badge bg="info">Create News</Badge>
                </div>
                <div className="scrollable-form">
                    <form className="form-container" onSubmit={handleAddNews}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>News Title</Form.Label>
                            <Form.Control onChange={e => handleChange(e.target.name, e.target.value)}
                                required
                                name="blog_name"
                                type="text" placeholder="Enter News title" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label> News Summary</Form.Label>
                            <textarea required name="blog_Summary" onChange={e => handleChange(e.target.name, e.target.value)} type="text" placeholder="Enter Summary" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>News Description</Form.Label>
                            <textarea required name="blog_description" onChange={e => handleChange(e.target.name, e.target.value)} type="textarea" placeholder="Enter description" />
                        </Form.Group>
                        <Form.Group controlId="formFileImage" className="mb-3">
                            <Form.Label> News Image</Form.Label>
                            <Form.Control required name="blog_image" onChange={handleFileChange} type="file" placeholder="Please Upload image" />

                        </Form.Group>

                        <Form.Group controlId="formFileImage" className="mb-3">
                            <Form.Label>Create Date</Form.Label>
                            <Form.Control required name="create_date" onChange={e => handleChange(e.target.name, e.target.value)} type="date" placeholder="Please Upload image" />

                        </Form.Group>

                        <Button

                            style={{ marginTop: "15px" }}
                            type="submit"
                            className='addNewsBTn'
                        >
                            Submit
                        </Button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateNews
import React, { useState } from 'react'
import "./CreateNews.css"
import { Badge, Button, Form } from 'react-bootstrap'
import { POST } from '../../../../../Constants/FetchMethods'
import { Url } from '../../../../../Constants/ApiUrlConstant'

const CreateNews = () => {
    const token = sessionStorage.getItem("token")

    const [newsData, setNewsData] = useState({
        blog_name: "",
        blog_Summary: "",
        blog_description: "",
        blog_image: null,
        create_date: ""
    })

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

    const handleAddNews = async (e) => {
        e.preventDefault();
        // const token = sessionStorage.getItem("token")
        // try {

        //     const createNews = await POST(Url.createNews, token, newsData)
        //     const createNewsData = await createNews.json()
        //     console.log("createNewsData", createNewsData)
        //     if (createNewsData.success == true) {
        //         alert("news Added Successfully")
        //     }
        //     else {
        //         alert("news adding failed")
        //     }

        // } catch (error) {
        //     alert("failure while adding news")

        // }

        var myHeaders = new Headers();
        myHeaders.append("Authorization", token);

        var formdata = new FormData();
        formdata.append("blog_name", newsData?.blog_name);
        formdata.append("blog_Summary", newsData?.blog_Summary);
        formdata.append("blog_description", newsData?.blog_description);
        formdata.append("blog_image", newsData?.blog_image);
        formdata.append("create_date", newsData?.create_date);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        fetch("http://localhost:5500/blogs/create-blog", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

    }


    return (
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

    )
}

export default CreateNews
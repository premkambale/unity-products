import React, { useState } from 'react'
import { useContext } from 'react'
import { Badge, Button, Form } from 'react-bootstrap'
import { contextData } from '../../../../Context/UnityContext'
import { GET, GETExcept } from '../../../../Constants/FetchMethods'
import { Url } from '../../../../Constants/ApiUrlConstant'

const EditNews = () => {
    const { newsId } = useContext(contextData)
    console.log("newsId", newsId)

    const [newsData, setNewsData] = useState({
        blog_name: "",
        blog_Summary: "",
        blog_description: "",
        blog_image: [],
        create_date: ""
    })


    const handleChange = (inputName, inputValue) => {
        console.log("inputName", inputName, "inputValue", inputValue)
        setNewsData(prevProductData => ({
            ...prevProductData,
            [inputName]: inputValue
        }))
    }

    const getNewsDataById = async () => {
        try {
            const getNews = await GETExcept(Url.getNewsById + newsId )
            const getNewsData = await getNews.json()
            console.log("getNewsData", getNewsData)

        } catch (error) {
            console.log("err", error)

        }

    }

    React.useEffect(() => {
        getNewsDataById()
    }, [])


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


    const handleEditNews = () => {
        alert("news edited")
    }



    return (
        <div className="addNewsPage">
            <div className="AddproductTitle">
                <Badge bg="info">Edit News</Badge>
            </div>
            <div className="scrollable-form">
                <Form className="form-container">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>News Title</Form.Label>
                        <Form.Control onChange={e => handleChange(e.target.name, e.target.value)}
                            name="blog_name"
                            type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label> News Summary</Form.Label>
                        <Form.Control name="blog_Summary" onChange={e => handleChange(e.target.name, e.target.value)} type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>News Description</Form.Label>
                        <Form.Control name="blog_description" onChange={e => handleChange(e.target.name, e.target.value)} type="textarea" />
                    </Form.Group>


                    <Form.Group controlId="formFileImage" className="mb-3">
                        <Form.Label> News Image</Form.Label>
                        <Form.Control name="blog_image" onChange={handleFileChange} type="file" />

                    </Form.Group>

                    <Form.Group controlId="formFileImage" className="mb-3">
                        <Form.Label>Create Date</Form.Label>
                        <Form.Control name="create_date" onChange={e => handleChange(e.target.name, e.target.value)} type="date" />

                    </Form.Group>

                    <Button
                        onClick={handleEditNews}
                        style={{ marginTop: "15px" }}
                        type="submit"
                        className='addNewsBTn'
                    >
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default EditNews
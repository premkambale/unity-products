import React, { useState, useCallback } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { useDropzone } from 'react-dropzone';

import './AddProduct.css';

const AddProduct = () => {
   const [uploadedFiles, setUploadedFiles] = useState([]);
  const [showQuantityCounter, setShowQuantityCounter] = useState(true);
  const [imagePreview, setImagePreview] = useState(null);

  const [productData, setProductData] = useState({
    product_name: "",
    product_description: "",
    company_name: "",
    product_price: "",
    product_quantity: 0,
    // product_image: "",
    // document: ""

  })

   const token =sessionStorage.getItem("token")

  console.log("productData", productData)


  const handleAddProduct = (e) => {
    e.preventDefault()
    fetch("http://localhost:5500/products/create-product", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json', 
        "Authorization": "Bearer " + token,

      },
      body: JSON.stringify(productData)
    })
      .then((res) => res.json())
      .then((resData) => {
        console.log("resData", resData)
        if (resData.success == true) {
          // setShowError(false)
          //  sessionStorage.setItem("Role",  (resData.role))

          debugger
          // navigate("/Home")
          alert(resData.message)

        }
        else {
          // setShowError(true)
          alert(resData.message)

        }


      })
      .catch((err) => {
        console.log("error while login", err.message)
      })
  }



  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setUploadedFiles(acceptedFiles);
    setImagePreview(URL.createObjectURL(file));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
  });

  const handleDropdownChange = (e) => {
    const selectedOption = e.target.value;
    setShowQuantityCounter(selectedOption === 'inventory');
  };

  const renderUploadedFiles = () => {
    return uploadedFiles.map((file, index) => (
      <div key={index}>
        <p>{file.name}</p>
      </div>
    ));
  };

  const incrementQuantity = () => {
    setProductData((prevProductData) => ({
      ...prevProductData,
      product_quantity: prevProductData.product_quantity + 1,
    }));
  };


  const decrementQuantity = () => {
    setProductData((prevProductData) => ({
      ...prevProductData,
      product_quantity: prevProductData.product_quantity - 1,
    }));
  };


  const handleChange = (inputName, inputValue) => {
    console.log("inputName", inputName, "inputValue", inputValue)
    setProductData(prevProductData => ({
      ...prevProductData,
      [inputName]: inputValue
    }))
  }



  return (
    <div className="addProductPage">
      <div className="AddproductTitle">
        <Badge bg="info">Add Product</Badge>
        <div className="dropdown-container">
          <select className="ProductAddDropdown" name="productType" onChange={handleDropdownChange} id="">
            <option value="inventory">Add to inventory</option>
            <option value="showCase">Add to showcase users</option>
          </select>
        </div>
      </div>
      <div className="scrollable-form">
        <Form className="form-container">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Product Name</Form.Label>
            <Form.Control onChange={e => handleChange(e.target.name, e.target.value)}
              name="product_name"
              type="text" placeholder="Enter product name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Company name</Form.Label>
            <Form.Control name="company_name" onChange={e => handleChange(e.target.name, e.target.value)} type="email" placeholder="Enter company name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label> Price</Form.Label>
            <Form.Control name="product_price" onChange={e => handleChange(e.target.name, e.target.value)} type="email" placeholder="Enter price" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Description</Form.Label>
            <Form.Control name="product_description" onChange={e => handleChange(e.target.name, e.target.value)} type="email" placeholder="Enter description" />
          </Form.Group>
          {/* {showQuantityCounter && (
            <Form.Group>
              <Form.Label>Quantity</Form.Label>
              <div className="d-flex align-items-center width-21vh">
                <Button variant="outline-secondary" onClick={decrementQuantity}>
                  -
                </Button>
                <Form.Control
                  type="number"
                  value={quantity}
                  readOnly
                  className="text-center"
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                />
                <Button variant="outline-secondary" onClick={incrementQuantity}>
                  +
                </Button>
              </div>
            </Form.Group>
          )} */}
          {showQuantityCounter == true && (
            <Form.Group>
              <Form.Label>Quantity</Form.Label>
              <div className="d-flex align-items-center width-21vh">
                <Button variant="outline-secondary" onClick={decrementQuantity}>
                  -
                </Button>
                <Form.Control
                  type="number"
                  name='product_quantity'
                  value={productData?.product_quantity}
                  readOnly
                  className="text-center"
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                />
                <Button variant="outline-secondary" onClick={incrementQuantity}>
                  +
                </Button>
              </div>
            </Form.Group>
          )}


          <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Label>Image</Form.Label>
            <div {...getRootProps()} className="dropzone">
              <input {...getInputProps()} />
              {imagePreview ? (
                <img src={imagePreview} alt="Preview" className="image-preview" />
              ) : (
                <p>Drag & drop or click to upload an image</p>
              )}
            </div>
            {renderUploadedFiles()}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Document</Form.Label>
            <Form.Control name="product_description" onChange={e => handleChange(e.target.name, e.target.value)} type="file" placeholder="Enter description" />
          </Form.Group>
          <Button
            onClick={handleAddProduct}
            style={{ marginTop: "15px" }}
            variant="primary"
            type="submit"
        
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddProduct;

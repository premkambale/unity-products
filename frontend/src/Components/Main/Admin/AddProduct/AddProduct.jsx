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
    product_price: 0,
    product_quantity: 0,
    product_image: [],
    product_doc: {}

  })

  const token = sessionStorage.getItem("token")





  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   console.log("e.target.files[0]", e.target.files[0]
  //   )

  //   // if (file && file.type.startsWith("image/")) {
  //   setProductData({
  //     ...productData,
  //     product_image: file,
  //   });

  //   // const reader = new FileReader();

  //   // reader.onload = (e) => {
  //   //   const imagePreview = e.target.result;
  //   //   setProductData({
  //   //     ...productData,
  //   //     imagePreview,
  //   //   });
  //   // };

  //   // reader.readAsDataURL(file);
  //   // }
  // };

  const handleFileChange = (e) => {
    const files = e.target.files; // Get an array of selected files

    if (files) {
      // Convert the files array to an array of File objects
      const fileList = Array.from(files);

      setProductData({
        ...productData,
        product_image: fileList, // Store the array of selected image files
      });
    }
  };

  // I want to send image in array format


  const handleDocChange = (e) => {
    const doc = e.target.files[0];
    setProductData({
      ...productData,
      product_doc: doc,
    });

  }

  const handleAddProduct = (e) => {
    console.log("token", token)
    console.log("productData", productData)
    const body = { ...productData }
    const price = parseInt(productData.product_price);
    e.preventDefault()
    fetch("http://localhost:5500/products/create-product", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Authorization": "Bearer " + token,

      },
      body: JSON.stringify({ ...body, product_price: price })
    })
      .then((res) => res.json())
      .then((resData) => {
        console.log("resData", resData)
        if (resData.success == true) {
          alert(resData.message)
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



  // const onDrop = useCallback((acceptedFiles) => {
  //   const file = acceptedFiles[0];
  //   setUploadedFiles(acceptedFiles);
  //   setImagePreview(URL.createObjectURL(file));
  // }, []);

  // const { getRootProps, getInputProps } = useDropzone({
  //   onDrop,
  //   accept: 'image/*',
  // });

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
        <Form className="form-container" enctype="multipart/form-data">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Product Name</Form.Label>
            <Form.Control onChange={e => handleChange(e.target.name, e.target.value)}
              name="product_name"
              type="text" placeholder="Enter product name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Company name</Form.Label>
            <Form.Control name="company_name" onChange={e => handleChange(e.target.name, e.target.value)} type="text" placeholder="Enter company name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label> Price</Form.Label>
            <Form.Control name="product_price" onChange={e => handleChange(e.target.name, e.target.value)} type="number" placeholder="Enter price" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Description</Form.Label>
            <Form.Control name="product_description" onChange={e => handleChange(e.target.name, e.target.value)} type="text" placeholder="Enter description" />
          </Form.Group>

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

          <Form.Group controlId="formFileImage" className="mb-3">
            <Form.Label>Image</Form.Label>
            {/* <div className="dropzone">
              {productData.imagePreview ? (
                <img
                  src={productData.imagePreview}
                  alt="Preview"
                  className="image-preview"
                />
              ) : (
                <p>Drag & drop or click to upload an image</p>
              )} */}
            {/* <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              name='product_image'
            /> */}
            <Form.Control name="product_image" onChange={handleFileChange} type="file" placeholder="Please Upload image" />

            {/* </div> */}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Document</Form.Label>
            <Form.Control name="product_doc" onChange={handleDocChange} type="file" placeholder="Please Upload document" />
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

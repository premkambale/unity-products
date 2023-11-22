import React, { useState, useCallback } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { ToastContainer, toast } from 'react-toastify';
import { useDropzone } from 'react-dropzone';
import sampleImage from "../../Sources/sampleImage.jpg"
import samplePdf from "../../Sources/Sample Product Description.pdf"

import './AddProduct.css';
import { POSTWImage } from '../../../../Constants/FetchMethods';
import { Url } from '../../../../Constants/ApiUrlConstant';

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
    product_doc: {},
    product_category: ""

  })

  const token = sessionStorage.getItem("token")

  console.log("productData", productData)


  const handleFileChange = (e) => {
    const files = e.target.files;

    setProductData({
      ...productData,
      product_image: files,
    });
  }



  const handleDocChange = (e) => {
    const doc = e.target.files[0];
    setProductData({
      ...productData,
      product_doc: doc,
    });
  }

  const handleAddProduct = async (e) => {
     e.preventDefault();
    var formdata = new FormData();
    formdata.append("product_name", productData?.product_name);
    formdata.append("product_description", productData?.product_description)
    formdata.append("company_name", productData?.company_name);
    formdata.append("product_price", productData?.product_price);
    formdata.append("product_quantity", productData?.product_quantity);
    formdata.append("product_image", productData?.product_image);
    formdata.append("product_doc", productData?.product_doc);
    formdata.append("product_category", productData?.product_category);

    const addProductData = await POSTWImage(Url.createProduct, token, formdata)
    const addproduct = await addProductData.json()
    console.log("addproduct", addproduct)

  }


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

    setProductData((prevState) => {
      return { ...prevState, product_quantity: prevState.product_quantity + 1 }
    })
  };


  const decrementQuantity = () => {
    setProductData((prevState) => {
      return { ...prevState, product_quantity: prevState.product_quantity - 1 }
    })
  };


  const handleChange = (inputName, inputValue) => {
    console.log("inputName", inputName, "inputValue", inputValue)
    setProductData(prevProductData => ({
      ...prevProductData,
      [inputName]: inputValue
    }))
  }
  return (
    <>
      <ToastContainer />
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
          <form className="form-container" onSubmit={handleAddProduct}>
            <div className="mb-3" controlId="exampleForm.ControlInput1">
              <label>Product Name</label>
              <input required onChange={e => handleChange(e.target.name, e.target.value)}
                name="product_name"
                type="text" placeholder="Enter product name" />
            </div>
            <div className="mb-3" controlId="exampleForm.ControlInput1">
              <label>Company name</label>
              <input required name="company_name" onChange={e => handleChange(e.target.name, e.target.value)} type="text" placeholder="Enter company name" />
            </div>
            <div className="mb-3" controlId="exampleForm.ControlInput1">
              <label> Price</label>
              <input required name="product_price" onChange={e => handleChange(e.target.name, e.target.value)} type="number" placeholder="Enter price" />
            </div>
            <div className="mb-3" controlId="exampleForm.ControlInput1">
              <label>Description</label>
              <input required name="product_description" onChange={e => handleChange(e.target.name, e.target.value)} type="text" placeholder="Enter description" />
            </div>

            {showQuantityCounter == true && (
              <div>
                <label>Quantity</label>
                <div className="d-flex align-items-center width-21vh">
                  <Button type='button' variant="outline-secondary" onClick={decrementQuantity}>
                    -
                  </Button>
                  <input
                    type="number"
                    name='product_quantity'
                    value={productData?.product_quantity}
                    readOnly
                    className="text-center"
                    onChange={(e) => handleChange(e.target.name, e.target.value)}
                  />
                  <Button variant="outline-secondary" type='button' onClick={incrementQuantity}>
                    +
                  </Button>
                </div>
              </div>
            )}

            <div controlId="formFileImage" className="mb-3">
              <label>Image</label>
              <input required name="product_image" onChange={handleFileChange} type="file" placeholder="Please Upload image" />

            </div>

            <div style={{ marginTop: "-16px" }}>
              <label>Category</label>
              <div className="dropdown-container">
                <select required
                  className="CategoryDropdown"
                  name="product_category"
                  onChange={(e) => handleChange("product_category", e.target.value)}
                  id=""
                >
                  <option value="productCat1">SwitchGear</option>
                  <option value="productCat2">Panel</option>
                </select>
              </div>
            </div>
            <div className="mb-3" controlId="exampleForm.ControlInput1">
              <label>Document</label>
              <input required name="product_doc" onChange={handleDocChange} type="file" placeholder="Please Upload document" />
            </div>
            <button

              style={{ marginTop: "15px" }}
              type="submit"
              className='addproductBTn'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;

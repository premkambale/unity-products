import { useState, useCallback, useEffect, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button"
import Badge from 'react-bootstrap/esm/Badge';
import { useDropzone } from 'react-dropzone';

import "./EditProduct.css"
import { GET, PUT } from '../../../../Constants/FetchMethods';
import { Url } from '../../../../Constants/ApiUrlConstant';
import { contextData } from '../../../../Context/UnityContext';



const EditProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);
  const [showQuantityCounter, setShowQuantityCounter] = useState(true);
  const { productIdToEdit } = useContext(contextData);



  const [productData, setProductData] = useState({
    product_name: "",
    product_description: "",
    company_name: "",
    product_price: "",
    product_image: "",
    product_category: "",
    document: ""
  })





  const getProductData = async () => {
    try {
      const getProductDataById = await GET(Url.getProductById.replace('id', productIdToEdit))
      const getProdById = await getProductDataById.json();
      console.log("getAllProd ======================================", getProdById)
      const {
        product_name,
        company_name,
        product_price,
        product_category,
        product_quantity,
        product_image,
        product_doc,
        product_description
      } = getProdById.data[0];
      setProductData({
        product_name: product_name,
        product_description: product_description,
        company_name: company_name,
        product_price: product_price,
        product_image: product_image,
        product_category: product_category,
        document: product_doc
      })

    } catch (error) {
      console.log("error", error)
    }
  }


  useEffect(() => {
    getProductData()
  }, [])





  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setUploadedFiles(acceptedFiles);
    setImagePreview(URL.createObjectURL(file));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
  });

  const renderUploadedFiles = () => {
    return uploadedFiles.map((file, index) => (
      <div key={index}>
        <p>{file.name}</p>
      </div>
    ));
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleDropdownChange = (e) => {
    const selectedOption = e.target.value;
    setShowQuantityCounter(selectedOption === 'inventory');
  };

  const handleChange = (inputName, inputValue) => {
    setProductData(prevProductData => ({
      ...prevProductData,
      [inputName]: inputValue
    }))
  }

  const handleEditProduct = async () => {
    const token = sessionStorage.getItem("token")
     try {
      const editResp = await PUT(Url.editProducts + productIdToEdit, token, productData);
      const jsonResp = await editResp.json();
      console.log("jsonResp",jsonResp)
      if (jsonResp.success == true) {
        alert('product Edited successfully')
      }
      else {
        alert('failed to Edit product aoids')
      }
    } catch (error) {
      console.log('failed to Edit product')
    }
  }
  return (
    <>
      <div className="addProductPage">
        <div className="AddproductTitle">
          <Badge bg="info">Edit Product</Badge>
          <div className="dropdown-container">
            <select className="ProductAddDropdown" name="productType" onChange={handleDropdownChange} id="">
              <option value="inventory">Edit to inventory</option>
              <option value="showCase">Edit to showcase users</option>
            </select>
          </div>
        </div>
        <div className="scrollable-form">
          <Form className="form-container">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Product Name</Form.Label>
              <Form.Control name='product_name' type="text" onChange={e => handleChange(e.target.name, e.target.value)} value={productData?.product_name} placeholder="Enter product name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Company name</Form.Label>
              <Form.Control name='company_name' type="email" onChange={e => handleChange(e.target.name, e.target.value)} value={productData?.company_name} placeholder="Enter company name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label> Price</Form.Label>
              <Form.Control name='product_price' type="email" onChange={e => handleChange(e.target.name, e.target.value)} value={productData?.product_price} placeholder="Enter price" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Description</Form.Label>
              <Form.Control name='product_description' type="email" onChange={e => handleChange(e.target.name, e.target.value)} value={productData?.product_description} placeholder="Enter description" />
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
                    name='quantity'
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
            <Form.Group style={{ marginTop: "-16px" }}>
              <Form.Label>Category</Form.Label>
              <div className="dropdown-container">
                <select className="CategoryDropdown" name="product_category" value={productData?.product_category} onChange={(e) => handleChange(e.target.name, e.target.value)} id="">
                  <option value="productCat1">switchGear</option>
                  <option value="productCat2">Panel</option>
                </select>
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Document</Form.Label>
              <Form.Control name="product_description" onChange={e => handleChange(e.target.name, e.target.value)} type="file" placeholder="Enter description" />
            </Form.Group>
            <Button
              className='submitBTNFOrm'
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                handleEditProduct()
              }}
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>

  )

}

export default EditProduct

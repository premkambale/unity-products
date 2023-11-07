import { useState, useCallback, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button"
import Badge from 'react-bootstrap/esm/Badge';
import { useDropzone } from 'react-dropzone';

import "./EditProduct.css"



const EditProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);
  const [showQuantityCounter, setShowQuantityCounter] = useState(true);

  useEffect(() => {
    console.log("counter :", showQuantityCounter);
  }, [])
  const [productData, setProductData] = useState({

    product_name: "",
    product_description: "",
    company_name: "",
    product_price: "",
    product_image: "",
    document: ""

  })


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
              <Form.Control type="text" placeholder="Enter product name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Company name</Form.Label>
              <Form.Control type="email" placeholder="Enter company name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label> Price</Form.Label>
              <Form.Control type="email" placeholder="Enter price" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Description</Form.Label>
              <Form.Control type="email" placeholder="Enter description" />
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
                <select className="CategoryDropdown" name="product_category" onChange={(e) => handleChange(e.target.name, e.target.value)} id="">
                  <option value="productCat1">switchGear</option>
                  <option value="productCat1">Panel</option>
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

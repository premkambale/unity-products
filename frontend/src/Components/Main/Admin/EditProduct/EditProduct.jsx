import { useState, useCallback, useEffect, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button"
import Badge from 'react-bootstrap/esm/Badge';
import { useDropzone } from 'react-dropzone';

import "./EditProduct.css"
import { GET, PUT } from '../../../../Constants/FetchMethods';
import { Url } from '../../../../Constants/ApiUrlConstant';
import { contextData } from '../../../../Context/UnityContext';
import { ToastContainer, toast } from 'react-toastify';
import Loader from '../../Loader/Loader';



const EditProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);
  const [showQuantityCounter, setShowQuantityCounter] = useState(true);
  const { productIdToEdit } = useContext(contextData);
  console.log('productIdToEdit', productIdToEdit)
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [selectedImages, setSelectedImages] = useState(null);
  const [loading, setLoading] = useState(false)




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
    setLoading(true)
    try {
      const getProductDataById = await GET(Url.getProductById.replace('id', productIdToEdit))
      const getProdById = await getProductDataById.json();
      if (getProdById.success) {
        setLoading(false)
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
          product_quantity: product_quantity,
          product_price: product_price,
          product_image: product_image,
          product_category: product_category,
          document: product_doc
        })
      } else {
        setLoading(false)
        toast.error(getProdById.message, {
          position: "bottom-right",
          theme: "colored",
          className: "custom-error-msg"
        });
      }
    } catch (error) {
      console.log("error", error)
    }
  }


  useEffect(() => {
    getProductData()
  }, [])




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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
    handleChange(name, value);
  };

  const handleImageChange = (e) => {
    setSelectedImages(e.target.files);
    setProductData(prevProductData => ({
      ...prevProductData,
      product_image: e.target.files
    }))
    handleChange(e.target.name, e.target.files);
  };

  const handleDocChange = (e) => {
    setSelectedDoc(e.target.files)
    setProductData(prevProductData => ({
      ...prevProductData,
      document: e.target.files
    }))
    handleChange(e.target.name, e.target.files[0]);
  };

  const handleEditProduct = async () => {
    setLoading(true)
    const token = sessionStorage.getItem("token")
    try {
      const editResp = await PUT(Url.editProducts + productIdToEdit, token, productData);
      const jsonResp = await editResp.json();
      if (jsonResp.success) {
        setLoading(false)
        toast.success(jsonResp.message, {
          position: "bottom-right",
          theme: "colored",
          className: "custom-success-msg"
        });
      }
      else {
        setLoading(false)
        toast.error(jsonResp.message, {
          position: "bottom-right",
          theme: "colored",
          className: "custom-error-msg"
        });
      }
    } catch (error) {
      setLoading(false)
      console.log('failed to Edit product')
    }
  }
  return (
    <>
      <ToastContainer />
      <div className="addProductPage">
        {loading && <Loader />}
        <div className="AddproductTitle">
          <Badge bg="info">Edit Product</Badge>
        </div>
        <div className="scrollable-form">
          <form className="form-container" onSubmit={(e) => {
            e.preventDefault();
            handleEditProduct(productData, selectedImages, selectedDoc);
          }}>
            <div className="mb-3" controlId="exampleForm.ControlInput1">
              <label>Product Name</label>
              <input
                className='ProductInputField'
                name='product_name'
                type="text"
                onChange={handleInputChange}
                value={productData?.product_name || ''}
                placeholder="Enter product name"
              />
            </div>
            <div className="mb-3" controlId="exampleForm.ControlInput1">
              <label>Company Name</label>
              <input
                name='company_name'
                type="text"
                onChange={handleInputChange}
                value={productData?.company_name || ''}
                placeholder="Enter company name"
              />
            </div>
            <div className="mb-3" controlId="exampleForm.ControlInput1">
              <label>Category</label>
              <input
                name='product_category'
                type="text"
                onChange={handleInputChange}
                value={productData?.product_category || ''}
                placeholder="Enter category"
              />
            </div>
            <div className="mb-3" controlId="exampleForm.ControlInput1">
              <label>Description</label>
              <input
                name='product_description'
                type="text"
                onChange={handleInputChange}
                value={productData?.product_description || ''}
                placeholder="Enter description"
              />
            </div>
            <div controlId="formFileMultiple" className="mb-3">
              <label>Image</label>
              <input
                type="file"
                name='product_image'
                onChange={handleImageChange}
                multiple
              />
            </div>
            <div className="mb-3" controlId="exampleForm.ControlInput1">
              <label>Document</label>
              <input
                name="product_doc"
                type="file"
                onChange={handleDocChange}
              />
            </div>
            <button
              className='submitBTNFOrm'
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  )

}

export default EditProduct

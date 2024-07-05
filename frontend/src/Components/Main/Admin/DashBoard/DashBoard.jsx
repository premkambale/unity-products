import React, { useState, useEffect, useContext } from 'react';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import { MdDelete, MdModeEditOutline } from 'react-icons/md';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import Loader from '../../Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import { contextData } from '../../../../Context/UnityContext';
import { useNavigate } from 'react-router-dom';
import { DELETE } from '../../../../Constants/FetchMethods';
import { Url } from '../../../../Constants/ApiUrlConstant';
import moment from 'moment';
import './Dashboard.css';

const Dashboard = () => {
  const [ProductData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userSwitch, setUserSwitch] = useState(false);
  const { setProductIdToEdit } = useContext(contextData);
  const [newsData, setNewsData] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    if (!userSwitch) {
      fetchData();
    } else {
      getAllNews()
    }
  }, [userSwitch]);


  const handleProductSwitch = () => {
    setUserSwitch(false)

  }

  const handleNewsSwitch = () => {
    setUserSwitch(true);
  }
  const fetchData = () => {
    setLoading(true);
    fetch(Url.getAllProducts, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((res) => res.json())
      .then((resData) => {
        console.log("Fetched data:", resData);
        setProductData(resData.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };


  const getAllNews = () => {
    setLoading(true);
    fetch(Url.getAllNewsData, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((res) => res.json())
      .then((resData) => {
        console.log("Fetched data:", resData);
        setNewsData(resData.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }

  const handleEdit = (productId) => {
    console.log("productId", productId);
    setProductIdToEdit(productId);
    navigate("Admin/EditProduct");
  };


  const handleDeleteNews = async (id) => {
    try {
      const response = await DELETE(Url.deleteNewsById.replace(':blogId', id));
      const responseData = await response.json();
      console.log("responseData", responseData);

      if (responseData.success === true) {
        toast.success(responseData.message, {
          position: "bottom-right",
          theme: "colored",
          className: "custom-success-msg"
        });
        getAllNews(); // Refresh data after successful delete
      } else {
        toast.error(responseData.message, {
          position: "bottom-right",
          theme: "colored",
          className: "custom-error-msg"
        });
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }


  const handleDelete = async (pId) => {
    try {
      const response = await DELETE(Url.deleteProductById.replace('id', pId));
      const responseData = await response.json();
      console.log("responseData", responseData);

      if (responseData.success === true) {
        toast.success(responseData.message, {
          position: "bottom-right",
          theme: "colored",
          className: "custom-success-msg"
        });
        fetchData(); // Refresh data after successful delete
      } else {
        toast.error(responseData.message, {
          position: "bottom-right",
          theme: "colored",
          className: "custom-error-msg"
        });
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };


  return (
    <>
      <ToastContainer />
      {loading ? (
        <Loader />
      ) : (
        <div className="table-container">
          <div className="view-switch">
            <span
              className='User-switch'
              style={{
                background: userSwitch ? "linear-gradient(rgb(36, 59, 85), rgb(20, 30, 48))" : "#fff",
                color: userSwitch ? "#fff" : "rgb(36, 59, 85)"
              }}
              onClick={handleProductSwitch}
            >
              Products
            </span>
            <span
              className='org-switch'
              style={{
                background: !userSwitch ? "linear-gradient(rgb(36, 59, 85), rgb(20, 30, 48))" : "#fff",
                color: !userSwitch ? "#fff" : "rgb(36, 59, 85)"
              }}
              onClick={handleNewsSwitch}
            >
              News
            </span>
          </div>
          <div className="table-scroll">
            {!userSwitch && (
              <div className="custom-table-container">
                <table className="custom-table">
                  <thead style={{ padding: "5px" }}>
                    <tr>
                      <th className='DashTableHead'>Sr.No</th>
                      <th className='DashTableHead'>product_name</th>
                      <th className='DashTableHead'>category</th>
                      <th className='DashTableHead'>company_name</th>
                      <th className='DashTableHead'>description</th>
                      <th className='DashTableHead'>Action</th>
                    </tr>
                  </thead>
                  <tbody className='tbodyDash'>
                    {ProductData.map((product, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'even' : 'odd'}>
                        <td className="ellipsis">{index + 1}</td>
                        <td className="ellipsis" title={product.product_name}>{product.product_name}</td>
                        <td className="ellipsis" title={product.product_category}>{product.product_category}</td>
                        <td className="ellipsis" title={product.company_name}>{product.company_name}</td>
                        <td className="ellipsis" title={product.product_description}>{product.product_description}</td>
                        <td className="DashboardAction">
                          <button onClick={() => handleEdit(product._id)}>
                            <MdModeEditOutline />
                          </button>
                          <button onClick={() => handleDelete(product._id)}>
                            <MdDelete />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {userSwitch && (
              <div className="custom-table-container">
                <table className="custom-table">
                  <thead>
                    <tr>
                      <th className='DashTableHead'>Sr.No</th>
                      <th className='DashTableHead'>News Name</th>
                      <th className='DashTableHead'>News Summary</th>
                      <th className='DashTableHead'>News Description</th>
                      <th className='DashTableHead'>Created Date</th>
                      <th className='DashTableHead'>Action</th>
                    </tr>
                  </thead>
                  <tbody className='tbodyDash'>
                    {newsData.map((news, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'even' : 'odd'}>
                        <td className="ellipsis">{index + 1}</td>
                        <td className="ellipsis" title={news.blog_name}>{news.blog_name}</td>
                        <td className="ellipsis" title={news.blog_Summary}>{news.blog_Summary}</td>
                        <td className="ellipsis" title={news.blog_description}>{news.blog_description}</td>
                        <td className="ellipsis"> {moment(news.create_date).format('DD-MM-YYYY')}</td>
                        <td className="DashboardAction">
                          <button >
                            <MdModeEditOutline />
                          </button>
                          <button onClick={() => handleDeleteNews(news._id)}>
                            <MdDelete />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div >
      )}
    </>
  );
};

export default Dashboard;

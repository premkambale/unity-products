import React, { useState, useEffect } from 'react';
import "./Analytics.css"
import Table from 'react-bootstrap/Table';
import { Badge } from 'react-bootstrap';
import { MdDelete, MdModeEditOutline } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import Loader from '../../Loader/Loader';

const Analytics = () => {
    const [activeTab, setActiveTab] = useState('table');
    const [ProductData, setProductData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch("http://localhost:5500/products/all", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((res) => res.json())
            .then((resData) => {
                console.log("Fetched data:", resData);
                setProductData(resData.data)
                console.log(resData?.data?.product_name)
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }


    const navigate = useNavigate()




    const handleEdit = () => {
        navigate("/Admin/Admin/EditProduct")
    }

    const handleDelete = () => {
        alert("product deleted")
    }

    return (
        <div className="analyticsContainer">
            <div className="anaTabs">
                <div className="tab1">
                    Online products (22)
                </div>
                <div className="tab1">
                    Inventory (30)
                </div>
                <div className="tab1">
                    Active News(2)
                </div>
                <div className="tab1">
                    tab1
                </div>

            </div>

            {loading ? (
                <Loader />
            ) : (
                <div className="table-container_Analytics">
                    <>

                        <div className="table-scroll_addAnalysis">
                            <p className='tableHeadAna'>Inventory table</p>
                            <Table responsive="md" scroll borderless bordered hover>
                                <thead style={{ marginTop: "2vh" }}>
                                    <tr>
                                        <th className='DashTableHead_Analytics'>Sr.No</th>
                                        <th className='DashTableHead_Analytics'>product_name</th>
                                        <th className='DashTableHead_Analytics'>category</th>
                                        <th className='DashTableHead_Analytics'>company_name</th>
                                        <th className='DashTableHead_Analytics'>price</th>
                                        <th className='DashTableHead_Analytics'>description</th>
                                        <th className='DashTableHead_Analytics'>Quantity</th>
                                        <th className='DashTableHead_Analytics'>Action</th>
                                    </tr>
                                </thead>
                                <tbody className='tbodyDash' style={{ fontSize: "0.9rem", fontFamily: "revert", textAlign: "start" }}>
                                    {ProductData.map((product, index) => (
                                        <tr key={index} className={index % 2 === 0 ? 'even' : 'odd'}>
                                            <td>{index + 1}</td>
                                            <td>{product.product_name}</td>
                                            <td>{product.product_category}</td>
                                            <td>{product.company_name}</td>
                                            <td>{product.product_price}</td>
                                            <td>{product.product_description}</td>
                                            <td>{product.product_quantity}</td>
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
                            </Table>
                        </div>
                    </>
                </div>
            )}

        </div>
    )
}

export default Analytics;

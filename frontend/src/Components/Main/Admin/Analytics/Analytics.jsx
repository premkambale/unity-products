import React, { useState, useEffect } from 'react';
import "./Analytics.css"
import Table from 'react-bootstrap/Table';
import { Badge } from 'react-bootstrap';
import { MdDelete, MdModeEditOutline } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

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
                    Online products
                </div>
                <div className="tab1">
                    Inventory
                </div>
                <div className="tab1">
                    tab1
                </div>
                <div className="tab1">
                    tab1
                </div>

            </div>

            <div className="anatable">
                <span className="tableTitleAna">
                    Inventory Table
                </span>

                <div style={{ width: "100%" }} className="table-scroll">
                    <Table responsive="md" scroll borderless bordered hover>
                        <thead style={{ marginTop: "2vh" }}>
                            <tr>
                                <th className='DashTableHead'>Sr.No</th>
                                <th className='DashTableHead'>product_name</th>
                                <th className='DashTableHead'>category</th>
                                <th className='DashTableHead'>company_name</th>
                                <th className='DashTableHead'>price</th>
                                <th className='DashTableHead'>description</th>
                                <th className='DashTableHead'>Action</th>
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
                                    <td className="DashboardAction">
                                        <button onClick={handleEdit}>
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

            </div>


        </div>
    )
}

export default Analytics;

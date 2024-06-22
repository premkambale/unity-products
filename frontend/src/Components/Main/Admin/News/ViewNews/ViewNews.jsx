import React, { useRef, useMemo, useState, useEffect, useContext } from 'react'
import "./Dashboard.css"
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import { MdDelete, MdModeEditOutline } from 'react-icons/md';
import EditProduct from '../EditProduct/EditProduct';
import { useNavigate } from 'react-router-dom';
import { DELETE } from '../../../../Constants/FetchMethods';
import { Url } from '../../../../Constants/ApiUrlConstant';
import Loader from '../../Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import { contextData } from '../../../../Context/UnityContext';



const DashBoard = () => {

    const [NewsData, setNewsData] = useState([])
    const [loading, setLoading] = useState(true);

    const { setProductIdToEdit } = useContext(contextData);

        const token = sessionStorage.getItem("token")
        useEffect(() => {
            fetchData();
        }, []);

        const fetchData = () => {
            fetch(Url.getAllProducts, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                },
        })
            .then((res) => res.json())
            .then((resData) => {
                console.log("Fetched data:", resData);
                setNewsData(resData.data)
                console.log(resData?.data?.product_name)
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }


    const navigate = useNavigate();



    const handleEdit = (productId) => {
        console.log("productId", productId)
        setProductIdToEdit(productId)
        navigate("Admin/EditProduct")
    }




    const handleDelete = async (pId) => {
        try {
            const response = await DELETE(Url.deleteProductById.replace('id', pId));
            const responseData = await response.json();
            console.log("responseData", responseData)

            if (responseData.success == true) {
                toast.success(responseData.message, {
                    position: "bottom-right",
                    theme: "colored",
                    className: "custom-success-msg"
                });
                fetchData();
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
                    <>
                        <div className="DashboardTitle">
                            <Badge style={{ backgroundColor: "black" }} bg="info">Dashboard</Badge>
                        </div>
                        <div className="table-scroll">
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
                                    {NewsData.map((product, index) => (
                                        <tr key={index} className={index % 2 === 0 ? 'even' : 'odd'}>
                                            <td>{index + 1}</td>
                                            <td>{product.product_name}</td>
                                            <td>{product.product_category}</td>
                                            <td>{product.company_name}</td>
                                            <td>{product.product_price}</td>
                                            <td>{product.product_description}</td>
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
        </>
    )
}

export default DashBoard

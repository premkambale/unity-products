import React, { useState, useEffect } from 'react';
import "./Analytics.css"
import Table from 'react-bootstrap/Table';

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



    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    }




    const data = [
        {
            value: '278',
            title: 'Active Products',
        },
        {
            value: '156',
            title: 'inventory products',
        },
        {
            value: '64.89 %',
            title: 'Bounce Rate',
        },
        {
            value: '423',
            title: 'Total Visits',
        },
        {
            value: '278',
            title: 'New Posts',
        },
        {
            value: '156',
            title: 'New Comments',
        },
        {
            value: '64.89 %',
            title: 'Bounce Rate',
        },
        {
            value: '423',
            title: 'Total Visits',
        },
    ];

    const products = [
        {
            "Sr_no": "1",
            "product_name": "Prescription Glasses",
            "category": "glassess",
            "company_name": "Warby Parker",
            "price": "$199.99",
            "ratings": "4.5",
            "description": "Customizable prescription glasses for clear vision",
            "image": "0000111100000111",
            "quantity": 2
        }, {
            "Sr_no": "1",
            "product_name": "Prescription Glasses",
            "category": "glassess",
            "company_name": "Warby Parker",
            "price": "$199.99",
            "ratings": "4.5",
            "description": "Customizable prescription glasses for clear vision",
            "image": "0000111100000111",
            "quantity": 2
        }, {
            "Sr_no": "1",
            "product_name": "Prescription Glasses",
            "category": "glassess",
            "company_name": "Warby Parker",
            "price": "$199.99",
            "ratings": "4.5",
            "description": "Customizable prescription glasses for clear vision",
            "image": "0000111100000111",
            "quantity": 2
        }, {
            "Sr_no": "1",
            "product_name": "Prescription Glasses",
            "category": "glassess",
            "company_name": "Warby Parker",
            "price": "$199.99",
            "ratings": "4.5",
            "description": "Customizable prescription glasses for clear vision",
            "image": "0000111100000111",
            "quantity": 2
        }, {
            "Sr_no": "1",
            "product_name": "Prescription Glasses",
            "category": "glassess",
            "company_name": "Warby Parker",
            "price": "$199.99",
            "ratings": "4.5",
            "description": "Customizable prescription glasses for clear vision",
            "image": "0000111100000111",
            "quantity": 2
        }, {
            "Sr_no": "1",
            "product_name": "Prescription Glasses",
            "category": "glassess",
            "company_name": "Warby Parker",
            "price": "$199.99",
            "ratings": "4.5",
            "description": "Customizable prescription glasses for clear vision",
            "image": "0000111100000111",
            "quantity": 2
        }, {
            "Sr_no": "1",
            "product_name": "Prescription Glasses",
            "category": "glassess",
            "company_name": "Warby Parker",
            "price": "$199.99",
            "ratings": "4.5",
            "description": "Customizable prescription glasses for clear vision",
            "image": "0000111100000111",
            "quantity": 2
        }, {
            "Sr_no": "1",
            "product_name": "Prescription Glasses",
            "category": "glassess",
            "company_name": "Warby Parker",
            "price": "$199.99",
            "ratings": "4.5",
            "description": "Customizable prescription glasses for clear vision",
            "image": "0000111100000111",
            "quantity": 2
        }, {
            "Sr_no": "1",
            "product_name": "Prescription Glasses",
            "category": "glassess",
            "company_name": "Warby Parker",
            "price": "$199.99",
            "ratings": "4.5",
            "description": "Customizable prescription glasses for clear vision",
            "image": "0000111100000111",
            "quantity": 2
        }, {
            "Sr_no": "1",
            "product_name": "Prescription Glasses",
            "category": "glassess",
            "company_name": "Warby Parker",
            "price": "$199.99",
            "ratings": "4.5",
            "description": "Customizable prescription glasses for clear vision",
            "image": "0000111100000111",
            "quantity": 2
        }, {
            "Sr_no": "1",
            "product_name": "Prescription Glasses",
            "category": "glassess",
            "company_name": "Warby Parker",
            "price": "$199.99",
            "ratings": "4.5",
            "description": "Customizable prescription glasses for clear vision",
            "image": "0000111100000111",
            "quantity": 2
        }, {
            "Sr_no": "1",
            "product_name": "Prescription Glasses",
            "category": "glassess",
            "company_name": "Warby Parker",
            "price": "$199.99",
            "ratings": "4.5",
            "description": "Customizable prescription glasses for clear vision",
            "image": "0000111100000111",
            "quantity": 2
        }, {
            "Sr_no": "1",
            "product_name": "Prescription Glasses",
            "category": "glassess",
            "company_name": "Warby Parker",
            "price": "$199.99",
            "ratings": "4.5",
            "description": "Customizable prescription glasses for clear vision",
            "image": "0000111100000111",
            "quantity": 2
        }, {
            "Sr_no": "1",
            "product_name": "Prescription Glasses",
            "category": "glassess",
            "company_name": "Warby Parker",
            "price": "$199.99",
            "ratings": "4.5",
            "description": "Customizable prescription glasses for clear vision",
            "image": "0000111100000111",
            "quantity": 2
        }, {
            "Sr_no": "1",
            "product_name": "Prescription Glasses",
            "category": "glassess",
            "company_name": "Warby Parker",
            "price": "$199.99",
            "ratings": "4.5",
            "description": "Customizable prescription glasses for clear vision",
            "image": "0000111100000111",
            "quantity": 2
        }, {
            "Sr_no": "1",
            "product_name": "Prescription Glasses",
            "category": "glassess",
            "company_name": "Warby Parker",
            "price": "$199.99",
            "ratings": "4.5",
            "description": "Customizable prescription glasses for clear vision",
            "image": "0000111100000111",
            "quantity": 2
        }, {
            "Sr_no": "1",
            "product_name": "Prescription Glasses",
            "category": "glassess",
            "company_name": "Warby Parker",
            "price": "$199.99",
            "ratings": "4.5",
            "description": "Customizable prescription glasses for clear vision",
            "image": "0000111100000111",
            "quantity": 2
        }
    ]


    const handleEdit=()=>{
        alert("edit")
    }

    const handleDelete=()=>{
        alert("delete")
    }

    return (
        <div className="analyticsContainer">
            <div className="AnalyticsTabs">
                <div className="TabButtons">
                    <button
                        onClick={() => handleTabClick('table')}
                        className={activeTab === 'table' ? 'active' : ''}
                    >
                        Table
                    </button>
                    <button
                        onClick={() => handleTabClick('card')}
                        className={activeTab === 'card' ? 'active' : ''}
                    >
                        Card
                    </button>
                    <button
                        onClick={() => handleTabClick('item')}
                        className={activeTab === 'item' ? 'active' : ''}
                    >
                        Item
                    </button>                </div>
                <div className="TabContent">
                    {activeTab === 'table' && (
                        <div className="AnaProductTable">
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
                                                        edit                                                    </button>
                                                    <button onClick={() => handleDelete(product._id)}>
                                                        delete                        </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    )}
                    {activeTab === 'card' && (
                        <div className="AnaProductCard">
                            <div className="grey-bg container-fluid">

                                <section id="minimal-statistics">

                                    <div className="row">
                                        {data.map((item, index) => (
                                            <div key={index} className="col-xl-3 col-sm-6 col-12">
                                                <div style={{ backgroundColor: "#463b4c", color: "red" }} className="card">
                                                    <div className="card-content">
                                                        <div className="card-body">
                                                            <div className="media d-flex">
                                                                <div className="align-self-center">
                                                                    <i className={`icon-${item.icon} ${item.color} font-large-2 float-left`}></i>
                                                                </div>
                                                                <div className="media-body text-right">
                                                                    <h3>{item.value}</h3>
                                                                    <span style={{ color: "white" }}>{item.title}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>


                            </div>
                        </div>
                    )}
                    {activeTab === 'item' && (
                        <div className="AnaProductItem">


                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}

export default Analytics;

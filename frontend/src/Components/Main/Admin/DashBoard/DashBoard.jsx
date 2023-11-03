import React, { useRef, useMemo, useState, useEffect } from 'react'
import "./Dashboard.css"
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import { MdDelete, MdModeEditOutline } from 'react-icons/md';
import EditProduct from '../EditProduct/EditProduct';
import { useNavigate } from 'react-router-dom';



const DashBoard = () => {


  const token = sessionStorage.getItem("token")
  useEffect(() => {
    fetch("http://localhost:5500/products/all", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((res) => res.json())
      .then((resData) => {
        console.log("Fetched data:", resData);

      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);



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

  const navigate = useNavigate();



  const handleEdit = () => {
    navigate("Admin/EditProduct")
  }

  const handleDelete = () => {
    alert("delete")
  }

  return (

    <>

      <div className="table-container">
        <div className="DashboardTitle">
          <Badge bg="info">Dashboard</Badge>
        </div>

        <div className="table-scroll">

          <Table responsive="md" scroll borderless bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Sr_no</th>
                <th>product_name</th>
                <th>category</th>
                <th>company_name</th>
                <th>price</th>
                <th>description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{product.Sr_no}</td>
                  <td>{product.product_name}</td>
                  <td>{product.category}</td>
                  <td>{product.company_name}</td>
                  <td>{product.price}</td>
                  <td>{product.description}</td>
                  <td className="DashboardAction">
                    <button onClick={handleEdit}>
                      <MdModeEditOutline />
                    </button>
                    <button onClick={handleDelete}>
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

      </div>
    </>
  )
}

export default DashBoard

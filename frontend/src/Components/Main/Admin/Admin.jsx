import React from 'react';
import './Admin.css';
import SideBar from '../Sidebar/SideBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashBoard from "../Admin/DashBoard/DashBoard"
// import Orders from '../Components/Orders/Orders';
// import Users from './Users';
import AddProduct from "../Admin/AddProduct/AddProduct"
import EditProduct from "../Admin/EditProduct/EditProduct"
import Analytics from './Analytics/Analytics';
import CreateNews from './News/CreateNews/CreateNews';
import EditNews from './EditNews/EditNews';


export default function Admin() {
    return (
        <div className="adminContainer">
            <div className="admin-header">
                <h1 className="admin-title">Admin Panel</h1>
            </div>
            <div className="adminMain">
                <>
                    <SideBar />
                </>
                <div className='adminSections'>
                    <Routes>    
                        <Route exact path="/*" element={<DashBoard />} />
                        <Route exact path="/AddProduct" element={<AddProduct />} />
                        <Route exact path="/Admin/EditProduct" element={<EditProduct />} />
                        <Route exact path="/Analytics" element={<Analytics />} />
                        <Route exact path="/CreateNews" element={<CreateNews />} />
                        <Route exact path="/EditNews" element={<EditNews />} />


                    </Routes>
                </div>
            </div>



        </div>
    );
}

import React, { useContext, useEffect, useState } from 'react'
import "./SideBar.css"
import { BiSolidDashboard } from "react-icons/bi"
import { MdAddBusiness } from "react-icons/md"
import { TbTruckDelivery } from "react-icons/tb"
import { FaUsers } from "react-icons/fa"
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaRegNewspaper } from "react-icons/fa";

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { contextData } from '../../../Context/UnityContext'



export default function SideBar() {
  const { setActiveTab, activeTab } = useContext(contextData)
  const location = useLocation();
  const navigate = useNavigate()
  const handleChangeActive = (path, tab) => {
    setActiveTab(tab);
    navigate(path)
  }

  useEffect(() => {
    const path = location.pathname;
    if (path.includes("AddProduct")) {
      setActiveTab("tab2")
    }
    else if (path.includes("Analytics")) {
      setActiveTab("tab3")
    }
    else if (path.includes("CreateNews")) {
      setActiveTab("tab4")
    }
    else {
      setActiveTab("tab1")
    }
  }, [location.pathname])

  return (
    <div className='SideBarContent' style={{ display: 'flex', height: '110vh', overflow: 'scroll initial', "boxShadow": "  rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}>
      <CDBSidebar textColor="#000" backgroundColor="#fff">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Admin Panel
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <div className={activeTab == "tab1" ? "activeTab" : "normalTab"}>
              <CDBSidebarMenuItem onClick={() => handleChangeActive("/Admin", "tab1")} icon="columns" >Dashboard</CDBSidebarMenuItem>
            </div>
            <div className={activeTab == "tab2" ? "activeTab" : "normalTab"}>
              <CDBSidebarMenuItem onClick={() => handleChangeActive("/Admin/AddProduct", "tab2")} icon="table">Add Product</CDBSidebarMenuItem>
            </div>
            <div className={activeTab == "tab3" ? "activeTab" : "normalTab"}>
              <CDBSidebarMenuItem onClick={() => handleChangeActive("/Admin/Analytics", "tab3")} icon="chart-line">Analytics</CDBSidebarMenuItem>
            </div>
            <div className={activeTab == "tab4" ? "activeTab" : "normalTab"}>
              <CDBSidebarMenuItem onClick={() => handleChangeActive("/Admin/CreateNews", "tab4")} ><FaRegNewspaper style={{marginRight:"10px"}}/>
                Create News</CDBSidebarMenuItem>
            </div>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>

)
}

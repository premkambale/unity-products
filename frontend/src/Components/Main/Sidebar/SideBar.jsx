import React, { useState } from 'react'
import "./SideBar.css"
import { BiSolidDashboard } from "react-icons/bi"
import { MdAddBusiness } from "react-icons/md"
import { TbTruckDelivery } from "react-icons/tb"
import { FaUsers } from "react-icons/fa"
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';



export default function SideBar() {
  console.log("Hi")
 
  const navigate = useNavigate()

  return (
    <div className='SideBarContent' style={{ display: 'flex', height: '110vh',  overflow: 'scroll initial' ,"boxShadow":"  rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}>
  <CDBSidebar textColor="#000" backgroundColor="#fff"> 
    <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
      <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
        Admin Panel
      </a>
    </CDBSidebarHeader>

    <CDBSidebarContent className="sidebar-content">
      <CDBSidebarMenu>
        <NavLink exact to="/Admin/" activeClassName="activeClicked">
          <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
        </NavLink>
        <NavLink exact to="/Admin/AddProduct" activeClassName="activeClicked">
          <CDBSidebarMenuItem icon="table">Add Product</CDBSidebarMenuItem>
        </NavLink>
        <NavLink exact to="/Admin/Analytics" activeClassName="activeClicked">
          <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
        </NavLink>
      </CDBSidebarMenu>
    </CDBSidebarContent>
  </CDBSidebar>
</div>

  )
}

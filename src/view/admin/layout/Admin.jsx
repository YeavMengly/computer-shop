import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";


// components

import AdminNavbar from "../Components/Navbars/AdminNavbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import HeaderStats from "../Components/Headers/HeaderStats";
import FooterAdmin from "../Components/Footers/FooterAdmin";

// views

import Dashboard from "../Dashboard";
import Maps from "../Maps";
import Settings from "../Settings";
import Tables from "../Tables";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Routes>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/maps" exact component={Maps} />
            <Route path="/admin/settings" exact component={Settings} />
            <Route path="/admin/tables" exact component={Tables} />
            <Navigate from="/admin" to="/admin/dashboard" />
          </Routes>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
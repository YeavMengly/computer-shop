import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../admin/layout/Admin"
import Auth from "../admin/layout/Auth"
import Landing from "../landing"
import Profile from "../profile"
import Index from "../index"

function Admins(){
    return (
        <Routes>
    {/* add routes with layouts */}
    <Route path="/admin" component={Admin} />
    <Route path="/auth" component={Auth} />
    {/* add routes without layouts */}
    <Route path="/landing" exact component={Landing} />
    <Route path="/profile" exact component={Profile} />
    <Route path="/" exact component={Index} />
    {/* add redirect for first page */}
    {/* <Navigate from="*" to="/" /> */}
  </Routes>
    );
}
export default Admins
import React from "react";
import Footer from "./view/footer/Footer";
import Navbar from "./view/header/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./view/screen/HomePage";
import AboutPage from "./view/screen/AboutPage";
import ContactPage from "./view/screen/ContactPage";
import LoginPage from "./view/screen/auth_page/LoginPage";
import SignupPage from "./view/screen/auth_page/SignupPage";
import Resource from "./view/ui/Resource";
import ProductMSI from "./view/ui/ProductMSI";
import Company from "./view/screen/Company";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/Resource" Component={Resource} />
        <Route path="/About" Component={AboutPage} />
        <Route path="/Company" Component={Company} />
        <Route path="/Contact" Component={ContactPage} />
        <Route path="/Login" Component={LoginPage} />
        <Route path="/SignUp" Component={SignupPage} />
        <Route path="`/api/show/${product.id}`" Component={ProductMSI} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

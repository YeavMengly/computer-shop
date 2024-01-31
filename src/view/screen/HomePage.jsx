import React from "react";
import Products from "../ui/Products";
import Card from "../components/Card";
import Slider from "../ui/Slider";
import Banners from "../ui/Banners";
import ProductMSI from "../ui/ProductMSI";
import ContactPage from "./ContactPage";
import Resource from "../ui/Resource";
import ProductMAC from "../ui/ProductMAC";

const HomePage = () => {
  return (
    <>
      {/* Slider */}
      <Slider />
      {/* End Slider */}

      {/* Products */}
      <Products />

      {/* End Products */}

      {/* Card */}
      <ProductMSI />
      {/* Card */}

      <ProductMAC/>

      <Resource/>

      <ContactPage/>
    </>
  );
};

export default HomePage;

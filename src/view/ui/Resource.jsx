import React from "react";
import Products from "./Products";
import { backIn } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Resource = () => {

    const navigate = useNavigate();

    const goBack = () => {
        history.goBack(Products);
      };

    return (
        <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
            <div className="lg:flex items-center justify-between">
                <div className="lg:w-1/3">
                    <h1 className="text-4xl font-semibold leading-9 text-gray-800">Indoor Interiors of Store</h1>
                    <p className="text-base leading-6 mt-4 text-gray-600">The store has promotions for a lot new customers that's want to order new product from our store for oppurnity before china new year.</p>
                    <button aria-label="view catalogue" className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none mt-6 md:mt-8 text-base font-semibold leading-none text-gray-800 flex items-center hover:underline" onClick={goBack}>
                      Get In Touch
                        <svg className="ml-2 mt-1" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.33325 4H10.6666" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8 6.66667L10.6667 4" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8 1.33398L10.6667 4.00065" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
                <div className="lg:w-7/12 lg:mt-0 mt-8">
                    <div className="w-full h-full bg-red-200">
                        <img src="https://beebom.com/wp-content/uploads/2023/02/MSI-Titan-GT77-HX-review.jpg" alt="apartment design" className="w-full sm:block hidden" />
                        <img src="https://i.ibb.co/ZVPGjGJ/pexels-max-vakhtbovych-6782351-1.png" alt="apartment design" className="sm:hidden block w-full" />
                    </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 gap-6 lg:mt-8 md:mt-6 mt-4">
                        <img src="https://m.media-amazon.com/images/I/71IhQDQuGzL._AC_UF894,1000_QL80_.jpg" className="w-full" alt="kitchen" />
                        <img src="https://gadgetsmagazine.org/wp-content/uploads/2021/09/Gaming-Laptops-1.jpg" className="w-full" alt="sitting room" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resource;

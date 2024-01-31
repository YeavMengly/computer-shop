import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };
    return (
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
            <h1 className="w-full text-3xl font-bold text-[#00df9a]">
                COMPUTER SHOP
            </h1>
            <ul className="hidden md:flex">
                <li className="p-4 text-black">
                    <Link to={"/"}>Home</Link>
                </li>
                <li className="p-4 text-black">
                    <Link to={"/Company"}>Company</Link>
                </li>
                <li className="p-4 text-black">
                    <Link to={"/Resource"}>Resource</Link>
                </li>
                {/* <li className="p-4 text-black">
                    <Link to={"/About"}>About</Link>
                </li> */}
                <li className="p-4 text-black">
                    <Link to={"/Contact"}>Contact</Link>
                </li>
                <li className="p-4 text-black flex">
                <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter your title"
              />
              
              <button
                type="submit"
                className=" flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Search
              </button>
                </li>
            </ul>
            <div onClick={handleNav} className="block md:hidden text-black">
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div
                className={
                    nav
                        ? "fixed z-20 left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
                        : "fixed left-[-100%]"
                }
            >
                <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
                    COMPUTER SHOP
                </h1>
                <ul className="uppercase p-4 ">
                    <li className="p-4  border-b border-gray-600">
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li className="p-4  border-b border-gray-600">
                        <Link>Company</Link>
                    </li>
                    <li className="p-4  border-b border-gray-600">
                        <Link to={"/Resource"}>Resource</Link>
                    </li>
                    <li className="p-4  border-b border-gray-600">
                        <Link to={"/About"}>About</Link>
                    </li>
                    <li className="p-4 ">
                        <Link to={"/Contact"}>Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;

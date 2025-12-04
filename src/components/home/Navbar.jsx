import React from "react";
import {
  ChevronDown,
  ChevronRight,
  Heart,
  Menu,
  Search,
  ShoppingCart,
  Star,
  User,
  X,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Megamenu1Section from "./Megamenu1Section";
import Megamenu2section from "./Megamenu2section";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
 
   

  return (
    <div className="flex flex-col bg-white w-full relative">
      {/* Desktop Navbar */}
      <div className="hidden lg:flex items-center justify-between w-full py-6 px-10 gap-6 max-w-7xl">
        <h1 className="font-bold text-3xl text-blue-950 ml-[8%]">eStore</h1>

        <div className="flex border border-gray-400 rounded-full justify-between p-1 shadow-md flex-1 max-w-lg">
          <input
            type="text"
            placeholder="Search for products"
            className="outline-none border-none px-4 flex-1"
          />
          <div className="flex items-center text-white bg-blue-600 rounded-full px-4 py-2">
            <Search className="w-4 h-4" />
          </div>
        </div>

        <div className="flex gap-6">
          <User className="hover:text-blue-600 cursor-pointer" />
          <div className="relative">
            <Heart className="hover:text-blue-600 cursor-pointer" />
            <span className="absolute top-[-14px] right-[-1rem] w-5 h-5 text-xs font-semibold flex items-center justify-center text-white bg-blue-600 rounded-full">
              0
            </span>
          </div>
          <div className="relative">
            <ShoppingCart className="hover:text-blue-600 cursor-pointer" />
            <span className="absolute top-[-14px] right-[-1rem] w-5 h-5 text-xs font-semibold flex items-center justify-center text-white bg-blue-600 rounded-full">
              3
            </span>
          </div>
        </div>
      </div>

      {/* Desktop Links Full Width */}
      <div className="hidden lg:flex w-full justify-around font-medium text-gray-700 border-t border-b border-gray-300 py-4 px-10">
        <div className="max-w-7xl lg:flex w-full justify-around font-medium text-gray-700 items-center">
          <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-medium" : "text-gray-700 hover:text-blue-600"
                }
              >
                Home
              </NavLink>
          
           <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-medium" : "text-gray-700 hover:text-blue-600"
                }
              >
                About
              </NavLink>
          

           <NavLink
                to="/category"
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-medium" : "text-gray-700 hover:text-blue-600"
                }
              >
                Category
              </NavLink>
          

          <NavLink
                to="/productDetails"
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-medium" : "text-gray-700 hover:text-blue-600"
                }
              >
                 Product Details
              </NavLink>
          
           <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-medium" : "text-gray-700 hover:text-blue-600"
                }
              >
                 Cart
              </NavLink>
         
           <NavLink
                to="/checkout"
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-medium" : "text-gray-700 hover:text-blue-600"
                }
              >
                 Checkout
              </NavLink>
          
          <div className="relative group inline-block">
            <button className="py-2 rounded ">
              <a
                href="#"
                className="hover:text-blue-600 flex items-center gap-1"
              >
                Dropdown <ChevronDown className="w-4 h-4" />
              </a>
            </button>
            <div
              className="absolute left-0 mt-2 w-52 bg-white shadow-lg rounded opacity-0 invisible 
           group-hover:opacity-100 group-hover:visible transition-all duration-300 z-100"
            >
              <ul className="p-3 space-y-3">
                <li className="hover:text-blue-600">Dropdown 1</li>
                <li className="relative group/sub">
                  <button className="w-full text-left flex items-center gap-1 hover:text-blue-600">
                    Deepdropdown <ChevronDown className="w-4 h-4" />
                  </button>
                  <div
                    className="absolute top-0 right-full mr-2 w-52 bg-white shadow-lg rounded opacity-0 invisible
                 group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300  z-100"
                  >
                    <ul className="p-3 space-y-3">
                      <li className="hover:text-blue-600">Deepdropdown 1</li>
                      <li className="hover:text-blue-600">Deepdropdown 2</li>
                      <li className="hover:text-blue-600">Deepdropdown 3</li>
                      <li className="hover:text-blue-600">Deepdropdown 4</li>
                      <li className="hover:text-blue-600">Deepdropdown 5</li>
                    </ul>
                  </div>
                </li>
                <li className="hover:text-blue-600">Dropdown 2</li>
                <li className="hover:text-blue-600">Dropdown 3</li>
                <li className="hover:text-blue-600">Dropdown 4</li>
              </ul>
            </div>
          </div>

         
          {/* === MEGAMENU 1 (FULL WIDTH DROPDOWN) === */}
          <div className="relative group inline-block">
            <button className="py-2">
              <a
                href="#"
                className="hover:text-blue-600 flex items-center gap-1"
              >
                Megamenu 1 <ChevronDown className="w-4 h-4" />
              </a>
            </button>

            {/* FULL PAGE WIDTH DROPDOWN */}
           <div>
            <Megamenu1Section/>
           </div>
          </div>

           {/* === MEGAMENU 2 (FULL WIDTH DROPDOWN) === */}
          <div className="relative group inline-block">
            <button className="py-2">
              <a
                href="#"
                className="hover:text-blue-600 flex items-center gap-1"
              >
                Megamenu 2 <ChevronDown className="w-4 h-4" />
              </a>
            </button>

            {/* FULL PAGE WIDTH DROPDOWN */}
            <div>
              <Megamenu2section/>
            </div>
          </div>
        
          
          <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-medium" : "text-gray-700 hover:text-blue-600"
                }
              >
                 Contact
              </NavLink>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex items-center justify-between lg:hidden px-4 py-4 border-b border-gray-300">
        <h1 className="font-bold text-3xl text-blue-950">eStore</h1>
        <div className="flex items-center gap-4">
          <Search className="hover:text-blue-600 cursor-pointer" />
          <User className="hover:text-blue-600 cursor-pointer" />
          <div className="relative">
            <ShoppingCart className="hover:text-blue-600 cursor-pointer" />
            <span className="absolute top-[-14px] right-[-1rem] w-5 h-5 text-xs font-semibold flex items-center justify-center text-white bg-blue-600 rounded-full">
              3
            </span>
          </div>
          <button onClick={() => setIsOpen(!isOpen)}>
            <Menu size={28} className="hover:text-blue-600" />
          </button>
        </div>

        {isOpen && (
          <div className="fixed inset-0 z-50 bg-black/50 flex justify-start items-start">
            <div className="bg-white w-3/4 h-full px-6 py-8 relative shadow-lg flex flex-col gap-6">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4"
              >
                <X size={28} />
              </button>
              {/* <NavLink
                to="/"
                onClick={() => setIsOpen(false)}
                className="text-blue-600"
              >
                Home
              </NavLink> */}

                <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-medium" : "text-gray-700 hover:text-blue-600"
                }
              >
                  Home
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-medium" : "text-gray-700 hover:text-blue-600"
                }
              >
                   About
              </NavLink>
              
              <NavLink
                to="/category"
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-medium" : "text-gray-700 hover:text-blue-600"
                }
              >
                  Category
              </NavLink>
              
              

              <NavLink
                to="/productDetails"
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-medium" : "text-gray-700 hover:text-blue-600"
                }
              >
                  Product Details
              </NavLink>
             
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-medium" : "text-gray-700 hover:text-blue-600"
                }
              >
                  Cart
              </NavLink>
              
              <NavLink
                to="/checkout"
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-medium" : "text-gray-700 hover:text-blue-600"
                }
              >
                  Checkout
              </NavLink>
              <a
                href="#"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-600 flex items-center gap-1"
              >
                Dropdown <ChevronDown className="w-4 h-4" />
              </a>
              <a
                href="#"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-600 flex items-center gap-1"
              >
                Megamenu 1 <ChevronDown className="w-4 h-4" />
              </a>
              <a
                href="#"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-600 flex items-center gap-1"
              >
                Megamenu 2 <ChevronDown className="w-4 h-4" />
              </a>
             
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-medium" : "text-gray-700 hover:text-blue-600"
                }
              >
                  Contact
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;

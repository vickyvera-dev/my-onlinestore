import React from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Heart, Menu, Search, SearchIcon, ShoppingCart, User, UserIcon, X } from "lucide-react";
import { useState } from "react";

function Aboutnav() {

   const [isOpen, setIsOpen] =
    useState(false);
  return (
    <div className="flex flex-col bg-white">
      <div className="lg:flex items-center justify-between mx-25 mt-4 py-6 sm:gap-6 bg-white md:hidden sm:hidden hidden">
        <div>
          <h1 className="font-bold text-3xl text-blue-950">eStore</h1>
        </div>

        <div className="flex border border-gray-400  rounded-full justify-between p-1 w-1/3 shadow-md">
          <input
            type="text"
            placeholder="Search for products"
            className="outline-none border-none focus:0 focus-border-none ml-5"
          />
          <div className="flex items-center text-white bg-blue-600 rounded-full px-5 py-2">
            <Search className="w-4 h-4" />
          </div>
        </div>
        <div className="flex gap-8">
          <User className="hover:text-blue-600" />
          <div className="relative">
            <Heart className="hover:text-blue-600" />
            <span className="flex absolute text-center items-center justify-center bg-blue-600 rounded-full text-white w-5 h-5 text-sm top-[-4px] right-[-0.8rem] mt-[-15px] font-semibold">
              0
            </span>
          </div>
          <div className="relative">
            <ShoppingCart className="hover:text-blue-600" />
            <span className="flex absolute text-center items-center justify-center bg-blue-600 rounded-full text-white w-5 h-5 top-[-4px] right-[-0.8rem] mt-[-15px] text-xs font-semibold">
              3
            </span>
          </div>
        </div>
      </div>

      {/*second navbar*/}
      <div className="w-full">
        <ul className="lg:flex items-center justify-between font-medium text-gray-700 hidden border-t border-b py-4 border-gray-300 pl-25 pr-45">
         
          <Link to={'/'} className="text-blue-600 font-medium"> Home</Link>
          <Link to={'/about'} className="hover:text-blue-600 font-medium">About</Link>
          <Link to={'/category'} className="hover:text-blue-600 font-medium">Category</Link>
          <Link to={'/productDetails'} className="hover:text-blue-600 font-medium">Product Details</Link>
          <Link to={'/cart'} className="hover:text-blue-600 font-medium">Cart</Link>
          <Link to={'/checkout'} className="hover:text-blue-600 font-medium">Checkout</Link>
          <Link to={'/dropdown'}><a className="hover:text-blue-600 flex items-center font-medium">
              <span className="font-medium">Dropdown</span>
              <ChevronDown className="w-4 h-4" />
            </a></Link>
          
          <Link to={'/megamenu1'}><a className="hover:text-blue-600 flex items-center font-medium">
              <span className="font-medium">Megamenu 1</span>
              <ChevronDown className="w-4 h-4" />
          </a></Link>
          <Link to={'/megamenu2'}>
           <a className="hover:text-blue-600 flex items-center font-medium">
              <span className="font-medium">Megamenu 2</span>
              <ChevronDown className="w-4 h-4" />
            </a>
          </Link>
          <Link to={'/contact'} className="hover:text-blue-600 font-medium">Contact</Link>         
          </ul>
      </div>

      
      <div className="flex items-center justify-between mt-4 py-6 sm:gap-6 bg-white lg:hidden px-10 border-b border-b-gray-500">
        <div><h1 className="font-bold text-3xl text-blue-950">eStore</h1></div>
        <div className="flex items-center gap-8">
          <div><SearchIcon className="hover:text-blue-600"/></div>
          <div><UserIcon className="hover:text-blue-600"/></div>

          <div>
            <div className="relative">
            <ShoppingCart className="hover:text-blue-600" />
            <span className="flex absolute text-center items-center justify-center bg-blue-600 rounded-full text-white w-5 h-5 top-[-4px] right-[-0.8rem] mt-[-15px] text-xs font-semibold">
              3
            </span>
          </div></div>

           <div> <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700"> <Menu size={28} className="hover:text-blue-600"/></button>
            </div>
            {isOpen && (
              <div className="flex flex-col items-left justify-items-start space-y-8 text-xl top-2 shadow-lg px-4 py-6  left-0 right-0 h-full fixed w-full z-40 bg-opacity-20 inset-0  bg-black/70 backdrop-md bg-opacity-20">
                <button onClick={() => setIsOpen(false)} className=" top-28 right-10 absolute z-50"><X size={28}/></button>
                 <ul className="py-20 px-8 text-left space-y-4 text-2xl text-gray-700 bg-white shadow-lg rounded-lg left-0 right-0 mt-20 relative">
                <li><Link to={'/'} onClick={() => setIsOpen(false)} className="text-blue-600">Home</Link></li>
                 <li><Link to={'/about'} onClick={() => setIsOpen(false)} className="hover:text-blue-600">About</Link></li>
          <li><Link to={'/category'} onClick={() => setIsOpen(false)} className="hover:text-blue-600">Category</Link></li>
          <li><Link to={'/productDetails'} onClick={() => setIsOpen(false)} className="hover:text-blue-600">Product Details</Link></li>
          <li><Link to={'/cart'} onClick={() => setIsOpen(false)} className="hover:text-blue-600">Cart</Link></li>
          <li><Link to={'/checkout'} onClick={() => setIsOpen(false)} className="hover:text-blue-600">Checkout</Link></li>
          <li> <Link to={'/dropdown'} onClick={() => setIsOpen(false)}><div className="hover:text-blue-600 flex items-center">
              <span>Dropdown</span>
              <ChevronDown className="w-4 h-4" />
            </div></Link></li>
         <li><Link to={'/megamenu1'} onClick={() => setIsOpen(false)}><div className="hover:text-blue-600 flex items-center">
              <span>Megamenu 1</span>
              <ChevronDown className="w-4 h-4" />
          </div></Link></li>
          
          <li><Link to={'/megamenu2'} onClick={() => setIsOpen(false)}>
           <div className="hover:text-blue-600 flex items-center">
              <span>Megamenu 2</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </Link></li>
          <li> <Link to={'/contact'} onClick={() => setIsOpen(false)} className="hover:text-blue-600">Contact</Link> </li>
           
              </ul>
              </div>
             
            )}
        </div>
      </div>

       <div  className='bg-gray-100 max-w-[100%] py-4'>
        <div className='flex items-center justify-between mx-25'>
        <div><h1 className="font-bold text-2xl text-blue-900">About</h1></div>
      <div className='flex gap-2'>
        <Link to={'/'} className='font-medium text-blue-600 cusor-pointer'>Home</Link>
        <Link to={'/about'} className='font-medium text-gray-500'> / About</Link>
      </div>
      </div>
      </div>


    </div>
  );
}

export default Aboutnav;

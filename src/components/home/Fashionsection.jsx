import React from "react";
import { ArrowRight, RefreshCcw, ShieldCheck, Truck } from "lucide-react";

function Fashionsection() {
  return (
  
    <div className="bg-white w-full py-8 h-auto">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 mx-25 gap-5  my-10 justify-between items-center ml-25 bg-white"
      style={{ fontFamily: '"Poppins",Sans-serif' }}>
        <div className="md:text-center sm:text-center lg:text-left">
        <button className="bg-blue-200 py-2 px-4 rounded-full text-sm text-blue-600 font-medium">
          New Collection 2025
        </button>
        <h1 className="text-5xl font-bold text-blue-950 tracking-wide leading-16 mt-8 mb-8 md:text-5xl lg:w-[90%]">
          Discover Stylish <span className="text-blue-600 border-b-7 border-blue-200 mr-2"> Fashion</span>
          For Every Season
        </h1>
        <p className="text-gray-600 leading-8 lg:w-[90%] text-xl">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Vestibulum ante ipsum primis in faucibus.
        </p>

        <div className="flex gap-4 mt-6 flex-col lg:flex-row md:flex-row  sm:flex-col lg:items-center md:justify-center sm:items-center lg:justify-normal sm:justify-normal">
          <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 font-semibold">
            <a
              href="#"
              className="flex flex-row justify-center"
            >
              <span>Shop Now</span>
              <ArrowRight />
            </a>
          </button>

          <button className="border border-gray-400 px-6 py-3 bg-gray-50 rounded hover:bg-gray-100 font-semibold text-gray-800 hover:border-blue-600 hover:text-blue-600">
            <a href="#">View Collection</a>
          </button>
        </div>

        <div className="flex mt-12 gap-6 text-sm text-center items-center text-gray-800 lg:flex-row md:flex-col sm:flex-col lg:items-center md:items-center sm:items-center">
          <h3 className="flex items-center gap-2 font-semibold text-sm">
            <Truck className="text-blue-600 w-5 h-5" />
            Free Shipping
          </h3>
          <h3 className="flex items-center gap-2 font-semibold text-sm">
            <ShieldCheck className="text-blue-600 w-5 h-5" />
            Secure Payment
          </h3>
          <h3 className="flex items-center gap-2 font-semibold text-sm">
            <RefreshCcw className="text-blue-600 w-5 h-5" />
            Easy Returns
          </h3>
        </div>
      </div>

      {/*right side*/}
      <div className=" relative md:justify-end justify-center">
        <img
          src="./images/product-f-9.webp"
          alt="Woman model"
          className="h-auto lg:w-[540px] mx-auto"
        />
        <div className="flex gap-4 items-center absolute top-30 left-[30px] bg-white px-2 py-1 rounded-md shadow-md text-sm text-gray-800 ">
          <div>
            <img
              src="./images/product-4.webp"
              alt="Shirt"
              className="w-16 h-16 object-contain"
            />
          </div>

          <div>
            <p className="text-gray-700 font-semibold">Summer Collection</p>
            <p className="font-bold text-blue-600">$89.99</p>
          </div>
        </div>
        {/*blue card*/}
        <div className="absolute top-18 right-[6rem] bg-blue-600 text-white px-5 py-3 rounded-full font-bold">
          30%
          <br />
          OFF
        </div>
        {/*card with glass*/}
        <div className="flex items-center gap-4 absolute text-sm py-1 px-2 rounded-md bg-white shadow-md right-[30px] bottom-28">
          <div>
            <img
              src="./images/product-3.webp"
              alt="Glass"
              className="w-16 h-16 object-contain"
            />
          </div>

          <div>
            <p className="text-gray-700 font-semibold">Casual Wear</p>
            <p className="text-blue-600 font-bold">$79.99</p>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  )
};

export default Fashionsection;

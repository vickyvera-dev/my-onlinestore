import React from "react";
import { ArrowRight, RefreshCcw, ShieldCheck, Truck } from "lucide-react";

function Fashionsection() {
  return (
    <section className="bg-white w-full py-16" style={{ fontFamily: '"Poppins", sans-serif' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-4">
        
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <button className="bg-blue-100 py-2 px-4 rounded-full text-sm text-blue-600 font-medium">
            New Collection 2025
          </button>

          <h1 className="text-3xl lg:text-5xl font-bold text-blue-950 tracking-wide leading-tight mt-8 mb-6 text-center lg:text-left">
            Discover Stylish
            <span className="text-blue-600 border-b-4 border-blue-200 mr-2">
              Fashion
            </span>
            For Every Season
          </h1>

          <p className="text-gray-600 leading-8 text-lg md:text-xl max-w-xl mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            Vestibulum ante ipsum primis in faucibus.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 justify-center lg:justify-start w-[100%]">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold flex items-center gap-2 hover:bg-blue-700 transition-colors w-[100%] text-center justify-center">
              <span>Shop Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button className="border border-gray-400 px-6 py-3 bg-gray-50 rounded-md hover:bg-gray-100 font-semibold text-gray-800 hover:border-blue-600 hover:text-blue-600 transition-all w-[100%] justify-center text-center">
              View Collection
            </button>
          </div>

          <div className="flex flex-col lg:flex-row items-center text-center justify-center lg:justify-start gap-6 mt-12 text-gray-800 text-sm font-semibold">
            <div className="flex items-center gap-2">
              <Truck className="text-blue-600 w-5 h-5" />
              Free Shipping
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-blue-600 w-5 h-5" />
              Secure Payment
            </div>
            <div className="flex items-center gap-2">
              <RefreshCcw className="text-blue-600 w-5 h-5" />
              Easy Returns
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative flex justify-center lg:justify-end">
          <img
            src="./images/product-f-9.webp"
            alt="Fashion Model"
            className="w-full max-w-[580px] h-auto object-contain"
          />

          {/* Floating product card 1 */}
          <div className="absolute top-30 left-4 bg-white px-3 py-2 rounded-md shadow-md flex items-center gap-3 text-gray-800 text-sm">
            <img
              src="./images/product-4.webp"
              alt="Shirt"
              className="w-14 h-14 object-contain"
            />
            <div>
              <p className="font-semibold text-gray-700">Summer Collection</p>
              <p className="font-bold text-blue-600">$89.99</p>
            </div>
          </div>

          {/* Blue badge */}
          <div className="absolute top-16 right-16 bg-blue-600 text-white px-5 py-3 rounded-full font-bold text-center text-sm">
            30%
            <br />
            OFF
          </div>

          {/* Floating product card 2 */}
          <div className="absolute bottom-10 right-6 bg-white px-3 py-2 rounded-md shadow-md flex items-center gap-3 text-gray-800 text-sm">
            <img
              src="./images/product-3.webp"
              alt="Casual Wear"
              className="w-14 h-14 object-contain"
            />
            <div>
              <p className="font-semibold text-gray-700">Casual Wear</p>
              <p className="font-bold text-blue-600">$79.99</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Fashionsection;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsEnvelope, BsGeoAlt, BsTelephone } from "react-icons/bs";
import { Link } from "react-router-dom";

function Contactaddress() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 50,
    });
  }, []);

  return (
   <div className="w-full">
     {/* Breadcrumb Section */}
            <div className="bg-gray-100 py-4 w-full">
              <div className="flex justify-between items-center px-10 max-w-7xl">
                <h1 className="font-bold text-2xl text-blue-900 ml-[8%]">Contact</h1>
                <div className="flex gap-2">
                  <Link to="/" className="font-medium text-blue-600 cursor-pointer">Home</Link>
                  <span className="font-medium text-gray-500">/ Contact</span>
                </div>
              </div>
            </div>
     <div className="py-16 bg-gray-50 w-full" data-aos="zoom-in">
      
      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 max-w-7xl mx-auto w-full">
          {/* Address Card */}
          <div className="flex flex-col items-center text-center px-8 py-12 rounded-2xl bg-white shadow-lg shadow-gray-200 transition-transform duration-500 hover:-translate-y-3">
            <div className="mb-4 text-blue-600 p-4 rounded-full bg-blue-50 border-2 border-dotted">
              <BsGeoAlt size={32} />
            </div>
            <h1 className="font-bold text-gray-800 text-xl mb-2">Address</h1>
            <p className="text-gray-500 text-sm sm:text-base">
              A108 Adam Street, New York, NY 535022
            </p>
            
          </div>

          {/* Phone Card */}
          <div className="flex flex-col items-center text-center px-8 py-12 rounded-2xl bg-white shadow-lg shadow-gray-200 transition-transform duration-500 hover:-translate-y-3">
            <div className="mb-4 text-blue-600 p-4 rounded-full bg-blue-50 border-2 border-dotted">
              <BsTelephone size={32} />
            </div>
            <h1 className="font-bold text-gray-800 text-xl mb-2">Call Us</h1>
            <p className="text-gray-500 text-sm sm:text-base">
              +1 5589 55488 55
            </p>
            </div>

          {/* Email Card */}
          <div className="flex flex-col items-center text-center px-8 py-12 rounded-2xl bg-white shadow-lg shadow-gray-200 transition-transform duration-500 hover:-translate-y-3">
            <div className="mb-4 text-blue-600 p-4 rounded-full bg-blue-50 border-2 border-dotted">
              <BsEnvelope size={32} />
            </div>
            <h1 className="font-bold text-gray-800 text-xl mb-2">Email Us</h1>
            <p className="text-gray-500 text-sm sm:text-base">
              info@example.com
            </p>
            
          </div>
        </div>
      
    </div>
   </div>
  );
}

export default Contactaddress;

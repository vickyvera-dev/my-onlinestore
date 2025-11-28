import React from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import { ClipboardPlus, Eye, Heart, Star } from "lucide-react";

{/*Arrays*/}

function Hotdeals() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 50,
    });
  }, []);

  return (
    <div className="bg-white w-full mx-auto py-12 px-4 sm:px-6 lg:px-12">
      <div className="text-center max-w-7xl mx-auto">
        <h1 className="font-bold text-blue-950 md:text-4xl text-2xl mb-6">
          Best Sellers
        </h1>
        <p className="text-gray-600 font-medium mb-10">
          Hot deals, available now at our estore — dive in to grab yours now.
        </p>

        {/* Product Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto">
          {/* Product 1 */}
          <div
            data-aos="zoom-in"
            className="bg-white rounded-2xl shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-2"
          >
            <div className="bg-gray-100 rounded-t-xl relative group overflow-hidden">
              <button className="bg-blue-800 rounded px-2 py-0.5 text-xs text-white absolute top-3 left-3">
                New
              </button>
              <div className="flex flex-col gap-2 absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-all duration-300 z-200">
                <span className="bg-white p-2 rounded-full text-gray-700 hover:bg-blue-600 hover:text-white">
                  <Heart size={20} />
                </span>
                <span className="bg-white p-2 rounded-full text-gray-700 hover:bg-blue-600 hover:text-white">
                  <Eye size={20} />
                </span>
              </div>
              <img
                src="/images/product-1.webp"
                alt="Hand Bag"
                className="w-full object-cover pt-4 transition-opacity duration-300 group-hover:opacity-0"
              />
              <img
                src="/images/product-1-variant.webp"
                alt="Hand Bag Hover"
                className="w-full object-cover pt-4 absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>
            <div className="p-4">
              <p className="text-blue-950 font-semibold hover:text-blue-800 text-left">
                Brown leather bag for ladies
              </p>
              <h1 className="font-bold text-blue-950 mt-3 text-left">$89.99</h1>
              <div className="flex items-center space-x-1 mt-3">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
                <div className="relative inline-block w-4 h-4">
                  <Star className="absolute inset-0 w-4 h-4 text-yellow-400" />
                  <div className="absolute inset-0 w-1/2 overflow-hidden">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  </div>
                </div>
                <p className="text-gray-400 ml-2 text-sm">(49)</p>
              </div>
              <button className="rounded bg-blue-600 text-white w-full mt-5 h-11 flex justify-center items-center gap-2 text-sm font-medium hover:bg-white hover:text-blue-600 hover:border-2 transition-all">
                <ClipboardPlus className="h-4 w-4" /> Add to Cart
              </button>
            </div>
          </div>

          {/* Product 2 */}
          <div
            data-aos="zoom-in"
            className="bg-white rounded-2xl shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-2"
          >
            <div className="bg-gray-100 rounded-t-xl relative group overflow-hidden">
              <button className="bg-red-500 rounded px-2 py-0.5 text-xs text-white absolute top-3 left-3">
                Sale
              </button>
              <div className="flex flex-col gap-2 absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-all duration-300 z-200">
                <div className="bg-white p-2 rounded-full text-gray-700 hover:bg-blue-600 hover:text-white">
                  <Heart size={20} />
                </div>
                <div className="bg-white p-2 rounded-full text-gray-700 hover:bg-blue-600 hover:text-white">
                  <Eye size={20} />
                </div>
              </div>
              <img
                src="/images/product-4.webp"
                alt="Sweater Jacket"
                className="w-full object-cover pt-4 transition-opacity duration-300 group-hover:opacity-0"
              />
              <img
                src="/images/product-4-variant.webp"
                alt="Sweater Jacket Hover"
                className="w-full object-cover pt-4 absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>
            <div className="p-4">
              <p className="text-blue-950 font-semibold hover:text-blue-800 text-left">
                Sweater wear for men for sale
              </p>
              <div className="flex items-center mt-3 space-x-2 text-left">
                <h1 className="font-bold text-blue-950">$64.99</h1>
                <p className="line-through text-gray-400">$79.99</p>
              </div>
              <div className="flex items-center space-x-1 mt-3">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
                <Star className="text-yellow-400 w-4 h-4" />
                <p className="text-gray-400 ml-2 text-sm">(28)</p>
              </div>
              <button className="rounded bg-blue-600 text-white w-full mt-5 h-11 flex justify-center items-center gap-2 text-sm font-medium hover:bg-white hover:text-blue-600 hover:border-2 transition-all">
                <ClipboardPlus className="h-4 w-4" /> Add to Cart
              </button>
            </div>
          </div>

          {/* Product 3 */}
          <div
            data-aos="zoom-in"
            className="bg-white rounded-2xl shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-2"
          >
            <div className="bg-gray-100 rounded-t-xl relative group overflow-hidden">
              <div className="flex flex-col gap-2 absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-all duration-300 z-200">
                <div className="bg-white p-2 rounded-full text-gray-700 hover:bg-blue-600 hover:text-white">
                  <Heart size={20} />
                </div>
                <div className="bg-white p-2 rounded-full text-gray-700 hover:bg-blue-600 hover:text-white">
                  <Eye size={20} />
                </div>
              </div>
              <img
                src="/images/product-7.webp"
                alt="Jean Jacket"
                className="w-full object-cover pt-4 transition-opacity duration-300 group-hover:opacity-0"
              />
              <img
                src="/images/product-7-variant.webp"
                alt="Jean Jacket Hover"
                className="w-full object-cover pt-4 absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>
            <div className="p-4">
              <p className="text-blue-950 font-semibold hover:text-blue-800 text-left">
                Jean jacket for ladies
              </p>
              <h1 className="font-bold text-blue-950 mt-3 text-left">$119.00</h1>
              <div className="flex items-center space-x-1 mt-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
                <p className="text-gray-400 ml-2 text-sm">(56)</p>
              </div>
              <button className="rounded bg-blue-600 text-white w-full mt-5 h-11 flex justify-center items-center gap-2 text-sm font-medium hover:bg-white hover:text-blue-600 hover:border-2 transition-all">
                <ClipboardPlus className="h-4 w-4" /> Add to Cart
              </button>
            </div>
          </div>

          {/* Product 4 */}
          <div
            data-aos="zoom-in"
            className="bg-white rounded-2xl shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-2"
          >
            <div className="bg-gray-100 rounded-t-xl relative group overflow-hidden">
              <button className="bg-gray-500 rounded px-2 py-0.5 text-xs text-white absolute top-3 left-3">
                Sold Out
              </button>
              
              <div className="flex flex-col gap-2 absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-all duration-300 z-200">
                <div className="bg-white p-2 rounded-full text-gray-700 hover:bg-blue-600 hover:text-white">
                  <Heart size={20} />
                </div>
                <div className="bg-white p-2 rounded-full text-gray-700 hover:bg-blue-600 hover:text-white">
                  <Eye size={20} />
                </div>
              </div>
              <img
                src="/images/product-12.webp"
                alt="Snikers"
                className="w-full object-cover pt-4 transition-opacity duration-300 group-hover:opacity-0"
              />
              <img
                src="/images/product-12-variant.webp"
                alt="Snikers Hover"
                className="w-full object-cover pt-4 absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>
            <div className="p-4">
              <p className="text-blue-950 font-semibold hover:text-blue-800">
                Sneakers for men in different colors
              </p>
              <h1 className="font-bold text-blue-950 mt-3 text-left">$75.50</h1>
              <div className="flex items-center space-x-1 mt-3">
                {[...Array(3)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
                <Star className="text-yellow-400 w-4 h-4" />
                <Star className="text-yellow-400 w-4 h-4" />
                <p className="text-gray-400 ml-2 text-sm">(15)</p>
              </div>
              <button className="rounded bg-gray-100 text-gray-400 w-full mt-5 h-11 flex justify-center items-center gap-2 text-sm font-medium hover:bg-white hover:text-red-600 hover:border-2 transition-all">
                <ClipboardPlus className="h-4 w-4" /> Sold Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hotdeals;

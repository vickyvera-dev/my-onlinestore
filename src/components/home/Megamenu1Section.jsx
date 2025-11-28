import { ChevronRight } from 'lucide-react'
import React, { useState } from 'react'

function Megamenu1Section() {
   const [activeSection, setActiveSection] = useState("Featured");
  return (
     <div
              className="
              fixed left-1/2 -translate-x-1/2 mt-4 rounded-lg
              w-[90%] max-h-[80vh] overflow-y-auto
              bg-white shadow-xl
              opacity-0 invisible 
              group-hover:opacity-100 group-hover:visible
              transition-all duration-300 z-[200] px-8 
          "
            >
              <div className="max-w-7xl mx-auto py-4 px-4 flex flex-col space-y-8">
                {/* === Section Tabs === */}
                <div className="flex gap-4 w-full  border-b border-b-gray-200">
                  <button
                    onClick={() => setActiveSection("Featured")}
                    className={` text-sm font-medium pb-2
            ${
              activeSection === "Featured"
                ? " text-blue-900 border-b-blue-600 border-b"
                : " text-gray-700 "
            }`}
                  >
                    Featured
                  </button>

                  <button
                    onClick={() => setActiveSection("New Arrivals")}
                    className={`text-sm font-medium pb-2
            ${
              activeSection === "New Arrivals"
                ? "text-blue-900 border-b-blue-600 border-b"
                : "text-gray-700 "
            }`}
                  >
                    New Arrivals
                  </button>

                  <button
                    onClick={() => setActiveSection("Sale")}
                    className={`text-sm font-medium pb-2
            ${
              activeSection === "Sale"
                ? "text-blue-900 border-b-blue-600 border-b"
                : "text-gray-700"
            }`}
                  >
                    Sale
                  </button>

                  <button
                    onClick={() => setActiveSection("Categories")}
                    className={`text-sm font-medium pb-2
            ${
              activeSection === "Categories"
                ? "text-blue-900 border-b-blue-600 border-b"
                : "text-gray-700"
            }`}
                  >
                    Categories
                  </button>
                </div>

                {/* === TABS CONTENT === */}
                <div className="mt-2 w-full">
                  {/* === Featured === */}
                  {activeSection === "Featured" && (
                    <div className="bg-white rounded-xl p-4 ">
                      <div className="grid grid-cols-4 gap-4">
                        {/* Product 1 */}
                        <div className="bg-white rounded-2xl p-4 overflow-hidden relative group">
                          {/* IMAGE SECTION */}
                          <div className="relative w-[250px] h-[200px]  overflow-hidden rounded-xl">
                            <img
                              src="/images/product-1.webp"
                              alt="Hand Bag"
                              className=" w-full h-40 object-cover transition-transform duration-300 hover:scale-110"
                            />
                          </div>

                          {/* CONTENT */}
                          <div className="mt-4">
                            <h2 className="text-lg font-bold text-blue-950 transition ease-in-out duration-300 hover:text-blue-600">
                              Premium Headphones
                            </h2>
                            <p className="text-blue-600 mt-2 font-semibold">
                              $129.99
                            </p>

                            <button
                              className="rounded bg-blue-100 text-blue-600 w-[45%] mt-5 h-8 
flex justify-center items-center gap-2 text-sm  
hover:text-white hover:bg-blue-600 transition-all"
                            >
                              View Product
                            </button>
                          </div>
                        </div>

                        {/* Product 2 */}
                        <div className="bg-white rounded-2xl p-4 overflow-hidden relative">
                          {/* IMAGE SECTION */}
                          <div className="relative w-[250px] h-[200px] overflow-hidden rounded-xl">
                            <img
                              src="/images/product-2.webp"
                              alt="Hand Bag"
                              className="w-full h-30 object-cover transition-transform duration-300 hover:scale-110"
                            />
                          </div>

                          {/* CONTENT */}
                          <div className="mt-4">
                            <h2 className="text-lg font-bold text-blue-950 transition ease-in-out duration-300 hover:text-blue-600">
                              Smart Watch
                            </h2>
                            <p className="text-blue-600 mt-2 font-semibold">
                              $199.99
                            </p>

                            <button
                              className="rounded bg-blue-100 text-blue-600 w-[45%] mt-5 h-8 
flex justify-center items-center gap-2 text-sm  
hover:text-white hover:bg-blue-600 transition-all"
                            >
                              View Product
                            </button>
                          </div>
                        </div>

                        {/* Product 3 */}
                        <div className="bg-white rounded-2xl p-4 overflow-hidden relative">
                          {/* IMAGE SECTION */}
                          <div className="relative w-[250px] h-[200px] overflow-hidden rounded-xl">
                            <img
                              src="/images/product-3.webp"
                              alt="Hand Bag"
                              className="w-full h-40 object-cover transition-transform duration-300 hover:scale-110"
                            />
                          </div>

                          {/* CONTENT */}
                          <div className="mt-4">
                            <h2 className="text-lg font-bold text-blue-950 transition ease-in-out duration-300 hover:text-blue-600">
                             Wireless Earbud
                            </h2>
                            <p className="text-blue-600 mt-2 font-semibold">
                              $89.99
                            </p>

                            <button
                              className="rounded bg-blue-100 text-blue-600 w-[45%] mt-5 h-8 
flex justify-center items-center gap-2 text-sm
hover:text-white hover:bg-blue-600 transition-all"
                            >
                              View Product
                            </button>
                          </div>
                        </div>

                        {/* Product 4 */}
                        <div className="bg-white rounded-2xl p-4 overflow-hidden relative">
                          {/* IMAGE SECTION */}
                          <div className="relative w-[250px] h-[200px] overflow-hidden rounded-xl">
                            <img
                              src="/images/product-4.webp"
                              alt="Hand Bag"
                              className="w-full h-40 object-cover transition-transform duration-300 hover:scale-110"
                            />
                          </div>

                          {/* CONTENT */}
                          <div className="mt-4">
                            <h2 className="text-lg font-bold text-blue-950 transition ease-in-out duration-300 hover:text-blue-600">
                              Bluetooth Speaker
                            </h2>
                            <p className="text-blue-600 mt-2 font-semibold">
                              $79.99
                            </p>

                            <button
                              className="rounded bg-blue-100 text-blue-600 w-[45%] mt-5 h-8 
flex justify-center items-center gap-2 text-sm
hover:text-white hover:bg-blue-600 transition-all"
                            >
                              View Product
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* === New arrival === */}
                  {activeSection === "New Arrivals" && (
                    <div className="p-4 bg-white rounded-xl">
                      <div className="grid grid-cols-4 gap-4">
                        {/* Product 1 */}
                        <div className="bg-white rounded-2xl p-4 overflow-hidden relative group">
                          <button className="bg-green-600 rounded px-2 py-0.5 text-xs text-white absolute top-3 right-3">
                          New
                        </button>
                          {/* IMAGE SECTION */}
                          <div className="relative w-[250px] h-[200px]  overflow-hidden rounded-xl">
                            <img
                              src="/images/product-8.webp"
                              alt="Hand Bag"
                              className=" w-full h-40 object-cover transition-transform duration-300 hover:scale-110"
                            />
                          </div>

                          {/* CONTENT */}
                          <div className="mt-4">
                            <h2 className="text-md font-bold text-blue-950 transition ease-in-out duration-300 hover:text-blue-600">
                              Fitness Tracker
                            </h2>
                            <p className="text-blue-600 mt-2">
                              $69.99
                            </p>

                            <button
                              className="rounded bg-blue-100 text-blue-600 w-[45%] mt-5 h-8 
                            flex justify-center items-center gap-2 text-sm  
                            hover:text-white hover:bg-blue-600 transition-all"
                            >
                              View Product
                            </button>
                          </div>
                        </div>

                        {/* Product 2 */}
                        <div className="bg-white rounded-2xl p-4 overflow-hidden relative">
                          <button className="bg-green-600 rounded px-2 py-0.5 text-xs text-white absolute top-3 right-3">
                          New
                        </button>
                          {/* IMAGE SECTION */}
                          <div className="relative w-[250px] h-[200px] overflow-hidden rounded-xl">
                            <img
                              src="/images/product-9.webp"
                              alt="Hand Bag"
                              className="w-full h-40 object-cover transition-transform duration-300 hover:scale-110"
                            />
                          </div>

                          {/* CONTENT */}
                          <div className="mt-4">
                            <h2 className="text-md font-bold text-blue-950 transition ease-in-out duration-300 hover:text-blue-600">
                              Wireless Charger
                            </h2>
                            <p className="text-blue-600 mt-2 font-semibold">
                              $39.99
                            </p>

                            <button
                              className="rounded bg-blue-100 text-blue-600 w-[45%] mt-5 h-8 
                              flex justify-center items-center gap-2 text-sm  
                              hover:text-white hover:bg-blue-600 transition-all"
                            >
                              View Product
                            </button>
                          </div>
                        </div>

                        {/* Product 3 */}
                        <div className="bg-white rounded-2xl p-4 overflow-hidden relative">
                          <button className="bg-green-600 rounded px-2 py-0.5 text-xs text-white absolute top-3 right-3">
                          New
                        </button>
                          {/* IMAGE SECTION */}
                          <div className="relative w-[250px] h-[200px] overflow-hidden rounded-xl">
                            <img
                              src="/images/product-10.webp"
                              alt="Hand Bag"
                              className="w-full h-40 object-cover transition-transform duration-300 hover:scale-110"
                            />
                          </div>

                          {/* CONTENT */}
                          <div className="mt-4">
                            <h2 className="text-md font-bold text-blue-950 transition ease-in-out duration-300 hover:text-blue-600">
                             Wireless Earbud
                            </h2>
                            <p className="text-blue-600 mt-2 font-semibold">
                              $89.99
                            </p>

                            <button
                              className="rounded bg-blue-100 text-blue-600 w-[45%] mt-5 h-8 
                                  flex justify-center items-center gap-2 text-sm
                                  hover:text-white hover:bg-blue-600 transition-all"
                            >
                              View Product
                            </button>
                          </div>
                        </div>

                        {/* Product 4 */}
                        <div className="bg-white rounded-2xl p-4 overflow-hidden relative">
                          <button className="bg-green-600 rounded px-2 py-0.5 text-xs text-white absolute top-3 right-3">
                          New
                        </button>
                          {/* IMAGE SECTION */}
                          <div className="relative w-[250px] h-[200px] overflow-hidden rounded-xl">
                            <img
                              src="/images/product-11.webp"
                              alt="Hand Bag"
                              className="w-full h-40 object-cover transition-transform duration-300 hover:scale-110"
                            />
                          </div>

                          {/* CONTENT */}
                          <div className="mt-4">
                            <h2 className="text-md font-bold text-blue-950 transition ease-in-out duration-300 hover:text-blue-600">
                              Bluetooth Speaker
                            </h2>
                            <p className="text-blue-600 mt-2 font-semibold">
                              $79.99
                            </p>

                            <button
                              className="rounded bg-blue-100 text-blue-600 w-[45%] mt-5 h-8 
                            flex justify-center items-center gap-2 text-sm
                            hover:text-white hover:bg-blue-600 transition-all"
                            >
                              View Product
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* === sale=== */}
                  {activeSection === "Sale" && (
                    <div className="p-6 bg-white rounded-xl">
                      <div className="grid grid-cols-4 gap-4">
                        {/* Product 1 */}
                        <div className="bg-white rounded-2xl p-4 overflow-hidden relative group">
                          <button className="bg-red-600 rounded px-2 py-0.5 text-xs text-white absolute top-3 right-3">
                          30%
                        </button>
                          {/* IMAGE SECTION */}
                          <div className="relative w-[250px] h-[200px]  overflow-hidden rounded-xl">
                            <img
                              src="/images/product-8.webp"
                              alt="Hand Bag"
                              className="w-full h-30 object-cover transition-transform duration-300 hover:scale-110"
                            />
                          </div>

                          {/* CONTENT */}
                          <div className="mt-4">
                            <h2 className=" text-blue-950 transition ease-in-out duration-300 hover:text-blue-600">
                              Wireless Keyboard
                            </h2>
                            <p className="flex items-center flex-row mt-2 gap-2">
                              <span className="text-gray-500 line-through">$89.99 </span><span className="text-blue-600">$62.99</span>
                            </p>

                            <button
                              className="rounded bg-blue-100 text-blue-600 w-[45%] mt-5 h-8 
                            flex justify-center items-center gap-2 text-sm  
                            hover:text-white hover:bg-blue-600 transition-all"
                            >
                              View Product
                            </button>
                          </div>
                        </div>

                        {/* Product 2 */}
                        <div className="bg-white rounded-2xl p-4 overflow-hidden relative">
                          <button className="bg-red-600 rounded px-2 py-0.5 text-xs text-white absolute top-3 right-3">
                          -25%
                        </button>
                          {/* IMAGE SECTION */}
                          <div className="relative w-[250px] h-[200px] overflow-hidden rounded-xl">
                            <img
                              src="/images/product-3.webp"
                              alt="Hand Bag"
                              className="w-full h-40 object-cover transition-transform duration-300 hover:scale-110"
                            />
                          </div>

                          {/* CONTENT */}
                          <div className="mt-4">
                            <h2 className=" text-blue-950 transition ease-in-out duration-300 hover:text-blue-600">
                              Gaming Mouse
                            </h2>
                            <p className="flex items-center flex-row mt-2 gap-2">
                              <span className="text-gray-500 line-through">$59.99</span><span className="text-blue-600">$44.99</span>
                            </p>

                            <button
                              className="rounded bg-blue-100 text-blue-600 w-[45%] mt-5 h-8 
                              flex justify-center items-center gap-2 text-sm  
                              hover:text-white hover:bg-blue-600 transition-all"
                            >
                              View Product
                            </button>
                          </div>
                        </div>

                        {/* Product 3 */}
                        <div className="bg-white rounded-2xl p-4 overflow-hidden relative">
                          <button className="bg-red-600 rounded px-2 py-0.5 text-xs text-white absolute top-3 right-3">
                          -40%
                        </button>
                          {/* IMAGE SECTION */}
                          <div className="relative w-[250px] h-[200px] overflow-hidden rounded-xl">
                            <img
                              src="/images/product-12.webp"
                              alt="Hand Bag"
                              className="w-full h-40 object-cover transition-transform duration-300 hover:scale-110"
                            />
                          </div>

                          {/* CONTENT */}
                          <div className="mt-4">
                            <h2 className=" text-blue-950 transition ease-in-out duration-300 hover:text-blue-600">
                             Desk Lamp
                            </h2>
                            <p className="flex items-center flex-row mt-2 gap-2">
                              <span className="text-gray-500 line-through">$49.99</span>
                              <span className="text-blue-600"> $29.99</span>
                            </p>

                            <button
                              className="rounded bg-blue-100 text-blue-600 w-[45%] mt-5 h-8 
                                  flex justify-center items-center gap-2 text-sm
                                  hover:text-white hover:bg-blue-600 transition-all"
                            >
                              View Product
                            </button>
                          </div>
                        </div>

                        {/* Product 4 */}
                        <div className="bg-white rounded-2xl p-4 overflow-hidden relative">
                          <button className="bg-red-600 rounded px-2 py-0.5 text-xs text-white absolute top-3 right-3">
                          -20%
                        </button>
                          {/* IMAGE SECTION */}
                          <div className="relative w-[250px] h-[200px] overflow-hidden rounded-xl">
                            <img
                              src="/images/product-7.webp"
                              alt="Hand Bag"
                              className="w-full h-40 object-cover transition-transform duration-300 hover:scale-110"
                            />
                          </div>

                          {/* CONTENT */}
                          <div className="mt-4">
                            <h2 className="text-blue-950 transition ease-in-out duration-300 hover:text-blue-600">
                              USB-C Hub
                            </h2>
                           <p className="flex items-center flex-row mt-2 gap-2">
                              <span className="text-gray-500 line-through">$39.99</span><span className="text-blue-600"> $29.99</span>
                            </p>

                            <button
                              className="rounded bg-blue-100 text-blue-600 w-[45%] mt-5 h-8 
                            flex justify-center items-center gap-2 text-sm
                            hover:text-white hover:bg-blue-600 transition-all"
                            >
                              View Product
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* === Categories=== */}
                  {activeSection === "Categories" && (
                    <div className="p-6 bg-white rounded-xl">
                      <div className="grid grid-cols-4 gap-4">
                        {/* card list 1 */}
                        <div className="bg-gray-50 rounded-2xl p-4 overflow-hidden relative group">
                          <div className="pb-2 border-b border-b-gray-200 flex flex-col">
                            <p className="text-md text-gray-600 pb-2">Clothing</p>
                            <div className="h-0.5 w-10 bg-blue-600 inline-block -mb-2"></div>
                            </div>
                          <div className="mt-4">
                            <ul className="space-y-4">
                              <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600"><span><ChevronRight size={18} strokeWidth={1}/></span>Men's Wear</li>

                              <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600"><span><ChevronRight size={18} strokeWidth={1}/></span>Women's Wear</li>

                              <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600"><span><ChevronRight size={18} strokeWidth={1}/></span>Kids Collection</li>

                               <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600"><span><ChevronRight size={18} strokeWidth={1}/></span>Sportswear</li>

                               <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600"><span><ChevronRight size={18} strokeWidth={1}/></span>Accessories</li>
                            </ul>
                          </div>                          
                        </div>

                        {/* card list 2 */}
                        <div className="bg-gray-50 rounded-2xl p-4 overflow-hidden relative group">
                          <div className="pb-2 border-b border-b-gray-200 flex flex-col">
                            <p className="text-md text-gray-600 pb-2">Electronics</p>
                            <div className="h-0.5 w-10 bg-blue-600 inline-block -mb-2"></div>
                            </div>
                          <div className="mt-4">
                            <ul className="space-y-4">
                              <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600"><span><ChevronRight size={18} strokeWidth={1}/></span>Smartphones</li>

                              <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600"><span><ChevronRight size={18} strokeWidth={1}/></span>Laptops</li>

                              <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600"><span><ChevronRight size={18} strokeWidth={1}/></span>Audio Devices</li>

                               <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600"><span><ChevronRight size={18} strokeWidth={1}/></span>Smart Home</li>

                               <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600"><span><ChevronRight size={18} strokeWidth={1}/></span>Accessories</li>
                            </ul>
                          </div>                          
                        </div>

                       {/* card list 3 */}
                        <div className="bg-gray-50 rounded-2xl p-4 overflow-hidden relative group">
                          <div className="pb-2 border-b border-b-gray-200 flex flex-col">
                            <p className="text-md text-gray-600 pb-2">Home & Living</p>
                            <div className="h-0.5 w-10 bg-blue-600 inline-block -mb-2"></div>
                            </div>
                          <div className="mt-4">
                            <ul className="space-y-4">
                              <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600"><span><ChevronRight size={18} strokeWidth={1}/></span>Furniture</li>

                              <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600"><span><ChevronRight size={18} strokeWidth={1}/></span>Decor</li>

                              <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600"><span><ChevronRight size={18} strokeWidth={1}/></span>Kitchen</li>

                               <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600"><span><ChevronRight size={18} strokeWidth={1}/></span>Bedding</li>

                               <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600"><span><ChevronRight size={18} strokeWidth={1}/></span>Lighting</li>
                            </ul>
                          </div>                          
                        </div>

                        {/* card list 4 */}
                        <div className="bg-gray-50 rounded-2xl p-4 overflow-hidden relative group">
                          <div className="pb-2 border-b border-b-gray-200 flex flex-col">
                            <p className="text-md text-gray-600 pb-2">Beauty</p>
                            <div className="h-0.5 w-10 bg-blue-600 inline-block -mb-2"></div>
                            </div>
                          <div className="mt-4">
                            <ul className="space-y-4">
                              <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600"><span><ChevronRight size={18} strokeWidth={1}/></span>Skincare</li>

                              <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600"><span><ChevronRight size={18} strokeWidth={1}/></span>Makeup</li>

                              <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600"><span><ChevronRight size={18} strokeWidth={1}/></span>Haircare</li>

                               <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600"><span><ChevronRight size={18} strokeWidth={1}/></span>Fragrances</li>

                               <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600"><span><ChevronRight size={18} strokeWidth={1}/></span>Personal Care</li>
                            </ul>
                          </div>                          
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
  )
}
export default Megamenu1Section
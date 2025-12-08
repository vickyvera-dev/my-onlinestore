import { ChevronRight } from 'lucide-react';
import React, { useState } from 'react'

function Megamenu2section() {

  const [activeMenu, setActiveMenu] = useState("WOMEN");
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
              <div className="max-w-7xl mx-auto py-4 px-4 flex flex-col space-y-8 items-center">
                {/* === Section Tabs === */}
                <div className="flex gap-4 w-full  border-b border-b-gray-200">
                  <button
                    onClick={() => setActiveMenu("WOMEN")}
                    className={` text-sm font-medium pb-2
            ${
              activeMenu === "WOMEN"
                ? " text-blue-900 border-b-blue-600 border-b"
                : " text-gray-700 "
            }`}
                  >
                    WOMEN
                  </button>

                  <button
                    onClick={() => setActiveMenu("MEN")}
                    className={`text-sm font-medium pb-2
            ${
              activeMenu === "MEN"
                ? "text-blue-900 border-b-blue-600 border-b"
                : "text-gray-700 "
            }`}
                  >
                    MEN
                  </button>

                  <button
                    onClick={() => setActiveMenu("KIDS")}
                    className={`text-sm font-medium pb-2
            ${
              activeMenu === "KIDS"
                ? "text-blue-900 border-b-blue-600 border-b"
                : "text-gray-700"
            }`}
                  >
                    KIDS
                  </button>                  
                </div>

                {/* === TABS CONTENT === */}
                <div className="mt-2 w-full">
                  {/* === women === */}
                  {activeMenu === "WOMEN" && (
                    <div className="bg-white rounded-xl p-4 ">
                       <div className="grid grid-cols-5 whitespace-nowrap gap-3">
                        {/* card list 1 */}
                        <div className="bg-gray-50 rounded-2xl p-4 overflow-hidden relative group">
                          <div className="pb-2 border-b border-b-gray-200 flex flex-col">
                            <p className="text-md text-gray-600 pb-2">Clothing</p>
                            
                            </div>
                          <div className="mt-4">
                            <ul className="space-y-4">
                              <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600">Shirts & Tops</li>

                              <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600">Coats & Outerwear</li>

                              <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600">Sweatshirts</li>

                               <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600">Dresses</li>

                               <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600">Swimwear</li>
                                <a href="#" className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600">View All</a>
                            </ul>
                          </div>                          
                        </div>

                        {/* card list 2 */}
                        <div className="bg-gray-50 rounded-2xl p-4 overflow-hidden relative group">
                          <div className="pb-2 border-b border-b-gray-200 flex flex-col">
                            <p className="text-md text-gray-600 pb-2">Shoes</p>
                            
                            </div>
                          <div className="mt-4">
                            <ul className="space-y-4">
                              <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600">Boots</li>

                              <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600">Sandals</li>

                              <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600">Heels</li>

                               <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600">Loafers</li>

                               <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600">Slippers</li>
                               <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600">Oxfords</li>
                               <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600">View all</li>
                            </ul>
                          </div>                          
                        </div>

                       {/* card list 3 */}
                        <div className="bg-gray-50 rounded-2xl p-4 overflow-hidden relative group">
                          <div className="pb-2 border-b border-b-gray-200 flex flex-col">
                            <p className="text-md text-gray-600 pb-2">Accessories</p>
                            
                            </div>
                          <div className="mt-4">
                            <ul className="space-y-4">
                              <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600">Handbags</li>

                              <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600">Eyewears</li>

                              <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600">Watches</li>

                               <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600">Jewelry</li>

                               <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600">Belts</li>

                               <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600">View all</li>
                            </ul>
                          </div>                          
                        </div>

                        {/* card list 4 */}
                        <div className="bg-gray-50 rounded-2xl p-4 overflow-hidden relative group">
                          <div className="pb-2 border-b border-b-gray-200 flex flex-col">
                            <p className="text-md text-gray-600 pb-2">Specialty Sizes</p>
                            
                            </div>
                          <div className="mt-4">
                            <ul className="space-y-4">
                              <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600">Plus Size</li>

                              <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600">Petite</li>

                              <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600">Wide Shoes</li>

                               <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600">Narrow Shoes</li>

                            </ul>
                          </div>                          
                        </div>

                        {/* card list 5 */}
                        <div className="bg-gray-50 rounded-2xl p-4 overflow-hidden relative group">
                          <div className="relative w-full h-full">
                            <div className="absolute left-2 z-80 top-13">
                               <span className="text-2xl text-blue-950 text-left ">Women's<br/>Bag <br/>
                               Collection</span>
                               <div className="mt-2">
                                <button className="py-1 rounded-lg px-2 bg-blue-700 text-white text-md font-medium">Shop now</button>
                               </div>
                            </div>
                            <img
                              src="/images/product-f-1.webp"
                              alt="Hand Bag"
                              className="w-full object-cover h-full relative"
                            />
                          </div>                        
                        </div>
                      </div>
                    </div>
                  )}

                  {/* === men === */}
                  {activeMenu === "MEN" && (
                    <div className="p-4 bg-white rounded-xl">
                       <div className="grid grid-cols-5 whitespace-nowrap gap-3">
                        {/* card list 1 */}
                        <div className="bg-gray-50 rounded-2xl p-4 overflow-hidden relative group">
                          <div className="pb-2 border-b border-b-gray-200 flex flex-col">
                            <p className="text-md text-gray-600 pb-2">Clothing</p>
                            
                            </div>
                          <div className="mt-4">
                            <ul className="space-y-4">
                              <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600">Shirts & Polo</li>

                              <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600">Jackets & Coats</li>

                              <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600">Underwears</li>

                               <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600">Hoodies</li>

                               <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600">Suits</li>

                               <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600">Activewears</li>

                               <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600">View all</li>
                            </ul>
                          </div>                          
                        </div>

                        {/* card list 2 */}
                        <div className="bg-gray-50 rounded-2xl p-4 overflow-hidden relative group">
                          <div className="pb-2 border-b border-b-gray-200 flex flex-col">
                            <p className="text-md text-gray-600 pb-2">Shoes</p>                            
                            </div>
                          <div className="mt-4">
                            <ul className="space-y-4">
                              <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600"></li>

                              <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600">Sneakers</li>

                              <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600">Boots</li>

                               <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600">Loafers</li>

                               <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600">Dress Shoes</li>

                                <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600">Sandals</li>

                                 <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600">Slippers</li>

                                  <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600">View all</li>
                            </ul>
                          </div>                          
                        </div>

                       {/* card list 3 */}
                        <div className="bg-gray-50 rounded-2xl p-4 overflow-hidden relative group">
                          <div className="pb-2 border-b border-b-gray-200 flex flex-col">
                            <p className="text-md text-gray-600 pb-2">Accessories</p>                            
                            </div>
                          <div className="mt-4">
                            <ul className="space-y-4">
                              <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600">Watches</li>

                              <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600">Belts</li>

                              <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600">Ties</li>

                               <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600">Wallets</li>

                               <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600">Sunglasses</li>

                                <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600">Hats</li>

                                 <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600">View all</li>
                            </ul>
                          </div>                          
                        </div>

                        {/* card list 4 */}
                        <div className="bg-gray-50 rounded-2xl p-4 overflow-hidden relative group">
                          <div className="pb-2 border-b border-b-gray-200 flex flex-col">
                            <p className="text-md text-gray-600 pb-2">Specialty Sizes</p>                            
                            </div>
                          <div className="mt-4">
                            <ul className="space-y-4">
                              <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600">Big & Tall</li>

                              <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600">Slim Fit</li>

                              <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600">Wide Shoes</li>

                               <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600">Extended sizes</li>

                            </ul>
                          </div>                          
                        </div>

                        {/* card list 5 */}
                        <div className="bg-gray-50 rounded-2xl p-4 overflow-hidden relative group">
                          <div className="relative w-full h-full">
                            <div className="absolute left-2 z-80 top-18">
                               <span className="text-2xl text-blue-950 text-left ">Men's<br/>Footwear <br/>
                               Collection</span>
                               <div className="mt-2">
                                <button className="py-1 rounded-lg px-2 bg-blue-700 text-white text-md font-medium">Shop now</button>
                               </div>
                            </div>
                            <img
                              src="/images/product-m-4.webp"
                              alt="Hand Bag"
                              className="w-full object-cover h-full relative"
                            />
                          </div>                        
                        </div>
                      </div>
                    </div>
                  )}

                  {/* === kids=== */}
                  {activeMenu === "KIDS" && (
                    <div className="p-4 bg-white rounded-xl">
                      <div className="grid grid-cols-5 whitespace-nowrap gap-3">
                        {/* card list 1 */}
                        <div className="bg-gray-50 rounded-2xl p-4 overflow-hidden relative group">
                          <div className="pb-2 border-b border-b-gray-200 flex flex-col">
                            <p className="text-md text-gray-600 pb-2">Clothing</p>                            
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
                            <p className="text-md text-gray-600 pb-2">Specialty Sizes</p>                            
                            </div>
                          <div className="mt-4">
                            <ul className="space-y-4">
                              <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600">Plus Size</li>

                              <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600">Petite</li>

                              <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600">Wide Shoes</li>

                               <li className="flex items-center flex-row gap-1 transition-all ease-in-out duration-300 hover:translate-x-2 text-sm text-gray-600 hover:text-blue-600">Narrow Shoes</li>

                            </ul>
                          </div>                          
                        </div>

                        {/* card list 5 */}
                        <div className="bg-gray-50 rounded-2xl p-4 overflow-hidden relative group">
                          <div className="relative w-full h-full">
                            <div className="absolute left-2 z-80 top-13">
                               <span className="text-2xl text-blue-950 text-left ">Kid's<br/>New<br/>
                               Arrivals</span>
                               <div className="mt-2">
                                <button className="py-1 rounded-lg px-2 bg-blue-700 text-white text-md font-medium">Shop now</button>
                               </div>
                            </div>
                            <img
                              src="/images/product-9.webp"
                              alt="Hand Bag"
                              className="w-full object-contain h-full relative"
                            />
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
export default Megamenu2section
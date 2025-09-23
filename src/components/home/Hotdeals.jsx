import React from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import { ClipboardPlus, Eye, Heart, Star } from "lucide-react";

{/*Arrays*/}
      function Hotdeals () {
      useEffect(() => {
      Aos.init({
      duration: 1000,
      delay: 50,
      });
      }, []);


      return(
      <div className=" bg-white max-w-[120%] mx-auto max-h-[100%] py-8">
        <div>
          <h1 className="font-bold text-blue-950 md:text-4xl mb-10 text-center text-xl mt-10">Best Sellers</h1>
      <p className="text-center font-semibold">Hot deals, available now at our estore, dive-in to grap yours now.</p>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mx-auto max-w-7xl mt-10 px-5">

        <div  data-aos="zoom-in" className=" bg-white rounded-2xl pt-5 pb-5 shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-2 mb-10">
          <div className="transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <div className="bg-gray-100 rounded-t-xl -mt-4 relative group">
          <button className="bg-blue-800 rounded px-1 text-sm text-white text-center absolute top-3 left-2 sm:top-4 sm:left-4">New</button>

              <div className="absolute">
                <button className="bg-blue-800 rounded px-1 text-sm text-white text-center absolute top-3 left-2 sm:top-4 sm:left-4 ">New</button>                
                <div className="flex flex-col gap-2 items-center justify-center transition-colors duration-300 absolute right-3 top-3 group-hover:opacity-100 opacity-0">
                  <span className="text-gray-700 bg-white p-2 rounded-full absolute right-3 top-3 hover:bg-blue-600 hover:text-white">
                <Heart size={24}/>                           
              </span>
                  <span className="text-gray-700 bg-white p-2 rounded-full absolute right-3 top-15 hover:bg-blue-600 hover:text-white">
                <Eye size={24}/>
              </span>              
              </div>                
              <img src="/images/product-1-variant.webp" alt="Hand Bag" className="w-full h-full object-cover pt-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gray-100 rounded-t-xl"/>  
              </div>  
              <img src="/images/product-1.webp" alt="Hand Bag" className="object-cover pt-4 "/>          
            </div>
            <p className="text-blue-950 font-semibold mt-4 ml-4 hover:text-blue-800 ">Brown leather bag for ladies</p>
            <h1 className="font-bold text-blue-950 mt-8 ml-4">$89.99</h1>
            <div className="flex ml-4 mt-4 items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400"/>
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400"/>
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400"/>
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400"/>
              <div className="relative inline-block w-4 h-4">
                <Star className="absolute inset-0 w-4 h-4 text-yellow-400"/>
                <div className="absolute inset-0 w-1/2 overflow-hidden">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400"/>
              </div>
              </div>           
            <p className="text-gray-400 ml-2">(49)</p>
            </div>
            <div className="w-full"><button className="rounded items-center text-center bg-blue-600 flex text-white mt-4 h-12 w-[90%] gap-1.5 justify-center mx-4 text-sm font-medium transition-colors duration-300 hover:bg-white hover:text-blue-600 hover:border-2 hover:font-bold"><ClipboardPlus className="h-4 w-4"/> Add to Cart</button> </div>
                        
          </div>
        </div>
         
           <div data-aos="zoom-in" className=" bg-white rounded-2xl pt-5 pb-5 shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-2 mb-10">
            <div className="transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <div className="bg-gray-100 rounded-t-xl -mt-4 relative group">
              <button className="bg-red-500 rounded px-1 text-sm text-white text-center font-medium absolute top-3 left-2 sm:top-4 sm:left-4">Sale</button>

              <div className="absolute">
                <button className="bg-red-500 rounded px-1 text-sm text-white text-center font-medium absolute top-3 left-2 sm:top-4 sm:left-4">Sale</button>
                
                <div className="flex flex-col gap-2 items-center justify-center transition-colors duration-300 absolute right-3 top-3 group-hover:opacity-100 opacity-0">
                <div className="text-gray-700 bg-white p-2 rounded-full hover:bg-blue-600 hover:text-white">
                <Heart size={24}/>                
              </div>  
                <div className="text-gray-700 bg-white p-2 rounded-full hover:bg-blue-600 hover:text-white">
                <Eye size={24}/>
              </div>                           
              </div> 
              <img src="/images/product-4-variant.webp" alt="Sweater Jacket" className="w-full h-full object-cover pt-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gray-100 rounded-t-xl"/>
              </div>              
              <img src="/images/product-4.webp" alt="Sweater Jacket" className="object-cover pt-4"/>                      
              </div>              
            <p className="text-blue-950 font-semibold mt-4 ml-4 hover:text-blue-800">Sweater wear for men for sale</p>
            <div className="flex text-center items-center mt-8">
              <h1 className="font-bold text-blue-950  ml-4">$64.99 </h1>
              <p className="line-through text-gray-400 ml-2">$79.99</p>
            </div>            
            <div className="flex ml-4 mt-4 items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400"/>
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400"/>
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400"/>
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400"/>
              <Star className="text-yellow-400 w-4 h-4"/>
              <p className="text-gray-400 ml-2">(28)</p>
            </div>
            <div className="w-full"><button className="rounded items-center text-center bg-blue-600 flex text-white mt-4 h-12 transition-colors duration-300 hover:bg-white hover:text-blue-600 hover:border-2 hover:font-bold gap-1.5 justify-center mx-4 text-sm font-semibold w-[90%]"><ClipboardPlus className="h-4 w-4"/> Add to Cart</button> </div>
                       
          </div>
          </div>
          
         <div data-aos="zoom-in" className=" bg-white rounded-2xl pt-5 pb-5 shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-2 mb-10">
          <div className="transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <div className="bg-gray-100 rounded-t-xl -mt-4 relative group">
              <div className="absolute">
                <div className="flex flex-col gap-2 items-center justify-center transition-colors duration-300 absolute right-3 top-3 opacity-0 group-hover:opacity-100">
                  <div className="hover:bg-blue-600 hover:text-white text-gray-700 bg-white p-2 rounded-full  absolute right-3 top-3">
                  <Heart size={24}/>
                </div>
                <div className="text-gray-700 bg-white p-2 rounded-full hover:bg-blue-600 hover:text-white absolute right-3 top-16">
                <Eye size={24}/>
              </div>
              </div>     
              
              <img src="/images/product-7-variant.webp" alt="Sweater Jacket" className="object-cover pt-4 w-full h-full  opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gray-100 rounded-t-xl"/>
              </div> 
             <img src="/images/product-7.webp" alt="Sweater Jacket" className="object-cover pt-4"/></div>
            <p className="text-blue-950 font-semibold mt-4 ml-4 hover:text-blue-800">Jean jacket for ladies, ladies</p>
            <h1 className="font-bold text-blue-950 mt-8 ml-4">$119.00</h1>
            <div className="flex ml-4 mt-4 items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400"/>
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400"/>
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400"/>
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400"/>
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400"/>
              <p className="text-gray-400 ml-2">(56)</p>
            </div>
            <div className="mx-4 mt-4 w-full">
              <button className="rounded items-center text-center bg-blue-600 flex text-white h-12 w-[90%] gap-1.5 text-sm font-semibold transition-colors duration-300 hover:bg-white hover:text-blue-600 hover:border-2 hover:font-bold justify-center"><ClipboardPlus className="h-4 w-4"/>Add to Cart</button> 
            </div>                        
          </div>
         </div>
          
      <div data-aos="zoom-in" className=" bg-white rounded-2xl pt-5 pb-5 shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-2 mb-10">
         <div className="transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <div className="bg-gray-100 rounded-t-xl -mt-4 relative group">
              <button className="bg-gray-600 rounded px-1 text-sm text-white text-center font-medium absolute top-3 left-2 sm:top-4 ">Sold Out</button>

              <div className="absolute">
                <button className="bg-gray-600 rounded px-1 text-sm text-white text-center font-medium absolute top-3 left-2 sm:top-4 ">Sold Out</button>
                <div className="flex flex-col gap-2 items-center justify-center transition-colors duration-300 absolute right-3 top-3 opacity-0 group-hover:opacity-100">
                  <div className="hover:bg-blue-600 hover:text-white text-gray-700 bg-white p-2 rounded-full  absolute right-3 top-3">
                <Heart size={24}/>                
              </div>
                <div className="text-gray-700 bg-white p-2 rounded-full hover:bg-blue-600 hover:text-white absolute right-3 top-16">
                <Eye size={24}/>
                </div>  
                </div>
                            
              <img src="/images/product-12-variant.webp" alt="Sweater Jacket" className="object-cover pt-4 w-full h-full  opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gray-100 rounded-t-xl"/>
              </div> 
              <img src="/images/product-12.webp" alt="Sweater Jacket" className="object-cover pt-4"/></div>

            <p className="text-blue-950 font-semibold mt-4 ml-4  hover:text-blue-800">Snikers for men in different colors</p>
            <h1 className="font-bold text-blue-950 mt-8 ml-4">$75.50</h1>
            <div className="flex ml-4 mt-4 items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400"/>
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400"/>
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400"/>
              <Star className="text-yellow-400 w-4 h-4"/>
              <Star className="text-yellow-400 w-4 h-4"/>
              <p className="text-gray-400 ml-2">(15)</p>
            </div>
            <div className="w-full">
              <button className="rounded items-center text-center bg-gray-100 flex text-gray-400 mt-4 h-12 w-[90%] gap-1.5 justify-center mx-4 text-sm font-semibold transition-colors duration-300 hover:bg-white hover:text-red-600 hover:border-2 hover:font-bold"><ClipboardPlus className="h-4 w-4"/>Sold Out</button>             
            </div>
          </div>
      </div>         
      </div>
        </div>      
      </div>
      )
      }



export default Hotdeals;
import React from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { BsApple, BsFacebook, BsGooglePlay, BsInstagram, BsPinterest, BsTiktok, BsTwitterX, BsYoutube, } from "react-icons/bs";

 function Infosec () {
      useEffect(() => {
      Aos.init({
      duration: 1000,
      delay: 50,
      });
      }, []);


      return(
        <div className="bg-white w-full py-10 px-6">
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mx-auto max-w-6xl mt-10 bg-white px-4">

            <div>
         <h1 className="font-semibold text-3xl text-blue-950 mb-6 hover:text-blue-900">eStore</h1>
         <p className="text-gray-600 w-70 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in nibh vehicula, facilisis magna ut, consectetur lorem.</p>
         <div className="flex items-center w-60 gap-2 mt-4">
          <MapPin size={20} className="text-blue-600" strokeWidth={1}/>         
         <p className="text-gray-600 text-sm">123 Fashion Street, New York, NY 10001</p>
         </div>

         <div className="flex items-center gap-2 mt-4">
          <Phone size={18} className="text-blue-600" strokeWidth={1}/>
          <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
         </div>

         <div className="flex items-center gap-2 mt-4">
          <Mail size={18} className="text-blue-600" strokeWidth={1}/>
          <p className="text-gray-600 text-sm">hello@example.com</p>
         </div>
          </div>

          <div className="lg:ml-14">
            <h2 className="font-medium text-lg text-blue-950 mb-4 hover:text-blue-900">Shop</h2>
            <ul className="text-gray-600 text-sm flex flex-col space-y-3">
              <li className="inline-block relative transition-transform duration-300 hover:translate-x-2"><a className="hover:text-blue-600 relative transition-transform duration-300 hover:translate-x-2 after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">New Arivals</a></li>

              <li className="inline-block relative transition-transform duration-300 hover:translate-x-2"><a className="hover:text-blue-600 relative transition-all duration-300 hover:translate-x-2 after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">Bestsellers</a></li>

              <li className="inline-block relative transition-transform duration-300 hover:translate-x-2"><a className="hover:text-blue-600 relative transition-all duration-300 hover:translate-x-2 after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">Women's Clothing</a></li>

              <li className="inline-block relative transition-transform duration-300 hover:translate-x-2"><a className="hover:text-blue-600 relative transition-all duration-300 hover:translate-x-2 after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">Men's Clothing</a></li>

              <li className="inline-block relative transition-transform duration-300 hover:translate-x-2"><a className="hover:text-blue-600 relative transition-all duration-300 hover:translate-x-2 after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">Accessories</a></li>

              <li className="inline-block relative transition-transform duration-300 hover:translate-x-2"><a className="hover:text-blue-600 relative transition-all duration-300 hover:translate-x-2 after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">Sale</a></li>
            </ul>
          </div>

          <div className="lg:ml-12">
            <h2 className="font-medium text-lg text-blue-950 mb-4 hover:text-blue-900">Support</h2>
             <ul className="text-gray-500 text-sm flex flex-col space-y-3">
              <li className="inline-block relative transition-transform duration-300 hover:translate-x-2"><a className="hover:text-blue-600 relative transition-all duration-300 hover:translate-x-2 after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">Help Center</a></li>
              <li className="inline-block relative transition-transform duration-300 hover:translate-x-2"><a className="hover:text-blue-600 relative transition-all duration-300 hover:translate-x-2 after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">Order Status</a></li>
              <li className="inline-block relative transition-transform duration-300 hover:translate-x-2"><a className="hover:text-blue-600 relative transition-all duration-300 hover:translate-x-2 after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">Shipping Info</a></li>
              <li className="inline-block relative transition-transform duration-300 hover:translate-x-2"><a className="hover:text-blue-600 relative transition-all duration-300 hover:translate-x-2 after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">Returns & Exchanges</a></li>
              <li className="inline-block relative transition-transform duration-300 hover:translate-x-2"><a className="hover:text-blue-600 relative transition-all duration-300 hover:translate-x-2 after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">Size Guide</a></li>
              <li className="inline-block relative transition-transform duration-300 hover:translate-x-2"><a className="hover:text-blue-600 relative transition-all duration-300 hover:translate-x-2 after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">Contact Us</a></li>
            </ul>
            </div>

          <div className="lg:ml-12">
            <h2 className="font-medium text-lg text-blue-950 mb-4 hover:text-blue-900">Company</h2>
            <ul className="mb-5 text-gray-500 text-sm flex flex-col space-y-3">
              <li className="inline-block relative transition-transform duration-300 hover:translate-x-2"><a className="hover:text-blue-600 relative transition-all duration-300 hover:translate-x-2 after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">About Us</a></li>
              <li className="inline-block relative transition-transform duration-300 hover:translate-x-2"><a className="hover:text-blue-600 relative transition-all duration-300 hover:translate-x-2 after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">Careers</a></li>
              <li className="inline-block relative transition-transform duration-300 hover:translate-x-2"><a className="hover:text-blue-600 relative transition-all duration-300 hover:translate-x-2 after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">Press</a></li>
              <li className="inline-block relative transition-transform duration-300 hover:translate-x-2"><a className="hover:text-blue-600 relative transition-all duration-300 hover:translate-x-2 after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">Affiliates</a></li>
              <li className="inline-block relative transition-transform duration-300 hover:translate-x-2"><a className="hover:text-blue-600 relative transition-all duration-300 hover:translate-x-2 after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">Responsibility</a></li>
              <li className="inline-block relative transition-transform duration-300 hover:translate-x-2"><a className="hover:text-blue-600 relative transition-all duration-300 hover:translate-x-2 after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">Investors</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-medium text-lg text-blue-950 mb-4 hover:text-blue-900">Download Our App</h2>
            <p className="w-70 text-gray-600 text-sm">Shop on the go with our mobile app</p>
            <div className="flex gap-2 mt-5 mb-5">
              <div className="group">
                <button className="p-3 rounded-lg bg-gray-200 text-sm flex items-center gap-1 group-hover:bg-blue-600  transition-colors duration-300"><BsApple className="text-xl text-gray-800 group-hover:text-white"/><span className="w-18 font-medium text-gray-800 group-hover:text-white"> App Store</span></button></div>
              
              <div className="group">
                <button className="p-3.5 rounded-lg bg-gray-200 text-sm flex items-center gap-1 group-hover:bg-blue-600"><BsGooglePlay className="text-xl text-gray-800 group-hover:text-white"/> <span className="w-20 font-medium text-gray-800 group-hover:text-white">Google Play</span></button>
              </div>              
              </div>

              <div>
                <p className="text-gray-600 text-sm">Follow Us</p>
                <div className="grid grid-cols-6 sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-5 mx-auto max-w-6xl mt-4 gap-4">
                  <div><span className="p-2 rounded-full bg-gray-300 text-gray-800 hover:bg-blue-600 hover:text-white hover:rotate-360 transition-all duration-300 inline-flex items-center justify-center"><BsFacebook size={15}/></span></div>

                  <div><span className="p-2 rounded-full bg-gray-300 text-gray-800 hover:bg-blue-600 hover:text-white hover:rotate-360 transition-all duration-300 inline-flex items-center justify-center"><BsInstagram size={15}/></span></div>
                  
                  <div><span className="p-2 rounded-full bg-gray-300 text-gray-800 hover:bg-blue-600 hover:text-white hover:rotate-360 transition-all duration-300 inline-flex items-center justify-center"><BsTwitterX size={15}/></span></div>
                  
                  <div><span className="p-2 rounded-full bg-gray-300 text-gray-800 hover:bg-blue-600 hover:text-white hover:rotate-360 transition-all duration-300 inline-flex items-center justify-center"><BsTiktok size={15}/></span></div>
                  
                  <div><span className="p-2 rounded-full bg-gray-300 text-gray-800 hover:bg-blue-600 hover:text-white hover:rotate-360 transition-all duration-300 inline-flex items-center justify-center"><BsPinterest size={15}/></span></div>
                  
                  <div><span className="p-2 rounded-full bg-gray-300 text-gray-800 hover:bg-blue-600 hover:text-white hover:rotate-360 transition-all duration-300 inline-flex items-center justify-center"><BsYoutube size={15}/></span>  </div>
                                  
                </div>
              </div>
            </div>
          </div>                
        </div>
      )
    }

    export default Infosec;
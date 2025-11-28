import React from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { 
  BsApple, 
  BsFacebook, 
  BsGooglePlay, 
  BsInstagram, 
  BsPinterest, 
  BsTiktok, 
  BsTwitterX, 
  BsYoutube 
} from "react-icons/bs";

function Infosec() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 50,
    });
  }, []);

  return (
    <div className="bg-white w-full py-12 px-6">
      <div className="grid lg:gap-1 gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 mx-auto max-w-6xl mt-10">

        <div>
          <h1 className="font-semibold text-3xl text-blue-950 mb-6 hover:text-blue-900">eStore</h1>
          <p className="text-gray-600 text-sm w-full leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in nibh vehicula, facilisis magna ut, consectetur lorem.
          </p>

          <div className="flex items-center gap-2 mt-4">
            <MapPin size={20} className="text-blue-600" strokeWidth={1}/>
            <p className="text-gray-600 text-sm">123 Fashion Street, New York, NY 10001</p>
          </div>

          <div className="flex items-center gap-2 mt-3">
            <Phone size={18} className="text-blue-600" strokeWidth={1}/>
            <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
          </div>

          <div className="flex items-center gap-2 mt-3">
            <Mail size={18} className="text-blue-600" strokeWidth={1}/>
            <p className="text-gray-600 text-sm">hello@example.com</p>
          </div>
        </div>

        <div className="lg:ml-8">
          <h2 className="font-medium text-lg text-blue-950 mb-4 hover:text-blue-900">Shop</h2>
          <ul className="text-gray-600 text-sm flex flex-col space-y-3">
            <li className="hover:translate-x-2 transition-transform duration-300 relative"> 
              <a className="hover:text-blue-600 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-blue-600 hover:after:w-[45%]  after:transition-all after:duration-300">New Arrivals</a> </li>

            <li className="hover:translate-x-2 transition-transform duration-300 relative">
              <a className="hover:text-blue-600 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-blue-600 hover:after:w-[40%] after:transition-all after:duration-300">Bestsellers</a>
            </li>
            <li className="hover:translate-x-2 transition-transform duration-300 relative">
              <a className="hover:text-blue-600 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-blue-600 hover:after:w-[64%] after:transition-all after:duration-300">Women's Clothing</a>
            </li>
            <li className="hover:translate-x-2 transition-transform duration-300 relative">
              <a className="hover:text-blue-600 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-blue-600 hover:after:w-[52%] after:transition-all after:duration-300">Men's Clothing</a>
            </li>
            <li className="hover:translate-x-2 transition-transform duration-300 relative">
              <a className="hover:text-blue-600 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-blue-600 hover:after:w-[42%] after:transition-all after:duration-300">Accessories</a>
            </li>
            <li className="hover:translate-x-2 transition-transform duration-300 relative">
              <a className="hover:text-blue-600 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-blue-600 hover:after:w-[20%] after:transition-all after:duration-300">Sale</a>
            </li>
          </ul>
        </div>

        <div className="lg:ml-8">
          <h2 className="font-medium text-lg text-blue-950 mb-4 hover:text-blue-900">Support</h2>
          <ul className="text-gray-600 text-sm flex flex-col space-y-3">
           <li className="hover:translate-x-2 transition-transform duration-300 relative">
            <a className="hover:text-blue-600 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-blue-600 hover:after:w-[42%] after:transition-all after:duration-300">Help Center</a></li>

            <li className="hover:translate-x-2 transition-transform duration-300 relative">
              <a className="hover:text-blue-600 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-blue-600 hover:after:w-[50%] after:transition-all after:duration-300">Order Status</a></li>

            <li className="hover:translate-x-2 transition-transform duration-300 relative"><a href="#" className="hover:text-blue-600 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-blue-600 hover:after:w-[48%] after:transition-all after:duration-300">Shipping Info</a></li>

            <li className="hover:translate-x-2 transition-transform duration-300 relative">
              <a className="hover:text-blue-600 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-blue-600 hover:after:w-[79%] after:transition-all after:duration-300">Returns & Exchanges</a></li>

            <li className="hover:translate-x-2 transition-transform duration-300 relative"><a className="hover:text-blue-600 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-blue-600 hover:after:w-[42%] after:transition-all after:duration-300">Size Guide</a></li>

            <li className="hover:translate-x-2 transition-transform duration-300 relative"><a className="hover:text-blue-600 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-blue-600 hover:after:w-[42%] after:transition-all after:duration-300">Contact Us</a></li>
          </ul>
        </div>

        <div className="lg:ml-8">
          <h2 className="font-medium text-lg text-blue-950 mb-4 hover:text-blue-900">Company</h2>
          <ul className="text-gray-600 text-sm flex flex-col space-y-3">
            <li className="hover:translate-x-2 transition-transform duration-300 relative">
              <a className="hover:text-blue-600 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-blue-600 hover:after:w-[37%] after:transition-all after:duration-300">About Us</a></li>

            <li className="hover:translate-x-2 transition-transform duration-300 relative">
              <a className="hover:text-blue-600 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-blue-600 hover:after:w-[30%] after:transition-all after:duration-300">Careers</a></li>

            <li className="hover:translate-x-2 transition-transform duration-300 relative">
              <a className="hover:text-blue-600 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-blue-600 hover:after:w-[20%] after:transition-all after:duration-300">Press</a></li>

            <li className="hover:translate-x-2 transition-transform duration-300 relative">
              <a className="hover:text-blue-600 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-blue-600 hover:after:w-[35%] after:transition-all after:duration-300">Affiliates</a></li>

            <li className="hover:translate-x-2 transition-transform duration-300 relative">
              <a className="hover:text-blue-600 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-blue-600 hover:after:w-[48%] after:transition-all after:duration-300">Responsibility</a></li>

            <li className="hover:translate-x-2 transition-transform duration-300 relative">
              <a className="hover:text-blue-600 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-blue-600 hover:after:w-[35%] after:transition-all after:duration-300">Investors</a></li>
          </ul>
        </div>

        <div>
          <h2 className="font-medium text-lg text-blue-950 mb-4 hover:text-blue-900">Download Our App</h2>
          <p className="text-gray-600 text-sm mb-5">Shop on the go with our mobile app</p>

          <div className="flex  flex-row gap-3 mb-6">
            <div className="group">
              <a href="#" className="py-2 px-2 rounded-lg bg-gray-200  flex items-center gap-1 group-hover:bg-blue-600 ">
              <BsApple className="text-xl text-gray-800 group-hover:text-white" />
              <span className="font-medium text-gray-800 group-hover:text-white text-[12px]">App Store</span>
            </a>
            </div>

           <div className="group">
             <a href="#" className="py-2 px-2 rounded-lg bg-gray-200  flex items-center gap-1 group-hover:bg-blue-600 ">
              <BsGooglePlay className="text-xl text-gray-800 group-hover:text-white" />
              <span className="font-medium text-gray-800 group-hover:text-white text-[12px]">Google Play</span>
            </a>
           </div>
          </div>

          <p className="text-gray-600 text-sm mb-3">Follow Us</p>
          <div className="flex flex-wrap gap-3 xl:flex-nowrap">
            <span className="p-2 rounded-full bg-gray-300 text-gray-800 hover:bg-blue-600 hover:text-white transition-all duration-300 inline-flex items-center justify-center hover:rotate-360"><BsFacebook size={15} /></span>
            <span className="p-2 rounded-full bg-gray-300 text-gray-800 hover:bg-blue-600 hover:text-white transition-all duration-300 inline-flex items-center justify-center hover:rotate-360"><BsInstagram size={15} /></span>
            <span className="p-2 rounded-full bg-gray-300 text-gray-800 hover:bg-blue-600 hover:text-white transition-all duration-300 inline-flex items-center justify-center hover:rotate-360"><BsTwitterX size={15} /></span>
            <span className="p-2 rounded-full bg-gray-300 text-gray-800 hover:bg-blue-600 hover:text-white transition-all duration-300 inline-flex items-center justify-center hover:rotate-360"><BsTiktok size={15} /></span>
            <span className="p-2 rounded-full bg-gray-300 text-gray-800 hover:bg-blue-600 hover:text-white transition-all duration-300 inline-flex items-center justify-center hover:rotate-360"><BsPinterest size={15} /></span>
            <span className="p-2 rounded-full bg-gray-300 text-gray-800 hover:bg-blue-600 hover:text-white transition-all duration-300 inline-flex items-center justify-center hover:rotate-360"><BsYoutube size={15} /></span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Infosec;

import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import {
  BsApple,
  BsCash,
  BsCreditCard,
  BsGoogle,
  BsPaypal,
  BsShop,
} from "react-icons/bs";
import { CgArrowLongUp} from 'react-icons/cg'
import { ArrowUp } from "lucide-react";

function Footer() {

  const [showButton, setShowButton] =
  useState(false);

  useEffect(() => {
   AOS.init({duration: 1000, once:true});

   const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    }else {
      setShowButton(false);
    }
   };
   window.addEventListener("scroll", handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth"});
  };

  return (
    <div className="bg-gray-100 flex justify-center items-center py-10 px-4 text-center w-full">
      <div data-aos="fade-up" className="max-w-6xl w-full">
        {/* Payment Methods */}
        <p className="flex flex-wrap justify-center gap-3 sm:gap-5 items-center font-medium text-gray-600 mb-6 text-sm">
          We Accept:
          <span>
            <BsCreditCard className="text-2xl text-gray-500 hover:text-blue-600 transition duration-300" />
          </span>
          <span>
            <BsPaypal className="text-2xl text-gray-500 hover:text-blue-800 transition duration-300" />
          </span>
          <span>
            <BsApple className="text-2xl text-gray-500 hover:text-blue-800 transition duration-300" />
          </span>
          <span>
            <BsGoogle className="text-2xl text-gray-500 hover:text-blue-800 transition duration-300" />
          </span>
          <span>
            <BsShop className="text-2xl text-gray-500 hover:text-blue-800 transition duration-300" />
          </span>
          <span>
            <BsCash className="text-2xl text-gray-500 hover:text-blue-800 transition duration-300" />
          </span>
        </p>

        {/* Links */}
        <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 items-center text-gray-500 mb-6 text-sm">
          <li className="hover:text-blue-600 transition duration-300 cursor-pointer">
            Terms of Service
          </li>
          <li className="hover:text-blue-600 transition duration-300 cursor-pointer">
            Privacy Policy
          </li>
          <li className="hover:text-blue-600 transition duration-300 cursor-pointer">
            Cookies Settings
          </li>
        </ul>

        {/* Copyright */}
        <p className="flex flex-wrap justify-center gap-1 items-center text-gray-600 mb-2 text-sm">
          <span>©</span>
          <span>Copyright</span>
          <strong className="text-gray-800">eStore.</strong>
          <span>All Rights Reserved.</span>
        </p>

        {/* Credit */}
        <p className="text-gray-500 text-sm">
          Designed by{" "}
          <a
            href="https://bootstrapmade.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            BootstrapMade
          </a>
        </p>
      </div>

      {showButton && (
              <button onClick={scrollToTop}
              data-aos="zoom-in" className='fixed bottom-4 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transtion z-50'><ArrowUp size={20} className='h-4 w-4'/></button>
            )}  
    </div>
  );
}

export default Footer;

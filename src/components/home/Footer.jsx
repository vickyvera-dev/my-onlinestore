import React from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import { BsApple, BsCash, BsCreditCard, BsGoogle, BsPaypal, BsShop } from "react-icons/bs";


 function Footer () {
      useEffect(() => {
      Aos.init({
      duration: 1000,
      delay: 50,
      });
      }, []);


      return(
        <div className="bg-gray-100 flex justify-center items-center py-8 text-center">
          <div>
           <p className="flex gap-4 items-center font-medium text-gray-500 mb-6 text-sm">We Accept:
            <span><BsCreditCard className="text-2xl text-gray-500 hover:text-blue-600"/></span>
            <span><BsPaypal className="text-2xl text-gray-500 hover:text-blue-800"/></span>
            <span><BsApple className="text-2xl text-gray-500 hover:text-blue-800"/></span>
            <span><BsGoogle className="text-2xl text-gray-500 hover:text-blue-800"/></span>
            <span><BsShop className="text-2xl text-gray-500 hover:text-blue-800"/></span>
            <span><BsCash className="text-2xl text-gray-500 hover:text-blue-800"/></span></p>

            <ul className="flex gap-4 items-center text-gray-500 mb-6 text-sm">
              <li className="hover:text-blue-600">Terms of Service</li>
              <li className="hover:text-blue-600">Privacy Policy</li>
              <li className="hover:text-blue-600">Cookies Settings</li>
            </ul>

       
              <p className="flex gap-1 items-center text-gray-500 mb-2 text-sm">
                <span>©</span>
                <span>Copyright</span>
                <strong className="text-gray-800">eStore.</strong>
                <span>All Rights Reserved.</span></p>

                <p className="text-gray-500 mb-1 text-sm">Designed by<a href="https://boostrapmade.com/" className="text-blue-600"> BootstrapMade</a></p>
          </div>
        </div>
      )}

      export default Footer;
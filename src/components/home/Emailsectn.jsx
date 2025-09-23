import React from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import { ArrowLeftRight, ArrowRight, BaggageClaim, ClipboardPlus, Eye, Heart, Star } from "lucide-react";

function Emailsectn () {
  useEffect(() => {
    Aos.init({
    duration: 1000,
    delay: 50,
  });
  }, []);

  return(
    <div data-aos="zoom-in" className="flex text-center bg-gray-100 flex-col items-center justify-center py-8">
      <h1 className="font-bold text-blue-950 md:text-4xl mb-8 mt-10 text-center text-xl">Join Our Newsletter</h1>
      <p className="text-center font-semibold">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals</p>
      <div className="flex border border-gray-400  rounded-full justify-between p-1 w-1/2 shadow-md mt-8 relative">
        <input type="text" placeholder="Your Email Address" className="outline-none border-none focus:0 focus-border-none ml-5"/>
        <div className="w-[12%]"><span className="flex items-center text-center text-white bg-blue-600 rounded-full px-5 py-2">Search</span></div>
        
      </div>   
     </div>
  )
}

export default Emailsectn;
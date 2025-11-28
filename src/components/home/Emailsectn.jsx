import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import {
  ArrowLeftRight,
  ArrowRight,
  BaggageClaim,
  ClipboardPlus,
  Eye,
  Heart,
  Star,
} from "lucide-react";

function Emailsectn() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 50,
    });
  }, []);

  return (
    <div
      data-aos="zoom-in"
      className="flex flex-col items-center justify-center bg-gray-100 py-16 px-4 sm:px-8"
    >
      <h1 className="font-bold text-blue-950 text-center text-2xl sm:text-3xl md:text-4xl mb-6">
        Join Our Newsletter
      </h1>
      <p className="text-center font-semibold text-gray-700 text-sm sm:text-base max-w-2xl">
        Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
      </p>

      <div className="flex items-center justify-between border border-gray-300 rounded-full mt-8 shadow-md w-full max-w-[600px] bg-white overflow-hidden relative">
        <input
          type="text"
          placeholder="Your Email Address"
          className="flex-1 px-5 py-3 text-gray-700 text-sm sm:text-base outline-none border-none rounded-l-full placeholder-gray-400 relative"
        />
        <button className="bg-blue-600 text-white font-medium text-sm  px-6   py-2 rounded-full transition-all duration-300 hover:bg-blue-700 whitespace-nowrap absolute top-1 bottom-1 right-1">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default Emailsectn;

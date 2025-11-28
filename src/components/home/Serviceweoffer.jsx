import React, { useEffect } from "react";
import { Headset, Percent, Truck } from "lucide-react";
import { BsPiggyBank } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";

function Serviceweoffer() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 50,
    });
  }, []);

  return (
    <div className="bg-gray-100 w-full py-16">
      {/* Container */}
      <div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6"
        style={{ fontFamily: '"Poppins", sans-serif' }}
      >
        {/* Free Shipping */}
        <div
          data-aos="zoom-in"
          className="p-6 rounded-xl text-gray-600 text-center  transition-transform ease-in-out duration-300 hover:-translate-y-2 group"
        >
          <Truck className="group-hover:text-blue-800 text-gray-800 mx-auto mb-5" size={40} />
          <h2 className="text-lg font-semibold mb-3 text-blue-950">Free Shipping</h2>
          <p>
            Nulla sit morbi vestibulum eros duis amet, consectetur vitae lacus. 
            Ut quis tempor felis sed nunc viverra.
          </p>
        </div>

        {/* Money Back Guarantee */}
        <div
          data-aos="zoom-in"
          className="p-6 rounded-xl text-gray-600 text-center  transition-transform ease-in-out duration-300 hover:-translate-y-2 group"
        >
          <BsPiggyBank className="group-hover:text-blue-800 text-gray-800 mx-auto mb-5" size={40} />
          <h2 className="text-lg font-semibold mb-3 text-blue-950">Money Back Guarantee</h2>
          <p>
            Nullam gravida felis nunc tincidunt, sed malesuada justo pulvinar. 
            Vestibulum nec diam vitae eros.
          </p>
        </div>

        {/* Discount Offers */}
        <div
          data-aos="zoom-in"
          className=" p-6 rounded-xl text-gray-600 text-center transition-transform duration-300 ease-in-out group hover:-translate-y-2"
        >
          <Percent className="group-hover:text-blue-800 text-gray-800 mx-auto mb-5" size={40} />
          <h2 className="text-lg font-semibold mb-3 text-blue-950">Discount Offers</h2>
          <p>
            Nulla ipsum nisi vel adipiscing amet, dignissim consectetur ornare. 
            Vestibulum quis posuere elit auctor.
          </p>
        </div>

        {/* 24/7 Support */}
        <div
          data-aos="zoom-in"
          className="p-6 rounded-xl text-gray-600 text-center  transition-all duration-300 ease-in-out group hover:-translate-y-2"
        >
          <Headset className="group-hover:text-blue-800 text-gray-800 mx-auto mb-5" size={40} />
          <h2 className="text-lg font-semibold mb-3 text-blue-950">24/7 Support</h2>
          <p>
            Ipsum dolor amet sit consectetur adipiscing, nullam vitae euismod 
            tempor nunc felis vestibulum ornare.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Serviceweoffer;

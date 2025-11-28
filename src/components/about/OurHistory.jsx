import React, { useEffect } from "react";
import { Info } from "lucide-react";
import "aos/dist/aos.css";
import Aos from "aos";
import { Link } from "react-router-dom";

function OurHistory() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 50,
    });
  }, []);

  return (
    <div>
       <div className="bg-gray-100 py-4 w-full">
              <div className="flex justify-between items-center px-10 max-w-7xl">
                <h1 className="font-bold text-2xl text-blue-900 ml-[8%]">About</h1>
                <div className="flex gap-2">
                  <Link to="/" className="font-medium text-blue-600 cursor-pointer">Home</Link>
                  <span className="font-medium text-gray-500">/ About</span>
                </div>
              </div>
            </div>
      <div className="bg-white w-full py-10 px-4">     
      <div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
        style={{ fontFamily: '"Poppins", Sans-serif' }}
      >
        {/* Left Section */}
        <div className="md:col-span-6 text-left">
          <button className="bg-gray-200 py-2 px-4 rounded-full flex items-center justify-center md:justify-start gap-2 text-blue-600 font-medium mb-6">
            <Info className="w-4 h-4" strokeWidth={2} />
            About Us
          </button>

          <h1 className="text-2xl md:text-4xl font-bold text-blue-950 leading-snug mb-6">
            Nemo enim ipsam voluptatem quia voluptas aspernatur
          </h1>

          <p className="text-gray-600 leading-relaxed">
            Temporibus autem quibusdam et aut officiis debitis rerum saepe
            necessitatibus eveniet ut et voluptates repudiandae sint et
            molestiae recusandae non recusandae.
          </p>
        </div>

        {/* Right Section */}
        <div className="md:col-span-6 text-left mt-6 md:mt-0">
          <p className="text-gray-600 leading-relaxed mb-4">
            Itaque earum rerum hic sapiente ut aut delectus, asperiores
            repellat. Aut reiciendis voluptatibus maiores consequatur
            perferendis doloribus asperiores repellat.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Amet eos ut. Officiis soluta ab id dolor non sint. Corporis omnis
            consequatur quisquam ex consequuntur quo omnis. Quo eligendi cum.
            Amet mollitia qui quidem dolores praesentium quasi ut et.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default OurHistory;

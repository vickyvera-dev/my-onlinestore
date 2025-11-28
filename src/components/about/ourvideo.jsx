import React, { useEffect } from 'react';
import { Play } from 'lucide-react';
import "aos/dist/aos.css";
import Aos from "aos";

function Ourvideo() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 50,
    });
  }, []);

  return (
    <div className="bg-white py-12 w-full">
      
      {/* Video Section */}
      <div className="relative flex flex-col items-center justify-center space-y-8">
        
        {/* Animated Play Button */}
        <div className="absolute flex items-center justify-center inset-0">
          <span className="absolute w-18 h-18 rounded-full bg-blue-600 opacity-75 animate-ping"></span>
          <span className="absolute w-18 h-18 rounded-full bg-blue-600 opacity-50 animate-ping [animation-delay:8s]"></span>
          <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" target="_blank" rel="noopener noreferrer">
            <button className="relative z-10 flex items-center justify-center w-20 h-20 rounded-full bg-blue-600 text-white shadow-lg hover:scale-105 transition-transform duration-300">
              <Play size={34} fill="currentColor" />
            </button>
          </a>
        </div>

        {/* Video Thumbnail */}
        <div className='px-4'>
          <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" target="_blank" rel="noopener noreferrer">
          <img
            src="/images/about-wide-1.webp"
            alt="Youtube video"
            className="w-full max-w-7xl mx-auto h-auto rounded-xl shadow-lg"
          />
        </a>
        </div>
      </div>
    </div>
  );
}

export default Ourvideo;

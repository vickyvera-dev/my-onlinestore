import React, { useEffect } from 'react';
import "aos/dist/aos.css";
import Aos from "aos";
import CountUp from 'react-countup';
import { useInView } from "react-intersection-observer";

function Ourdetails() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 50,
    });
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  return (
    <div className="bg-white py-12">
      {/* Users Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center px-4">
        
        {/* Users Avatars */}
        <div className="flex justify-center lg:justify-start items-center">
          <div className="flex -space-x-4">
            <img src='/images/person-m-3.webp' alt='Male User' className='w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-blue-600'/>
            <img src='/images/person-f-7.webp' alt='Female User' className='w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-blue-600'/>
            <img src='/images/person-m-2.webp' alt='Male User' className='w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-blue-600'/>
            <img src='/images/person-f-5.webp' alt='Female User' className='w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-blue-600'/>
          </div>
        </div>

        {/* Statistic 1 */}
        <div className="text-center sm:text-left px-4" ref={ref}>
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-950">
            {inView && <CountUp start={0} end={185} duration={3} />}+
          </h1>
          <p className="mt-3 text-gray-600 font-semibold">Nemo enim ipsam</p>
        </div>

        {/* Statistic 2 */}
        <div className="text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-950">
            {inView && <CountUp start={0} end={42} duration={3} />}+
          </h1>
          <p className="mt-3 text-gray-600 font-semibold">Voluptate explicabo</p>
        </div>

        {/* Statistic 3 */}
        <div className="text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-950">
            {inView && <CountUp start={0} end={170} duration={3} />}+
          </h1>
          <p className="mt-3 text-gray-600 font-semibold">Dolor sit consectetur</p>
        </div>

      </div>
    </div>
  );
}

export default Ourdetails;

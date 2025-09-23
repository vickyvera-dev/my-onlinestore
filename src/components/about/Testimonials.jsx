import React from 'react';
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import { BsQuote } from "react-icons/bs";


function Testimonials (){
      useEffect(() => {
      Aos.init({
      duration: 1000,
      delay: 50,
      });
      }, []);

  return(
    <div className="bg-white py-4">

      <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 max-w-6xl  mx-auto mt-10'>
        
        <div data-aos="zoom-in" className=" p-3 text-gray-600 transition-transform duration-300 ease-in-out hover:-translate-y-2 border-1 rounded-2xl border-gray-300 mb-30 bg-white relative">
          <div className='absolute p-2 rounded-full text-blue-600 -top-4 left-6 border-1 border-gray-300 bg-transparent'><BsQuote /></div>
          
          <div className="transition-transform duration-300 ease-in-out hover:-translate-y-2 flex flex-col items-center justify-between">
        <p className='pt-10 px-4 border-b-1 border-b-gray-300 pb-4'>Implementing innovative strategies has revolutionized our approach to market challenges and competitive positioning</p>
        <div className='flex items-center gap-4 -ml-30 mt-8 mb-2'>
          <div><img src='/images/person-f-9.webp' className='w-15 h-15 rounded-full'/></div>
          <div>
            <h2 className='text-blue-950 font-medium'>Rachel Bennett</h2>
            <p className='text-sm text-gray-400 mt-0.5'>Strategy Director</p>
          </div>
        </div>
      </div>
      </div>
        
      <div data-aos="zoom-in" className="p-3 text-gray-600 transition-transform duration-300 ease-in-out hover:-translate-y-2 border-1 rounded-2xl border-blue-600 mt-10 bg-gray-200 relative">
        <div className='absolute p-2 rounded-full text-blue-600 -top-4 left-6 border-1 border-gray-300 bg-gray-200 backdrop-blur-md'><BsQuote /></div>
        <div className="transition-transform duration-300 ease-in-out hover:-translate-y-2 flex flex-col items-center">
        <p className='pt-10 px-4 border-b-1 border-b-gray-300 pb-4 w-78'>Exceptional service delivery and innovative solutions have transformed our business operations, leading to remarkable growth and enhanced customer satisfaction across all touchpoints.</p>
        <div className='flex items-center gap-4 -ml-15 mt-8 mb-2'>
          <div><img src='/images/person-m-3.webp' className='w-15 h-15 rounded-full'/></div>
          <div>
            <h2 className='text-blue-950 font-medium'>Daniel Morgan</h2>
            <p className='text-sm text-gray-400 mt-0.5'>Chief Innovation Officer</p>
          </div>
        </div>
      </div>
      </div>
      
      <div data-aos="zoom-in" className=" p-3 text-gray-600 transition-transform duration-300 ease-in-out hover:-translate-y-2 border-1 rounded-2xl border-gray-300 mb-30 bg-white relative">
        <div className='absolute p-2 rounded-full text-blue-600 -top-4 left-6 border-1 border-gray-300 bg-transparent'><BsQuote /></div>
        <div className="transition-transform duration-300 ease-in-out hover:-translate-y-2 flex flex-col items-center">
        <p className='pt-10 px-4 border-b-1 border-b-gray-300 pb-4'>Strategic partnership has enabled seamless digital transformation and operational excellence.</p>
        <div className='flex items-center gap-4 -ml-30 mt-8 mb-2'>
          <div><img src='/images/person-f-7.webp' className='w-15 h-15 rounded-full'/></div>
          <div>
            <h2 className='text-blue-950 font-medium'>Emma Thompson</h2>
            <p className='text-sm text-gray-400 mt-0.5'>Digital Lead</p>
          </div>
        </div>
      </div>
      </div>
      
      
        <div data-aos="zoom-in" className=" p-3 text-gray-600 transition-transform duration-300 ease-in-out hover:-translate-y-2 border-1 rounded-2xl border-gray-300 mb-30 bg-white relative">
        <div className='absolute p-2 rounded-full text-blue-600 -top-4 left-6 border-1 border-gray-300 bg-transparent'><BsQuote /></div>
        <div className="transition-transform duration-300 ease-in-out hover:-translate-y-2 flex flex-col items-center">
        <p className='pt-8 px-4 border-b-1 border-b-gray-300 pb-4'>Professional expertise and dedication have significantly improved our project delivery timelines and quality metrics.</p>
        <div className='flex items-center gap-4 -ml-30 mt-8 mb-2'>
          <div><img src='/images/person-f-7.webp' className='w-15 h-15 rounded-full'/></div>
          <div>
            <h2 className='text-blue-950 font-medium'>Christopher Lee</h2>
            <p className='text-sm text-gray-400 mt-0.5'>Technical Director</p>
          </div>
        </div>
      </div>
      </div>
      
      <div data-aos="zoom-in" className="p-3 text-gray-600 transition-transform duration-300 ease-in-out hover:-translate-y-2 border-1 rounded-2xl border-blue-600 mt-10 bg-gray-200 relative">
        <div className='absolute p-2 rounded-full text-blue-600 -top-4 left-6 border-1 border-gray-300 bg-transparent'><BsQuote /></div>
        <div className="transition-transform duration-300 ease-in-out hover:-translate-y-2 flex flex-col items-center">
        <p className='pt-10 px-4 border-b-1 border-b-gray-300 pb-4 w-78'>Collaborative approach and industry expertise have revolutionized our product development cycle, resulting in faster time-to-market and increased customer engagement levels.increased customer engagement levels.</p>
        <div className='flex items-center gap-4 -ml-28 mt-8 mb-2'>
          <div><img src='/images/person-m-8.webp' className='w-15 h-15 rounded-full'/></div>
          <div>
            <h2 className='text-blue-950 font-medium'>Olivia Carter</h2>
            <p className='text-sm text-gray-400 mt-0.5'>Product Manager</p>
          </div>
        </div>
      </div>
      </div>

      <div data-aos="zoom-in" className=" p-3 text-gray-600 transition-transform duration-300 ease-in-out hover:-translate-y-2 border-1 rounded-2xl border-gray-300 mb-30 bg-white relative">
        <div className='absolute p-2 rounded-full text-blue-600 -top-4 left-6 border-1 border-gray-300 bg-transparent'><BsQuote /></div>
        <div className="transition-transform duration-300 ease-in-out hover:-translate-y-2 flex flex-col items-center">
        <p className='pt-8 px-4 border-b-1 border-b-gray-300 pb-4'>Innovative approach to user experience design has significantly enhanced our platform's engagement metrics and customer retention rates.</p>
        <div className='flex items-center gap-4 -ml-30 mt-8 mb-2'>
          <div><img src='/images/person-m-5.webp' className='w-15 h-15 rounded-full'/></div>
          <div>
            <h2 className='text-blue-950 font-medium'>Nathan Brooks</h2>
            <p className='text-sm text-gray-400 mt-0.5'>UX Director</p>
          </div>
        </div>
      </div>
      </div>    

      </div>      
    </div>
  )
}

export default Testimonials;
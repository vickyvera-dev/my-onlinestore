import { Play } from 'lucide-react'
import React from 'react'
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

function Ourvideo () {
      useEffect(() => {
      Aos.init({
      duration: 1000,
      delay: 50,
      });
      }, []);
  return(
  <div className='bg-white py-4'>
      
{/*video*/}
{/*<div className='relative'>
  //<a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" >
  <img src='/images/about-wide-1.webp' alt='Youtube video' className='w-full max-w-[85%] mx-auto h-auto rounded-lg shadow-lg'/></a>
  <div className='absolute flex items-center justify-center inset-0'>
    <div className='p-4 rounded-full bg-blue-600 cursor-pointer opacity-80 hover:opacity-100 transition'>
      <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8"><Play size={34} className='text-white' fill="currentColor"/></a>
    </div>    
  </div>  
  </div>*/}
  <div className='flex flex-col items-center justify-center min-h-screen space-y-8 relative'>
    <div className='absolute flex items-center justify-center inset-0'>
      <span className='absolute w-20 h-20 rounded-full bg-blue-600 opacity-75 animate-ping'></span>
      <span className='absolute w-20 h-20 rounded-full bg-blue-600 opacity-50 animate-ping [animation-delay:8s]'></span>
      <button className='relative z-10 flex items-center justify-center w-20 h-20 rounded-full bg-blue-600 text-white text-3xl shadow-lg'><Play size={34} fill="currentColor"/></button>
    </div>
    <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8">
  <img src='/images/about-wide-1.webp' alt='Youtube video' className='w-full max-w-[85%] mx-auto h-auto rounded-lg shadow-lg'/></a>
  </div>
    </div>
  )}
  export default Ourvideo
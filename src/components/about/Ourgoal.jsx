import { ClipboardList, Target, UserRoundCheck } from 'lucide-react';
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import React from 'react'

function Ourgoal (){
      useEffect(() => {
      Aos.init({
      duration: 1000,
      delay: 50,
      });
      }, []);
  return(
    <div>
      {/*third div*/}
<div className='bg-white max-w-[100%] mx-auto max-h-[20%] py-2'>
  <div className="grid gap-5 grid-cols-12 mx-25 mt-2 mb-5">
        <div className='col-span-4'>
          <a href="#">
            <div className='p-5 rounded-xl bg-gray-200 inline-block text-blue-600 hover:bg-blue-800 hover:text-white'><Target size={30} strokeWidth={1}/></div>
        <h3 className='text-gray-500 font-semibold mt-4 hover:text-blue-800 text-xl'>At Vero eos</h3>
        <p className='text-gray-800'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. accusantium? Labore quod ipsum enim quasi,cumque voluptates dolorum!</p>
          </a>        
        </div>

        <div className='col-span-4'>
          <a href="#">
            <div className='p-5 rounded-xl bg-gray-200 text-blue-600 inline-block  hover:bg-blue-800 hover:text-white'><UserRoundCheck size={30} strokeWidth={1}/></div>
        <h3 className='text-gray-500 font-semibold mt-4 hover:text-blue-800 text-xl'>Sed ut perspitciasis</h3>
        <p className='text-gray-800'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. ntium accusantium? quod ipsum enim quasi,cumque voluptates dolorum!</p>
          </a>  
        </div>

        <div className='col-span-4'>
          <a href="#">
            <div className='p-5 rounded-xl bg-gray-200 text-blue-600 inline-block hover:bg-blue-800 hover:text-white'><ClipboardList size={30} strokeWidth={1}/></div>
        <h3 className='text-gray-500  font-semibold mt-4 hover:text-blue-800 text-xl'>Nemo enim ipsaum</h3>
        <p className='text-gray-800'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. ntium accusantium? quod ipsum enim quasi,cumque voluptates dolorum!</p>
          </a>  
        </div>
      </div>
</div>
    </div>
  )}

  export default Ourgoal;
import { Info } from 'lucide-react';
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import React from 'react'

function OurHistory () {
      useEffect(() => {
      Aos.init({
      duration: 1000,
      delay: 50,
      });
      }, []);
  return(
    <div>       
{/*secod div*/}
      <div className="bg-white max-w-[100%] mx-auto max-h-[20%] py-2">
        <div className="grid grid-cols-1 md:grid-cols-12 mx-25 gap-5 py-4 justify-between items-center ml-25 mt-10"
      style={{ fontFamily: '"Poppins",Sans-serif' }}>
           <div className="md:col-span-6 md:text-left text-center">
            <button className="bg-gray-200 py-2 px-4 rounded-full flex flex-row gap-1 items-center text-center">
              <span><Info className=' w-4 h-4 rounded-full text-blue-600 font-extralight text-sm' strokeWidth={2}/></span>
              <span className=' text-sm text-blue-600 font-medium'>About Us</span>         
        </button>
        <h1 className="text-3xl font-bold text-blue-950 tracking-normal leading-13 mt-8 mb-8 md:text-4xl">Nemo enim ipsam voluptatem quia voluptas aspernatur</h1>
        <p className="text-gray-600 leading-7">Temporibus autem quibusdam et aut officiis debitis rerum saepe necessitatibus  eveniet ut et voluptates repudiandae sint et molestiae recusandae non  recusandae.</p>
           </div>

        <div  className="md:col-span-6 md:justify-end justify-center mt-4">
          <p className="text-gray-600 leading-7">Itaque earum rerum hic sapiente ut aut delectus,asperiores repellat. aut reiciendis voluptatibus maiores consequatur perferendis doloribus asperiores repellat.</p>
          <p className="text-gray-600 leading-7 mt-5">Amet eos ut. Officiis soluta ab id dolor non sint. Corporis omnis consequatur quisquam ex consequuntur quo omnis. Quo eligendi cum. Amet mollitia qui quidem dolores praesentium quasi ut et.</p>
        </div>
        </div>       
      </div>
    </div>
  )}

  export default OurHistory;
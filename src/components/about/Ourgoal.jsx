import React, { useEffect } from 'react';
import { ClipboardList, Target, UserRoundCheck } from 'lucide-react';
import "aos/dist/aos.css";
import Aos from "aos";

function Ourgoal() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 50,
    });
  }, []);

  return (
    <div className="bg-white py-12 w-full">
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        
        {/* Goal 1 */}
        <a href="#" className="flex flex-col items-start p-6 bg-gray-100 rounded-xl group">
          <div className="p-4 rounded-xl bg-gray-200 group-hover:bg-blue-600 inline-block text-blue-600 group-hover:text-white">
            <Target size={30} strokeWidth={1} />
          </div>
          <h3 className="mt-4 text-xl font-semibold text-gray-500">At Vero eos</h3>
          <p className="mt-2 text-gray-800">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium? Labore quod ipsum enim quasi, cumque voluptates dolorum!
          </p>
        </a>

        {/* Goal 2 */}
        <a href="#" className="flex flex-col items-start p-6 bg-gray-100 rounded-xl group">
          <div className="p-4 rounded-xl bg-gray-200 group-hover:bg-blue-600 inline-block text-blue-600 group-hover:text-white">
            <UserRoundCheck size={30} strokeWidth={1} />
          </div>
          <h3 className="mt-4 text-xl font-semibold text-gray-500">Sed ut perspitciasis</h3>
          <p className="mt-2 text-gray-800">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium? Quod ipsum enim quasi, cumque voluptates dolorum!
          </p>
        </a>

        {/* Goal 3 */}
        <a href="#" className="flex flex-col items-start p-6 bg-gray-100 rounded-xl group">
          <div className="p-4 rounded-xl bg-gray-200 group-hover:bg-blue-600 inline-block text-blue-600 group-hover:text-white">
            <ClipboardList size={30} strokeWidth={1} />
          </div>
          <h3 className="mt-4 text-xl font-semibold text-gray-500">Nemo enim ipsaum</h3>
          <p className="mt-2 text-gray-800">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium? Quod ipsum enim quasi, cumque voluptates dolorum!
          </p>
        </a>

      </div>
    </div>
  );
}

export default Ourgoal;

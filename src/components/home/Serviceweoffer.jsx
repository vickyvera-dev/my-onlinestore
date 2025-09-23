import { Headset, Percent, Truck } from "lucide-react";
import { BsPiggyBank } from "react-icons/bs";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

{
  /*Arrow function*/
}
function Serviceweoffer() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 50,
    });
  }, []);
  return (
  <div className="bg-gray-100 w-full">
    <div className="grid grid-cols-12 mx-25 gap-5 py-4">
      <div data-aos="zoom-in" className="col-span-12 md:col-span-6 lg:col-span-3 p-3 text-gray-600 transition-transform duration-300 ease-in-out hover:-translate-y-2">
      <div className="transition-transform duration-300 ease-in-out hover:-translate-y-2 flex flex-col items-center">
        <Truck className="hover:text-blue-600 my-5" size={36}/>
        <h2 className="text-xl mb-3">Free Shipping</h2>
        <p className="text-center">
          Nulla sit morbi vestibulum eros duis amet, consectetur vitae lacus.
          Ut quis tempor felis sed nunc viverra
        </p>
        </div>          
        </div>

        {/*second div*/}
        <div data-aos="zoom-in" className="col-span-12 md:col-span-6 lg:col-span-3 p-3 text-gray-600 transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <div className="transition-transform duration-300 ease-in-out hover:-translate-y-2 flex flex-col items-center">
            
            <BsPiggyBank className="hover:text-blue-600 my-5" size={36}/>
          <h2 className="text-xl mb-3">Money Back Guarantee</h2>
          <p className="text-center">
            Nullam gravida felis nunc tincidunt, sed malesuada justo
            pulvinar. Vestibulum nec diam vitae eros.
          </p>
          </div>          
        </div>

        {/*third div*/}
        <div data-aos="zoom-in" className="col-span-12 md:col-span-6 lg:col-span-3 p-3 text-gray-600 transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <div className="transition-transform duration-300 ease-in-out hover:-translate-y-2 flex flex-col items-center">
            <Percent className="hover:text-blue-600 my-5" size={36}/>
          <h2 className="text-xl mb-3">Discount Offers</h2>
          <p className="text-center">
            Nulla ipsum nisi vel adipiscing amet, dignissim consectetur ornare.
            Vestibulum quis posuere elit auctor.
          </p>
          </div>          
        </div>
        {/*fourth div*/}
        <div data-aos="zoom-in" className="col-span-12 md:col-span-6 lg:col-span-3 p-3 text-gray-600 hover:-translate-y-2 transition-transform duration-300 ease-in-out">
          <div className="hover:-translate-y-2 transition-transform duration-300 ease-in-out flex flex-col items-center">
            <Headset className="hover:text-blue-600 my-5" size={36} />
          <h2 className="text-xl mb-3">24/7 Support</h2>
          <p className="text-center">
            Ipsum dolor amet sit consectetur adipiscing, nullam vitae euismod
            tempor nunc felis vestibulum ornare.
          </p>
          </div>          
        </div>
      </div>
    </div>
  );
};
export default Serviceweoffer;

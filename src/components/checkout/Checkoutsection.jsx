import { Search } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'
import { BsCreditCard, BsCreditCard2Front, BsPaypal, BsQuestionCircle } from "react-icons/bs";
import { CgClose } from 'react-icons/cg';
import { SiApple } from "react-icons/si";
import { Link } from 'react-router-dom';
import { GoShieldLock } from "react-icons/go";


 function Checkoutsection() {

  // country
    const [country, setCountry] = useState([60, 760]);
    const [selectedCountry, setSelectedCountry] = useState("Select Country");
    const countryOptions = [
      "Select Country",
      "Canada",
      "United Kingdom",
      "Australia",
      "Germany",
      "France",
    ];

     // Brand filter
      const [search, setSearch] = useState("");
      const [selectedBrands, setSelectedBrands] = useState([]);
      const allBrands = [
        { name: "Save this address for future orders"},
        { name: "Billing address same as shipping" },
               
      ];
      const filteredBrands = allBrands.filter((brand) =>
    brand.name.toLowerCase().includes(search.toLowerCase())
  );
  const toggleBrand = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  /* ------------------------ PAYMENT TABS ------------------------ */
  const [activeSection, setActiveSection] = useState("Credit / Debit Card");

  /* -------------------------- MODAL ----------------------------- */
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

   const [showPrivacy, setShowPrivacy] = useState(false);

  const openPrivacy = () => setShowPrivacy(true);
  const closePrivacy = () => setShowPrivacy(false);

  

  const [open, setOpen] = useState(false);
  const popRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    function handleOutside(e) {
      if (popRef.current && !popRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);
  return (
    <div className='w-full bg-gray-50 min-h-screen'>

      {/* Breadcrumb Section */}
            <div className="bg-gray-100 py-4 w-full">
              <div className="flex justify-between lg:items-center px-4 max-w-7xl flex-col lg:flex-row">
                <h1 className="font-bold text-2xl text-blue-900 lg:ml-[8%]">Checkout</h1>
                <div className="flex gap-2">
                  <Link to="/" className="font-medium text-blue-600 cursor-pointer">Home</Link>
                  <span className="font-medium text-gray-500 flex flex-row items-center gap-2"><span>/</span> Checkout</span>
                </div>
              </div>
            </div>

      <div className='grid grid-cols-1 lg:grid-cols-[60%_40%] md:px-8 gap-4 mx-auto max-w-7xl mt-10 pb-8'>
        {/*left*/}
        <div className='flex flex-col gap-4 px-4 md:px-8 lg:px-0'>
           {/*card 1*/}
          <div className="bg-white p-8 rounded-xl shadow-lg" data-aos="fade-left">
            <div className='w-full border-b mb-3 border-b-gray-300 flex flex-row gap-2 pb-8 items-baseline'>
              <span className='h-2'><span className='text-white px-3 text-center py-1.5 rounded-full bg-blue-600 font-medium'>1</span></span>
              <h2 className='text-xl'>Customer Information</h2>
            </div>

          <form className="space-y-8 flex flex-col w-full">
            <div className="flex flex-col sm:flex-row gap-6 w-full">
              <div className='flex flex-col w-full'>               
                <label className='font-medium text-blue-900 mb-2 text-sm'>First Name</label>
                <input
                type="text"
                name="name"
                placeholder="Your First Name"
                required
                autoComplete="name"
                className="w-full  px-4 py-3 border border-gray-300 rounded-lg transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:shadow-md focus:shadow-blue-300 focus:outline-none"
              />
              </div>

              <div className='flex flex-col w-full'>
                 <label className='font-medium text-blue-900 mb-2 text-sm'>Last Name</label>
                <input
                type="text"
                name="name"
                placeholder="Your Last Name"
                required                
                className="w-full  px-4 py-3 border border-gray-300 rounded-lg transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:shadow-md focus:shadow-blue-300 focus:outline-none"
              />
              </div>
            </div>

            <div className='flex flex-col w-full'>
              <label className='font-medium text-blue-900 mb-2 text-sm'>Email Address</label>
              <input
              type="email"
              placeholder="Your Email"
              autoComplete="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:shadow-md focus:shadow-blue-300 focus:outline-none"
            />
            </div>

           <div>
            <label className='font-medium text-blue-900 mb-2 text-sm'>Phone Number</label>
            <input
              type="text"
              placeholder="Your Phone Number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:shadow-md focus:shadow-blue-300 focus:outline-none"
            />
           </div>           
          </form>
        </div>

        {/*card 2*/}
          <div className="bg-white p-8 rounded-xl shadow-lg" data-aos="fade-left">
            <div className='w-full border-b mb-3 border-b-gray-300 flex flex-row gap-2 pb-8 items-baseline'>
              <span className='h-2'><span className='text-white px-3 text-center py-1.5 rounded-full bg-blue-600 font-medium'>2</span></span>
              <h2 className='text-xl'>Shipping Address</h2>
            </div>

          <form className="space-y-8 flex flex-col w-full">
            <div className='flex flex-col w-full'>
              <label className='font-medium text-blue-900 mb-2 text-sm'>Street Address</label>
              <input
              type="text"
              placeholder="Street Address"
              autoComplete="address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:shadow-md focus:shadow-blue-300 focus:outline-none"
            />
            </div>

             <div>
            <label className='font-medium text-blue-900 mb-2 text-sm'>Apartment, Suite, etc. (optional)</label>
            <input
              type="text"
              placeholder="Apartment, Suite, etc. (optional)"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:shadow-md focus:shadow-blue-300 focus:outline-none"
            />
           </div>  
            <div className="flex flex-col sm:flex-row gap-6 w-full">
              <div className='flex flex-col w-full'>               
                <label className='font-medium text-blue-900 mb-2 text-sm'>City</label>
                <input
                type="text"
              placeholder="City"
              autoComplete="city"
                className="w-full  px-4 py-3 border border-gray-300 rounded-lg transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:shadow-md focus:shadow-blue-300 focus:outline-none"
              />
              </div>

              <div className='flex flex-col w-full'>
                 <label className='font-medium text-blue-900 mb-2 text-sm'>State</label>
                <input
                type="text"
                name="State"
                placeholder="State"
                required                
                className="w-full  px-4 py-3 border border-gray-300 rounded-lg transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:shadow-md focus:shadow-blue-300 focus:outline-none"
              />
              </div>

              <div className='flex flex-col w-full'>
                 <label className='font-medium text-blue-900 mb-2 text-sm'>ZIP Code</label>
                <input
                type="text"
                name="name"
                placeholder="ZIP Code"
                required                
                className="w-full  px-4 py-3 border border-gray-300 rounded-lg transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:shadow-md focus:shadow-blue-300 focus:outline-none"
              />
              </div>              
            </div>

            <div className="w-full">
                <label htmlFor="country" className='block text-sm font-medium text-blue-900 mb-2'>Country</label>
                <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full p-2 outline-none px-4 py-3 border border-gray-300 rounded-lg transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:shadow-md focus:shadow-blue-300 focus:outline-none"
              >
                {countryOptions.map((p, i) => (
                  <option key={i}>{p}</option>
                ))}
              </select>
               </div> 

               <div className="max-h-64 overflow-auto space-y-3">
              {filteredBrands.map((brand) => (
                <label
                  key={brand.name}
                  className="flex items-center gap-2 text-sm text-gray-600"
                >
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand.name)}
                    onChange={() => toggleBrand(brand.name)}
                    className="accent-blue-600"
                  />
                  <span>{brand.name}</span>
                  
                </label>
              ))}
            </div>
           
          </form>
        </div>


        {/*card 3*/}
          <div className="bg-white p-8 rounded-xl shadow-lg" data-aos="fade-left">
            <div className='w-full border-b mb-3 border-b-gray-300 flex flex-row gap-2 pb-8 items-baseline'>
              <span className='h-2'><span className='text-white px-3 text-center py-1.5 rounded-full bg-blue-600 font-medium'>3</span></span>
              <h2 className='text-xl'>Payment Method</h2>
            </div>

             <div
            className="flex flex-col justify-between items-center space-y-6 text-left w-full"
            data-aos="fade-left"
          >
            {/* Section Tabs */}
            <div className="flex lg:flex-row flex-col gap-2 mb-3 flex-wrap w-full">
  {/* Credit / Debit */}
  <button
    onClick={() => setActiveSection("Credit / Debit Card")}
    className={`flex-1 min-w-[30%] px-6 py-6 text-sm font-medium rounded-2xl 
      border flex items-center flex-col gap-2 
      ${activeSection === "Credit / Debit Card"
        ? "bg-blue-100 text-blue border-blue-600"
        : "bg-white text-gray-700 border-gray-600"
      }`}
  >
    <BsCreditCard2Front size={28} className="text-blue-600" />
    Credit / Debit Card
  </button>

  {/* PayPal */}
  <button
    onClick={() => setActiveSection("PayPal")}
    className={`flex-1 min-w-[30%] px-6 py-6 text-sm font-medium rounded-2xl 
      border flex items-center flex-col gap-2 
      ${activeSection === "PayPal"
        ? "bg-blue-100 text-blue border-blue-600"
        : "bg-white text-gray-700 border-gray-600"
      }`}
  >
    <BsPaypal size={28} className="text-blue-600" />
    PayPal
  </button>

  {/* Apple Pay */}
  <button
    onClick={() => setActiveSection("Apple Pay")}
    className={`flex-1 min-w-[30%] px-6 py-6 text-sm font-medium rounded-2xl 
      border flex items-center flex-col gap-2 
      ${activeSection === "Apple Pay"
        ? "bg-blue-100 text-blue border-blue-600"
        : "bg-white text-gray-700 border-gray-600"
      }`}
  >
    <SiApple size={28} className="text-blue-600" />
    Apple Pay
  </button>
</div>


            {/* === Hidden Sections === */}
            <div className="relative mt-2 w-full">
              {activeSection === "Credit / Debit Card" && (
                <div
                  data-aos="fade-up"
                  key="Credit / Debit Card"
                  className="bg-white rounded-xl w-full"
                >
                  
          <form className="space-y-8 flex flex-col w-full">
            <div className='flex flex-col w-full relative'>
              <label className='font-medium text-gray-600 mb-2 text-sm'>Card Number</label>
              <input
              type="text"
              placeholder="1234567890123456"
              autoComplete="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:shadow-md focus:shadow-blue-300 focus:outline-none relative"
            />
            <span className='absolute right-4 lg:flex flex-row gap-2 bottom-4 hidden'>
              <BsCreditCard2Front size={20} className='text-gray-500'/> 
              <BsCreditCard size={20} className='text-gray-500'/></span>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 w-full">
              <div className='flex flex-col w-full'>               
                <label className='font-medium text-gray-600 mb-2 text-sm'>Expiration Date</label>
                <input
                type="text"
                name="name"
                placeholder="MM/YY"
                required
                autoComplete="name"
                className="w-full  px-4 py-3 border border-gray-300 rounded-lg transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:shadow-md focus:shadow-blue-300 focus:outline-none"
              />
              </div>

                <div className="flex flex-col w-full relative">
      <label className="font-medium text-gray-600 mb-2 text-sm">
        Security Code (CVV)
      </label>

      <input
        type="code"
        name="cvv"
        placeholder="123"
        required
        className="w-full px-4 py-3 border border-gray-300 rounded-lg transition 
                   focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
                   focus:shadow-md focus:shadow-blue-300 focus:outline-none"
      />

      {/* Question mark icon */}
      <span
        onClick={() => setOpen(!open)}
        className="absolute right-4 bottom-4 cursor-pointer text-gray-500 hover:text-blue-600"
      >
        <BsQuestionCircle size={20} />
      </span>

      {/* Popover message */}
      {open && (
        <div
          ref={popRef}
          className="absolute right-0 mt-2 w-64 bg-white border shadow-lg rounded-lg p-3 text-sm z-50"
          style={{ bottom: "-70px" }}
        >
          <p className="text-gray-700 leading-5">
            The CVV is the <strong>3-digit security code</strong> at the back of your
            card.
          </p>
        </div>
      )}
    </div>
            </div>

           <div>
            <label className='font-medium text-gray-600 mb-2 text-sm'>Name on Card</label>
            <input
              type="name"
              placeholder="John Doe"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:shadow-md focus:shadow-blue-300 focus:outline-none"
            />
           </div>                    
          </form>
                </div>
              )}

              {activeSection === "PayPal" && (
                <div
                  data-aos="fade-up"
                  key="PayPal"
                  className="p-4 bg-white w-full"
                >
                  <div className="text-gray-600 text-sm w-full ">
                   You will be redirected to PayPal to complete your purchase securely.
                  </div>
                </div>
              )}

              {activeSection === "Apple Pay" && (
                <div
                  data-aos="fade-up"
                  key="Apple Pay"
                  className="p-4 bg-white w-full"
                >
                  <p className="text-gray-600 text-sm w-full ">
                    You will be prompted to authorize payment with Apple Pay.                      
                  </p>                  
                </div>
              )}
            </div>
          </div> 

        </div>

         {/* CARD 4 */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex gap-2 items-baseline pb-6 border-b border-gray-300">
              <span className="text-white px-3 py-1.5 rounded-full bg-blue-600 font-medium">4</span>
              <h2 className="text-lg sm:text-xl">Review & Place Order</h2>
            </div>

            <div className="flex items-center gap-2 mt-6 text-sm">
              <input
                type="checkbox"
                className="w-4 h-4 accent-blue-600"
                checked
                readOnly
              />

              <span>I agree to the</span>

              <button
                className="text-blue-600 hover:underline"
                onClick={() => setShowModal(true)}
              >
                Terms and Conditions
              </button>

              <span>and</span>

              <button
                className="text-blue-600 hover:underline"
                onClick={() => setShowPrivacy(true)}
              >
                Privacy Policy
              </button>
            </div>

            {/* MODAL */}
            {showModal && (
              <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center px-4">
                <div className="bg-white p-6 rounded-xl w-full max-w-lg shadow-lg relative">
                  <button
                    className="absolute top-3 right-3 text-gray-500"
                    onClick={() => setShowModal(false)}
                  >
                    <CgClose />
                  </button>

                  <h2 className="text-xl font-semibold mb-4">Terms & Conditions</h2>

                  <div className=" text-gray-600 text-lg space-y-2">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.</p>

                    <p>Suspendisse in orci enim. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.</p>

                    <p>Suspendisse in orci enim. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.</p>
                  </div>

                  <div>
                    <button
                    onClick={() => setShowModal(false)}
                    className="mt-5  px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg "
                  >
                    I Understand
                  </button>
                  </div>
                </div>
              </div>
            )}

            {/* MODAL privacy*/}
            {showPrivacy && (
              <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center px-4">
                <div className="bg-white p-6 rounded-xl w-full max-w-lg shadow-lg relative">
                  <button
                    className="absolute top-3 right-3 text-gray-500"
                    onClick={() => setShowPrivacy(false)}
                  >
                    <CgClose />
                  </button>

                  <h2 className="text-xl font-semibold mb-4">Privacy Policy</h2>

                  <div className=" text-gray-600 text-lg space-y-2">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.</p>

                    <p>Suspendisse in orci enim. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.</p>

                    <p>Suspendisse in orci enim. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.</p>
                  </div>

                  <div>
                    <button
                    onClick={() => setShowPrivacy(false)}
                    className="mt-5  px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg "
                  >
                    I Understand
                  </button>
                  </div>
                </div>
              </div>
            )}

            {/* PLACE ORDER */}
            <div className="mt-6">
              <button className="w-full bg-blue-600 text-white py-5 rounded-2xl flex justify-between px-6 items-center hover:bg-blue-700 transition">
                <span className="font-bold text-lg">Place Order</span>
                <span className="font-bold text-lg py-1 px-3 bg-blue-500 rounded-lg">
                  $240.99
                </span>
              </button>
            </div>

          </div>
        </div>

        {/*right section*/}
        <div className='px-4 self-start sticky top-0 md:px-8 lg:px-0'>
          <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col gap-4">
         <div className='w-full border-b mb-3 border-b-gray-300 flex flex-row gap-2 pb-8 items-center justify-between'>
          <h2 className='text-xl'>Order Summary</h2>
              <span className='text-gray-600  font-medium'>2 Items</span>              
            </div>

             <div className='w-full border-b mb-3 border-b-gray-300 flex flex-row gap-3 pb-8 items-center'>
             <div><img
                src="/images/product-1.webp"
                alt="Hand Bag Hover"
                className="w-25 h-28 object-fit pt-4 border border-gray-300 rounded-2xl"
              /></div>
              <div className='flex flex-col gap-3 items-left text-left '>
                <span className='text-gray-600  font-medium'>Lorem Ipsum Dolor</span>
                <span className='text-gray-400 '>Color: Black | Size: M</span>
                <span className='text-gray-600  font-medium text-left'>1 × $89.99</span>
              </div>                            
            </div>

            <div className='w-full border-b mb-3 border-b-gray-300 flex flex-row gap-3 pb-8 items-center'>
             <div><img
                src="/images/product-2.webp"
                alt="Hand Bag Hover"
                className="w-25 h-28 object-fit pt-2 border border-gray-300 rounded-2xl"
              /></div>
              <div className='flex flex-col gap-3 items-left text-left '>
                <span className='text-gray-600  font-medium'>Sit Amet Consectetur</span>
                <span className='text-gray-400'>Color: White | Size: L</span>
                <span className='text-gray-600  font-medium text-left'>2 × $59.99</span>
              </div>
                            
            </div>

            <div className="w-full relative">
               <input
                type="text"
                placeholder="Promo Code"
                className="w-full p-3 border  border-gray-300 rounded-xl outline-none"
              />
              <span className=' absolute right-0 top-0 bottom-0 items-center flex py-3 px-3 text-blue-600  hover:bg-blue-600 hover:text-white rounded-r-lg transition ease-in-out duration-300 font-medium'>
                Apply</span>
             </div>

             <div className='flex flex-col gap-5'>
              <div className='flex flex-col gap-5 border-b-2 border-dotted border-b-gray-400 pb-3'>
                <div className='flex flex-row justify-between'>
                  <span>Subtotal</span>
                  <span>$209.97</span>
                </div>

                <div className='flex flex-row justify-between'>
                  <span>Shipping</span>
                  <span>$9.99</span>
                </div>

                <div className='flex flex-row justify-between'>
                  <span>Tax</span>
                  <span>$21.00</span>
                </div>
              </div>
              <div className='flex flex-row justify-between'>
                <span>Total</span>
                <span>$240.96</span>
              </div>
             </div>

             <div className='flex flex-col justify-center gap-3 items-center w-full'>
              <div className='flex flex-row items-center gap-1'><span><GoShieldLock size={18} className='text-green-600'/></span>Secure Checkout</div>
              <div className='flex flex-row gap-2'>
                <BsCreditCard2Front size={24} className='text-gray-500'/> 
                <BsCreditCard size={24} className='text-gray-500'/>
                <BsPaypal size={24} className='text-gray-500'/>
                <SiApple size={24} className='text-gray-500'/>                
              </div>
             </div>
        </div>        
        </div>

        

      </div>
    </div>
  )
}
export default Checkoutsection
// ProductPage.jsx
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import {
  BsArrowRepeat,
  BsCartPlus,
  BsCheck,
  BsCreditCard,
  BsCreditCard2Front,
  BsFillLightningFill,
  BsHeart,
  BsQuestionCircle,
  BsShieldPlus,
  BsStarHalf,
  BsTruck,
} from "react-icons/bs";

export default function ProductPage() {
  // main image
  const [mainImage, setMainImage] = useState("/images/product-details-1.webp");
  const imgRef = useRef(null);

  // thumbnail scroll
  const scrollRef = useRef(null);
  const scrollAmount = 180; // pixels to scroll per click (adjust if needed)

  // quantity
  const [quantity, setQuantity] = useState(1);

  // tabs
  const [activeSection, setActiveSection] = useState("Description");

  // reviews form UI
  const [showCvvHelp, setShowCvvHelp] = useState(false);

  // gallery logic
  const changeImage = (img, index) => {
    const bigImage = imgRef.current;
    if (!bigImage) {
      setMainImage(img);
      return;
    }

    // transition: fade-out -> change -> fade-in
    bigImage.classList.add("opacity-0", "scale-95");
    setTimeout(() => {
      setMainImage(img);
      bigImage.classList.remove("opacity-0", "scale-95");
      bigImage.classList.add("opacity-100", "scale-100");

      // auto-scroll thumbnails into view (simple scrollLeft)
      if (scrollRef.current) {
        scrollRef.current.scrollTo({
          left: index * scrollAmount,
          behavior: "smooth",
        });
      }
    }, 180);
  };

  const scrollLeft = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  // image zoom follow cursor
  const handleMouseMove = (e) => {
    const img = imgRef.current;
    if (!img) return;
    const { left, top, width, height } = img.getBoundingClientRect();
    // only apply zoom on larger screens (prevent mobile issues)
    if (window.innerWidth < 1024) return;

    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    img.style.transformOrigin = `${x}% ${y}%`;
    img.style.transform = "scale(2.2)";
  };

  const resetZoom = () => {
    const img = imgRef.current;
    if (!img) return;
    img.style.transformOrigin = "center center";
    img.style.transform = "scale(1)";
  };

  // quantity handlers
  const increaseQty = () => setQuantity((p) => (p < 24 ? p + 1 : p));
  const decreaseQty = () => setQuantity((p) => (p > 1 ? p - 1 : p));

  return (
    <div className="flex flex-col gap-6">
      {/* Breadcrumb */}
      <div className="bg-gray-50 w-full">
        <div className="bg-gray-100 py-4 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="font-bold text-2xl text-blue-900">Product Details</h1>
            <div className="flex gap-2 text-sm">
              <Link to="/" className="text-blue-600 font-medium">Home</Link>
              <span className="text-gray-500 font-medium">/ Productdetails</span>
            </div>
          </div>
        </div>

        {/* Main grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6  py-10 grid grid-cols-1  lg:grid-cols-[48%_48%] gap-8">
          {/* LEFT: Gallery */}
          <div className="space-y-4">
            <div className="rounded-lg overflow-hidden hover:border hover:border-gray-400 hover:shadow-lg transition">
              <img
                ref={imgRef}
                src={mainImage}
                alt="Product"
                onMouseMove={handleMouseMove}
                onMouseLeave={resetZoom}
                className="w-full h-auto object-cover transition-transform duration-200 cursor-crosshair"
                draggable={false}
              />
            </div>

            {/* Thumbnails + arrows */}
            <div className="relative">
              <button
                onClick={scrollLeft}
                aria-label="scroll left"
                className="absolute left-1 top-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow-sm hidden sm:inline-flex"
              >
                <ChevronLeft size={20} />
              </button>

              <div
                ref={scrollRef}
                className="flex gap-3 overflow-x-auto no-scrollbar scroll-smooth px-2 sm:px-6 py-2"
                style={{ scrollbarWidth: "none" }}
              >
                {/* Thumbnail 1 */}
                <img
                  src="/images/product-details-1.webp"
                  alt="thumb1"
                  onClick={() => changeImage("/images/product-details-1.webp", 0)}
                  className={`w-28 sm:w-36 h-28 sm:h-36 object-cover rounded-md cursor-pointer border ${
                    mainImage === "/images/product-details-1.webp"
                      ? "border-blue-500 border-2"
                      : "border-gray-300"
                  }`}
                />

                {/* Thumbnail 2 */}
                <img
                  src="/images/product-details-2.webp"
                  alt="thumb2"
                  onClick={() => changeImage("/images/product-details-2.webp", 1)}
                  className={`w-28 sm:w-36 h-28 sm:h-36 object-cover rounded-md cursor-pointer border ${
                    mainImage === "/images/product-details-2.webp"
                      ? "border-blue-500 border-2"
                      : "border-gray-300"
                  }`}
                />

                {/* Thumbnail 3 */}
                <img
                  src="/images/product-details-3.webp"
                  alt="thumb3"
                  onClick={() => changeImage("/images/product-details-3.webp", 2)}
                  className={`w-28 sm:w-36 h-28 sm:h-36 object-cover rounded-md cursor-pointer border ${
                    mainImage === "/images/product-details-3.webp"
                      ? "border-blue-500 border-2"
                      : "border-gray-300"
                  }`}
                />

                {/* Thumbnail 4 */}
                <img
                  src="/images/product-details-4 (1).webp"
                  alt="thumb4"
                  onClick={() => changeImage("/images/product-details-4 (1).webp", 3)}
                  className={`w-28 sm:w-36 h-28 sm:h-36 object-cover rounded-md cursor-pointer border ${
                    mainImage === "/images/product-details-4 (1).webp"
                      ? "border-blue-500 border-2"
                      : "border-gray-300"
                  }`}
                />

                {/* Thumbnail 5 */}
                <img
                  src="/images/product-details-5.webp"
                  alt="thumb5"
                  onClick={() => changeImage("/images/product-details-5.webp", 4)}
                  className={`w-28 sm:w-36 h-28 sm:h-36 object-cover rounded-md cursor-pointer border ${
                    mainImage === "/images/product-details-5.webp"
                      ? "border-blue-500 border-2"
                      : "border-gray-300"
                  }`}
                />
              </div>

              <button
                onClick={scrollRight}
                aria-label="scroll right"
                className="absolute right-1 top-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow-sm hidden sm:inline-flex"              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* RIGHT: Info */}
          <div className="flex flex-col gap-4 w-full">
            <div className="flex justify-between  w-full">
              <div className="w-full">
                <div className="text-sm text-gray-400">HEADPHONE</div>
                <h2 className="text-3xl sm:text-2xl font-semibold text-blue-900 mt-2 w-full">
                  Lorem Ipsum Wireless Noise Cancelling Headphones
                </h2>
              </div>

                 <div className="flex gap-2">
                <div className="flex gap-1">
                  <Star size={16} className="text-yellow-400 fill-yellow-400" />
                  <Star size={16} className="text-yellow-400 fill-yellow-400" />
                  <Star size={16} className="text-yellow-400 fill-yellow-400" />
                  <Star size={16} className="text-yellow-400 fill-yellow-400" />
                  <BsStarHalf size={16} className="text-yellow-400" />
                </div>
                <span className="text-sm text-gray-500 font-medium">(46)</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-3xl text-blue-900 font-semibold">$249.99</div>
              <div className="text-gray-400 line-through">$299.99</div>
              <div className="bg-red-600 text-white text-xs px-2 py-1 rounded">-17%</div>
            </div>

            <p className="text-gray-500 text-lg">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci. Phasellus egestas nisi vitae lectus imperdiet venenatis.
            </p>

            <div className="flex items-center gap-3">
              <span className="bg-green-900 text-white p-1 rounded-full">
                <BsCheck size={12} />
              </span>
              <span>In Stock</span>
              <span className="text-sm text-gray-500">(24 items left)</span>
            </div>

            {/* Color selector */}
            <div className="flex flex-col gap-2">
              <span className="font-medium">Color:</span>
              <div className="flex items-center gap-3">
                <button className="w-8 h-8 rounded-full border border-gray-200 bg-[#0F172A] text-white flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md active:scale-125 active:shadow-lg">
                  <BsCheck size={14} />
                </button>
                <button className="w-8 h-8 rounded-full border border-gray-200 bg-[#C0C0C0] transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md active:scale-125 active:shadow-lg" />
                <button className="w-8 h-8 rounded-full border border-gray-200 bg-[#1E3A8A] transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md active:scale-125 active:shadow-lg" />
                <button className="w-8 h-8 rounded-full border border-gray-200 bg-[#B76E79] transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md active:scale-125 active:shadow-lg" />
              </div>
            </div>

            {/* Size selector */}
            <div className="flex flex-col gap-2">
              <span className="font-medium">Size:</span>
              <div className="flex items-center gap-3">
                <button className="px-3 py-2 border border-gray-400 hover:border-blue-700 rounded">S</button>
                <button className="px-3 py-2 bg-blue-600 text-white rounded">M</button>
                <button className="px-3 py-2 border border-gray-400 hover:border-blue-700 rounded">L</button>
              </div>
            </div>

            {/* Quantity */}
            <div className="flex flex-col gap-2">
              <span className="font-medium">Quantity:</span>
              <div>
                <div className="inline-flex items-center border rounded">
                <button
                  onClick={decreaseQty}
                  disabled={quantity === 1}
                  className={`px-4 py-2 ${quantity === 1 ? "opacity-40 cursor-not-allowed" : ""}`}
                >
                  -
                </button>
                <div className="px-6 py-2 border-l border-r">{quantity}</div>
                <button
                  onClick={increaseQty}
                  disabled={quantity === 24}
                  className={`px-4 py-2 ${quantity === 24 ? "opacity-40 cursor-not-allowed" : ""}`}
                >
                  +
                </button>
              </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 items-stretch mt-4 border-b border-b-gray-300 pb-6">
              <div className="flex gap-3 flex-1">
                <button className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-3 rounded hover:bg-blue-700 transition font-bold">
                  <BsCartPlus /> Add to Cart
                </button>

                <button className="flex flex-1 items-center gap-2 border border-blue-600 text-blue-600 px-4 py-3 rounded hover:bg-blue-600 hover:text-white transition font-bold justify-center">
                  <BsFillLightningFill /> Buy Now
                </button>
              </div>

              <button className="py-4 px-4 border rounded text-gray-500 hover:bg-red-600 hover:text-white transition self-start">
                <BsHeart />
              </button>
            </div>

            {/* Shipping & policies */}
            <div className="flex flex-col gap-3 mt-4 text-gray-600">
              <div className="flex items-center gap-3">
                <BsTruck className="text-blue-600" /> <span>Free shipping on orders over $50</span>
              </div>
              <div className="flex items-center gap-3">
                <BsArrowRepeat className="text-blue-600" /> <span>30-day return policy</span>
              </div>
              <div className="flex items-center gap-3">
                <BsShieldPlus className="text-blue-600" /> <span>2-year warranty</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom tabs: Description / Specifications / Reviews */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-xl p-6">
          {/* tabs */}
          <div className="flex gap-6 flex-wrap border-b border-b-gray-300">
            <button
              onClick={() => setActiveSection("Description")}
              className={`pb-4 text-lg font-medium ${activeSection === "Description" ? "text-blue-900 border-b-2 border-blue-600 " : "text-gray-600 hover:text-blue-600"}`}
            >
              Description
            </button>

            <button
              onClick={() => setActiveSection("Spacifications")}
              className={`pb-4 text-lg font-medium ${activeSection === "Spacifications" ? "text-blue-900 border-b-2 border-blue-600" : "text-gray-600 hover:text-blue-600"}`}
            >
              Spacifications
            </button>

            <button
              onClick={() => setActiveSection("Reviews (42)")}
              className={`pb-4 text-lg font-medium ${activeSection === "Reviews (42)" ? "text-blue-900 border-b-2 border-blue-600" : "text-gray-600 hover:text-blue-600"}`}
            >
              Reviews (42)
            </button>
          </div>

          {/* content */}
          <div className="mt-6">
            {/* DESCRIPTION */}
            {activeSection === "Description" && (
              <div>
                <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-blue-900">Product Overview</h3>
                  <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci. Phasellus egestas nisi vitae lectus imperdiet venenatis. Suspendisse vulputate quam diam, et consectetur augue condimentum in. Aenean dapibus urna eget nisi pharetra, in iaculis nulla blandit. Praesent at consectetur sem, sed sollicitudin nibh. Ut interdum risus ac nulla placerat aliquet.</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-blue-900">Key Features</h3>
                  <div className="mt-3 space-y-2">
                    <p className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-gray-800 rounded-full mt-2"></span><span className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span></p>
                    <p className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-gray-800 rounded-full mt-2"></span><span className="text-gray-600">Vestibulum at lacus congue, suscipit elit nec, tincidunt orci</span></p>

                    <p className="flex items-start gap-3"><span className="w-2 h-2 bg-gray-800 rounded-full mt-2"></span><span className="text-gray-600">Phasellus egestas nisi vitae lectus imperdiet venenatis</span></p>

                    <p className="flex items-start gap-3"><span className="w-2 h-2 bg-gray-800 rounded-full mt-2"></span><span className="text-gray-600">Suspendisse vulputate quam diam, et consectetur augue condimentum in</span></p>

                     <p className="flex items-start gap-3"><span className="w-2 h-2 bg-gray-800 rounded-full mt-2"></span><span className="text-gray-600">Aenean dapibus urna eget nisi pharetra, in iaculis nulla blandit</span></p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-blue-900">What's in the Box</h3>
                  <div className="mt-3 space-y-2">
                    <p className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-gray-800 rounded-full mt-2"></span><span className="text-gray-600">Lorem Ipsum Wireless Headphones</span></p>

                    <p className="flex items-start gap-3"><span className="w-2 h-2 bg-gray-800 rounded-full mt-2"></span><span className="text-gray-600">Carrying Case</span></p>

                    <p className="flex items-start gap-3"><span className="w-2 h-2 bg-gray-800 rounded-full mt-2"></span><span className="text-gray-600">USB-C Charging Cable</span></p>

                     <p className="flex items-start gap-3"><span className="w-2 h-2 bg-gray-800 rounded-full mt-2"></span><span className="text-gray-600">3.5mm Audio Cable</span></p>

                      <p className="flex items-start gap-3"><span className="w-2 h-2 bg-gray-800 rounded-full mt-2"></span><span className="text-gray-600">User Manual</span></p>
                  </div>
                </div>
              </div>

              
              </div>
            )}

            {/* SPECIFICATIONS (normal format rows) */}
            {activeSection === "Spacifications" && (
              <div>
                <div>
                  <h3 className="text-lg font-medium text-blue-900 mb-4">Technical Specifications</h3>
                  <div className="overflow-x-auto">
                  <table className="w-full  rounded-lg">
                    <tbody className="divide-y divide-gray-200">
                      <tr className="flex flex-col sm:table-row">
                        <td className="p-3 font-medium text-gray-700 sm:w-1/3">Connectivity</td>
                        <td className="p-3 text-gray-600">Bluetooth 5.0, 3.5mm jack</td>
                      </tr>

                      <tr className="flex flex-col sm:table-row">
                        <td className="p-3 font-medium text-gray-700">Battery Life</td>
                        <td className="p-3 text-gray-600">Up to 30 hours</td>
                      </tr>

                      <tr className="flex flex-col sm:table-row">
                        <td className="p-3 font-medium text-gray-700">Charging Time</td>
                        <td className="p-3 text-gray-600">3 hours</td>
                      </tr>

                      <tr className="flex flex-col sm:table-row">
                        <td className="p-3 font-medium text-gray-700">Driver Size</td>
                        <td className="p-3 text-gray-600">40mm</td>
                      </tr>

                      <tr className="flex flex-col sm:table-row">
                        <td className="p-3 font-medium text-gray-700">Frequency Response</td>
                        <td className="p-3 text-gray-600">20Hz - 20kHz</td>
                      </tr>

                       <tr className="flex flex-col sm:table-row">
                        <td className="p-3 font-medium text-gray-700">Impedance</td>
                        <td className="p-3 text-gray-600">32 Ohm</td>
                      </tr>

                      <tr className="flex flex-col sm:table-row">
                        <td className="p-3 font-medium text-gray-700">Weight</td>
                        <td className="p-3 text-gray-600">320g</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                     
                <div>
                  <h3 className="text-lg font-medium text-blue-900 mb-2 mt-4">Features</h3>
                  <div className="overflow-x-auto">
                  <table className="w-full  rounded-lg">
                    <tbody className="divide-y divide-gray-200">
                      <tr className="flex flex-col sm:table-row">
                        <td className="p-3 font-medium text-gray-700 sm:w-1/3">Noise Cancellation</td>
                        <td className="p-3 text-gray-600">Active Noise Cancellation (ANC)</td>
                      </tr>

                      <tr className="flex flex-col sm:table-row">
                        <td className="p-3 font-medium text-gray-700">Controls</td>
                        <td className="p-3 text-gray-600">Touch controls, Voice assistant</td>
                      </tr>

                      <tr className="flex flex-col sm:table-row">
                        <td className="p-3 font-medium text-gray-700">Microphone</td>
                        <td className="p-3 text-gray-600">Dual beamforming microphones</td>
                      </tr>

                      <tr className="flex flex-col sm:table-row">
                        <td className="p-3 font-medium text-gray-700">Water Resistance</td>
                        <td className="p-3 text-gray-600">IPX4 (splash resistant)</td>
                      </tr>

                    </tbody>
                  </table>
                </div>
                </div>

                </div>   
              </div>              
            )}

            {/* REVIEWS */}
            {activeSection === "Reviews (42)" && (
              <div className="space-y-6 px-4">
                <div className="flex flex-col lg:flex-row md:flex-row gap-18 items-center w-full">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="text-5xl font-bold text-blue-900">4.5</div>
                     <div className="flex gap-1 mt-1">
                      <Star className="text-yellow-400 fill-amber-400" size={16} />
                      <Star className="text-yellow-400 fill-amber-400" size={16} />
                      <Star className="text-yellow-400 fill-amber-400" size={16} />
                      <Star className="text-yellow-400 fill-amber-400" size={16} />
                      <BsStarHalf className="text-yellow-400" size={16} />
                    </div>
                    <div className="text-sm text-gray-600 mt-1">Based on 42 reviews</div>
                  </div>

                  <div className="flex-1 space-y-2 w-full">
                    <div className="flex items-center gap-3">
                      <div className="text-sm text-gray-500 w-16">5 stars</div>
                      <div className="bg-gray-200 w-full h-2 rounded-full relative">
                        <div className="absolute h-2 rounded-l-full bg-amber-400 w-[60%]" />
                      </div>
                      <div className="w-14 text-right">27</div>
                    </div>

                    <div className="flex items-center gap-3 w-full">
                      <div className="text-sm text-gray-500 w-16">4 stars</div>
                      <div className="bg-gray-200 w-full h-2 rounded-full relative">
                        <div className="absolute h-2 rounded-l-full bg-amber-400 w-[30%]" />
                      </div>
                      <div className="w-14 text-right">10</div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="text-sm text-gray-500 w-16">3 stars</div>
                      <div className="bg-gray-200 w-full h-2 rounded-l-full relative">
                        <div className="absolute h-2 rounded-l-full bg-amber-400 w-[8%]" />
                      </div>
                      <div className="w-14 text-right">3</div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="text-sm text-gray-500 w-16">2 stars</div>
                      <div className="bg-gray-200 w-full h-2 rounded-full relative">
                        <div className="absolute h-2 rounded-l-full bg-amber-400 w-[2%]" />
                      </div>
                      <div className="w-14 text-right">1</div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="text-sm text-gray-500 w-16">1 stars</div>
                      <div className="bg-gray-200 w-full h-2 rounded-full relative">
                        <div className="absolute h-2 rounded-l-full bg-amber-400 w-[2%]" />
                      </div>
                      <div className="w-14 text-right">1</div>
                    </div>
                  </div>
                </div>

                {/* review form */}
                <form className="space-y-4 shadow-lg rounded-lg bg-white p-8">
                  <h1 className="text-lg font-bold text-gray-600">Write a Review</h1>
                  <div>
                    <p className="text-sm text-gray-700">Your Rating</p>
                    <div className="flex gap-1 mt-1">
                      <Star className="text-gray-400 fill-gray-400" size={20} />
                      <Star className="text-gray-400 fill-gray-400" size={20} />
                      <Star className="text-gray-400 fill-gray-400" size={20} />
                      <Star className="text-gray-400 fill-gray-400" size={20} />
                       <Star className="text-gray-400 fill-gray-400" size={20} />
                    </div>
                  </div>
                  <div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-700 mb-1 font-bold">Your Name</label>
                      <input className="w-full border border-gray-300 px-4 py-2 rounded" required />
                    </div>

                    <div className="relative">
                      <label className="block text-sm text-gray-700 mb-1 font-bold">Your Email</label>
                      <input className="w-full border border-gray-300 px-4 py-2 rounded"/>
                      <button
                        type="button"
                        onClick={() => setShowCvvHelp((s) => !s)}
                        className="absolute right-3 bottom-3 text-gray-500"
                        aria-label="CVV help"
                      >
                        
                      </button>

                      {showCvvHelp && (
                        <div className="mt-2 text-xs text-gray-600">The CVV is the 3-digit code on the back of your card.</div>
                      )}
                    </div>

                  </div>
                    <label className="block text-md mt-4 text-gray-700 mb-1 font-bold">Review Title</label>
                    <input className="w-full border border-gray-300 px-4 py-2 rounded" type="text" />
                  </div>

                  

                  <div>
                    <label className="block text-md font-bold text-gray-700 mb-1">Your Review</label>
                    <textarea              
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:shadow-md focus:shadow-blue-300 focus:outline-none"
            ></textarea>
            <p className="py-3 text-sm text-gray-400">Tell others what you think about this product. Be honest and helpful!</p>

            <button  className="w-full border border-gray-300 px-4 py-3 font-medium rounded bg-blue-600 text-white" >Submit Review</button>
                  </div>
                </form>
            
              <div className="flex flex-col gap-6">
                <h1 className="text-lg text-gray-700">Customer Reviews</h1>
                <div className="bg-white shadow p-8 rounded-lg">
                  <div className="flex gap-4 items-center justify-between">
                    <div className="flex flex-row items-center justify-between gap-2">
                      <span>
                        <img
                  src="/images/person-f-5.webp"
                  alt="thumb4" className="object-cover rounded-full w-10 h-10"/>
                      </span>
                      <span>
                        <h3 className="text-lg text-gray-500">John Doe</h3>
                        <p className="text-sm text-gray-600">03/15/2024</p>
                      </span>
                    </div>
                    <div className="flex gap-1 mt-1">
                      <Star className="text-yellow-400 fill-amber-400" size={16} />
                      <Star className="text-yellow-400 fill-amber-400" size={16} />
                      <Star className="text-yellow-400 fill-amber-400" size={16} />
                      <Star className="text-yellow-400 fill-amber-400" size={16} />
                      <Star className="text-yellow-400 fill-amber-400" size={16} />
                    </div>
                    </div>

                  <div>
                    <h1 className="mb-2 text-lg text-gray-500">Exceptional sound quality and comfort</h1>
                    <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci. Phasellus egestas nisi vitae lectus imperdiet venenatis. Suspendisse vulputate quam diam, et consectetur augue condimentum in.</p>
                  </div>
                </div>

                <div className="bg-white shadow p-8 rounded-lg">
                  <div className="flex gap-4 items-center justify-between">
                    <div className="flex flex-row items-center justify-between gap-2">
                      <span>
                        <img
                  src="/images/person-f-2.webp"
                  alt="thumb4" className="object-cover rounded-full w-10 h-10"/>
                      </span>
                      <span>
                        <h3 className="text-lg text-gray-500">Jane Smith</h3>
                        <p className="text-sm text-gray-600">02/28/2024</p>
                      </span>
                    </div>
                    <div className="flex gap-1 mt-1">
                      <Star className="text-yellow-400 fill-amber-400" size={16} />
                      <Star className="text-yellow-400 fill-amber-400" size={16} />
                      <Star className="text-yellow-400 fill-amber-400" size={16} />
                      <Star className="text-yellow-400 fill-amber-400" size={16} />
                      <Star className="text-yellow-400" size={16} />
                    </div>
                    </div>

                  <div>
                    <h1 className="mb-2 text-lg text-gray-500">Great headphones, battery could be better</h1>
                    <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci. Phasellus egestas nisi vitae lectus imperdiet venenatis.</p>
                  </div>
                </div>

                <div className="bg-white shadow p-8 rounded-lg">
                  <div className="flex gap-4 items-center justify-between">
                    <div className="flex flex-row items-center justify-between gap-2">
                      <span>
                        <img
                  src="/images/person-m-2.webp"
                  alt="thumb4" className="object-cover rounded-full w-10 h-10"/>
                      </span>
                      <span>
                        <h3 className="text-lg text-gray-500">Michael Johnson</h3>
                        <p className="text-sm text-gray-600">02/15/2024</p>
                      </span>
                    </div>
                    <div className="flex gap-1 mt-1">
                      <Star className="text-yellow-400 fill-amber-400" size={16} />
                      <Star className="text-yellow-400 fill-amber-400" size={16} />
                      <Star className="text-yellow-400 fill-amber-400" size={16} />
                      <Star className="text-yellow-400 fill-amber-400" size={16} />
                      <BsStarHalf className="text-yellow-400 fill-amber-400" size={16} />
                    </div>
                    </div>

                  <div>
                    <h1 className="mb-2 text-lg text-gray-500">Impressive noise cancellation</h1>
                    <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci. Phasellus egestas nisi vitae lectus imperdiet venenatis. Suspendisse vulputate quam diam.</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <button className="border px-4 py-2 rounded border-blue-600 text-blue-600 font-bold bg-white hover:bg-blue-600 hover:text-white">Load More Views</button>
              </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

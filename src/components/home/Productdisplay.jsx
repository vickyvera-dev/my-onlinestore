import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* -------------------- Product Data -------------------- */
const items = [
  { id: 1, name: "Ladies Wear", count: 12, image: "/images/product-f-1.webp" },
  { id: 2, name: "T-Shirt", count: 4, image: "/images/product-10.webp" },
  { id: 3, name: "Office Wear", count: 11, image: "/images/product-m-1.webp" },
  { id: 4, name: "Wooden Chair", count: 6, image: "/images/product-2.webp" },
  { id: 5, name: "Ladies Bag", count: 7, image: "/images/product-1.webp" },
  { id: 6, name: "Back Pack", count: 2, image: "/images/product-6.webp" },
  { id: 7, name: "Jean Jacket", count: 4, image: "/images/product-7.webp" },
  { id: 8, name: "Men Jacket", count: 6, image: "/images/product-4-variant.webp" },
  { id: 9, name: "Ladies Heels", count: 2, image: "/images/product-5.webp" },
  { id: 10, name: "Snikers", count: 8, image: "/images/product-11.webp" },
  { id: 11, name: "Glass", count: 4, image: "/images/product-3.webp" },
  { id: 12, name: "Men Fashion", count: 6, image: "/images/product-m-4.webp" },
];

/* -------------------- Custom Arrows -------------------- */
function ArrowLeft({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full text-gray-400 shadow-md hover:bg-gray-200 cursor-pointer"
    >
      <ChevronLeft size={22} />
    </div>
  );
}

function ArrowRight({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full text-gray-400 shadow-md hover:bg-gray-200 cursor-pointer"
    >
      <ChevronRight size={22} />
    </div>
  );
}

/* -------------------- Main Component -------------------- */
function Productdisplay() {
  useEffect(() => {
    Aos.init({ duration: 1000, delay: 50 });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6, // default for extra-large screens
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    // centerMode: true,
    arrows: true,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
    responsive: [
      {
        breakpoint: 2560, // 4K screens
        settings: { slidesToShow: 6, slidesToScroll: 2, centerMode: true }
      },
      {
        breakpoint: 1920, // Full HD
        settings: { slidesToShow: 5, slidesToScroll: 2, centerMode: true }
      },
      {
        breakpoint: 1440, // laptops / large tablets
        settings: { slidesToShow: 5, slidesToScroll: 2, centerMode: false }
      },
      {
        breakpoint: 1024, // tablets
        settings: { slidesToShow: 4, slidesToScroll: 1, centerMode: false }
      },
      {
        breakpoint: 768, // large phones / small tablets
        settings: { slidesToShow: 3, slidesToScroll: 1, centerMode: false }
      },
      {
        breakpoint: 480, // mobile
        settings: { slidesToShow: 1, slidesToScroll: 1, centerMode: false }
      }
    ]
  };

  return (
    <div className="bg-white w-full py-16">
      {/* Section Header */}
      <div className="text-center mb-10 px-4">
        <h1 className="font-bold text-blue-950 text-2xl md:text-4xl">
          Available Products
        </h1>
        <p className="text-gray-500 mt-2">
          Browse through our latest trendy collections
        </p>
      </div>

      {/* Product Carousel */}
      <div className="lg:max-w-7xl w-full overflow-hidden mx-auto px-4 md:px-8 relative">
        <Slider {...settings}>
          {items.map((item) => (
            <div key={item.id} className="px-1 lg:px-2 sm:px-1 md:px-3">
              <div  className=" w-full flex justify-center">
                <div
                data-aos="zoom-in"
                className="bg-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-500 ease-in-out hover:-translate-y-2 max-w-[280px] mx-auto"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="mx-auto w-40 h-40 object-cover mb-4 transition-all duration-300 hover:scale-105"
                />
                <h3 className="text-gray-800 font-semibold text-lg">{item.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{item.count} products</p>
              </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Productdisplay;

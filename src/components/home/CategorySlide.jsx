import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const categories = [
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

export default function CategorySlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="bg-white w-full py-16">
      {/* ===== Section Header ===== */}
      <div className="text-center mb-10 px-4">
        <h1 className="font-bold text-blue-950 text-2xl md:text-4xl">
          Available Products
        </h1>
        <p className="text-gray-500 mt-2">
          Browse through our latest trendy collections
        </p>
      </div>

      {/* ===== Slider Wrapper ===== */}
      <div className="relative category-slider max-w-7xl mx-auto px-4 md:px-8">
        {/* Custom Left Arrow */}
        <div
          ref={prevRef}
          className="absolute left-1 top-1/2 -translate-y-1/2 z-10 
            bg-white p-2 rounded-full text-gray-400 shadow-md 
            hover:bg-gray-200 cursor-pointer"
        >
          <ChevronLeft size={22} />
        </div>

        {/* Custom Right Arrow */}
        <div
          ref={nextRef}
          className="absolute right-1 top-1/2 -translate-y-1/2 z-10 
            bg-white p-2 rounded-full text-gray-400 shadow-md 
            hover:bg-gray-200 cursor-pointer"
        >
          <ChevronRight size={22} />
        </div>

        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          loop
          speed={600}          
          centeredSlides
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          pagination={{
            el: ".category-pagination",
            clickable: true,
          }}
          breakpoints={{
            320: { slidesPerView: "auto", spaceBetween: 12 },
            576: { slidesPerView: 2, spaceBetween: 16 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            992: { slidesPerView: 4, spaceBetween: 20 },
            1200: { slidesPerView: 5, spaceBetween: 24 },
          }}
        >
          {categories.map((item) => (
            <SwiperSlide
              key={item.id}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className="px-2 md:px-3">
                <div
                  data-aos="zoom-in"
                  className="bg-gray-100 rounded-2xl p-6 text-center shadow-sm 
                    hover:shadow-md transition-all duration-500 ease-in-out 
                    hover:-translate-y-2 w-full"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="mx-auto w-36 h-36 object-cover mb-4 
                      transition-transform duration-300 hover:scale-105"
                  />
                  <h3 className="text-gray-800 font-semibold text-lg">
                    {item.name}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    {item.count} products
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ===== Pagination Dots ===== */}
        <div className="category-pagination flex justify-center mt-8" />
      </div>
    </section>
  );
}

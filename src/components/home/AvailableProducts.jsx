import React, { useState, useEffect } from "react";
import {  BaggageClaim,  Heart,  Eye,  ArrowLeftRight,  ArrowRight,
  Star,
} from "lucide-react";
import Aos from "aos";
import "aos/dist/aos.css";

 function ProductSection() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  // Track selected category
  const [category, setCategory] = useState("All");

  // Each card has 2 images now (default + hover)
  const products = [
    {
      id: 1,
      img: "/images/product-11.webp",
      hoverImg: "/images/product-11-variant.webp",
      category: "Clothing",
    },
    {
      id: 2,
      img: "/images/product-9.webp",
      hoverImg: "/images/product-9-variant.webp",
      category: "Clothing",
    },
    {
      id: 3,
      img: "/images/product-7.webp",
      hoverImg: "/images/product-7-variant.webp",
      category: "Clothing",
    },
    {
      id: 4,
      img: "/images/product-3.webp",
      hoverImg: "/images/product-3-variant.webp",
      category: "Accessories",
    },
    {
      id: 5,
      img: "/images/product-6.webp",
      hoverImg: "/images/product-6-variant.webp",
      category: "Accessories",
    },
    {
      id: 6,
      img: "/images/product-5.webp",
      hoverImg: "/images/product-5-variant.webp",
      category: "Electronics",
    },
    {
      id: 7,
      img: "/images/product-4.webp",
      hoverImg: "/images/product-4-variant.webp",
      category: "Electronics",
    },
    {
      id: 8,
      img: "/images/product-8.webp",
      hoverImg: "/images/product-8-variant.webp",
      category: "Electronics",
    },
  ];

  // Filter products based on active category
  const filteredProducts =
    category === "All"
      ? products
      : products.filter((item) => item.category === category);

  return (
    <div>
      <h1 className="font-bold text-blue-950 md:text-4xl mb-10 text-center text-xl mt-10">
        All Our Products
      </h1>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {["All", "Clothing", "Accessories", "Electronics"].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`py-2 px-4 rounded-full text-sm font-medium transition-all duration-300 ${
              category === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-blue-200 hover:text-blue-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto max-w-7xl mt-10 px-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            data-aos="zoom-in"
            className="bg-white rounded-2xl shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-2 overflow-hidden"
          >



            
            <div className="relative group">

                {/* Sale/New Badge */}
              {(product.id === 1 ||
                product.id === 3 ||
                product.id === 5 ||
                product.id === 7) && (
                <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
                  <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                    Sale
                  </span>
                 
                </div>
              )}

              {(product.id === 5 ||
                product.id === 7) && (
                <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
                  
                  <span className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                    New
                  </span>
                </div>
              )}
              {/* Default Image */}
              <img
                src={product.img}
                alt="Product"
                className="object-cover w-full rounded-t-2xl h-64 transition-opacity duration-500 group-hover:opacity-0"
              />
              {/* Hover Image */}
              <img
                src={product.hoverImg}
                alt="Hover Product"
                className="object-cover w-full rounded-t-2xl h-64 absolute top-0 left-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-white bg-gradient-to-t from-black/60 t0-transparent"
              />

              {/* Hover Overlay */}
              <div className="inline-flex items-center justify-center transition-colors duration-300 absolute bottom-4 group-hover:opacity-100 opacity-0 inset-x-8 mx-auto flex-col ">
                <button className="rounded-full inline-flex justify-center items-center bg-blue-600 text-white text-sm py-3 w-58 gap-2 px-8 mx-auto  inset-x-0 mb-4 ">
                  <BaggageClaim className="w-4 h-4" /> Add to cart
                </button>
                <div className="flex gap-3">
                  <div className="text-gray-700 bg-white p-2 rounded-full hover:border-blue-600 hover:text-blue-600">
                    <Heart size={18} />
                  </div>
                  <div className="text-gray-700 bg-white p-2 rounded-full hover:border-blue-600 hover:text-blue-600">
                    <Eye size={18} />
                  </div>
                  <div className="text-gray-700 bg-white p-2 rounded-full hover:border-blue-600 hover:text-blue-600">
                    <ArrowLeftRight size={18} />
                  </div>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="p-4">
              <p className="text-blue-950 font-semibold hover:text-blue-800">
                Sweater wear for men for sale
              </p>
              <div className="flex text-center items-center mt-4">
                <h1 className="font-bold text-blue-600">$89.99</h1>
              </div>
              <div className="flex mt-3 items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <Star className="w-4 h-4 text-yellow-400" />
                <p className="text-gray-400 ml-2">(24)</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Products Button */}
      <div
        className="flex gap-4 items-center justify-center flex-col mt-20 bg-white"
        data-aos="zoom-in"
      >
        <button className="bg-blue-600 py-2 px-8 rounded-full text-sm text-white font-medium">
          <a href="#" className="flex gap-2 items-center justify-center">
            View All Products
            <ArrowRight />
          </a>
        </button>
      </div>
    </div>
  );
}
export default ProductSection;
import React from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import {
  ArrowLeftRight,
  ArrowRight,
  BaggageClaim,
  ClipboardPlus,
  Eye,
  Heart,
  Star,
} from "lucide-react";

function AvailableProducts () {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 50,
    });
  }, []);

  return (
    <div className="bg-white max-w-[100%] mx-auto max-h-[100%] py-8">
      <div>
        <h1 className="font-bold text-blue-950 md:text-4xl mb-10 text-center text-xl mt-10">
        All Our Products
      </h1>
      <div className="flex gap-4 items-center justify-center">
        <button className="bg-blue-600 py-2 px-4 rounded-full text-sm text-white font-medium">
          All
        </button>
        <button className="hover:bg-blue-200 py-2 px-4 rounded-full text-sm hover:text-blue-600 font-medium bg-gray-200 text-gray-600">
          Clothing
        </button>
        <button className="hover:bg-blue-200 py-2 px-4 rounded-full text-sm hover:text-blue-600 font-medium text-gray-600 bg-gray-200">
          Accessories
        </button>
        <button className="hover:bg-blue-200 py-2 px-4 rounded-full text-sm hover:text-blue-600 font-medium text-gray-600 bg-gray-200">
          Electronics
        </button>
      </div>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto max-w-7xl mt-10 px-5">
        <div
          data-aos="zoom-in"
          className=" bg-white rounded-2xl pt-5 pb-5 shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <div className="transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <div className="rounded-t-xl -mt-4 relative group">
              <button className="bg-blue-800 rounded-full px-3 pb-0.5 text-sm text-white text-center absolute top-3 left-2 sm:top-4 sm:left-4">
                Sale
              </button>

              <div className="absolute items-center justify-center inline-flex">
                <div className="inline-flex items-center justify-center transition-colors duration-300 absolute bottom-18 group-hover:opacity-100 opacity-0 inset-x-8 mx-auto">
                  <button className="rounded-full inline-flex justify-center items-center bg-blue-600 text-white text-sm py-3 w-58 gap-2 px-8 mx-auto  inset-x-0">
                    <BaggageClaim className="w-4 h-4" /> Add to cart
                  </button>
                  <div className="inline-flex flex-col items-center justify-center transition-colors duration-300 group-hover:opacity-100 mt-26 absolute ml-6 mr-38">
                    <div className="text-gray-700 bg-white p-2 rounded-full absolute hover:border-blue-600 hover:text-blue-600 hover:border-1">
                      <Heart size={18} />
                    </div>
                    <div className="text-gray-700 bg-white p-2 rounded-full absolute hover:border-blue-600 hover:text-blue-600 hover:border-1 -mr-24">
                      <Eye size={18} />
                    </div>
                    <div className="text-gray-700 bg-white p-2 rounded-full absolute hover:border-blue-600 hover:text-blue-600 hover:border-1 -mr-50">
                      <ArrowLeftRight size={18} />
                    </div>
                  </div>
                </div>
                <img
                  src="/images/product-11-variant.webp"
                  alt=""
                  className="w-full h-full object-cover pt-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-white rounded-t-xl bg-gradient-to-t from-black/60 t0-transparent"
                />
              </div>
              <img
                src="/images/product-11.webp"
                alt="Snikers"
                className="object-cover"
              />
            </div>
            <p className="text-blue-950 font-semibold mt-4 ml-4 hover:text-blue-800">
              Sweater wear for men for sale
            </p>
            <div className="flex text-center items-center mt-4">
              <h1 className="font-bold text-blue-600  ml-4">$89.99</h1>
              <p className="line-through text-gray-400 ml-2">$129.99</p>
            </div>
            <div className="flex ml-4 mt-4 items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <div className="relative inline-block w-4 h-4">
                <Star className="absolute inset-0 w-4 h-4 text-yellow-400" />
                <div className="absolute inset-0 w-1/2 overflow-hidden">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                </div>
              </div>
              <p className="text-gray-400 ml-2">(24)</p>
            </div>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          className=" bg-white rounded-2xl pt-5 pb-5 shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <div className="transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <div className=" rounded-t-xl -mt-4 relative group">
              <div className="absolute items-center justify-center inline-flex">
                <div className="inline-flex items-center justify-center transition-colors duration-300 absolute bottom-18 group-hover:opacity-100 opacity-0 inset-x-8 mx-auto">
                  <button className="rounded-full inline-flex justify-center items-center bg-blue-600 text-white text-sm py-3 w-58 gap-2 px-8 mx-auto  inset-x-0">
                    <BaggageClaim className="w-4 h-4" /> Add to cart
                  </button>
                  <div className="flex flex-col items-center justify-center transition-colors duration-300 group-hover:opacity-100 mt-26 absolute ml-6 mr-38">
                    <div className="text-gray-700 bg-white p-2 rounded-full absolute hover:border-blue-600 hover:text-blue-600 hover:border-1">
                      <Heart size={18} />
                    </div>
                    <div className="text-gray-700 bg-white p-2 rounded-full absolute hover:border-blue-600 hover:text-blue-600 hover:border-1 -mr-24">
                      <Eye size={18} />
                    </div>
                    <div className="text-gray-700 bg-white p-2 rounded-full absolute hover:border-blue-600 hover:text-blue-600 hover:border-1 -mr-50">
                      <ArrowLeftRight size={18} />
                    </div>
                  </div>
                </div>
                <img
                  src="/images/product-9-variant.webp"
                  alt=""
                  className="w-full h-full object-cover pt-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-white rounded-t-xl bg-gradient-to-t from-black/60 t0-transparent"
                />
              </div>
              <img
                src="/images/product-9.webp"
                alt="Snikers"
                className="object-cover"
              />
            </div>
            <p className="text-blue-950 font-semibold mt-4 ml-4 hover:text-blue-800">
              Sweater wear for men for sale
            </p>
            <div className="flex text-center items-center mt-4">
              <h1 className="font-bold text-blue-600 ml-4">$249.99</h1>
            </div>
            <div className="flex ml-4 mt-4 items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <Star className="w-4 h-4 text-yellow-400" />
              <p className="text-gray-400 ml-2">(18)</p>
            </div>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          className=" bg-white rounded-2xl pt-5 pb-5 shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-2"
        >
          <div className="transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <div className="rounded-t-xl -mt-4 relative group">
              <button className="bg-blue-800 rounded-full px-3 pb-0.5 text-sm text-white text-center absolute top-3 left-2 sm:top-4 sm:left-4">
                New
              </button>

              <div className="absolute items-center justify-center inline-flex">
                <div className="inline-flex items-center justify-center transition-colors duration-300 absolute bottom-18 group-hover:opacity-100 opacity-0 inset-x-8 mx-auto">
                  <button className="rounded-full inline-flex justify-center items-center bg-blue-600 text-white text-sm py-3 w-58 gap-2 px-8 mx-auto  inset-x-0">
                    <BaggageClaim className="w-4 h-4" /> Add to cart
                  </button>
                  <div className="flex flex-col items-center justify-center transition-colors duration-300 group-hover:opacity-100 mt-26 absolute ml-6 mr-38">
                    <div className="text-gray-700 bg-white p-2 rounded-full absolute hover:border-blue-600 hover:text-blue-600 hover:border-1">
                      <Heart size={18} />
                    </div>
                    <div className="text-gray-700 bg-white p-2 rounded-full absolute hover:border-blue-600 hover:text-blue-600 hover:border-1 -mr-24">
                      <Eye size={18} />
                    </div>
                    <div className="text-gray-700 bg-white p-2 rounded-full absolute hover:border-blue-600 hover:text-blue-600 hover:border-1 -mr-50">
                      <ArrowLeftRight size={18} />
                    </div>
                  </div>
                </div>
                <img
                  src="/images/product-7-variant.webp"
                  alt=""
                  className="w-full h-full object-cover pt-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-white rounded-t-xl bg-gradient-to-t from-black/60 t0-transparent"
                />
              </div>
              <img
                src="/images/product-7.webp"
                alt="Snikers"
                className="object-cover"
              />
            </div>
            <p className="text-blue-950 font-semibold mt-4 ml-4 hover:text-blue-800">
              Sweater wear for men for sale
            </p>
            <div className="flex text-center items-center mt-4">
              <h1 className="font-bold text-blue-600  ml-4">$59.99</h1>
            </div>
            <div className="flex ml-4 mt-4 items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <Star className="w-4 h-4 text-yellow-400" />
              <Star className="w-4 h-4 text-yellow-400" />
              <p className="text-gray-400 ml-2">(7)</p>
            </div>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          className=" bg-white rounded-2xl pt-5 pb-5 shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-2"
        >
          <div className="transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <div className="rounded-t-xl -mt-4 relative group">
              <div className="absolute items-center justify-center inline-flex">
                <div className="inline-flex items-center justify-center transition-colors duration-300 absolute bottom-18 group-hover:opacity-100 opacity-0 inset-x-8 mx-auto">
                  <button className="rounded-full inline-flex justify-center items-center bg-blue-600 text-white text-sm py-3 w-58 gap-2 px-8 mx-auto  inset-x-0">
                    <BaggageClaim className="w-4 h-4" /> Add to cart
                  </button>
                  <div className="flex flex-col items-center justify-center transition-colors duration-300 group-hover:opacity-100 mt-26 absolute ml-6 mr-38">
                    <div className="text-gray-700 bg-white p-2 rounded-full absolute hover:border-blue-600 hover:text-blue-600 hover:border-1">
                      <Heart size={18} />
                    </div>
                    <div className="text-gray-700 bg-white p-2 rounded-full absolute hover:border-blue-600 hover:text-blue-600 hover:border-1 -mr-24">
                      <Eye size={18} />
                    </div>
                    <div className="text-gray-700 bg-white p-2 rounded-full absolute hover:border-blue-600 hover:text-blue-600 hover:border-1 -mr-50">
                      <ArrowLeftRight size={18} />
                    </div>
                  </div>
                </div>
                <img
                  src="/images/product-3-variant.webp"
                  alt=""
                  className="w-full h-full object-cover pt-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-white rounded-t-xl bg-gradient-to-t from-black/60 t0-transparent"
                />
              </div>
              <img
                src="/images/product-3.webp"
                alt="Snikers"
                className="object-cover"
              />
            </div>
            <p className="text-blue-950 font-semibold mt-4 ml-4 hover:text-blue-800">
              Sweater wear for men for sale
            </p>
            <div className="flex text-center items-center mt-4">
              <h1 className="font-bold text-blue-600  ml-4">$89.99</h1>
              <p className="line-through text-gray-400 ml-2">$99.99</p>
            </div>
            <div className="flex ml-4 mt-4 items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <p className="text-gray-400 ml-2">(34)</p>
            </div>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          className=" bg-white rounded-2xl pt-5 pb-5 shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-2"
        >
          <div className="transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <div className="rounded-t-xl -mt-4 relative group">
              <button className="bg-blue-800 rounded-full px-3 pb-0.5 text-sm text-white text-center absolute top-3 left-2 sm:top-4 sm:left-4">
                Sale
              </button>

              <div className="absolute items-center justify-center inline-flex">
                <div className="inline-flex items-center justify-center transition-colors duration-300 absolute bottom-18 group-hover:opacity-100 opacity-0 inset-x-8 mx-auto">
                  <button className="rounded-full inline-flex justify-center items-center bg-blue-600 text-white text-sm py-3 w-58 gap-2 px-8 mx-auto  inset-x-0">
                    <BaggageClaim className="w-4 h-4" /> Add to cart
                  </button>
                  <div className="flex flex-col items-center justify-center transition-colors duration-300 group-hover:opacity-100 mt-26 absolute ml-6 mr-38">
                    <div className="text-gray-700 bg-white p-2 rounded-full absolute hover:border-blue-600 hover:text-blue-600 hover:border-1">
                      <Heart size={18} />
                    </div>
                    <div className="text-gray-700 bg-white p-2 rounded-full absolute hover:border-blue-600 hover:text-blue-600 hover:border-1 -mr-24">
                      <Eye size={18} />
                    </div>
                    <div className="text-gray-700 bg-white p-2 rounded-full absolute hover:border-blue-600 hover:text-blue-600 hover:border-1 -mr-50">
                      <ArrowLeftRight size={18} />
                    </div>
                  </div>
                </div>
                <img
                  src="/images/product-6-variant.webp"
                  alt=""
                  className="w-full h-full object-cover pt-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-white rounded-t-xl bg-gradient-to-t from-black/60 t0-transparent"
                />
              </div>
              <img
                src="/images/product-6.webp"
                alt="Snikers"
                className="object-cover"
              />
            </div>
            <p className="text-blue-950 font-semibold mt-4 ml-4 hover:text-blue-800">
              Sweater wear for men for sale
            </p>
            <div className="flex text-center items-center mt-4">
              <h1 className="font-bold text-blue-600  ml-4">$199.99</h1>
              <p className="line-through text-gray-400 ml-2">$249.99</p>
            </div>
            <div className="flex ml-4 mt-4 items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <div className="relative inline-block w-4 h-4">
                <Star className="absolute inset-0 w-4 h-4 text-yellow-400" />
                <div className="absolute inset-0 w-1/2 overflow-hidden">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                </div>
              </div>
              <Star className="w-4 h-4 text-yellow-400" />
              <p className="text-gray-400 ml-2">(15)</p>
            </div>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          className=" bg-white rounded-2xl pt-5 pb-5 shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-2"
        >
          <div className="transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <div className="rounded-t-xl -mt-4 relative group">
              <div className="absolute items-center justify-center inline-flex">
                <div className="inline-flex items-center justify-center transition-colors duration-300 absolute bottom-18 group-hover:opacity-100 opacity-0 inset-x-8 mx-auto">
                  <button className="rounded-full inline-flex justify-center items-center bg-blue-600 text-white text-sm py-3 w-58 gap-2 px-8 mx-auto  inset-x-0">
                    <BaggageClaim className="w-4 h-4" /> Add to cart
                  </button>
                  <div className="flex flex-col items-center justify-center transition-colors duration-300 group-hover:opacity-100 mt-26 absolute ml-6 mr-38">
                    <div className="text-gray-700 bg-white p-2 rounded-full absolute hover:border-blue-600 hover:text-blue-600 hover:border-1">
                      <Heart size={18} />
                    </div>
                    <div className="text-gray-700 bg-white p-2 rounded-full absolute hover:border-blue-600 hover:text-blue-600 hover:border-1 -mr-24">
                      <Eye size={18} />
                    </div>
                    <div className="text-gray-700 bg-white p-2 rounded-full absolute hover:border-blue-600 hover:text-blue-600 hover:border-1 -mr-50">
                      <ArrowLeftRight size={18} />
                    </div>
                  </div>
                </div>
                <img
                  src="/images/product-5-variant.webp"
                  alt=""
                  className="w-full h-full object-cover pt-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-white rounded-t-xl bg-gradient-to-t from-black/60 t0-transparent"
                />
              </div>
              <img
                src="/images/product-5.webp"
                alt="Snikers"
                className="object-cover"
              />
            </div>
            <p className="text-blue-950 font-semibold mt-4 ml-4 hover:text-blue-800">
              Sweater wear for men for sale
            </p>
            <div className="flex text-center items-center mt-4">
              <h1 className="font-bold text-blue-600  ml-4">$45.99</h1>
            </div>
            <div className="flex ml-4 mt-4 items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <Star className="w-4 h-4 text-yellow-400" />
              <p className="text-gray-400 ml-2">(21)</p>
            </div>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          className=" bg-white rounded-2xl pt-5 pb-5 shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-2"
        >
          <div className="transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <div className="rounded-t-xl -mt-4 relative group">
              <button className="bg-blue-800 rounded-full px-3 p-0.5 text-sm text-white text-center absolute top-3 left-2 sm:top-4 sm:left-4">
                New
              </button>

              <div className="absolute items-center justify-center inline-flex">
                <div className="inline-flex items-center justify-center transition-colors duration-300 absolute bottom-18 group-hover:opacity-100 opacity-0 inset-x-8 mx-auto">
                  <button className="rounded-full inline-flex justify-center items-center bg-blue-600 text-white text-sm py-3 w-58 gap-2 px-8 mx-auto  inset-x-0">
                    <BaggageClaim className="w-4 h-4" /> Add to cart
                  </button>
                  <div className="flex flex-col items-center justify-center transition-colors duration-300 group-hover:opacity-100 mt-26 absolute ml-6 mr-38">
                    <div className="text-gray-700 bg-white p-2 rounded-full absolute hover:border-blue-600 hover:text-blue-600 hover:border-1">
                      <Heart size={18} />
                    </div>
                    <div className="text-gray-700 bg-white p-2 rounded-full absolute hover:border-blue-600 hover:text-blue-600 hover:border-1 -mr-24">
                      <Eye size={18} />
                    </div>
                    <div className="text-gray-700 bg-white p-2 rounded-full absolute hover:border-blue-600 hover:text-blue-600 hover:border-1 -mr-50">
                      <ArrowLeftRight size={18} />
                    </div>
                  </div>
                </div>
                <img
                  src="/images/product-4-variant.webp"
                  alt=""
                  className="w-full h-full object-cover pt-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-white rounded-t-xl bg-gradient-to-t from-black/60 t0-transparent"
                />
              </div>
              <img
                src="/images/product-4.webp"
                alt="Snikers"
                className="object-cover"
              />
            </div>
            <p className="text-blue-950 font-semibold mt-4 ml-4 hover:text-blue-800">
              Sweater wear for men for sale
            </p>
            <div className="flex text-center items-center mt-4">
              <h1 className="font-bold text-blue-600  ml-4">$69.99</h1>
            </div>
            <div className="flex ml-4 mt-4 items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <div className="relative inline-block w-4 h-4">
                <Star className="absolute inset-0 w-4 h-4 text-yellow-400" />
                <div className="absolute inset-0 w-1/2 overflow-hidden">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                </div>
              </div>
              <Star className="w-4 h-4 text-yellow-400" />
              <p className="text-gray-400 ml-2">(11)</p>
            </div>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          className=" bg-white rounded-2xl pt-5 pb-5 shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-2"
        >
          <div className="transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <div className="rounded-t-xl -mt-4 relative group">
              <div className="absolute items-center justify-center inline-flex">
                <div className="inline-flex items-center justify-center transition-colors duration-300 absolute bottom-18 group-hover:opacity-100 opacity-0 inset-x-8 mx-auto">
                  <button className="rounded-full inline-flex justify-center items-center bg-blue-600 text-white text-sm py-3 w-58 gap-2 px-8 mx-auto  inset-x-0">
                    <BaggageClaim className="w-4 h-4" /> Add to cart
                  </button>

                  <div className="flex flex-col items-center justify-center transition-colors duration-300 group-hover:opacity-100 mt-26 absolute ml-6 mr-38">
                    <div className="text-gray-700 bg-white p-2 rounded-full absolute hover:border-blue-600 hover:text-blue-600 hover:border-1">
                      <Heart size={18} />
                    </div>
                    <div className="text-gray-700 bg-white p-2 rounded-full absolute hover:border-blue-600 hover:text-blue-600 hover:border-1 -mr-24">
                      <Eye size={18} />
                    </div>
                    <div className="text-gray-700 bg-white p-2 rounded-full absolute hover:border-blue-600 hover:text-blue-600 hover:border-1 -mr-50">
                      <ArrowLeftRight size={18} />
                    </div>
                  </div>
                </div>
                <img
                  src="/images/product-8-variant.webp"
                  alt=""
                  className="w-full h-full object-cover pt-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gray-100 rounded-t-xl bg-gradient-to-t from-black/60 t0-transparent"
                />
              </div>
              <img
                src="/images/product-8.webp"
                alt="Snikers"
                className="object-cover pt-4"
              />
            </div>
            <p className="text-blue-950 font-semibold mt-4 ml-4 hover:text-blue-800">
              Sweater wear for men for sale
            </p>
            <div className="flex text-center items-center mt-4">
              <h1 className="font-bold text-blue-600 ml-4">$189.99</h1>
            </div>
            <div className="flex ml-4 mt-4 items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <p className="text-gray-400 ml-2">(24)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4 items-center justify-center flex-col mt-20 bg-white" data-aos="zoom-in">
        <button className="bg-blue-600 py-2 px-8 rounded-full text-sm text-white font-medium ">
          {" "}
          <a href="#" className="flex gap-2 items-center justify-center">
            View All Products
            <ArrowRight />
          </a>
        </button>
      </div>
      </div>      
    </div>
  )
};

export default AvailableProducts;

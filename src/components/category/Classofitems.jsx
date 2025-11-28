import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { BsStarHalf, BsThreeDots } from "react-icons/bs";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Eye,
  Grid3X3,
  Heart,
  List,
  RefreshCcw,
  Search,
  Star,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

const Classofitems = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, delay: 50 });
  }, []);

  // Category dropdown states
  const [openClothing, setOpenClothing] = useState(false);
  const [openElectronics, setOpenElectronics] = useState(false);
  const [openHome, setOpenHome] = useState(false);
  const [openBeauty, setOpenBeauty] = useState(false);
  const [openSports, setOpenSports] = useState(false);
  const [openBooks, setOpenBooks] = useState(false);
  const [openToys, setOpenToys] = useState(false);

  // Brand filter
  const [search, setSearch] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const allBrands = [
    { name: "Nike", count: 24 },
    { name: "Adidas", count: 18 },
    { name: "Puma", count: 12 },
    { name: "Reebok", count: 9 },
    { name: "Under Armour", count: 7 },
    { name: "New Balance", count: 6 },
    { name: "Converse", count: 5 },
    { name: "Vans", count: 4 },
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

  // Price range
  const [range, setRange] = useState([60, 760]);
  const [selectedPrice, setSelectedPrice] = useState("All Prices");
  const priceOptions = [
    "All Prices",
    "Under $25",
    "$25 to $50",
    "$50 to $100",
    "$100 to 200",
    "$200 & Above",
  ];

  // Sorting and pages
  const [selectedFeatures, setSelectedFeatures] = useState("Featured");
  const featuresOptions = [
    "Featured",
    "Price: Low to High",
    "Price: High to Low",
    "Customer Rating",
    "Newest Arrivals",
  ];
  const [selectedPages, setSelectedPages] = useState("PerPage");
  const pagesOptions = [
    "12 per page",
    "24 per page",
    "48 per page",
    "96 per page",
  ];

  // Colors
  const colours = [
    { id: "brown", value: "bg-orange-700" },
    { id: "black", value: "bg-black" },
    { id: "pink", value: "bg-pink-400" },
    { id: "red", value: "bg-red-500" },
    { id: "blue", value: "bg-sky-400" },
    { id: "green", value: "bg-green-500" },
    { id: "yellow", value: "bg-yellow-400" },
    { id: "purple", value: "bg-purple-600" },
    { id: "teal", value: "bg-teal-500" },
    { id: "indigo", value: "bg-indigo-500" },
  ];
  const [selectedColors, setSelectedColors] = useState([]);
  const toggleColor = (id) => {
    if (selectedColors.includes(id)) {
      setSelectedColors(selectedColors.filter((c) => c !== id));
    } else {
      setSelectedColors([...selectedColors, id]);
    }
  };
  const clearAll = () => setSelectedColors([]);

  const products = [
  {
    id: 1,
    title: "Vestibulum ante ipsum primis",
    price: "$149.99",
    rating: 4.0,
    colors: ["#2563eb", "#10b981", "#facc15"],
    image: "/images/product-3.webp",
  },
  {
    id: 2,
    title: "Aliquam tincidunt mauris eu risus",
    price: "$139.99",
    rating: 4.5,
    colors: ["#dc2626", "#4b5563", "#f59e0b"],
    image: "/images/product-4.webp",
  },
  {
    id: 3,
    title: "Cras ornare tristique elit",
    price: "$89.50",
    rating: 3.0,
    colors: ["#6b7280", "#22c55e", "#3b82f6"],
    image: "/images/product-5.webp",
  },
  {
    id: 4,
    title: "Integer vitae libero ac risus",
    price: "$119.00",
    rating: 5.0,
    colors: ["#8b5cf6", "#ec4899", "#f87171"],
    image: "/images/product-6.webp",
  },
  {
    id: 5,
    title: "Donec eu libero sit amet quam",
    price: "$75.00",
    rating: 4.7,
    colors: ["#f59e0b", "#10b981", "#ef4444"],
    image: "/images/product-7.webp",
  },
  {
    id: 6,
    title: "Pellentesque habitant morbi tristique",
    price: "$64.95",
    rating: 3.6,
    colors: ["#3b82f6", "#6b7280", "#eab308"],
    image: "/images/product-8.webp",
  },
];

  return (
    <div className="bg-gray-50 overflow-hidden px-4">
      {/* Breadcrumb Section */}
            <div className="bg-gray-100 py-4 w-full">
              <div className="flex justify-between items-center px-4  max-w-7xl mx-auto lg:flex-row flex-col">
                <h1 className="font-bold lg:text-2xl text-lg text-blue-900 ">Category</h1>
                <div className="flex gap-2">
                  <Link to="/" className="font-medium text-blue-600 cursor-pointer">Home</Link>
                  <span className="font-medium text-gray-500">/ Category</span>
                </div>
              </div>
            </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-2 max-w-7xl mx-auto pt-6 w-full px-4">
        {/* Left Sidebar */}
        <div className="px-4 w-full">
          <div className="col-span-1 p-8  bg-white rounded-xl space-y-8 shadow-md h-350">
          {/* Categories */}
          <div className="space-y-4">
            <h2 className="font-semibold text-xl text-blue-950">Categories</h2>
            {[
              {
                label: "Clothing",
                open: openClothing,
                setOpen: setOpenClothing,
                items: [
                  "Men's Wear",
                  "Women's Wear",
                  "Kid's Clothing",
                  "Accessories",
                ],
              },
              {
                label: "Electronics",
                open: openElectronics,
                setOpen: setOpenElectronics,
                items: ["Smartphones", "Laptops", "Tablets", "Accessories"],
              },
              {
                label: "Home & Kitchen",
                open: openHome,
                setOpen: setOpenHome,
                items: [
                  "Furniture",
                  "Kitchen Appliances",
                  "Home Decor",
                  "Bedding",
                ],
              },
              {
                label: "Beauty & Personal Care",
                open: openBeauty,
                setOpen: setOpenBeauty,
                items: ["Skincare", "Makeup", "Hair Care", "Fragrances"],
              },
              {
                label: "Sports & Outdoors",
                open: openSports,
                setOpen: setOpenSports,
                items: [
                  "Fitness Equipment",
                  "Outdoor Gear",
                  "Sports Apparel",
                  "Team Sports",
                ],
              },
              {
                label: "Books",
                open: openBooks,
                setOpen: setOpenBooks,
                items: ["Fiction", "Non-Fiction", "Education", "Comics"],
              },
              {
                label: "Toys & Games",
                open: openToys,
                setOpen: setOpenToys,
                items: [
                  "Board Games",
                  "Puzzles",
                  "Action Figures",
                  "Educational Toys",
                ],
              },
            ].map((cat, idx) => (
              <div key={idx}>
                <button
                  onClick={() => cat.setOpen(!cat.open)}
                  className="flex justify-between w-full text-left font-medium text-gray-700 hover:text-blue-600 border-b-1 border-b-gray-300 pb-2"
                >
                  {cat.label}
                  {cat.open ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </button>
                {cat.open && (
                  <ul className="ml-4 mt-2 space-y-2 text-lg text-gray-600">
                    {cat.items.map((item, i) => (
                      <li key={i}>
                        <a href="#" className="hover:text-blue-600">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Price Slider */}
          <div>
            <h2 className="text-3xl text-blue-950 mb-2">Price Range</h2>
            <div className="flex justify-between mb-2">
              <span>${range[0]}</span>
              <span>${range[1]}</span>
            </div>
            <Slider
              range
              min={0}
              max={1000}
              value={range}
              onChange={(value) => setRange(value)}
              trackStyle={[
                {
                  backgroundColor: "#2563eb",
                  height: 10, // thicker track
                },
              ]}
              railStyle={{
                height: 10, // thicker background rail
              }}
              handleStyle={[
                {
                  borderColor: "#2563eb",
                  borderWidth: 3,
                  backgroundColor: "#2563eb",
                  cursor: "pointer",
                  width: 24, // make the handle larger
                  height: 24,
                  marginTop: -7, // align with new track height
                },
                {
                  borderColor: "#2563eb",
                  borderWidth: 3,
                  backgroundColor: "#2563eb",
                  cursor: "pointer",
                  width: 24,
                  height: 24,
                  marginTop: -7,
                },
              ]}
            />

            <div className="flex gap-2 mt-6">
              <div className="flex items-center">
                {" "}
                <span className="bg-blue-200 py-1 px-2 rounded-l-lg border border-blue-300">
                  $
                </span>
                {
                  <input
                    type="number"
                    value={range[0]}
                    onChange={(e) =>
                      setRange([Number(e.target.value), range[1]])
                    }
                    className="w-full border p-1 rounded-r-lg border-gray-400 focus:border-blue-500 focus:ring-blue-500 hover:border-blue-500 text-gray-600 font-medium appearance-none outline-none"
                  />
                }{" "}
              </div>

              <div className="flex items-center">
                {" "}
                <span className="bg-blue-200 py-1 px-2 rounded-l-lg border border-blue-300">
                  $
                </span>
                <input
                  type="number"
                  value={range[1]}
                  onChange={(e) => setRange([range[0], Number(e.target.value)])}
                  className="w-full border p-1 rounded-r-lg border-gray-400 focus:border-blue-500 focus:ring-blue-500 hover:border-blue-500 text-gray-600 font-medium appearance-none outline-none"
                />{" "}
              </div>
            </div>
            <div className="w-full mb-8 mt-4">
              <button className="bg-blue-500 text-white rounded px-22 py-3 text-center mt-4 w-full text-lg whitespace-nowrap">
                Apply Filter
              </button>
            </div>
          </div>

          {/* Colors */}
          <div className="space-y-4 w-full">
            <h2 className="text-3xl mb-4 text-blue-950">Filter by Brand</h2>
            <h3 className="text-xl font-medium  text-blue-950">
              Filter by Color
            </h3>
            <div className="flex flex-wrap gap-3 w-full">
              {colours.map((c) => (
                <button
                  key={c.id}
                  onClick={() => toggleColor(c.id)}
                  className={`w-8 h-8 rounded-full ${
                    c.value
                  } flex items-center justify-center ${
                    selectedColors.includes(c.id) ? "ring-2 ring-blue-600" : ""
                  }`}
                >
                  {selectedColors.includes(c.id) && (
                    <span className="w-3 h-3 bg-white rounded-full"></span>
                  )}
                </button>
              ))}
            </div>
            <div className="flex  justify-between">
              <button className="border border-gray-400 px-3 py-1 rounded" onClick={clearAll}>
                Clear All
              </button>
              <button className="bg-blue-500 text-white px-3 py-1 rounded">
                Apply Filter
              </button>
            </div>
          </div>

          {/* Brand Filter */}
          <div className="space-y-2 ">
            <h3 className="text-xl font-medium  text-blue-950">
              Filter by Brand
            </h3>

            <div className="flex justify-between items-center relative w-full border rounded px-4 py-3 text-sm border-gray-300">
              <input
                type="text"
                placeholder="Search brands ..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="outline-none "
              />
              <span>
                <Search
                  size={20}
                  className="text-gray-500 absolute right-3 flex items-center inset-y-4 justify-center"
                />
              </span>
            </div>

            <div className="max-h-64 overflow-auto space-y-3">
              {filteredBrands.map((brand) => (
                <label
                  key={brand.name}
                  className="flex items-center gap-2 text-sm"
                >
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand.name)}
                    onChange={() => toggleBrand(brand.name)}
                    className="accent-blue-600"
                  />
                  <span>{brand.name}</span>
                  <span className="ml-auto text-gray-500">({brand.count})</span>
                </label>
              ))}
            </div>

            <div className="flex justify-between border-t-1 border-t-gray-300 pt-4">
              <button className="border-blue-600 border text-blue-600 px-4 py-1.5 rounded text-sm hover:bg-blue-700 hover:text-white">
                Apply Filter
              </button>
              <button
                onclick={clearAll}
                className="text-sm text-gray-500 hover:underline"
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
        </div>

        {/* Main Content */}
        <div className="col-span-2 space-y-6 px-4 lg:px-2  pt-6 lg:pt-0 pb-6">
          {/* Filters & Sorting */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            
            <div className="flex flex-col lg:flex-row lg:gap-4 gap-3 items-center">
             <div className="w-full">
              <label className='font-medium text-blue-900 mb-2 text-sm'>Search Products</label>
              <div className="w-full relative">
               <input
                type="text"
                placeholder="Search for products"
                className="w-full p-2 border  border-gray-400 rounded-md outline-none"
              />
              <span className=' absolute right-0 top-0 bottom-0 items-center flex py-3 px-3 bg-blue-600 text-white rounded-r-lg'>
                <Search size={20}/></span>
             </div>
             </div>

             <div className="flex flex-col lg:flex-row gap-4 w-full items-center">
               <div className="w-full">
                <label htmlFor="price" className='block text-sm font-medium text-blue-900 mb-2'>Price Range</label>
                <select
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md outline-none"
              >
                {priceOptions.map((p, i) => (
                  <option key={i}>{p}</option>
                ))}
              </select>
               </div>

              <div className="w-full">
                <label htmlFor="featured" className='block text-sm font-medium text-blue-900 mb-2'>Sort By</label>
                <select
                value={selectedFeatures}
                onChange={(e) => setSelectedFeatures(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md outline-none"
              >
                {featuresOptions.map((f, i) => (
                  <option key={i}>{f}</option>
                ))}
              </select>
              </div>
             </div>

             <div className='flex flex-row gap-4 items-center w-full lg:w-[40%]'>
              <div>
                <label htmlFor="price" className='block text-sm font-medium text-blue-900 mb-2'>View</label>
              <div className='p-2 rounded-md bg-blue-600 flex items-center justify-center'><Grid3X3 size={28} stroke='blue' fill='white' strokeWidth={0.7}/></div>
              </div>

              <div className='p-2 rounded-md border-gray-300 border hover:border-blue-600 flex items-center justify-center mt-6'><List size={28} stroke='gray' fill='white' strokeWidth={2} className='hover:stroke-blue-600'/></div>
             </div>
             
              <div className="lg:w-[50%] mt-6 w-full">
                <select
                value={selectedPages}
                onChange={(e) => setSelectedPages(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md outline-none"
              >
                {pagesOptions.map((p, i) => (
                  <option key={i}>{p}</option>
                ))}
              </select>
              </div>
            </div>

            <div className='border-t-gray-300 mt-15 pt-4 border-t-1 mb-8'>

              <div className='flex gap-2 items-center justify-between flex-wrap'> 
                <div className='flex gap-2 items-center flex-wrap lg:flex-row'> 
                  <h3 className='font-medium text-gray-700'>Active Filter:</h3> 
                  <div className='flex gap-2 flex-wrap'> 
                    <button className='text-sm font-medium py-1 px-4 text-blue-600 bg-blue-100 rounded-full flex items-center gap-2'>
                      Electronics<span className='rounded-full hover:bg-blue-300 p-1'><X size={15} strokeWidth={0.7}/></span>
                      </button>
                       <button className='text-sm font-medium py-1 rounded-full px-4 text-blue-600 bg-blue-100 flex items-center gap-2'>$50 to $100<span className='rounded-full hover:bg-blue-300 p-1'><X size={15} strokeWidth={0.7}/></span> </button> </div> </div>
                        <button className='text-blue-600 font-bold border border-blue-200 rounded-full bg-blue-50 py-2 px-4 float-end text-sm hover:border-blue-600 transition-colors ease-in-out delay-300'><a href="#">Clear All</a></button>
                        </div>

            </div>
          </div>

        {/* Products Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-7xl mx-auto mt-10">

  {/* PRODUCT 1 */}
  <div className="bg-white rounded-2xl shadow-lg hover:-translate-y-1 transition-all relative group overflow-hidden">
    <div className="relative">
      <button className="bg-blue-600 rounded-full px-2 py-0.5 text-xs  text-white absolute top-6 left-3">
                          New Season
                        </button>
      <div className='absolute z-50 top-3 right-3 flex gap-2 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300'>
        <button className='p-2 bg-white hover:bg-blue-600 rounded-full shadow hover:text-white'><Heart size={20}/></button>
        <button className='p-2 bg-white hover:bg-blue-600 rounded-full shadow hover:text-white'><RefreshCcw size={20}/></button>
        <button className='p-2 bg-white hover:bg-blue-600 rounded-full shadow hover:text-white'><Eye size={20}/></button>
      </div>

      <img src="/images/product-3.webp" className="w-full rounded-t-2xl group-hover:scale-105 transition" />

      <div className="absolute z-50 bottom-4 left-1/2 -translate-x-1/2 w-full flex justify-center opacity-0 lg:group-hover:opacity-100 transition">
        <button className="py-3 px-8 bg-blue-600 text-white text-lg rounded-2xl w-[90%]">Add to Cart</button>
      </div>
    </div>

    <div className="p-4">
      <h3 className="font-semibold text-gray-800 text-lg">Vestibulum ante ipsum primis</h3>
      <p className="font-bold text-blue-950 mt-8">$149.99</p>

      {/* STAR RATING (4.0 FIXED TO ALWAYS 5 STARS) */}
     <div className="flex mt-6 gap-2">
       <div className="flex gap-1">
        <Star size={16} className="text-yellow-400 fill-yellow-400" />
        <Star size={16} className="text-yellow-400 fill-yellow-400" />
        <Star  size={16} className="text-yellow-400 fill-yellow-400" />
        <Star  size={16} className="text-yellow-400 fill-yellow-400" />
        <Star size={16} className="text-yellow-400" />
      </div>
     
     <span className="text-sm text-blue-950 font-medium">4.0</span>
     </div>
      {/* COLOR CIRCLES */}
      <div className="flex gap-2 mt-3">
        <span className="w-6 h-6 rounded-full bg-[#2563eb] transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md active:scale-125 active:shadow-lg"></span>

          <span className="w-6 h-6 rounded-full bg-[#10b981] transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md active:scale-125 active:shadow-lg"></span>
         <div className="w-6 h-6 rounded-full border-2 border-blue-600 flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md active:scale-125 active:shadow-lg">
          <span className="w-4 h-4 rounded-full bg-orange-400 block transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md active:scale-125 active:shadow-lg"></span>
          </div>
       
      </div>
    </div>
  </div>

  {/* PRODUCT 2 */}
  <div className="bg-white rounded-2xl shadow-lg hover:-translate-y-1 transition-all relative group overflow-hidden">
    <div className="relative">
      <button className="bg-red-600 rounded-full px-2 py-0.5 text-sm  text-white absolute top-6 left-3">
                          -30%
                        </button>
      <div className='absolute z-50 top-3 right-3 flex gap-2 lg:opacity-0 lg:group-hover:opacity-100 transition'>
        <button className='p-2 bg-white hover:bg-blue-600 rounded-full shadow hover:text-white'><Heart size={20}/></button>
        <button className='p-2 bg-white hover:bg-blue-600 rounded-full shadow hover:text-white'><RefreshCcw size={20}/></button>
        <button className='p-2 bg-white hover:bg-blue-600 rounded-full shadow hover:text-white'><Eye size={20}/></button>
      </div>

      <img src="/images/product-4.webp" className="w-full rounded-t-2xl group-hover:scale-105 transition" />

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 lg:group-hover:opacity-100 transition w-full flex justify-center">
        <button className="py-3 px-8 bg-blue-600 text-white text-lg rounded-xl w-[90%]">Add to Cart</button>
      </div>
    </div>

    <div className="p-4">
      <h3 className="font-semibold text-gray-800 text-lg">Aliquam tincidunt mauris eu risus</h3>
      <p className=" mt-8 flex flex-row gap-2"><span className="line-through text-gray-400">$199.99</span><span className="font-medium text-[#dc2626]">$139.99</span></p>

      {/* STAR RATING (4.5) */}
      <div className="flex mt-6 gap-2">
        <div className="flex gap-1">
        <Star size={16} className="text-yellow-400 fill-yellow-400" />
        <Star size={16} className="text-yellow-400 fill-yellow-400" />
        <Star size={16} className="text-yellow-400 fill-yellow-400" />
        <Star size={16} className="text-yellow-400 fill-yellow-400" />
        <BsStarHalf size={16} className="text-yellow-400" />
      </div>

      <span className="text-sm text-blue-950 font-medium">4.5</span>
      </div>

      {/* COLORS */}
      <div className="flex gap-2 mt-3">
        <span className="w-6 h-6 rounded-full border border-gray-200 bg-blue-300 transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md active:scale-125 active:shadow-lg"></span>
        
         <div className="w-6 h-6 rounded-full border-2 border-blue-600 flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md active:scale-125 active:shadow-lg">
          <span className="w-4 h-4 rounded-full bg-[#4b5563] block transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md active:scale-125 active:shadow-lg"></span>
          </div>

        <span className="w-6 h-6 rounded-full border border-gray-200 bg-purple-500 transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md active:scale-125 active:shadow-lg"></span>
      </div>
    </div>
  </div>

  {/* PRODUCT 3 */}
  <div className="bg-white rounded-2xl shadow-lg hover:-translate-y-1 transition-all relative group overflow-hidden">
    <div className="relative">
      <div className='absolute z-50 top-3 right-3 flex gap-2 lg:opacity-0 lg:group-hover:opacity-100 transition'>
        <button className='p-2 bg-white hover:bg-blue-600 rounded-full shadow hover:text-white'><Heart size={20}/></button>
        <button className='p-2 bg-white hover:bg-blue-600 rounded-full shadow hover:text-white'><RefreshCcw size={20}/></button>
        <button className='p-2 bg-white hover:bg-blue-600 rounded-full shadow hover:text-white'><Eye size={20}/></button>
      </div>

      <img src="/images/product-5.webp" className="w-full rounded-t-2xl group-hover:scale-105 transition" />

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 lg:group-hover:opacity-100 transition w-full flex justify-center">
        <button className="py-3 px-8 bg-blue-600 text-white text-lg rounded-2xl w-[90%]">Add to Cart</button>
      </div>
    </div>

    <div className="p-4">
      <h3 className="font-semibold text-gray-800 text-lg">Cras ornare tristique elit</h3>
      <p className="font-bold text-blue-950 mt-8">$89.50</p>

      {/* STAR RATING 3.0 */}
      
      <div className="flex mt-6 gap-2">
        <div className="flex gap-1">
        <Star size={16} className="text-yellow-400 fill-yellow-400" />
        <Star size={16} className="text-yellow-400 fill-yellow-400" />
        <Star size={16} className="text-yellow-400 fill-yellow-400" />
        <Star size={16} className="text-yellow-400" />
        <Star size={16} className="text-yellow-400" />
      </div>

      <span className="text-sm text-blue-950 font-medium">3.0</span>
      </div>

      {/* COLORS */}
      <div className="flex gap-2 mt-3">
        <div className="w-6 h-6 rounded-full border-2 border-blue-600 flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md active:scale-125 active:shadow-lg">
          <span className="w-4 h-4 rounded-full bg-[#6b7280] block transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md active:scale-125 active:shadow-lg"></span>
          </div>
        <span className="w-6 h-6 rounded-full border border-gray-200 bg-[#22c55e] transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md active:scale-125 active:shadow-lg"></span>
        <span className="w-6 h-6 rounded-full border border-gray-200 bg-[#3b82f6] transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md active:scale-125 active:shadow-lg"></span>
      </div>
    </div>
  </div>

  {/* PRODUCT 4 */}
  <div className="bg-white rounded-2xl shadow-lg hover:-translate-y-1 transition-all relative group overflow-hidden">
    <div className="relative">
      <div className='absolute z-50 top-3 right-3 flex gap-2 lg:opacity-0 lg:group-hover:opacity-100 transition'>
        <button className='p-2 bg-white hover:bg-blue-600 rounded-full shadow hover:text-white'><Heart size={20}/></button>
        <button className='p-2 bg-white hover:bg-blue-600 rounded-full shadow hover:text-white'><RefreshCcw size={20}/></button>
        <button className='p-2 bg-white hover:bg-blue-600 rounded-full shadow hover:text-white'><Eye size={20}/></button>
      </div>

      <img src="/images/product-6.webp" className="w-full rounded-t-2xl group-hover:scale-105 transition" />

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 lg:group-hover:opacity-100 transition w-full flex justify-center">
        <button className="py-3 px-8 bg-blue-600 text-white text-lg rounded-2xl w-[90%]">Add to Cart</button>
      </div>
    </div>

    <div className="p-4">
      <h3 className="font-semibold text-gray-800 text-lg">Integer vitae libero ac risus</h3>
      <p className="font-bold text-blue-950 mt-8">$119.00</p>

      {/* STAR RATING 5.0 */}
      <div className="flex mt-6 gap-2">
        <div className="flex gap-1">
        <Star size={16} className="text-yellow-400 fill-yellow-400" />
        <Star size={16} className="text-yellow-400 fill-yellow-400" />
        <Star size={16} className="text-yellow-400 fill-yellow-400" />
        <Star size={16} className="text-yellow-400 fill-yellow-400" />
       <Star size={16} className="text-yellow-400 fill-yellow-400" />
      </div>

      <span className="text-sm text-blue-950 font-medium">5.0</span>
      </div>

      {/* COLORS */}
      <div className="flex gap-2 mt-3">
         <span className="w-6 h-6 rounded-full border border-gray-200 bg-[#ec4899] transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md active:scale-125 active:shadow-lg"></span>
        <div className="w-6 h-6 rounded-full border-2 border-blue-600 flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md active:scale-125 active:shadow-lg">
          <span className="w-4.5 h-4.5 rounded-full bg-[#8b5cf6] block transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md active:scale-125 active:shadow-lg"></span>
          </div>
       
        <span className="w-6 h-6 rounded-full border border-gray-200 bg-[#f87171] transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md active:scale-125 active:shadow-lg"></span>
      </div>
    </div>
  </div>

  {/* PRODUCT 5 */}
  <div className="bg-white rounded-2xl shadow-lg hover:-translate-y-1 transition-all relative group overflow-hidden">
    <div className="relative">
      <button className="bg-gray-500 rounded-full px-2 py-1 text-xs  text-white absolute top-6 left-3">
        Sold Out
      </button>
      <div className='absolute z-50 top-3 right-3 flex gap-2 lg:opacity-0 lg:group-hover:opacity-100 transition'>
        <button className='p-2 bg-white hover:bg-blue-600 rounded-full shadow hover:text-white'><Heart size={20}/></button>
        <button className='p-2 bg-white hover:bg-blue-600 rounded-full shadow hover:text-white'><RefreshCcw size={20}/></button>
        <button className='p-2 bg-white hover:bg-blue-600 rounded-full shadow hover:text-white'><Eye size={20}/></button>
      </div>

      <img src="/images/product-7.webp" className="w-full rounded-t-2xl group-hover:scale-105 transition" />

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 lg:group-hover:opacity-100 transition w-full flex justify-center">
        <button className="py-3 px-8 bg-blue-600 text-white text-sm rounded-2xl w-[90%] cursor-not-allowed opacity-40">Sold Out</button>
      </div>
    </div>

    <div className="p-4">
      <h3 className="font-semibold text-gray-800 text-lg">Donec eu libero sit amet quam</h3>
      <p className="font-bold text-blue-950 mt-8">$75.00</p>

      {/* STAR RATING 4.7 (Full stars + Half star) */}
       <div className="flex mt-6 gap-2">
        <div className="flex gap-1">
        <Star size={16} className="text-yellow-400 fill-yellow-400" />
        <Star size={16} className="text-yellow-400 fill-yellow-400" />
        <Star size={16} className="text-yellow-400 fill-yellow-400" />
        <Star size={16} className="text-yellow-400 fill-yellow-400" />
        <BsStarHalf size={16} className="text-yellow-400" />
      </div>
      <span className="text-sm text-blue-950 font-medium">4.7</span>
      </div>

      {/* COLORS */}
      <div className="flex gap-2 mt-3">
        <div className="w-6 h-6 rounded-full border-2 border-blue-600 flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md active:scale-125 active:shadow-lg">
          <span className="w-4 h-4 rounded-full bg-[#f59e0b] block transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md active:scale-125 active:shadow-lg"></span>
          </div>
        <span className="w-6 h-6 rounded-full border border-gray-200 bg-[#10b981] transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md active:scale-125 active:shadow-lg"></span>
        <span className="w-6 h-6 rounded-full border border-gray-200 bg-[#ef4444] transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md active:scale-125 active:shadow-lg"></span>
      </div>
    </div>
  </div>

  {/* PRODUCT 6 */}
  <div className="bg-white rounded-2xl shadow-lg hover:-translate-y-1 transition-all relative group overflow-hidden">
    <div className="relative">
      <button className="bg-[#dd6b20] rounded-full px-2 py-1 text-xs  text-white absolute top-6 left-3">
        Hot
      </button>
      <div className='absolute z-50 top-3 right-3 flex gap-2 lg:opacity-0 lg:group-hover:opacity-100 transition'>
        <button className='p-2 bg-white hover:bg-blue-600 rounded-full shadow hover:text-white'><Heart size={20}/></button>
        <button className='p-2 bg-white hover:bg-blue-600 rounded-full shadow hover:text-white'><RefreshCcw size={20}/></button>
        <button className='p-2 bg-white hover:bg-blue-600 rounded-full shadow hover:text-white'><Eye size={20}/></button>
      </div>

      <img src="/images/product-8.webp" className="w-full rounded-t-2xl group-hover:scale-105 transition" />

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 lg:group-hover:opacity-100 transition w-full flex justify-center">
        <button className="py-3 px-8 bg-blue-600 text-white text-lg rounded-2xl w-[90%]">Add to Cart</button>
      </div>
    </div>

    <div className="p-4">
      <h3 className="font-semibold text-gray-800 text-lg">Pellentesque habitant morbi tristique</h3>
      <p className="font-bold text-blue-950 mt-8">$64.95</p>

      {/*  STAR RATING 3.6 */}
       <div className="flex mt-6 gap-2">
        <div className="flex gap-1">
        <Star size={16} className="text-yellow-400 fill-yellow-400" />
        <Star size={16} className="text-yellow-400 fill-yellow-400" />
        <Star size={16} className="text-yellow-400 fill-yellow-400" />        
        <BsStarHalf size={16} className="text-yellow-400" />
        <Star size={16} className="text-yellow-400" />
      </div>

      <span className="text-sm text-blue-950 font-medium">3.6</span>
      </div>

      {/* COLORS */}
       <div className="flex gap-2 mt-3">
        <span className="w-6 h-6 rounded-full border border-gray-200 bg-yellow-600 transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md active:scale-125 active:shadow-lg"></span>
       
        <span className="w-6 h-6 rounded-full border border-gray-200 bg-[#22c55e] transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md active:scale-125 active:shadow-lg"></span>
        

         <div className="w-6 h-6 rounded-full border-2 border-blue-600 flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md active:scale-125 active:shadow-lg">
          <span className="w-4 h-4 rounded-full bg-yellow-300 block transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md active:scale-125 active:shadow-lg"></span>
          </div>
      </div>
    </div>
  </div>

</div>

        </div>
      </div>
    </div>
  );
};

export default Classofitems;

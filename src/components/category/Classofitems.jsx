import { ArrowLeft, ArrowRight, ChevronDown, ChevronUp, Eye, Grid3X3, Grip, Heart, List, RefreshCcw, Search, Star, X } from 'lucide-react';
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import React from 'react';
import { useState } from "react";
import Slider from 'rc-slider';
import "rc-slider/assets/index.css";
import { BsStarHalf } from 'react-icons/bs';


let Classofitems = ()=>{
    useEffect(() => {
    Aos.init({
    duration: 1000,
    delay: 50,
    });
    }, []);

    const [openClothing, setOpenClothing] = 
    useState(false);
    const [openElectronics, setOpenElectronics] =
    useState(false);

    const [openHome, setOpenHome] =
    useState(false);

    const [openBeauty, setOpenBeauty] =
    useState(false);

    const [openSports, setOpenSports] =
    useState(false);

    const [openBooks, setOpenBooks] =
    useState(false);

    const [openToys, setOpenToys] =
    useState(false);


          
               const [selected, setSelected] = useState(null);
                     const allBrands = [
                       {name: "Nike", count:24 },
                       {name: "Adidas", count:18 },
                       {name: "Puma", count:12 },
                       {name: "Reebok", count:9 },
                       {name: "Under Armour", count:7 },
                       {name: "New Balance", count:6 },
                       {name: "Converse", count:5 },
                       {name: "Vans", count:4 },
                     ];
               
                     const [search, setSearch] =
                     useState ("");
                     const [selectedBrands, setSelectedBrands]= useState([]);
                     const filteredBrands =
                     allBrands.filter((brand) =>
                     
                     brand.name.toLowerCase().includes(search.toLowerCase()));
               
                     const toggleBrand = (brand) => {
                       if (selectedBrands.includes(brand))
                       {
                         setSelectedBrands(selectedBrands.filter(
                           (b) => b !== brand
                         ));
                       } else {
                         setSelectedBrands([...selectedBrands, brand]);
                       }
                     }; 
                

              
                const [selectedPrice, setSelectedPrice] = useState("All Prices");
                const priceOptions = [
                  "All Prices",
                  "Under $25",
                  "$25 to $50",
                  "$50 to $100",
                  "$100 to 200",
                  "$200 & Above",
                ];
          
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

              const [range, setRange] = useState([60, 760]);
              const colours = [
                {id: "brown", value: "bg-orange-700"},
                {id: "black", value: "bg-black"},
                {id: "pink", value: "bg-pink-400"},
                {id: "red", value: "bg-red-500"},
                {id: "blue", value: "bg-sky-400"},
                {id: "green", value: "bg-green-500"},
                {id: "yellow", bg: "bg-yellow-400", border: "bg-yellow-400"},
                {id: "purple", bg: "bg-purple-600", border: "bg-purple-600"},
                {id: "teal", bg: "bg-teal-500", border: "bg-teal-500"},
                {id: "indigo", bg: "bg-indigo-500", border: "bg-indigo-500"},
              ];

              const [selectedColors, setSelectedColors] = useState([]);
              const toggleColor = (id) => {
                if
                (selectedColors.includes(id))
                {setSelectedColors(selectedColors.filter((c) => 
                  c !== id));
              } else{
                setSelectedColors([...selectedColors, id]);
              }
            };

              const clearAll = () =>
                setSelectedColors([]);

    return(
    <div className='bg-white overflow-hidden'>
    <div className='grid lg:grid-cols-3 grid-cols-1 gap-8 lg:px-20'>
    {/*left side*/}
    <div className='p-16 col-span-1 space-y-6 px-4 bg-gray-50 h-350'>
    <div className='shadow-md bg-white rounded-xl p-10 shadow-gray-200'>
    <h2 className='font-semibold text-lg mb-3 text-blue-950'>Categories</h2>

    <ul className='space-y-2 text-gray-600 border-b-1 border-b-gray-300 pb-4 pt-4'>
    <li><button onClick={() => setOpenClothing(!openClothing)} className='flex items-center justify-between w-full text-left hover:text-blue-600'> <span className='font-medium'>Clothing</span>
    {openClothing ? <ChevronUp size={18}/> : <ChevronDown size={18}/>}</button>{openClothing &&(
    <ul className='ml-4 space-y-1 text-sm'>
    <li><a href="#" className='hover:text-blue-600'>Men's Wear</a></li>
    <li><a href="#" className='hover:text-blue-600'>Women's Wear</a></li>
    <li><a href="#" className='hover:text-blue-600'>Kid's Clothing</a></li>
    <li><a href="#" className='hover:text-blue-600'>Accessories</a></li>
    </ul>
    )}</li>             
    </ul>

    <ul className='space-y-2 text-gray-600 border-b-1 border-b-gray-300 pb-4 pt-2'>

    <li><button onClick={() => setOpenElectronics(!openElectronics)} className='flex items-center justify-between w-full text-left hover:text-blue-600'> <span className='font-medium'>Electronics</span>
    {openElectronics ? <ChevronUp size={18}/> : <ChevronDown size={18}/>}</button>{openElectronics &&(
    <ul className='ml-4 space-y-1 text-sm'>
    <li><a href="#" className='hover:text-blue-600'>Smartphones</a></li>
    <li><a href="#" className='hover:text-blue-600'>Laptops</a></li>
    <li><a href="#" className='hover:text-blue-600'>Tablets</a></li>
    <li><a href="#" className='hover:text-blue-600'>Accessories</a></li>
    </ul>
    )}</li>             
    </ul>

    <ul className='space-y-2 text-gray-600 border-b-1 border-b-gray-300 pb-4 pt-2'>
    <li><button onClick={() => setOpenHome(!openHome)} className='flex items-center justify-between w-full text-left hover:text-blue-600'> <span className='font-medium'>Home & Kitchen</span>
    {openHome ? <ChevronUp size={18}/> : <ChevronDown size={18}/>}</button>{openHome &&(
    <ul className='ml-4 space-y-1 text-sm'>
    <li><a href="#" className='hover:text-blue-600'>Furniture</a></li>
    <li><a href="#" className='hover:text-blue-600'>Kitchen Appliances</a></li>
    <li><a href="#" className='hover:text-blue-600'>Home Decor</a></li>
    <li><a href="#" className='hover:text-blue-600'>Bedding</a></li>
    </ul>
    )}</li>             
    </ul>

    <ul className='space-y-2 text-gray-600 border-b-1 border-b-gray-300 pb-4 pt-2'>
    <li><button onClick={() => setOpenBeauty(!openBeauty)} className='flex items-center justify-between w-full text-left hover:text-blue-600'> <span className='font-medium'>Beauty & Personal Care</span>
    {openBeauty ? <ChevronUp size={18}/> : <ChevronDown size={18}/>}</button>{openBeauty &&(
    <ul className='ml-4 space-y-1 text-sm'>
    <li><a href="#" className='hover:text-blue-600'>Skincare</a></li>
    <li><a href="#" className='hover:text-blue-600'>Makeup</a></li>
    <li><a href="#" className='hover:text-blue-600'>Hair Care</a></li>
    <li><a href="#" className='hover:text-blue-600'>Fragrances</a></li>
    </ul>
    )}</li>             
    </ul>

    <ul className='space-y-2 text-gray-600 border-b-1 border-b-gray-300 pb-4 pt-2'>
    <li><button onClick={() => setOpenSports(!openSports)} className='flex items-center justify-between w-full text-left hover:text-blue-600'> <span className='font-medium'>Sports & Outdoors</span>
    {openSports ? <ChevronUp size={18}/> : <ChevronDown size={18}/>}</button>{openSports &&(
    <ul className='ml-4 space-y-1 text-sm'>
    <li><a href="#" className='hover:text-blue-600'>Fitness Equipment</a></li>
    <li><a href="#" className='hover:text-blue-600'>Outdoor Gear</a></li>
    <li><a href="#" className='hover:text-blue-600'>Sports Apparel</a></li>
    <li><a href="#" className='hover:text-blue-600'>Team Sports</a></li>
    </ul>
    )}</li>             
    </ul>

    <ul className='space-y-2 text-gray-600 border-b-1 border-b-gray-300 pb-4 pt-2'>
    <li><button onClick={() => setOpenBooks(!openBooks)} className='flex items-center justify-between w-full text-left hover:text-blue-600'> <span className='font-medium'>Books</span>
    {openBooks ? <ChevronUp size={18}/> : <ChevronDown size={18}/>}</button>{openBooks &&(
    <ul className='ml-4 space-y-1 text-sm'>
    <li><a href="#" className='hover:text-blue-600'>Fiction</a></li>
    <li><a href="#" className='hover:text-blue-600'>Non-Fiction</a></li>
    <li><a href="#" className='hover:text-blue-600'>Education</a></li>
    <li><a href="#" className='hover:text-blue-600'>Comics</a></li>
    </ul>
    )}</li>             
    </ul>

    <ul className='space-y-2 text-gray-600 pb-4 pt-2'>
    <li><button onClick={() => setOpenToys(!openToys)} className='flex items-center justify-between w-full text-left hover:text-blue-600'> <span className='font-medium'>Toys & Games</span>
    {openToys ? <ChevronUp size={18}/> : <ChevronDown size={18}/>}</button>{openToys &&(
    <ul className='ml-4 space-y-1 text-sm'>
    <li><a href="#" className='hover:text-blue-600'>Board Games</a></li>
    <li><a href="#" className='hover:text-blue-600'>Puzzles</a></li>
    <li><a href="#" className='hover:text-blue-600'>Action Figures</a></li>
    <li><a href="#" className='hover:text-blue-600'>Educational Toys</a></li>
    </ul>
    )}</li>             
    </ul>

    <div className='w-full'>
      <h2 className='text-lg font-bold mb-4 text-blue-950'>Price Range</h2>
      <div className='flex justify-between mb-2'>
        <span>${range[0]}</span>
        <span>${range[1]}</span>
      </div>
      <Slider
      range
      min={0}
      max={1000}
      value={range}
      onChange={(value) => setRange(value)}
      trackStyle={[{backgroundColor: "#2563eb"}]}
      handleStyle={[
        {borderColor: "#2563eb",
          border: "8px",
          backgroundColor: "#2563eb",
          cursor: "pointer",
        },
        {borderColor: "#2563eb",
          border: "8px",
          backgroundColor: "#2563eb",
          cursor: "pointer",
        }
      ]}/>

      <div className='flex mt-4 gap-3 w-full justify-between'>
        <div className='flex items-center'>
          <span className='bg-blue-200 py-1 px-2 rounded-l-lg border border-blue-300'>$</span>{
          <input type="number"
        value={range[0]}
        onChange={(e) =>
          setRange([Number(e.target.value),
            range[1]
          ])} 
          className='w-30 border p-1 rounded-r-lg border-gray-400 focus:border-blue-500
              focus:ring-blue-500 hover:border-blue-500 text-gray-600 font-medium  appearance-none outline-none'/>}
          </div>
        
        <div className='flex items-center'>
          <span className='bg-blue-200 py-1 px-2 rounded-l-lg border border-blue-300'>$</span>
          <input type="number" 
          value={range[1]}
          onChange={(e) =>
            setRange([range[0],
            Number(e.target.value)])
          }
          className='w-23 border p-1 rounded-r-lg border-gray-400 focus:border-blue-500
              focus:ring-blue-500 hover:border-blue-500 text-gray-600 font-medium  appearance-none outline-none'/>
        </div>          
      </div>
      <div className='w-full mb-8 mt-4'><button className='bg-blue-500 text-white rounded-lg px-22 py-2 text-center mt-4'>Apply Filter</button></div>
      
    </div>

    <div className='space-y-4'>
      <h2 className='text-3xl mb-4 text-blue-900'>Filter by Brand</h2>
      <h3 className='text-lg font-bold mb-4 text-blue-900'>Filter by Color</h3>
      <div className='flex flex-wrap gap-4'>
        {colours.map((c) =>
        (
          <button
          key={c.id}
          onClick={() =>
            toggleColor(c.id)}
            className={`relative w-8 h-8 rounded-full ${c.value} ${c.border} ${c.bg} flex items-center justify-center transition hover:border hover:scale-110 hover:shadow-lg`}>
              {selectedColors.includes(c.id)
              && (
                <span className='w-3 h-3 bg-white rounded-full'></span>
              )}
            </button>
        ))}
      </div>
      <div className='flex gap-4 justify-between mt-6'>
        <button 
        onClick={clearAll} className='px-3 py-1 border border-gray-400 rounded'>Clear All</button>
        <button className='px-3 py-1 bg-blue-500 text-white rounded'>Apply Filter</button>
      </div>
    </div>

    <div className='w-full py-10 space-y-5'>
              <h3 className='font-semibold text-lg mb-3 text-blue-950'>Filter by Brand</h3>
              <div className='flex justify-between items-center relative w-full border rounded px-4 py-3 text-sm border-gray-300'><input
              type='text'
              placeholder="Search brands ..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              } className='outline-none'/> <span><Search size={20} className='text-gray-500 absolute right-3 flex items-center inset-y-4 justify-center'/></span>
               </div> 
              
    
              {/* brand lists*/}
              <div className='space-y-3 max-h-68'>{filteredBrands.map((brand) => (
                <label key={brand.name} className='flex items-center gap-2 text-sm'>
                  <input
                  type='checkbox'
                  checked={selectedBrands.includes(brand.name)}
                  onChange={() => toggleBrand(brand.name)}
                  className='accent-blue-600'/>
                  <span>{brand.name}</span>
                  <span className='ml-auto text-gray-500'>({brand.count})</span>
                </label>
              ))}</div>
    
              <div className='flex justify-between border-t-1 border-t-gray-300 pt-4'>
                <button className='border-blue-600 border text-blue-600 px-4 py-1.5 rounded text-sm hover:bg-blue-700 hover:text-white'>Apply Filter</button>
                <button onclick={clearAll} className='text-sm text-gray-500 hover:underline'>Clear All</button>
                </div>
            </div>
    </div>    
</div>



{/*main side*/}
<div className='lg:py-18 md:mt-10 lg:mt-0 bg-gray-50 col-span-2 px-4 lg:col-span-2 sm:col-span-2 md:col-span-2 h-[80%]'>
<div className=' grid grid-rows-[auto_1fr] lg:gap-6 gap-6'>

  {/*up side*/}
<div className='bg-white rounded-xl '>
  <div className=' bg-white shadow-lg  p-4  rounded-md shadow-gray-100'>
           <div>
           <div className='flex flex-col lg:flex-row gap-3 items-center  w-full'>
            <div className='w-full md:px-4 sm:px-4 lg:px-0'>
              <label className='font-medium text-blue-900 mb-2 text-sm'>Search Products</label>
              <div className='relative flex rounded-lg w-full border hover:border-blue-600 py-2.5 px-4 items-center border-gray-300'>
                 <input type="text" placeholder='Search for products' className='border-none relative  appearance-none outline-none w-full'/>
              <span className=' absolute right-0 py-3 px-3 bg-blue-600 text-white rounded-r-lg'><Search size={20}/></span>
              </div>             
              </div>

            <div className='w-full md:px-4 sm:px-4 lg:px-0'>
              <label htmlFor="price" className='block text-sm font-medium text-blue-900 mb-2'>Price Range</label>
              <div className='relative flex'>
                 <select id="price" value={selectedPrice}
              onChange={(e) =>
                setSelectedPrice(e.target.value)
              } className='block p-3 rounded-md shadow-sm focus:border-blue-500
              focus:ring-blue-500 border border-gray-300 hover:border-blue-500 text-gray-600 text-sm font-medium  appearance-none outline-none w-full'>
                {priceOptions.map((price, idx) =>
                (<option key={idx} value={price}>
                  {price}
                </option>)
                )}
              </select>
              <div className=' absolute right-0 py-2.5 px-1'><ChevronDown className='text-blue-600'/></div> 
              </div>              
            </div>

            <div className='w-full md:px-4 sm:px-4 lg:px-0'>
                <label htmlFor="featured" className='block text-sm font-medium text-blue-900 mb-2'>Sort By</label>
                <div className='relative flex'>
                  <select id="Featured" value={selectedFeatures}
              onChange={(e) =>
                setSelectedFeatures(e.target.value)
              } className=' block w-full p-3 rounded-md shadow-sm focus:border-blue-500
              focus:ring-blue-500 border border-gray-300 relative text-gray-600 text-sm font-medium appearance-none outline-none'>
                {featuresOptions.map((featured, idx) =>
                (<option key={idx} value={featured}>
                  {featured}
                </option>)
                )}
              </select>
              <div className=' absolute right-0 py-2.5 px-1'><ChevronDown className='text-blue-600'/></div>              
                </div>              
            </div>

            <div className='flex flex-row gap-2 w-full px-3 items-center'>
              <div className='w-full'>
              <h3 className='font-medium text-blue-900 mb-2'>View</h3>
              <div className='flex gap-2'>
                <div className='p-2 rounded-md bg-blue-600 flex items-center justify-center'><Grid3X3 size={28}
              stroke='blue' fill='white' strokeWidth={0.7}/></div>

              <div className='p-2 rounded-md border-gray-300 border hover:border-blue-600 flex items-center justify-center'><List size={28}
              stroke='gray' fill='white' strokeWidth={2} className='hover:stroke-blue-600'/></div>
              </div>             
              </div>

             <div>
              <div className='relative flex mt-6 w-full'>
                  <select id="Featured" value={selectedPages}
              onChange={(e) =>
                setSelectedPages(e.target.value)
              } className='mt-1 block w-full p-3 rounded-md shadow-sm focus:border-blue-500
              focus:ring-blue-500 border border-gray-300 relative text-gray-600 text-sm font-medium appearance-none outline-none'>
                {pagesOptions.map((PerPage, idx) =>
                (<option key={idx} value={PerPage}>
                  {PerPage}
                </option>)
                )}
              </select>
              <div className=' absolute right-0 py-2.5 px-1'><ChevronDown className='text-blue-600'/></div>            
              </div>            
            </div>
            </div>
            </div>

            

                
           
           <div className='border-t-gray-300 mt-15 pt-4 border-t-1 mb-8'>
            <div className='flex gap-2 items-center justify-between'>
              <div className='flex gap-2 items-center'>
                 <h3 className='font-medium text-gray-700'>Active Filter:</h3>
              <div className='flex gap-2'>
                <button className='text-sm font-medium py-1 px-4 text-blue-600 bg-blue-100 rounded-full flex items-center gap-2'>Electronics<span className='rounded-full hover:bg-blue-300 p-1'><X size={15} strokeWidth={0.7}/></span></button>
            <button className='text-sm font-medium py-1 rounded-full px-4 text-blue-600 bg-blue-100 flex items-center gap-2'>$50 to $100<span className='rounded-full hover:bg-blue-300 p-1'><X size={15} strokeWidth={0.7}/></span> </button>
              </div>
              </div>
            <button className='text-blue-600 font-bold border border-blue-200 rounded-full bg-blue-100 py-2 px-4 float-end text-sm hover:border-blue-600 transition-colors ease-in-out delay-300'><a href="#">Clear All</a></button></div>           
           </div>
        </div>

        </div> </div>
{/*down side*/}
<div className='grid  gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:px-8 px-4 sm:px-8 w-full p-4'>
  
    <div  className='bg-white rounded-2xl pb-5 shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2  shadow-gray-100 w-full overflow-hidden relative group  hover:shadow-xl'>
             

                <div className='relative'><img src="/images/product-3.webp" alt="Sweater Jacket" className="object-cover w-full h-80 transition-transform duration-300 group-hover:scale-105 "/>
                   <span className='absolute top-3 left-3 py-1 px-2 bg-blue-600 text-white rounded-full font-bold text-sm ml-4 mt-4 shadow-md'>New Season</span>
                <div className='absolute top-3 right-3 flex gap-2 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300'>
                  <button className='p-2 bg-white hover:bg-blue-600 rounded-full shadow hover:text-white'><Heart strokeWidth={1.5} size={20}/></button>
                  <button className='p-2 bg-white hover:bg-blue-600 rounded-full shadow hover:text-white'><RefreshCcw strokeWidth={1.5} size={20}/></button>
                  <button className='p-2 bg-white hover:bg-blue-600 rounded-full shadow hover:text-white'><Eye strokeWidth={1.5} size={20}/></button>
                </div>

                <div className='absolute bottom-3 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 w-full px-4'><button className='w-full bg-blue-600 text-white py-2 rounded-lg '>Add to Cart</button></div>
                </div>
              
                     <p className='ml-4 mt-4 mb-8 font-medium text-gray-700'>Vestibulum ante ipsum primis</p>
                     <h2 className='font-bold text-blue-950 ml-4'>$149.99</h2>
                     <div className='flex ml-4 mt-4 gap-1'><Star size={20} className='text-yellow-400 fill-yellow-400'/> <Star size={20} className='text-yellow-400 fill-yellow-400'/> <Star size={20} className='text-yellow-400 fill-yellow-400'/> <Star size={20} className='text-yellow-400 fill-yellow-400'/> <Star size={20} className='text-yellow-400'/> <span className='text-sm text-blue-950 font-bold ml-1'>4.0</span>
                     </div> 
                     <div className='flex ml-4 gap-2 mt-4 items-center'>
                      <div className='w-6 h-6 rounded-full relative bg-blue-600 transition-transform 0.2s ease;'></div>
                      <div className='w-6 h-6 rounded-full relative bg-green-600 transition-transform 0.2s ease;'></div>
                      <div className='w-7.5 h-7.5 rounded-full border-2 border-blue-800 flex items-center justify-center'><div className='w-6 h-6 rounded-full relative bg-pink-800 transition-transform 0.2s ease;'></div></div>                      
                      </div></div>
                      

    
    <div  className='bg-white rounded-2xl pb-5 shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2  shadow-gray-100 w-full overflow-hidden relative group  hover:shadow-xl'>

      <div className='relative'> <img src="/images/product-6.webp" alt="School Bag" className="object-cover w-full h-80 transition-transform duration-300 group-hover:scale-105"/>
                   <span className='absolute top-3 left-3 py-1 px-2 bg-red-600 text-white rounded-full font-bold text-sm ml-4 mt-4 shadow-md'>-30%</span>
                <div className='absolute top-3 right-3 flex gap-2 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300'>
                  <button className='p-2 bg-white hover:bg-blue-600 rounded-full shadow hover:text-white'><Heart strokeWidth={1.5} size={20}/></button>
                  <button className='p-2 bg-white hover:bg-blue-600 rounded-full shadow hover:text-white'><RefreshCcw strokeWidth={1.5} size={20}/></button>
                  <button className='p-2 bg-white hover:bg-blue-600 rounded-full shadow hover:text-white'><Eye strokeWidth={1.5} size={20}/></button>
                </div>

                <div className='absolute bottom-3 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 w-full px-4'><button className='w-full bg-blue-600 text-white py-2 rounded-lg '>Add to Cart</button></div>
                </div>

              
                     <p className='ml-4 mt-4 mb-8 font-medium text-gray-700'>Aliquam tincidunt mauris eu risus</p> 
                     <h2> <span className='mr-4 line-through text-gray-500 ml-4'>$199.99</span><span className='font-bold text-red-600'>$139.99</span></h2>
                     <div className='flex ml-4 mt-4 gap-1'><Star size={20} className='text-yellow-400 fill-yellow-400'/> <Star size={20} className='text-yellow-400 fill-yellow-400'/> <Star size={20} className='text-yellow-400 fill-yellow-400'/> <Star size={20} className='text-yellow-400 fill-yellow-400'/> <BsStarHalf size={20} className='text-yellow-400'/><span className='text-sm text-blue-950 font-bold ml-1'>4.5</span>
                     </div> 
                     <div className='flex ml-4 gap-2 mt-4 items-center'>
                      <div className='w-6 h-6 rounded-full relative bg-blue-600 transition-transform 0.2s ease;'></div>
                      <div className='w-7.5 h-7.5 rounded-full border-2 border-blue-400 flex items-center justify-center'><div className='w-6 h-6 rounded-full relative bg-black transition-transform 0.2s ease '></div></div>
                      
                      <div className='w-6 h-6 rounded-full relative bg-purple-800 transition-transform 0.2s ease;'></div>
                      </div>
                     </div>
                     
  
     <div  className='bg-white rounded-2xl pb-5 shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2  shadow-gray-100 w-full overflow-hidden relative group  hover:shadow-xl'>

      
      <div className='relative'> <img src="/images/product-7.webp" alt="School Bag" className="object-cover w-full h-80 transition-transform duration-300 group-hover:scale-105"/>
                  <div className='absolute top-3 right-3 flex gap-2 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300'>
                  <button className='p-2 bg-white hover:bg-blue-600 rounded-full shadow hover:text-white'><Heart strokeWidth={1.5} size={20}/></button>
                  <button className='p-2 bg-white hover:bg-blue-600 rounded-full shadow hover:text-white'><RefreshCcw strokeWidth={1.5} size={20}/></button>
                  <button className='p-2 bg-white hover:bg-blue-600 rounded-full shadow hover:text-white'><Eye strokeWidth={1.5} size={20}/></button>
                </div>

                <div className='absolute bottom-3 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 w-full px-4'><button className='w-full bg-blue-600 text-white py-2 rounded-lg '>Add to Cart</button></div>
                </div>

             
                     <p className='ml-4 mt-4 mb-8 font-medium text-gray-700'>Tomorrow, decorate yourself with a sad smile.</p>
                     <h2 className='font-bold text-blue-950 ml-4'>$89.50</h2>
                     <div className='flex ml-4 mt-4 gap-1'><Star size={20} className='text-yellow-400 fill-yellow-400'/> <Star size={20} className='text-yellow-400 fill-yellow-400'/> <Star size={20} className='text-yellow-400 fill-yellow-400'/> <Star size={20} className='text-yellow-400'/> <Star size={20} className='text-yellow-400'/> <span className='text-sm text-blue-950 font-bold ml-1'>3.0</span>
                     </div> 
                     <div className='flex ml-4 gap-2 mt-4 items-center'>
                      <div className='w-7.5 h-7.5 rounded-full border-2 border-blue-600 flex items-center justify-center'><div className='w-6 h-6 rounded-full relative bg-red-500 transition-transform ease-in-out duration-300 hover:shadow-lg'></div></div>
                      
                      <div className='w-6 h-6 rounded-full relative bg-green-600 transition-transform 0.2s ease;'></div>
                      <div className='w-6 h-6 rounded-full relative bg-pink-800 transition-transform 0.2s ease;'></div>
                      </div> </div>
  
  
     <div  className='bg-white rounded-2xl pb-5 shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2  shadow-gray-100 w-full overflow-hidden relative group  hover:shadow-xl'>

      <div className='relative'> <img src="/images/product-11.webp" alt="School Bag" className="object-cover w-full h-80 transition-transform duration-300 group-hover:scale-105"/>
                   <span className='absolute top-3 left-3 py-1 px-2 bg-red-600 text-white rounded-full font-bold text-sm ml-4 mt-4 shadow-md'>-30%</span>
                <div className='absolute top-3 right-3 flex gap-2 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300'>
                  <button className='p-2 bg-white hover:bg-blue-600 rounded-full shadow hover:text-white'><Heart strokeWidth={1.5} size={20}/></button>
                  <button className='p-2 bg-white hover:bg-blue-600 rounded-full shadow hover:text-white'><RefreshCcw strokeWidth={1.5} size={20}/></button>
                  <button className='p-2 bg-white hover:bg-blue-600 rounded-full shadow hover:text-white'><Eye strokeWidth={1.5} size={20}/></button>
                </div>

                <div className='absolute bottom-3 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 w-full px-4'><button className='w-full bg-blue-600 text-white py-2 rounded-lg '>Add to Cart</button></div>
                </div>

            
                     <p className='ml-4 mt-4 mb-8 font-medium text-gray-700'>A whole life of freedom and laughter</p> 
                     <h2 className='font-bold text-blue-950 ml-4'>$119.00</h2>
                     <div className='flex ml-4 mt-4 gap-1'><Star size={20} className='text-yellow-400 fill-yellow-400'/> <Star size={20} className='text-yellow-400 fill-yellow-400'/> <Star size={20} className='text-yellow-400 fill-yellow-400'/> <Star size={20} className='text-yellow-400 fill-yellow-400'/> <Star size={20} className='text-yellow-400'/> <span className='text-sm text-blue-950 font-bold ml-1'>5.0</span>
                     </div> 
                     <div className='flex ml-4 gap-2 mt-4 items-center'>
                      <div className='w-6 h-6 rounded-full relative bg-yellow-600 transition-transform 0.2s ease;'></div>
                      <div className='w-7.5 h-7.5 rounded-full border-2 border-blue-600 flex items-center justify-center'> <div className='w-6 h-6 rounded-full relative bg-purple-400 transition-transform 0.2s ease;'></div></div>
                     
                      <div className='w-6 h-6 rounded-full relative bg-pink-500 transition-transform 0.2s ease;'></div>
                      </div></div>
                      
  
    <div  className='bg-white rounded-2xl pb-5 shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2  shadow-gray-100 w-full overflow-hidden relative group  hover:shadow-xl'>


      <div className='relative'> <img src="/images/product-5.webp" alt="School Bag" className="object-cover w-full h-80 transition-transform duration-300 group-hover:scale-105"/>
                   <span className='absolute top-3 left-3 py-1 px-2 bg-gray-500 text-white rounded-full font-bold text-sm ml-4 mt-4 shadow-md'>Sold Out</span>
                <div className='absolute top-3 right-3 flex gap-2 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300'>
                  <button className='p-2 bg-white hover:bg-blue-600 rounded-full shadow hover:text-white'><Heart strokeWidth={1.5} size={20}/></button>
                  <button className='p-2 bg-white hover:bg-blue-600 rounded-full shadow hover:text-white'><RefreshCcw strokeWidth={1.5} size={20}/></button>
                  <button className='p-2 bg-white hover:bg-blue-600 rounded-full shadow hover:text-white'><Eye strokeWidth={1.5} size={20}/></button>
                </div>

                <div className='absolute bottom-3 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 w-full px-4'><button className='w-full bg-gray-400 text-white py-2 rounded-lg '>Sold Out</button></div>
                </div>
              
                     <p className='ml-4 mt-4 mb-8 font-medium text-gray-700'>Until the time comes, I will be free.</p> 
                     <h2 className='font-bold text-blue-950 ml-4'>$75.00</h2>
                     <div className='flex ml-4 mt-4 gap-1'><Star size={20} className='text-yellow-400 fill-yellow-400'/> <Star size={20} className='text-yellow-400 fill-yellow-400'/> <Star size={20} className='text-yellow-400 fill-yellow-400'/> <Star size={20} className='text-yellow-400 fill-yellow-400'/> <BsStarHalf size={20} className='text-yellow-400'/> <span className='text-sm text-blue-950 font-bold ml-1'>4.7</span>
                     </div> 
                     <div className='flex ml-4 gap-2 mt-4 items-center'>
                      <div className='w-7.5 h-7.5 rounded-full border-2 border-blue-600 flex items-center justify-center'><div className='w-6 h-6 rounded-full relative bg-gray-600 transition-transform 0.2s ease;'></div></div>
                      
                      <div className='w-6 h-6 rounded-full relative bg-blue-600 transition-transform 0.2s ease;'></div>
                      <div className='w-6 h-6 rounded-full relative bg-yellow-800 transition-transform 0.2s ease;'></div>
                      </div>
                      </div>
                      
 
    <div  className='bg-white rounded-2xl pb-5 shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2  shadow-gray-100 w-full overflow-hidden relative group  hover:shadow-xl'>

      <div className='relative'> <img src="/images/product-9.webp" alt="School Bag" className="object-cover w-full h-80 transition-transform duration-300 group-hover:scale-105"/>
                   <span className='absolute top-3 left-3 py-1 px-2 bg-yellow-600 text-amber-100 rounded-full font-bold text-sm ml-4 mt-4 shadow-md'>Hot</span>
                <div className='absolute top-3 right-3 flex gap-2 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300'>
                  <button className='p-2 bg-white hover:bg-blue-600 rounded-full shadow hover:text-white'><Heart strokeWidth={1.5} size={20}/></button>
                  <button className='p-2 bg-white hover:bg-blue-600 rounded-full shadow hover:text-white'><RefreshCcw strokeWidth={1.5} size={20}/></button>
                  <button className='p-2 bg-white hover:bg-blue-600 rounded-full shadow hover:text-white'><Eye strokeWidth={1.5} size={20}/></button>
                </div>

                <div className='absolute bottom-3 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 w-full px-4'><button className='w-full bg-blue-600 text-white py-2 rounded-lg '>Add to Cart</button></div>
                </div>
             
                     <p className='ml-4 mt-4 mb-8 font-medium text-gray-700'>Children live in sorrowful diseases.</p> 
                     <h2 className='font-bold text-blue-950 ml-4'>$64.95</h2>
                     <div className='flex ml-4 mt-4 gap-1'><Star size={20} className='text-yellow-400 fill-yellow-400'/> <Star size={20} className='text-yellow-400 fill-yellow-400'/> <Star size={20} className='text-yellow-400 fill-yellow-400'/> <BsStarHalf  size={20} className='text-yellow-400 fill-yellow-400'/> <Star size={20} className='text-yellow-400'/> <span className='text-sm text-blue-950 font-bold ml-1'>4.0</span>
                     </div> 
                     <div className='flex ml-4 gap-2 mt-4 items-center'>
                      <div className='w-6 h-6 rounded-full relative bg-blue-600 transition-transform 0.2s ease;'></div>
                      <div className='w-6 h-6 rounded-full relative bg-green-600 transition-transform 0.2s ease;'></div>
                     
                      <div className='w-7.5 h-7.5 rounded-full border-2 border-blue-600 flex items-center justify-center'> <div className='w-6 h-6 rounded-full relative bg-pink-800 transition-transform 0.2s ease;'></div></div>
                      </div></div>
                      
                      </div>

{/*pagination side*/}
<div>
   <div className='flex items-center justify-center gap-4'>
            <div className='flex py-2 px-4 rounded shadow-lg bg-white gap-2 items-center text-sm font-medium text-gray-600'><a href="#" className='flex gap-2'><ArrowLeft size={18}/>Previous</a></div>
            <div className='py-2 px-4 rounded shadow-lg gap-2 items-center text-sm font-bold text-white bg-blue-700'><a href="#">1</a></div>
            <div className='py-2 px-4 rounded shadow-lg bg-white gap-2 items-center text-sm font-bold text-gray-600'><a href="#">2</a></div>
            <div className='py-2 px-4 rounded shadow-lg bg-white gap-2 items-center text-sm font-bold text-gray-600'><a href="#">3</a></div>
            <div className='py-2 px-4 rounded shadow-lg bg-white gap-2 items-center text-sm font-bold text-gray-600'>...</div>
            <div className='py-2 px-4 rounded shadow-lg bg-white gap-2 items-center text-sm font-bold text-gray-600'><a href="#">8</a></div>
            <div className='py-2 px-4 rounded shadow-lg bg-white gap-2 items-center text-sm font-bold text-gray-600'><a href="#">9</a></div>
            <div className='py-2 px-4 rounded shadow-lg bg-white gap-2 items-center text-sm font-bold text-gray-600'><a href="#">10</a></div>
            <div className='flex py-2 px-4 rounded shadow-lg bg-white  items-center text-sm font-medium text-gray-600'><a href="#" className='flex gap-2'>Next<ArrowRight size={18}/></a></div>
           </div>
           
</div>
</div>


</div>
</div>
</div>
)}

  export default Classofitems;
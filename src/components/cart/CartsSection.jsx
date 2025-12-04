import React, { useState } from "react";
import {
  BsApple,
  BsArrowLeft,
  BsArrowRight,
  BsCreditCard2Front,
  BsFillTrashFill,
  BsGoogle,
  BsPaypal,
  BsWallet2,
} from "react-icons/bs";
import { MdOutlineUpdate } from "react-icons/md";
import { Link } from "react-router-dom";

function CartsSection() {
  const [showCard1, setShowCard1] = useState(true);
  const [showCard2, setShowCard2] = useState(true);
  const [showCard3, setShowCard3] = useState(true);

  const [quantityshirt, setQuantityshirt] = useState(1);

  const increaseQtyshirt = () => {
    if (quantityshirt < 10) {
      setQuantityshirt((prev) => prev + 1);
    }
  };

  const decreaseQtyshirt = () => {
    if (quantityshirt > 1) {
      setQuantityshirt((prev) => prev - 1);
    }
  };

  const [quantitychair, setQuantitychair] = useState(1);

  const increaseQtychair = () => {
    if (quantitychair < 10) {
      setQuantitychair((prev) => prev + 1);
    }
  };

  const decreaseQtychair = () => {
    if (quantitychair > 1) {
      setQuantitychair((prev) => prev - 1);
    }
  };

  const [quantity, setQuantity] = useState(1);
  const increaseQty = () => {
    if (quantity < 10) {
      setQuantity((prev) => prev + 1);
    }
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const [selected, setSelected] = useState(false);
  const [selected2, setSelected2] = useState(false);
  const [selected3, setSelected3] = useState(false);
  return (
    <div className="w-full bg-gray-50">
      {/* Breadcrumb Section */}
      <div className="bg-gray-100 py-4 w-full">
        <div className="flex justify-between lg:items-center px-4 max-w-7xl lg:flex-row flex-col">
          <h1 className="font-bold text-2xl text-blue-900 lg:ml-[8%]">Cart</h1>
          <div className="flex gap-2">
            <Link to="/" className="font-medium text-blue-600 cursor-pointer">
              Home
            </Link>
            <span className="font-medium text-gray-500 flex flex-row items-center gap-2">
              <span>/</span> Cart
            </span>
          </div>
        </div>
      </div>

      {/*grid section*/}
      <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] md:px-8 gap-8 mx-auto max-w-7xl mt-10 pb-8 px-4 lg:px-0">
        {/*left*/}
        <div className="flex flex-col gap-4 px-4 shadow-lg border-t-6 rounded-2xl border-t-blue-500">
          <div className="flex flex-row justify-between items-center border-b border-b-gray-200 pb-4 pt-4 text-sm text-gray-600">
            <span>PRODUCT</span>
            <div className="flex flex-row gap-8">
              <span>PRICE</span>
              <span>QUANTITY</span>
              <span>TOTAL</span>
            </div>
          </div>

          {/*first card*/}
          {showCard1 && (
            <div className="flex flex-row justify-between border border-gray-300 transition-all ease-in-out duration-300 hover:border-blue-600 p-4 rounded-2xl">
              <div>
                <div className="w-full mb-3 flex flex-col lg:flex-row gap-3 py-4 items-center ml-2">
                  <div>
                    <img
                      src="/images/product-7.webp"
                      className="w-25 h-28 object-fit pt-4 border border-gray-300 rounded-2xl"
                    />
                  </div>

                  <div className="flex flex-col gap-3 text-left">
                    <span className="text-gray-600 font-medium hover:text-blue-600">
                      Lorem ipsum dolor sit amet
                    </span>

                    <span className="flex flex-row gap-3">
                      <span className="border border-gray-200 py-1 px-3 rounded">
                        Color: Black
                      </span>
                      <span className="border border-gray-200 py-1 px-3 rounded">
                        Size: M
                      </span>
                    </span>

                    {/* REMOVE BUTTON */}
                    <span
                      onClick={() => setShowCard1(false)}
                      className="flex flex-row gap-2 items-center group cursor-pointer"
                    >
                      <BsFillTrashFill
                        size={17}
                        className="text-gray-500 group-hover:text-red-600"
                      />
                      <span className="text-gray-500 group-hover:text-red-600">
                        Remove
                      </span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap flex-row gap-8 items-center mr-4">
                {/* Price - does NOT change */}
                <span className="text-blue-950 font-bold">$64.99</span>

                {/* Quantity button */}
                <span className="flex flex-row lg:gap-4 md:gap-3 gap-2  items-center py-1 l:px-5 md:px-3 px-3  rounded-full border border-gray-300">
                  <button
                    onClick={decreaseQtyshirt}
                    className="font-medium text-gray-400 text-lg py-0.5 px-0.5 rounded-full bg-blue-50"
                  >
                    -
                  </button>

                  <p className="font-medium text-gray-700 text-lg">
                    {quantityshirt}
                  </p>

                  <button
                    onClick={increaseQtyshirt}
                    className="font-medium text-gray-400 text-lg  py-0.5 px-0.5 rounded-full bg-blue-50"
                  >
                    +
                  </button>
                </span>

                {/* Total - stays the same, not tied to quantity */}
                <div className="pb-2 flex flex-col">
                  <p
                    className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[3px]
after:bg-[linear-gradient(to_right,rgba(0,0,255,0.7),transparent)] after:rounded-full text-lg text-gray-600 pb-2 font-bold"
                  >
                    $129.98
                  </p>
                </div>
              </div>
            </div>
          )}

          {/*second card*/}
          {showCard2 && (
            <div className="flex  flex-row justify-between border border-gray-300 transition-all ease-in-out duration-300 hover:border-blue-600 p-4 rounded-2xl">
              <div>
                <div className="w-full mb-3 flex flex-col lg:flex-row gap-3 py-4 items-center ml-2">
                  <div>
                    <img
                      src="/images/product-2.webp"
                      className="w-25 h-28 object-fit pt-4 border border-gray-300 rounded-2xl"
                    />
                  </div>

                  <div className="flex flex-col gap-3 text-left">
                    <span className="text-gray-600 font-medium hover:text-blue-600">
                      Consectetur adipiscing elit
                    </span>

                    <span className="flex flex-row gap-3">
                      <span className="border border-gray-200 py-1 px-3 rounded">
                        Color: White
                      </span>
                      <span className="border border-gray-200 py-1 px-3 rounded">
                        Size: L
                      </span>
                    </span>

                    {/* REMOVE BUTTON */}
                    <span
                      onClick={() => setShowCard2(false)}
                      className="flex flex-row gap-2 items-center group cursor-pointer"
                    >
                      <BsFillTrashFill
                        size={17}
                        className="text-gray-500 group-hover:text-red-600"
                      />
                      <span className="text-gray-500 group-hover:text-red-600">
                        Remove
                      </span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-8 items-center mr-4 flex-wrap">
                {/* Price - does NOT change */}
                <div className="flex flex-col gap-2 ">
                  <span className="text-blue-950 font-bold">$64.99</span>
                  <span className="line-through text-gray-400">$79.99</span>
                </div>

                {/* Quantity button */}
                <span className="flex flex-row lg:gap-4 md:gap-3 gap-2  items-center py-1 l:px-5 md:px-3 px-3 rounded-full border border-gray-300">
                  <button
                    onClick={decreaseQtychair}
                    className="font-medium text-gray-400 text-lg py-0.5 px-0.5 rounded-full bg-blue-50"
                  >
                    -
                  </button>

                  <p className="font-medium text-gray-700 text-lg">
                    {quantitychair}
                  </p>

                  <button
                    onClick={increaseQtychair}
                    className="font-medium text-gray-400 text-lg  py-0.5 px-0.5 rounded-full bg-blue-50"
                  >
                    +
                  </button>
                </span>

                {/* Total - stays the same, not tied to quantity */}
                <div className="pb-2 flex flex-col">
                  <p
                    className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[3px]
after:bg-[linear-gradient(to_right,rgba(0,0,255,0.7),transparent)] after:rounded-full text-lg text-gray-600 pb-2 font-bold"
                  >
                    $129.98
                  </p>
                </div>
              </div>
            </div>
          )}

          {/*3rd card*/}
          {showCard3 && (
            <div className="flex flex-row justify-between border border-gray-300 transition-all ease-in-out duration-300 hover:border-blue-600 p-4 rounded-2xl">
              <div>
                <div className="w-full mb-3 flex flex-col lg:flex-row gap-3 py-4 items-center ml-2">
                  <div>
                    <img
                      src="/images/product-3.webp"
                      className="w-25 h-28 object-fit pt-4 border border-gray-300 rounded-2xl"
                    />
                  </div>

                  <div className="flex flex-col gap-3 text-left">
                    <span className="text-gray-600 font-medium hover:text-blue-600">
                      Sed do eiusmod tempor
                    </span>

                    <span className="flex flex-row gap-3">
                      <span className="border border-gray-200 py-1 px-3 rounded">
                        Color: Blue
                      </span>
                      <span className="border border-gray-200 py-1 px-3 rounded">
                        Size: S
                      </span>
                    </span>

                    {/* REMOVE BUTTON */}
                    <span
                      onClick={() => setShowCard3(false)}
                      className="flex flex-row gap-2 items-center group cursor-pointer"
                    >
                      <BsFillTrashFill
                        size={17}
                        className="text-gray-500 group-hover:text-red-600"
                      />
                      <span className="text-gray-500 group-hover:text-red-600">
                        Remove
                      </span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-8 items-center mr-4 flex-wrap">
                {/* Price - does NOT change */}

                <span className="text-blue-950 font-bold">$49.99</span>

                {/* Quantity button */}
                <span className="flex flex-row lg:gap-4 md:gap-3 gap-2  items-center py-1 lg:px-5 md:px-3 px-3 rounded-full border border-gray-300">
                  <button
                    onClick={decreaseQty}
                    className="font-medium text-gray-400 text-lg py-0.5 px-0.5 rounded-full bg-blue-50"
                  >
                    -
                  </button>

                  <p className="font-medium text-gray-700 text-lg">
                    {quantity}
                  </p>

                  <button
                    onClick={increaseQty}
                    className="font-medium text-gray-400 text-lg  py-0.5 px-0.5 rounded-full bg-blue-50"
                  >
                    +
                  </button>
                </span>

                {/* Total - stays the same, not tied to quantity */}
                <div className="pb-2  flex flex-col">
                  <p
                    className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[3px]
after:bg-[linear-gradient(to_right,rgba(0,0,255,0.7),transparent)] after:rounded-full text-lg text-gray-600 pb-2 font-bold"
                  >
                    $49.99
                  </p>
                </div>
              </div>
            </div>
          )}
          {/*button section*/}

          <div className="flex flex-wrap flex-row items-center justify-between pb-4 gap-4">
            <div className="lg:w-[60%] relative w-full">
              <input
                type="text"
                placeholder="Coupon Code"
                className="w-full p-3 border  border-gray-300 rounded-full outline-none"
              />
              <span className="absolute right-0 top-0 bottom-0 items-center flex py-3 px-3 text-white bg-blue-600  rounded-r-full font-medium transition-transform ease-in-out duration-300 hover:translate-y-0.5">
                Apply
              </span>
            </div>

            <span className="flex flex-row gap-4 items-center  rounded-full ">
              <span className="flex flex-row gap-2 items-center group border border-gray-300 rounded py-1 px-3">
                <MdOutlineUpdate
                  size={17}
                  className="text-gray-500 transition-transform ease-in-out duration-300 group-hover:text-blue-600 group-hover:rotate-45"
                />
                <span className="text-blue-500"> Update</span>
              </span>

              <div className="group">
                <span className="flex flex-row gap-2 items-center  border border-gray-300 rounded py-1 px-3 group-hover:bg-red-600">
                  <BsFillTrashFill
                    size={17}
                    className="text-gray-500 transition-transform ease-in-out duration-300 group-hover:text-white group-hover:rotate-45"
                  />
                  <span className="text-gray-500 transition-transform ease-in-out duration-300 group-hover:text-white">
                    Remove
                  </span>
                </span>{" "}
              </div>
            </span>
          </div>
        </div>

        {/*right section*/}
        <div className="flex flex-col gap-4 pb-6 px-4 shadow-lg border-t-6 rounded-2xl border-t-blue-500">
          <div className="pb-2 border-b border-b-gray-200 flex flex-col">
            <p className="text-lg text-gray-600 pb-2">Order Summary</p>
            <div className="h-0.5 w-10 bg-blue-600 inline-block -mb-2"></div>
          </div>

          <div className="flex flex-row justify-between items-center mt-3">
            <span>Subtotal</span>
            <span className="transition-all ease-in-out duration-300 hover:translate-x-2 font-bold">
              $269.96
            </span>
          </div>

          <div className="flex flex-row gap-4">
            <span>Shipping</span>
            <div className="flex flex-col space-y-3">
              <div className="flex flex-row gap-2 items-center">
                <div
                  onClick={() => setSelected(!selected)}
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center cursor-pointer transition-all
${selected ? "border-blue-600 bg-blue-600" : "border-gray-400 bg-transparent"}
`}
                >
                  {/* White dot when selected */}
                  {selected && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>
                <span className="text-gray-600 hover:text-blue-600">
                  Standard Delivery - $4.99
                </span>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <div
                  onClick={() => setSelected2(!selected2)}
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center cursor-pointer transition-all
${selected2 ? "border-blue-600 bg-blue-600" : "border-gray-400 bg-transparent"}
`}
                >
                  {/* White dot when selected */}
                  {selected2 && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>
                <span className="text-gray-600 hover:text-blue-600">
                  Express Delivery - $12.99
                </span>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <div
                  onClick={() => setSelected3(!selected3)}
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center cursor-pointer transition-all
${selected3 ? "border-blue-600 bg-blue-600" : "border-gray-400 bg-transparent"}
`}
                >
                  {/* White dot when selected */}
                  {selected3 && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>
                <span className="text-gray-600 hover:text-blue-600">
                  Free Shipping (Orders over $300)
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-between items-center mt-4">
            <span>Tax</span>
            <span className="transition-all ease-in-out duration-300 hover:translate-x-2 font-bold py-1 px-5 rounded-full bg-blue-50">
              $27.00
            </span>
          </div>

          <div className="flex flex-row justify-between items-center">
            <span>Discount</span>

            <span className="transition-all ease-in-out duration-300 hover:translate-x-2 py-1 px-5 rounded-full bg-blue-100 font-bold">
              -$0.00
            </span>
          </div>

          <div className="flex flex-row justify-between items-center py-7 px-6 rounded-lg bg-blue-50 mt-6 border border-gray-300">
            <span className="font-bold">Total</span>
            <p
              className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[3px]
after:bg-[linear-gradient(to_right,rgba(0,0,255,0.7),transparent)] after:rounded-full font-bold text-2xl"
            >
              $301.95
            </p>
          </div>
          <a
            href="#"
            className="text-white py-3 px-8 rounded-full bg-blue-600 text-center flex flex-row gap-2 transition-all ease-in-out duration-300 hover:-translate-y-2 items-center justify-center font-bold mt-4"
          >
            <span>Proceed to check </span>
            <span>
              <BsArrowRight />
            </span>
          </a>

          <div>
            <a
              href="#"
              className="text-blue-600 py-3 px-8 rounded-full bg-blue-100 text-center flex flex-row gap-2 transition-all ease-in-out duration-300 hover:-translate-y-2 items-center justify-center"
            >
              <span>
                <BsArrowLeft />
              </span>
              <span>Continue Shopping</span>
            </a>
          </div>
          <div className="flex flex-col gap-3 items-center justify-center mt-6">
            <span className="text-gray-500">We Accept</span>
            <div className="flex flex-row gap-3">
              <span className="text-gray-400 transition-all ease-in-out duration-300 hover:-translate-y-1 hover:text-blue-600">
                <BsCreditCard2Front size={26} />
              </span>
              <span className="text-gray-400 transition-all ease-in-out duration-300 hover:-translate-y-1 hover:text-blue-600">
                <BsPaypal size={26} />
              </span>
              <span className="text-gray-400 transition-all ease-in-out duration-300 hover:-translate-y-1 hover:text-blue-600">
                <BsWallet2 size={26} />
              </span>
              <span className="text-gray-400 transition-all ease-in-out duration-300 hover:-translate-y-1 hover:text-blue-600">
                <BsApple size={26} />
              </span>
              <span className="text-gray-400 transition-all ease-in-out duration-300 hover:-translate-y-1 hover:text-blue-600">
                <BsGoogle size={26} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CartsSection;

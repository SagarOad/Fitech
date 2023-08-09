import { useState } from "react";
import PricingCard from "./PricingCard";
import Data from "../Data/PriceData";
import { AiOutlineArrowRight } from "react-icons/ai";
import wave from "../assets/vectors/wave.png";
import priceVector from "../assets/vectors/ecommerce.svg";

const Pricing = () => {
  return (
    <div id="pricing" className="w-full py-28 px-8 md:px-24 mx-aut">
      {/* <img src={wave} className="absolute top-[10px] opacity-[12%] left-0 rotate-180 z-[0]" /> */}
      {/* <h1 className="text-center services2-heading mb-12 text-3xl md:text-[3.5rem] text-[#212121] font-[nexa] opacity-95 font-bold leading-[70px]">
        Pricing
      </h1> */}
      <div className="md:flex justify-between items-center">
        <h1 className="visible md:hidden services2-heading mb-6 text-5xl text-center text-[#212121] font-[nexa] opacity-95 font-bold leading-[70px]">
          Pricing
        </h1>
        <div>
          <img src={priceVector} className="w-auto mb-6 md:mb-0 md:w-[550px] mt-[0px]" />
        </div>
        <div>
          <div class="flex flex-wrap items-center justify-center  ">
            <div class="flex flex-col sm:flex-col lg:flex-row xl:flex-row md:flex-row ">
              <div class="bg-white border-2 mb-6 md:mb-0 rounded-[25px] border-[#f58020] transition-all opacity-75 hover:opacity-100  py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-min shadow-lg sm:w-full ">
                <h1 class="text-[#212121] font-semibold text-xl ">Basic</h1>
                <div class="text-center py-4 px-7">
                  <h1 class="text-[#212121] text-4xl font-black">$199.00</h1>
                  <p class="text-[#212121]  mt-2">Monthly</p>
                </div>
                <div class="h-px bg-gray-200"></div>
                <div class="text-center mt-3">
                  <p class="text-sm text-[#212121]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                </div>
                <button class="w-full mt-6 mb-3 py-2 text-white font-semibold bg-gray-700 hover:shadow-xl duration-200 hover:bg-gray-800">
                  Buy Now
                </button>
              </div>
              <div class="bg-white border-2 mb-6 md:mb-0 rounded-[25px] border-[#f58020] transition-all  hover:opacity-100  transform scale-1 sm:scale-1 md:scale-105 lg:scale-105 xl:scale-105 z-40 py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-min sm:w-full shadow-lg  ">
                <h1 class="text-[#f58020] font-semibold text-xl">Pro</h1>
                <div class="text-center py-4 px-7">
                  <h1 class="text-[#f58020] text-4xl font-black">$399.00</h1>
                  <p class="text-[#212121]  mt-2">Monthly</p>
                </div>
                <div class="h-px bg-purple-400"></div>
                <div class="text-center mt-3">
                  <p class="text-sm text-[#212121]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                </div>
                <button class="w-full mt-6 mb-3 py-2 text-white font-semibold bg-[#212121] hover:shadow-xl duration-200">
                  Buy Now
                </button>
              </div>
              <div class="bg-white border-2 mb-6 md:mb-0 rounded-[25px] border-[#f58020] transition-all opacity-75 hover:opacity-100  z-30 py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-min sm:w-full shadow-lg  ">
                <h1 class="text-[#212121] font-semibold text-xl ">
                  Enterprise
                </h1>
                <div class="text-center py-4 px-7">
                  <h1 class="text-[#212121] text-4xl font-black">$899.00</h1>
                  <p class="text-[#212121]  mt-2">Monthely</p>
                </div>
                <div class="h-px bg-gray-200"></div>
                <div class="text-center mt-3">
                  <p class="text-sm text-[#212121]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                </div>
                <button class="w-full mt-6 mb-3 py-2 text-white font-semibold bg-gray-700 hover:shadow-xl duration-200 hover:bg-gray-800">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:justify-end items-center mt-10">
        <button className="bg-white mr-0 md:mr-[22px] shadow-md z-20 text-black opacity-75 md:py-3 py-2 md:px-5 px-3 rounded-full font-sans font-medium text-[22px] md:text-[18px]">
          Contact for more prices
          {/* <AiOutlineArrowRight className="ml-2" /> */}
        </button>
      </div>
    </div>
  );
};

export default Pricing;

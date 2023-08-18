
import PricingCard from "./PricingCard";
import Data from "../Data/PriceData";
import { AiOutlineArrowRight } from "react-icons/ai";
import wave from "../assets/vectors/wave.png";
import priceVector from "../assets/vectors/Ecommerce.png";
import { useState } from "react";
import GetQuote from "./GetQuote";

const Pricing = () => {
  const [openModal, setOpenModal] = useState();
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
          <img
            src={priceVector}
            className="w-auto mb-6 md:mb-0 md:w-[550px] mt-[0px]"
          />
        </div>
        <div className="">
          <div class="flex flex-wrap items-center justify-center  ">
            <div class="flex flex-col sm:flex-col lg:flex-row xl:flex-row md:flex-row ">
              <div class="bg-white border-2 mb-6 md:mb-0 rounded-[25px] border-[#f58020] transition-all opacity-75 hover:opacity-100  py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-min shadow-lg sm:w-full ">
                <h1 class="text-[#212121] font-semibold text-center text-xl ">SEO</h1>
                <div class="text-center py-4 px-7">
                  <h1 class="text-[#212121] w-[200px] text-4xl font-black">$150</h1>
                  <p class="text-[#212121]  mt-2">Monthly</p>
                </div>
                <div class="h-px bg-gray-200"></div>
                <div class="text-center mt-3">
                  <p class="text-sm text-[#212121]">
                    <ul>
                      <li>Keyword Research</li>
                      <li>Business Directories</li>
                      <li>Onsite Optimizations</li>
                      <li>Tag Implementation</li>
                      <li>Local Business SEO</li>
                      <li>Content Creation</li>
                      <li>Backlink Building</li>
                      <li>And so much more!</li>
                    </ul>
                  </p>
                </div>
                <button
                 onClick={() => {
                  setOpenModal(true);
                }}
                class="w-full mt-6 mb-3 py-2 text-white font-semibold bg-gray-700 hover:shadow-xl duration-200 hover:bg-gray-800">
                  Buy Now
                </button>
              </div>
              <div class="bg-white border-2 mb-6 md:mb-0 rounded-[25px] border-[#f58020]  transition-all  hover:opacity-100  transform scale-1 sm:scale-1 md:scale-105 lg:scale-105 xl:scale-105 py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-min sm:w-full shadow-lg  ">
                <h1 class="text-[#f58020] font-semibold text-center text-xl">SMM</h1>
                <div class="text-center py-4 px-7">
                  <h1 class="text-[#f58020] w-[200px] text-4xl font-black">$599</h1>
                  <p class="text-[#212121]  mt-2">Monthly</p>
                </div>
                <div class="h-px"></div>
                <div class="text-center mt-3">
                  
                <p class="text-sm text-[#212121]">
                    <ul className=" h-[200px] overflow-scroll">
                      <li>Number of Social Media Platforms (4)</li>
                      <li>Content Calendar & Posts</li>
                      <li>Copywriting for stories and posts</li>
                      <li>Facebook Ads Management</li>
                      <li>Instagram Ads Management</li>
                      <li>Linkedin Ads Management</li>
                      <li>Youtube Ads Management</li>
                      <li>Boosted Posts Management</li>
                    </ul>
                  </p>
                </div>
                <button
                 onClick={() => {
                  setOpenModal(true);
                }}
                class="w-full mt-6 mb-3 py-2 text-white font-semibold bg-[#212121] hover:shadow-xl duration-200">
                  Buy Now
                </button>
              </div>
              <div class="bg-white border-2 mb-6 md:mb-0 rounded-[25px] border-[#f58020] transition-all opacity-75 hover:opacity-100  z-30 py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-min sm:w-full shadow-lg  ">
                <h1 class="text-[#212121] text-center font-semibold text-xl ">
                  SMO
                </h1>
                <div class="text-center py-4 px-7">
                  <h1 class="text-[#212121] w-[200px] text-4xl font-black">$899</h1>
                  <p class="text-[#212121]  mt-2">Monthely</p>
                </div>
                <div class="h-px bg-gray-200"></div>
                <div class="text-center mt-3">
                <p class="text-sm text-[#212121]">
                    <ul className=" h-[200px] overflow-scroll">
                      <li>Profile Setup and Optimization</li>
                      <li>Content Strategy Development</li>
                      <li>Content Creation and Sharing</li>
                      <li>Hashtag Strategy</li>
                      <li>Community Engagement</li>
                      <li>Influencer Collaboration</li>
                      <li>Analytics and Reporting</li>
                      <li>Paid Advertising and Promotion</li>
                    </ul>
                  </p>
                </div>
                <button
                 onClick={() => {
                  setOpenModal(true);
                }}
                 class="w-full mt-6 mb-3 py-2 text-white font-semibold bg-gray-700 hover:shadow-xl duration-200 hover:bg-gray-800">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:justify-end items-center mt-10">
        <button
        onClick={() => {
          setOpenModal(true);
        }}
        className="leading-normal ml-2 text-white bg-[#f58020] rounded-2xl px-4 font-sans font-medium text-[30px] md:text-[32px]">
          Contact for more prices
          {/* <AiOutlineArrowRight className="ml-2" /> */}
        </button>
      </div>

      {openModal && <GetQuote closeModal={setOpenModal} Title="Contact Us" />}
    </div>
  );
};

export default Pricing;

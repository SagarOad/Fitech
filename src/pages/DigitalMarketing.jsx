import React from "react";
import Lottie from "lottie-react";
import anime from "../Lottie-data/marketing-anime.json";
import { GiDirectionSigns } from "react-icons/gi";
import { TbSeo } from "react-icons/tb";
import { AiOutlineMobile } from "react-icons/ai";
import { TbTargetArrow } from "react-icons/tb";
import { TbWriting } from "react-icons/tb";
import { BsClipboard2Data } from "react-icons/bs";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

import PricingCard from "../Components/PricingCard";

import { useState, useEffect } from "react";
import GetQuote from "../Components/GetQuote";


const DigitalMarketing = () => {

  const [openModal, setOpenModal] = useState();

  return (
    <div>
      <Navbar />
      <div className="main-bg md:px-24">
        <div className="pt-[147px] flex md:flex-row items-center">
          <div>
            <h1 className="main-banner-heading mt-4 text-3xl sm:text-5xl md:text-[4.5rem] text-white font-[nexa] font-bold leading-tight  md:text-left">
              Digital{" "}
              <span className="power-text mx-4 span-color bg-clip-text text-[#f58020]">
                Marketing
              </span>
            </h1>

            <p className="leading-normal text-white opacity-75 mt-6 font-[poppins] text-base md:text-[21px] mb-8 md:text-left">
            Elevate your online presence and reach new heights with our result-driven Digital Marketing strategies. From creating engaging campaigns to targeted advertising, we help you connect with your audience and achieve your marketing goals.
            </p>

            <button 
            onClick={() => {
              setOpenModal(true);
            }}
            className="bg-[#f58020] text-white text-[21px] rounded-lg font-[poppins] px-6 py-3">
              Get a Quote
            </button>
          </div>

          <div>
            <Lottie
              className="w-auto md:w-[660px] mt-[0px]"
              animationData={anime}
            ></Lottie>
          </div>
        </div>

        <div className="flex flex-col mt-20 md:px-20">
          <div className="">
            <h1 className="main-banner-heading text-center mb-12 mt-4 text-2xl sm:text-4xl md:text-[3.5rem] text-white font-[nexa] font-bold leading-tight">
              Why Choose Us
            </h1>
            <p className="leading-normal text-white opacity-75 mt-6 font-[poppins] text-base md:text-[21px] mb-8 md:text-center">
            Partner with us for Digital Marketing success that goes beyond just clicks and impressions. Our data-driven approach, creative insights, and continuous optimization ensure your brand stands out and thrives in the digital landscape.
            </p>
          </div>
        </div>

        <div className="flex flex-col mt-40">
          <div className="">
            <h1 className="main-banner-heading text-center mb-12 mt-4 text-2xl sm:text-4xl md:text-[3.5rem] text-white font-[nexa] font-bold leading-tight">
              Features
            </h1>
          </div>
          <div className="grid grid-cols-12 gap-8 justify-center items-center">
            <div className="col-span-4 p-6">
              <div className="">
                <div className="bg-[#f58020] mx-auto text-[42px] font-bold text-white w-[100px] flex justify-center items-center rounded-full h-[100px]">
                  <GiDirectionSigns />
                </div>
                <div className="text-center">
                  <h1 className="text-white mt-4 md:text-[24px] opacity-75 font-[poppins] font-semibold ">
                  Comprehensive Digital Strategy
                  </h1>
                  <p className="text-white opacity-75 font-[poppins]">
                  Tailored marketing plans aligned with your business objectives to drive maximum ROI.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-4 p-6">
              <div className="">
                <div className="bg-[#f58020] text-[42px] font-bold text-white w-[100px] flex justify-center items-center rounded-full h-[100px] mx-auto">
                  <TbSeo />
                </div>
                <div className="text-center">
                  <h1 className="text-white mt-4 md:text-[24px] opacity-75 font-[poppins] font-semibold ">
                  Search Engine Optimization (SEO)
                  </h1>
                  <p className="text-white opacity-75 font-[poppins]">
                  Enhance your website's visibility and organic traffic through effective SEO techniques.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-4 p-6">
              <div className="">
                <div className="bg-[#f58020] text-[42px] font-bold text-white w-[100px] flex justify-center items-center rounded-full h-[100px] mx-auto">
                  <AiOutlineMobile />
                </div>
                <div className="text-center">
                  <h1 className="text-white mt-4 md:text-[24px] opacity-75 font-[poppins] font-semibold ">
                  Social Media Marketing
                  </h1>
                  <p className="text-white opacity-75 font-[poppins]">
                  Engaging social media campaigns that create a strong brand presence and foster customer engagement.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-4 p-6">
              <div className="">
                <div className="bg-[#f58020] text-[42px] font-bold text-white w-[100px] flex justify-center items-center rounded-full h-[100px] mx-auto">
                  <TbTargetArrow />
                </div>
                <div className="text-center">
                  <h1 className="text-white mt-4 md:text-[24px] opacity-75 font-[poppins] font-semibold ">
                  Pay-Per-Click (PPC) Advertising
                  </h1>
                  <p className="text-white opacity-75 font-[poppins]">
                  Targeted PPC campaigns that drive traffic and conversions while optimizing your ad spend.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-4 p-6">
              <div className="">
                <div className="bg-[#f58020] text-[42px] font-bold text-white w-[100px] flex justify-center items-center rounded-full h-[100px] mx-auto">
                  <TbWriting />
                </div>
                <div className="text-center">
                  <h1 className="text-white mt-4 md:text-[24px] opacity-75 font-[poppins] font-semibold ">
                  Content Marketing
                  </h1>
                  <p className="text-white opacity-75 font-[poppins]">
                  Compelling content strategies that resonate with your audience and establish your brand as an industry authority.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-4 p-6">
              <div className="">
                <div className="bg-[#f58020] text-[42px] font-bold text-white w-[100px] flex justify-center items-center rounded-full h-[100px] mx-auto">
                  <BsClipboard2Data />
                </div>
                <div className="text-center">
                  <h1 className="text-white mt-4 md:text-[24px] opacity-75 font-[poppins] font-semibold ">
                  Data Analytics and Reporting
                  </h1>
                  <p className="text-white opacity-75 font-[poppins]">
                  In-depth analytics and regular reporting to track performance and make data-driven decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>

       

         
        </div>

        <Footer />
      </div>
      {openModal && (
        <GetQuote closeModal={setOpenModal} Title="Request a Quote" />
      )}
    </div>
  );
};

export default DigitalMarketing;

import React from "react";
import Lottie from "lottie-react";
import anime from "../Lottie-data/software-development.json";
import { BsCodeSlash } from "react-icons/bs";
import { MdArchitecture } from "react-icons/md";
import { MdMobileFriendly } from "react-icons/md";
import { AiOutlineCloudServer } from "react-icons/ai";
import { MdOutlineCleanHands } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

import PricingCard from "../Components/PricingCard";

import { useState, useEffect } from "react";
import GetQuote from "../Components/GetQuote";

const SoftwareDevelopment = () => {
  const [openModal, setOpenModal] = useState();


  return (
    <div>
      <Navbar />
      <div className="main-bg md:px-24">
        <div className="pt-[147px] flex md:flex-row items-center">
          <div>
            <h1 className="main-banner-heading mt-4 text-3xl sm:text-5xl md:text-[4.5rem] text-white font-[nexa] font-bold leading-tight  md:text-left">
              Software{" "}
              <span className="power-text mx-4 span-color bg-clip-text text-[#f58020]">
                Development
              </span>
            </h1>

            <p className="leading-normal text-white opacity-75 mt-6 font-[poppins] text-base md:text-[21px] mb-8 md:text-left">
              Empower your business with our innovative Software Development
              solutions. We specialize in crafting scalable, high-performance
              software applications that streamline processes, enhance
              productivity, and drive business growth.
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
              className="w-auto md:w-[660px] mt-[0px] md:mt-[-100px]"
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
              Choose us as your software development partner and experience the
              power of technology combined with our team's expertise. We are
              dedicated to delivering tailored solutions that cater to your
              unique requirements, ensuring seamless integration and exceptional
              performance.
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
                  <BsCodeSlash />
                </div>
                <div className="text-center">
                  <h1 className="text-white mt-4 md:text-[24px] opacity-75 font-[poppins] font-semibold ">
                    Custom Software Solutions
                  </h1>
                  <p className="text-white opacity-75 font-[poppins]">
                    Tailored applications designed to address your specific
                    business needs and workflows.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-4 p-6">
              <div className="">
                <div className="bg-[#f58020] text-[42px] font-bold text-white w-[100px] flex justify-center items-center rounded-full h-[100px] mx-auto">
                  <MdArchitecture />
                </div>
                <div className="text-center">
                  <h1 className="text-white mt-4 md:text-[24px] opacity-75 font-[poppins] font-semibold ">
                    Scalable Architecture
                  </h1>
                  <p className="text-white opacity-75 font-[poppins]">
                    Future-proof your software with a scalable architecture that
                    accommodates growth and evolving demands.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-4 p-6">
              <div className="">
                <div className="bg-[#f58020] text-[42px] font-bold text-white w-[100px] flex justify-center items-center rounded-full h-[100px] mx-auto">
                  <MdMobileFriendly />
                </div>
                <div className="text-center">
                  <h1 className="text-white mt-4 md:text-[24px] opacity-75 font-[poppins] font-semibold ">
                    User-Centric Design
                  </h1>
                  <p className="text-white opacity-75 font-[poppins]">
                    Focus on intuitive user interfaces and experiences to boost
                    user adoption and efficiency.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-4 p-6">
              <div className="">
                <div className="bg-[#f58020] text-[42px] font-bold text-white w-[100px] flex justify-center items-center rounded-full h-[100px] mx-auto">
                  <AiOutlineCloudServer />
                </div>
                <div className="text-center">
                  <h1 className="text-white mt-4 md:text-[24px] opacity-75 font-[poppins] font-semibold ">
                    Robust Backend Development
                  </h1>
                  <p className="text-white opacity-75 font-[poppins]">
                    Ensure a solid foundation with secure and efficient backend
                    systems to support your software's functionalities.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-4 p-6">
              <div className="">
                <div className="bg-[#f58020] text-[42px] font-bold text-white w-[100px] flex justify-center items-center rounded-full h-[100px] mx-auto">
                  <MdOutlineCleanHands />
                </div>
                <div className="text-center">
                  <h1 className="text-white mt-4 md:text-[24px] opacity-75 font-[poppins] font-semibold ">
                    Quality Assurance and Testing
                  </h1>
                  <p className="text-white opacity-75 font-[poppins]">
                    Rigorous testing methodologies to deliver reliable and
                    bug-free software solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-4 p-6">
              <div className="">
                <div className="bg-[#f58020] text-[42px] font-bold text-white w-[100px] flex justify-center items-center rounded-full h-[100px] mx-auto">
                  <MdSupportAgent />
                </div>
                <div className="text-center">
                  <h1 className="text-white mt-4 md:text-[24px] opacity-75 font-[poppins] font-semibold ">
                    Ongoing Support and Maintenance
                  </h1>
                  <p className="text-white opacity-75 font-[poppins]">
                    Comprehensive post-development support to keep your software
                    updated and running smoothly.
                  </p>
                </div>
              </div>
            </div>
          </div>

         

          <div>
          

            
           
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

export default SoftwareDevelopment;

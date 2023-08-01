import React from "react";
import Lottie from "lottie-react";
import anime from "../Lottie-data/ecommerce-anime.json";
import { AiOutlineShopping } from "react-icons/ai";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";
import { MdOutlineManageSearch } from "react-icons/md";
import { CgPerformance } from "react-icons/cg";
import { BiSupport } from "react-icons/bi";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import PricingCard from "../Components/PricingCard";
import EcommerceCard from "../Components/Ecommerce";
import { useState, useEffect } from "react";
import GetQuote from "../Components/GetQuote";

const Ecommerce = () => {

  const [openModal, setOpenModal] = useState();
  return (
    <div>
      <Navbar />
      <div className="main-bg px-6 md:px-24">
        <div className="pt-[147px] flex flex-col md:flex-row items-center">
          <div>
            <h1 className="main-banner-heading mt-4 text-3xl sm:text-5xl md:text-[4.5rem] text-white font-[nexa] font-bold leading-tight  md:text-left">
              Ecommerce{" "}
              <span className="power-text mx-4 span-color bg-clip-text text-[#f58020]">
                Solutions
              </span>
            </h1>

            <p className="leading-normal text-white opacity-75 mt-6 font-[poppins] text-base md:text-[21px] mb-8 md:text-left">
              Unlock the full potential of your online business with our
              cutting-edge Ecommerce Solutions. We specialize in crafting
              robust, user-friendly, and feature-rich online stores that drive
              sales and maximize your digital growth.
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
              className="w-auto md:w-[660px] mt-[0px] md:mt-[-154px]"
              animationData={anime}
            ></Lottie>
          </div>
        </div>

        <div className="features mt-40 h-auto section-features-wrap backdrop-blur-xl bg-white/30 block md:flex items-center px-8 md:px-24 my-4 justify-between rounded-3xl">
          <div className="">
            <h1 className="main-banner-heading text-center mb-12 mt-4 text-2xl sm:text-4xl md:text-[3.5rem] text-white font-[nexa] font-bold leading-tight">
              Why Choose Us
            </h1>
            <p className="leading-normal text-white opacity-75 mt-6 font-[poppins] text-base md:text-[21px] mb-8 md:text-center">
              Experience the ultimate Ecommerce success with our dedicated team
              of experts who prioritize your business goals. From seamless user
              experiences to secure payment gateways, we are committed to
              delivering unparalleled results that elevate your online presence.
            </p>
          </div>
        </div>

        <div className="flex flex-col mt-40">
          <div className="">
            <h1 className="main-banner-heading text-center mb-12 mt-4 text-2xl sm:text-4xl md:text-[3.5rem] text-white font-[nexa] font-bold leading-tight">
              Features
            </h1>
          </div>
          <div className=" grid grid-cols-12 gap-8 justify-center items-center">
            <div className="col-span-12  md:col-span-4 p-6">
              <div className="">
                <div className="bg-[#f58020] mx-auto text-[42px] font-bold text-white w-[100px] flex justify-center items-center rounded-full h-[100px]">
                  <AiOutlineShopping />
                </div>
                <div className="text-center">
                  <h1 className="text-white mt-4 md:text-[24px] opacity-75 font-[poppins] font-semibold ">
                    Custom Ecommerce Website Development
                  </h1>
                  <p className="text-white opacity-75 font-[poppins]">
                    Tailor-made online stores that reflect your brand identity
                    and offer a seamless shopping experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-4 p-6">
              <div className="">
                <div className="bg-[#f58020] text-[42px] font-bold text-white w-[100px] flex justify-center items-center rounded-full h-[100px] mx-auto">
                  <MdOutlineIntegrationInstructions />
                </div>
                <div className="text-center">
                  <h1 className="text-white mt-4 md:text-[24px] opacity-75 font-[poppins] font-semibold ">
                    Mobile Commerce Integration
                  </h1>
                  <p className="text-white opacity-75 font-[poppins]">
                    Reach a wider audience with fully optimized and responsive
                    Ecommerce solutions for mobile devices.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-4 p-6">
              <div className="">
                <div className="bg-[#f58020] text-[42px] font-bold text-white w-[100px] flex justify-center items-center rounded-full h-[100px] mx-auto">
                  <MdOutlineSecurity />
                </div>
                <div className="text-center">
                  <h1 className="text-white mt-4 md:text-[24px] opacity-75 font-[poppins] font-semibold ">
                    Secure Payment Gateways
                  </h1>
                  <p className="text-white opacity-75 font-[poppins]">
                    Implement robust payment gateways to ensure safe and smooth
                    transactions for your customers.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-4 p-6">
              <div className="">
                <div className="bg-[#f58020] text-[42px] font-bold text-white w-[100px] flex justify-center items-center rounded-full h-[100px] mx-auto">
                  <MdOutlineManageSearch />
                </div>
                <div className="text-center">
                  <h1 className="text-white mt-4 md:text-[24px] opacity-75 font-[poppins] font-semibold ">
                    Product Management System
                  </h1>
                  <p className="text-white opacity-75 font-[poppins]">
                    Streamline your product catalog, inventory, and updates with
                    an easy-to-use management system.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-4 p-6">
              <div className="">
                <div className="bg-[#f58020] text-[42px] font-bold text-white w-[100px] flex justify-center items-center rounded-full h-[100px] mx-auto">
                  <CgPerformance />
                </div>
                <div className="text-center">
                  <h1 className="text-white mt-4 md:text-[24px] opacity-75 font-[poppins] font-semibold ">
                    Conversion Rate Optimization (CRO)
                  </h1>
                  <p className="text-white opacity-75 font-[poppins]">
                    Boost sales and maximize ROI through data-driven strategies
                    to optimize your website's performance.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-4 p-6">
              <div className="">
                <div className="bg-[#f58020] text-[42px] font-bold text-white w-[100px] flex justify-center items-center rounded-full h-[100px] mx-auto">
                  <BiSupport />
                </div>
                <div className="text-center">
                  <h1 className="text-white mt-4 md:text-[24px] opacity-75 font-[poppins] font-semibold ">
                    Customer Support and Analytics
                  </h1>
                  <p className="text-white opacity-75 font-[poppins]">
                    Stay connected with your customers and gain insights into
                    their behavior to drive continuous improvements and customer
                    satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>

      


          <div>
            <div className="flex flex-col mt-20 md:px-20">
              <h1 className="main-banner-heading text-center mb-12 mt-4 text-2xl sm:text-4xl md:text-[3.5rem] text-white font-[nexa] font-bold leading-tight">
                Our Work
              </h1>

             <div id="projects" className="mt-6 relative rounded-3xl ">
                <EcommerceCard />
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

export default Ecommerce;

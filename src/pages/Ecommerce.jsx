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

import images1 from "../assets/websites/laptop (1).png";
import images2 from "../assets/websites/laptop (2).png";
import images3 from "../assets/websites/laptop (3).png";
import images4 from "../assets/websites/laptop (4).png";
import images5 from "../assets/websites/laptop (5).png";
import images6 from "../assets/websites/laptop (6).png";
import images7 from "../assets/websites/laptop (7).png";
import images8 from "../assets/websites/laptop (8).png";
import images9 from "../assets/websites/laptop (9).png";
import images10 from "../assets/websites/aa.png";
import images11 from "../assets/websites/laptop (13).png";
import images12 from "../assets/websites/laptop (14).png";
import images13 from "../assets/websites/laptop (15).png";
import images14 from "../assets/websites/laptop (16).png";
import images15 from "../assets/websites/laptop (17).png";
import images16 from "../assets/websites/laptop (18).png";
import images17 from "../assets/websites/laptop (19).png";
import images18 from "../assets/websites/laptop (20).png";
import images19 from "../assets/websites/laptop (21).png";
import images20 from "../assets/websites/all-devices-white.png";
import images21 from "../assets/websites/kk.png";

const Ecommerce = () => {
  const [openModal, setOpenModal] = useState();
  return (
    <div>
      <Navbar />
      <div className="main-bg px-6 md:px-24">
        <div className="pt-[147px] flex flex-col md:flex-row items-center">
          <div>
            <h1 className="main-banner-heading mt-4 text-3xl sm:text-5xl md:text-[4.5rem] text-white font-[nexa] font-bold leading-tight  md:text-left">
              Website{" "}
              <span className="power-text mx-4 span-color bg-clip-text text-[#f58020]">
                Development
              </span>
            </h1>

            <p className="leading-normal text-white opacity-75 mt-6 font-[poppins] text-base md:text-[21px] mb-8 md:text-left">
              Unlock the full potential of your online presence with our
              cutting-edge Website Development services. We specialize in
              crafting robust, user-friendly, and feature-rich websites that
              elevate your brand and maximize your digital growth. We also excel
              in creating seamless Ecommerce solutions to boost your online
              sales.
            </p>

            <button
              onClick={() => {
                setOpenModal(true);
              }}
              className="bg-[#f58020] text-white text-[21px] rounded-lg font-[poppins] px-6 py-3"
            >
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
              Experience the ultimate online success with our dedicated team of
              experts who prioritize your business goals. From seamless user
              experiences to secure payment gateways, we are committed to
              delivering unparalleled results that enhance your online presence.
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
                    Custom Website Development
                  </h1>
                  <p className="text-white opacity-75 font-[poppins]">
                    Tailor-made websites that reflect your brand identity and
                    offer a seamless user experience.
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
                    Mobile-Friendly Solutions
                  </h1>
                  <p className="text-white opacity-75 font-[poppins]">
                    Reach a wider audience with fully optimized and responsive
                    websites for mobile devices.
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
                    Secure Payment Integration
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
                    Content Management System
                  </h1>
                  <p className="text-white opacity-75 font-[poppins]">
                    Easily manage your website content with an intuitive
                    management system.
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
                    Search Engine Optimization (SEO)
                  </h1>
                  <p className="text-white opacity-75 font-[poppins]">
                    Boost visibility and organic traffic through effective SEO
                    strategies.
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
                    Stay connected with your audience and gain insights to
                    improve customer satisfaction.
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
              <div className="-m-1 flex flex-wrap md:-m-2">
                        <div className="flex w-full flex-wrap">
                          <div className="grayscale hover:grayscale-0 ease-in duration-300 w-full mb-16 p-1 md:p-2">
                            <a
                              href="https://truelinkswear.com/"
                              target="_blank"
                            >
                              <img
                                alt="gallery"
                                className="block mx-auto h-full w-full md:w-[900px] rounded-lg object-cover object-center "
                                src={images20}
                              />
                            </a>
                          </div>
                          <div className="grayscale flex justify-center items-center hover:grayscale-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
                            <a href="https://bravogroup.us/" target="_blank">
                              <img
                                alt="gallery"
                                className="block w-[350px] rounded-lg object-cover object-center "
                                src={images1}
                              />
                            </a>
                          </div>
                          <div className="grayscale flex justify-center items-center hover:grayscale-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
                            <a href="https://www.textore.net/" target="_blank">
                              <img
                                alt="gallery"
                                className="block w-[350px] rounded-lg object-cover object-center"
                                src={images2}
                              />
                            </a>
                          </div>
                          <div className="grayscale flex justify-center items-center hover:grayscale-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
                            <a href="https://pi.paytm.com/" target="_blank">
                              <img
                                alt="gallery"
                                className="block w-[350px] rounded-lg object-cover object-center"
                                src={images3}
                              />
                            </a>
                          </div>
                          <div className="grayscale flex justify-center items-center hover:grayscale-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
                            <a
                              href="https://tigerfuelmarkets.com/"
                              target="_blank"
                            >
                              <img
                                alt="gallery"
                                className="block w-[350px] rounded-lg object-cover object-center"
                                src={images4}
                              />
                            </a>
                          </div>
                          <div className="grayscale flex justify-center items-center hover:grayscale-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
                            <a
                              href="https://www.mayoclinic.org/"
                              target="_blank"
                            >
                              <img
                                alt="gallery"
                                className="block w-[350px] rounded-lg object-cover object-center"
                                src={images5}
                              />
                            </a>
                          </div>
                          <div className="grayscale flex justify-center items-center hover:grayscale-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
                            <a
                              href="https://my.clevelandclinic.org/"
                              target="_blank"
                            >
                              <img
                                alt="gallery"
                                className="block w-[350px] rounded-lg object-cover object-center"
                                src={images6}
                              />
                            </a>
                          </div>
                          <div className="grayscale flex justify-center items-center hover:grayscale-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
                            <a
                              href="https://www.medexpress.com/"
                              target="_blank"
                            >
                              <img
                                alt="gallery"
                                className="block w-[350px] rounded-lg object-cover object-center"
                                src={images7}
                              />
                            </a>
                          </div>
                          <div className="grayscale flex justify-center items-center hover:grayscale-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
                            <a
                              href="https://truelinkswear.com/"
                              target="_blank"
                            >
                              <img
                                alt="gallery"
                                className="block w-[350px] rounded-lg object-cover object-center"
                                src={images8}
                              />
                            </a>
                          </div>
                          <div className="grayscale flex justify-center items-center hover:grayscale-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
                            <a
                              href="https://www.maisonlabiche.com/"
                              target="_blank"
                            >
                              <img
                                alt="gallery"
                                className="block w-[350px] rounded-lg object-cover object-center"
                                src={images9}
                              />
                            </a>
                          </div>
                          <div className="grayscale flex justify-center items-center hover:grayscale-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
                            <a href="https://ahi-austin.com/" target="_blank">
                              <img
                                alt="gallery"
                                className="block w-[350px] rounded-lg object-cover object-center"
                                src={images10}
                              />
                            </a>
                          </div>
                          <div className="grayscale flex justify-center items-center hover:grayscale-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
                            <a
                              href="https://timdavishamptons.com/"
                              target="_blank"
                            >
                              <img
                                alt="gallery"
                                className="block w-[350px] rounded-lg object-cover object-center"
                                src={images11}
                              />
                            </a>
                          </div>
                          <div className="grayscale flex justify-center items-center hover:grayscale-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
                            <a
                              href="https://idhomeinspect.com/"
                              target="_blank"
                            >
                              <img
                                alt="gallery"
                                className="block w-[350px] rounded-lg object-cover object-center"
                                src={images21}
                              />
                            </a>
                          </div>
                          <div className="grayscale flex justify-center items-center hover:grayscale-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
                            <a
                              href="https://sunnysiderepairshop.com/"
                              target="_blank"
                            >
                              <img
                                alt="gallery"
                                className="block w-[350px] rounded-lg object-cover object-center"
                                src={images12}
                              />
                            </a>
                          </div>
                          <div className="grayscale flex justify-center items-center hover:grayscale-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
                            <a
                              href="https://www.everywhereist.com/"
                              target="_blank"
                            >
                              <img
                                alt="gallery"
                                className="block w-[350px] rounded-lg object-cover object-center"
                                src={images13}
                              />
                            </a>
                          </div>
                          <div className="grayscale flex justify-center items-center hover:grayscale-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
                            <a href="https://www.crossfit.com/" target="_blank">
                              <img
                                alt="gallery"
                                className="block w-[350px] rounded-lg object-cover object-center"
                                src={images14}
                              />
                            </a>
                          </div>
                          <div className="grayscale flex justify-center items-center hover:grayscale-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
                            <a href="https://www.t-nation.com/" target="_blank">
                              <img
                                alt="gallery"
                                className="block w-[350px] rounded-lg object-cover object-center"
                                src={images15}
                              />
                            </a>
                          </div>
                          <div className="grayscale flex justify-center items-center hover:grayscale-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
                            <a
                              href="https://prohousekeepers.com/"
                              target="_blank"
                            >
                              <img
                                alt="gallery"
                                className="block w-[350px] rounded-lg object-cover object-center"
                                src={images16}
                              />
                            </a>
                          </div>
                          <div className="grayscale flex justify-center items-center hover:grayscale-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
                            <a
                              href="https://www.maidtoshinecleaners.com/"
                              target="_blank"
                            >
                              <img
                                alt="gallery"
                                className="block w-[350px] rounded-lg object-cover object-center"
                                src={images17}
                              />
                            </a>
                          </div>
                          <div className="grayscale flex justify-center items-center hover:grayscale-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
                            <a
                              href="https://iloveincredibles.com/"
                              target="_blank"
                            >
                              <img
                                alt="gallery"
                                className="block w-[350px] rounded-lg object-cover object-center"
                                src={images18}
                              />
                            </a>
                          </div>
                          <div className="grayscale flex justify-center items-center hover:grayscale-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
                            <a
                              href="https://hanselmannpottery.com/"
                              target="_blank"
                            >
                              <img
                                alt="gallery"
                                className="block w-[350px] rounded-lg object-cover object-center"
                                src={images19}
                              />
                            </a>
                          </div>
                        </div>
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

export default Ecommerce;

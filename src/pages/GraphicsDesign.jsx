import React from "react";
import Lottie from "lottie-react";
import anime from "../Lottie-data/graphics-design.json";
import { MdOutlineBrandingWatermark } from "react-icons/md";
import { MdOutlineDesignServices } from "react-icons/md";
import { GiTargetPoster } from "react-icons/gi";
import { MdOutlinePermMedia } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import { BiFingerprint } from "react-icons/bi";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useState } from "react";

import WebDesignCard from "../Components/WebDesign";
import PricingCard from "../Components/PricingCard";
import GetQuote from "../Components/GetQuote";

const GraphicsDesign = () => {
  const [openModal, setOpenModal] = useState();


  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
      <Navbar />
      <div className="main-bg md:px-24">
        <div className="pt-[147px] flex md:flex-row items-center">
          <div>
            <h1 className="main-banner-heading mt-4 text-3xl sm:text-5xl md:text-[4.5rem] text-white font-[nexa] font-bold leading-tight  md:text-left">
              Graphics{" "}
              <span className="power-text mx-4 span-color bg-clip-text text-[#f58020]">
                Design
              </span>
            </h1>

            <p className="leading-normal text-white opacity-75 mt-6 font-[poppins] text-base md:text-[21px] mb-8 md:text-left">
              Unleash the power of visual communication with our exceptional
              Graphic Design Services. From captivating brand identities to
              stunning marketing collateral, our creative expertise brings your
              vision to life and leaves a lasting impression on your audience.
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
              Choose us as your graphic design partner, and experience the art
              of storytelling through visuals. Our talented team of designers
              combines creativity with strategic thinking to deliver designs
              that not only look great but also convey your brand's message
              effectively.
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
                  <MdOutlineBrandingWatermark />
                </div>
                <div className="text-center">
                  <h1 className="text-white mt-4 md:text-[24px] opacity-75 font-[poppins] font-semibold ">
                    Custom Branding and Identity
                  </h1>
                  <p className="text-white opacity-75 font-[poppins]">
                    Tailored brand identities that reflect your unique essence
                    and resonate with your target audience.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-4 p-6">
              <div className="">
                <div className="bg-[#f58020] text-[42px] font-bold text-white w-[100px] flex justify-center items-center rounded-full h-[100px] mx-auto">
                  <MdOutlineDesignServices />
                </div>
                <div className="text-center">
                  <h1 className="text-white mt-4 md:text-[24px] opacity-75 font-[poppins] font-semibold ">
                    Logo Design and Brandmarks
                  </h1>
                  <p className="text-white opacity-75 font-[poppins]">
                    Eye-catching logos and brandmarks that leave a lasting
                    impression and establish brand recognition.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-4 p-6">
              <div className="">
                <div className="bg-[#f58020] text-[42px] font-bold text-white w-[100px] flex justify-center items-center rounded-full h-[100px] mx-auto">
                  <GiTargetPoster />
                </div>
                <div className="text-center">
                  <h1 className="text-white mt-4 md:text-[24px] opacity-75 font-[poppins] font-semibold ">
                    Marketing Collateral Design
                  </h1>
                  <p className="text-white opacity-75 font-[poppins]">
                    Captivating designs for brochures, flyers, posters, and
                    other marketing materials that engage and convert.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-4 p-6">
              <div className="">
                <div className="bg-[#f58020] text-[42px] font-bold text-white w-[100px] flex justify-center items-center rounded-full h-[100px] mx-auto">
                  <MdOutlinePermMedia />
                </div>
                <div className="text-center">
                  <h1 className="text-white mt-4 md:text-[24px] opacity-75 font-[poppins] font-semibold ">
                    Web and Social Media Graphics
                  </h1>
                  <p className="text-white opacity-75 font-[poppins]">
                    Visually stunning graphics for websites, social media posts,
                    and online advertising campaigns.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-4 p-6">
              <div className="">
                <div className="bg-[#f58020] text-[42px] font-bold text-white w-[100px] flex justify-center items-center rounded-full h-[100px] mx-auto">
                  <BsPeople />
                </div>
                <div className="text-center">
                  <h1 className="text-white mt-4 md:text-[24px] opacity-75 font-[poppins] font-semibold ">
                    Illustrations and Infographics
                  </h1>
                  <p className="text-white opacity-75 font-[poppins]">
                    Artistic illustrations and informative infographics that
                    simplify complex ideas and enhance engagement.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-4 p-6">
              <div className="">
                <div className="bg-[#f58020] text-[42px] font-bold text-white w-[100px] flex justify-center items-center rounded-full h-[100px] mx-auto">
                  <BiFingerprint />
                </div>
                <div className="text-center">
                  <h1 className="text-white mt-4 md:text-[24px] opacity-75 font-[poppins] font-semibold ">
                    Print and Packaging Design
                  </h1>
                  <p className="text-white opacity-75 font-[poppins]">
                    Striking print designs and packaging solutions that elevate
                    your products and create a memorable brand experience.
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

              <div className="mt-6 relative rounded-3xl  backdrop-blur-xl bg-white/30">
                <WebDesignCard />
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

export default GraphicsDesign;

import React from "react";
import Lottie from "lottie-react";
import anime from "../Lottie-data/animation_lkktsa78";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { MdAnimation } from "react-icons/md";
import { TbBrandStorytel } from "react-icons/tb";
import { MdOutlineRecordVoiceOver } from "react-icons/md";
import { MdAutoAwesomeMotion } from "react-icons/md";
import { GiPlatform } from "react-icons/gi";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import PricingCard from "../Components/PricingCard";
import AnimationCard from "../Components/Animation";

import { useState, useEffect } from "react";
import GetQuote from "../Components/GetQuote";

const Animation = () => {
  const [openModal, setOpenModal] = useState();


  return (
    <div>
      <Navbar />
      <div className="main-bg md:px-24">
        <div className="pt-[147px] flex md:flex-row items-center">
          <div>
            <h1 className="main-banner-heading mt-4 text-3xl sm:text-5xl md:text-[4.5rem] text-white font-[nexa] font-bold leading-tight  md:text-left">
              Animation
            </h1>

            <p className="leading-normal text-white opacity-75 mt-6 font-[poppins] text-base md:text-[21px] mb-8 md:text-left">
              Unleash creativity and captivate your audience with our
              exceptional Animation Services. Whether you need eye-catching
              explainer videos, engaging character animations, or stunning
              motion graphics, we bring stories to life with our artistic
              expertise.
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

        <div className="flex flex-col mt-20 md:px-20">
          <div className="">
            <h1 className="main-banner-heading text-center mb-12 mt-4 text-2xl sm:text-4xl md:text-[3.5rem] text-white font-[nexa] font-bold leading-tight">
              Why Choose Us
            </h1>
            <p className="leading-normal text-white opacity-75 mt-6 font-[poppins] text-base md:text-[21px] mb-8 md:text-center">
              Select us as your animation partner, and discover a world of
              imagination and storytelling. Our team of talented animators and
              designers breathe life into your ideas, delivering visually
              striking animations that leave a lasting impact on your viewers.
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
                  <MdOutlineDashboardCustomize />
                </div>
                <div className="text-center">
                  <h1 className="text-white mt-4 md:text-[24px] opacity-75 font-[poppins] font-semibold ">
                    Custom Animation Solutions
                  </h1>
                  <p className="text-white opacity-75 font-[poppins]">
                    Tailored animations that cater to your specific
                    requirements, brand identity, and target audience.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-4 p-6">
              <div className="">
                <div className="bg-[#f58020] text-[42px] font-bold text-white w-[100px] flex justify-center items-center rounded-full h-[100px] mx-auto">
                  <MdAnimation />
                </div>
                <div className="text-center">
                  <h1 className="text-white mt-4 md:text-[24px] opacity-75 font-[poppins] font-semibold ">
                    2D and 3D Animation
                  </h1>
                  <p className="text-white opacity-75 font-[poppins]">
                    Versatile expertise in both 2D and 3D animation techniques,
                    offering dynamic and visually captivating results.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-4 p-6">
              <div className="">
                <div className="bg-[#f58020] text-[42px] font-bold text-white w-[100px] flex justify-center items-center rounded-full h-[100px] mx-auto">
                  <TbBrandStorytel />
                </div>
                <div className="text-center">
                  <h1 className="text-white mt-4 md:text-[24px] opacity-75 font-[poppins] font-semibold ">
                    Storyboarding and Scripting
                  </h1>
                  <p className="text-white opacity-75 font-[poppins]">
                    Detailed planning and script development to ensure a
                    compelling and cohesive animation narrative.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-4 p-6">
              <div className="">
                <div className="bg-[#f58020] text-[42px] font-bold text-white w-[100px] flex justify-center items-center rounded-full h-[100px] mx-auto">
                  <MdOutlineRecordVoiceOver />
                </div>
                <div className="text-center">
                  <h1 className="text-white mt-4 md:text-[24px] opacity-75 font-[poppins] font-semibold ">
                    Professional Voiceovers
                  </h1>
                  <p className="text-white opacity-75 font-[poppins]">
                    Access to a vast pool of professional voice talents to bring
                    characters and stories to life through captivating
                    voiceovers.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-4 p-6">
              <div className="">
                <div className="bg-[#f58020] text-[42px] font-bold text-white w-[100px] flex justify-center items-center rounded-full h-[100px] mx-auto">
                  <MdAutoAwesomeMotion />
                </div>
                <div className="text-center">
                  <h1 className="text-white mt-4 md:text-[24px] opacity-75 font-[poppins] font-semibold ">
                    Motion Graphics and Visual Effects
                  </h1>
                  <p className="text-white opacity-75 font-[poppins]">
                    Enhance your videos with mesmerizing motion graphics and
                    seamless visual effects.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-4 p-6">
              <div className="">
                <div className="bg-[#f58020] text-[42px] font-bold text-white w-[100px] flex justify-center items-center rounded-full h-[100px] mx-auto">
                  <GiPlatform />
                </div>
                <div className="text-center">
                  <h1 className="text-white mt-4 md:text-[24px] opacity-75 font-[poppins] font-semibold ">
                    Animation for Various Platforms
                  </h1>
                  <p className="text-white opacity-75 font-[poppins]">
                    Adaptability to create animations for web, social media,
                    presentations, commercials, and more.
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

             <div id="projects" className="mt-6 relative rounded-3xl  backdrop-blur-xl bg-white/30">
                <AnimationCard />
              </div>
            </div>

             <div id="pricing" className="my-40">
            <PricingCard
            firstTitle="Silver Plan"
            secondTitle="Gold Plan"
            thirdTitle="Platinum Plan"
            firstPrice="$99"
            firstDiscount="$200"
            secondPrice="$199"
            seoncdDiscount="$300"
            thirdPrice="$400"
            thirdDiscount="$299"

            WebDesignMsg1="15 Sec Video"
            WebDesignMsg2="Script Writing"
            WebDesignMsg3="Storyboard & Characters"
            WebDesignMsg4="Voiceover"
            WebDesignMsg5="Animation"
            WebDesignMsg6="Finalized & Published"
            WebDesignMsg7=""
            WebDesignMsg8=""

            WebDesignMsg9="30 Sec Video"
            WebDesignMsg10="Script Writing"
            WebDesignMsg11="Storyboard & Characters"
            WebDesignMsg12="Voiceover"
            WebDesignMsg13="Animation"
            WebDesignMsg14="Finalized & Published"
            WebDesignMsg15=""
            WebDesignMsg16=""

            WebDesignMsg17="60 Sec Video"
            WebDesignMsg18="Script Writing"
            WebDesignMsg19="Storyboard & Characters"
            WebDesignMsg20="Voiceover"
            WebDesignMsg21="Animation"
            WebDesignMsg22="Finalized & Published"
            WebDesignMsg23=""
            WebDesignMsg24=""
            WebDesignMsg25=""
            WebDesignMsg26=""
          />
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

export default Animation;

import React from "react";
import Lottie from "lottie-react";
import anime from "../Lottie-data/animation_lkclzw42.json";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { MdOutlineDesignServices } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import { CgPerformance } from "react-icons/cg";
import { AiFillEdit } from "react-icons/ai";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import PricingCard from "../Components/PricingCard";
import MobileAppCard from "../Components/MobileApp";
import { useState, useEffect } from "react";
import GetQuote from "../Components/GetQuote";
import Mobile1 from "../assets/mobileapps/app1.png";

const MobileApp = () => {
  const [openModal, setOpenModal] = useState();

  return (
    <div>
      <Navbar />
      <div className="main-bg px-6 md:px-24">
        <div className="pt-[147px] flex flex-col md:flex-row items-center">
          <div>
            <h1 className="main-banner-heading mt-4 text-3xl sm:text-5xl md:text-[4.5rem] text-white font-[nexa] font-bold leading-tight  md:text-left">
              Mobile{" "}
              <span className="power-text mx-4 span-color bg-clip-text text-[#f58020]">
                Development
              </span>
            </h1>

            <p className="leading-normal text-white opacity-75 mt-6 font-[poppins] text-base md:text-[21px] mb-8 md:text-left">
              At FameItech, we take immense pride in creating and consistently
              updating our developed mobile applications, regardless of their
              platform. Our resolute and certified team of application
              developers is dedicated to utilizing multifarious modern and
              cutting-edge methods for designing, developing, and evolving
              mobile applications over time.
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
              Choose us for mobile app development excellence. With a skilled
              team, proven track record, and user-centric approach, we craft
              standout apps with cutting-edge technology. Trust us for seamless
              integration, robust security, and unwavering support, ensuring
              your app's enduring success.
            </p>
          </div>
        </div>

        <div className="flex flex-col mt-40 ">
          <div className="">
            <h1 className="main-banner-heading text-center mb-12 mt-4 text-2xl sm:text-4xl md:text-[3.5rem] text-white font-[nexa] font-bold leading-tight">
              Features
            </h1>
          </div>
          <div className="grid grid-cols-12 gap-8 justify-center items-center">
            <div className="col-span-12 flex justify-center  md:col-span-5 p-6">
              <img src={Mobile1} />
            </div>

            <div className="col-span-12 md:col-span-7 p-6">
              <div>
                <div className="flex mb-8">
                  <div className=" text-[62px] font-bold text-white w-[180px] h-[100px] mr-3 flex justify-center items-center rounded-full">
                    <IoIosNotificationsOutline className="" />
                  </div>
                  <div>
                    <h1 className="text-white md:text-[24px] opacity-75 font-[poppins] font-semibold ">
                      Notifications
                    </h1>
                    <p className="text-white opacity-75 font-[poppins]">
                      Engage and retain users effectively with seamless
                      integration of push notifications to keep them informed
                      and connected to your app's latest updates and offerings.
                    </p>
                  </div>
                </div>

                <div className="flex mb-8">
                  <div className=" text-[62px] font-bold text-white w-[180px] h-[100px] mr-3 flex justify-center items-center rounded-full">
                    <AiOutlineSecurityScan />
                  </div>
                  <div>
                    <h1 className="text-white md:text-[24px] opacity-75 font-[poppins] font-semibold ">
                      Security
                    </h1>
                    <p className="text-white opacity-75 font-[poppins]">
                      Safeguard sensitive user data and ensure app integrity
                      with robust encryption and advanced security measures,
                      providing users with peace of mind.
                    </p>
                  </div>
                </div>

                <div className="flex mb-8">
                  <div className="text-[62px] font-bold text-white w-[180px] h-[100px] mr-3 flex justify-center items-center rounded-full">
                    <MdOutlineDesignServices />
                  </div>
                  <div>
                    <h1 className="text-white md:text-[24px] opacity-75 font-[poppins] font-semibold ">
                      UI/UX
                    </h1>
                    <p className="text-white opacity-75 font-[poppins]">
                      Create intuitive and visually appealing interfaces that
                      enhance user satisfaction, making your app a joy to use
                      and increasing overall engagement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="grid grid-cols-12 gap-8 justify-center items-center">
            
          <div className="col-span-12 md:col-span-7 p-6">
              <div>
                <div className="flex mb-8">
                  <div className=" text-[62px] font-bold text-white w-[180px] h-[100px] mr-3 flex justify-center items-center rounded-full">
                    <RxUpdate  className="" />
                  </div>
                  <div>
                    <h1 className="text-white md:text-[24px] opacity-75 font-[poppins] font-semibold ">
                    Updates
                    </h1>
                    <p className="text-white opacity-75 font-[poppins]">
                    Stay ahead of the curve with regular app updates, ensuring
                    compatibility with the latest OS versions and introducing
                    new features to keep users delighted.
                  </p>
                  </div>
                </div>

                <div className="flex mb-8">
                  <div className=" text-[62px] font-bold text-white w-[180px] h-[100px] mr-3 flex justify-center items-center rounded-full">
                    <CgPerformance  />
                  </div>
                  <div>
                    <h1 className="text-white md:text-[24px] opacity-75 font-[poppins] font-semibold ">
                    Performance
                    </h1>
                    <p className="text-white opacity-75 font-[poppins]">
                    Optimize app performance for lightning-fast loading times
                    and smooth interactions, providing a seamless user
                    experience even in high-demand scenarios.
                  </p>
                  </div>
                </div>

                <div className="flex mb-8">
                  <div className="text-[62px] font-bold text-white w-[180px] h-[100px] mr-3 flex justify-center items-center rounded-full">
                    <MdOutlineDesignServices />
                  </div>
                  <div>
                    <h1 className="text-white md:text-[24px] opacity-75 font-[poppins] font-semibold ">
                      UI/UX
                    </h1>
                    <p className="text-white opacity-75 font-[poppins]">
                      Create intuitive and visually appealing interfaces that
                      enhance user satisfaction, making your app a joy to use
                      and increasing overall engagement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 flex justify-center  md:col-span-5 p-6">
              <img src={Mobile1} />
            </div>

            
          </div>



          <div>
            <div className="flex flex-col mt-20 md:px-20">
              <h1 className="main-banner-heading text-center mb-12 mt-4 text-2xl sm:text-4xl md:text-[3.5rem] text-white font-[nexa] font-bold leading-tight">
                Our Work
              </h1>

              <div
                id="projects"
                className="mt-6 relative rounded-3xl  backdrop-blur-xl bg-white/30"
              >
                <MobileAppCard />
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

export default MobileApp;

import Lottie from "lottie-react";
import anime from "../assets/laptop.json";
import growth from "../assets/vectors/growth.jpg";

import { BsFillRocketTakeoffFill } from 'react-icons/bs';
import { IoIosPeople } from 'react-icons/io';
import { GiReceiveMoney } from 'react-icons/gi';



const Branding = () => {
  return (
    <div className="bg-white rounded-t-[50px]">
      <div className="w-full pt-20  px-8 md:px-24 md:pr-0 mx-auto">
        <div className="flex flex-col justify-between items-center md:flex-row">
          <div>
            <img
              className="w-auto md:w-[500px] mt-[0px]"
              src={growth}
            ></img>
          </div>
          <div className="xl:basis-2/4">
            <h1 className="main-banner-heading relative mt-4 mb-12 text-3xl sm:text-5xl md:text-[5rem] text-[#212121] font-[nexa] font-bold leading-tight  md:text-left">
              Business
              <span className="mx-4 span-color bg-clip-text text-[#f58020]">
                Growth
              </span>
            </h1>
            <ul>
              <li className="flex items-center justify-start mb-8">
                <BsFillRocketTakeoffFill className="text-[#f58020] text-[32px] md:text-[52px]" />
                <p className="leading-normal text-[#212121] opacity-75 ml-6 pr-20 font-sans font-medium text-base md:text-[26px] md:text-left">
                  Boosting Brands
                </p>
              </li>
              <li className="flex items-center justify-start mb-7">
                <IoIosPeople className="text-[#f58020] text-[32px] md:text-[72px]"/>
                <p className="leading-normal text-[#212121] opacity-75 ml-4 pr-20 font-sans font-medium text-base md:text-[26px] md:text-left">
                  Targeting Leads
                </p>
              </li>
              <li className="flex items-center justify-start mb-8">
              <GiReceiveMoney className="text-[#f58020] text-[32px] md:text-[72px]" />
                <p className="leading-normal text-[#212121] opacity-75 ml-6 pr-20 font-sans font-medium text-base md:text-[26px] md:text-left">
                  Maximizing ROI
                </p>
              </li>
            </ul>
            <div className="flex justify-end px-16">
            <button className="bg-white mr-0 md:mr-[22px] shadow-md z-20 text-black opacity-75 md:py-3 py-2 md:px-5 px-3 rounded-full font-sans font-medium text-[12px] md:text-[18px]">
              Learn more
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branding;

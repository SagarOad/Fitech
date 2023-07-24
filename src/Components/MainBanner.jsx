import tech from "../assets/newBanner.png";

import { useState, useEffect } from "react";

import { TbDiscountCheckFilled } from "react-icons/tb";
// import Lottie from "lottie-react"
import logo from "../assets/newLogo.png";
import GetQuote from "./GetQuote";
import Navbar from "./Navbar";
// import AnimeData from "../assets/main-anime.json"

const MainBanner = () => {
  const [openModal, setOpenModal] = useState();
  const [text, setText] = useState("");
  const [fullText] = useState("INNOVATION");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 120);
    }
  }, [index]);

  return (
    <div id="main-banner" className="">
      <Navbar />

      <div className="px-8 md:px-24 pt-[147px] flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start ">
          <div className="flex items-center w-[280px] sm:w-auto backdrop-blur-xl bg-white/30 rounded-xl py-3 px-6   ">
            <TbDiscountCheckFilled className="text-[22px] mr-4 text-white font-bold" />
            <h1 className="leading-normal text-white opacity-75  font-[poppins] text-[16px] sm:text-[21px]">
              50% Discount For 1 Month
            </h1>
          </div>

          <h1 className="main-banner-heading mt-4 text-3xl sm:text-5xl md:text-[4.5rem] text-white font-[nexa] font-bold leading-tight  md:text-left">
            UNLEASH THE
            <span
              id="typed"
              className="power-text mx-4 span-color bg-clip-text text-[#f58020]"
            >
              POWER
            </span>
            OF DIGITAL
          </h1>
          <h1 className="text-3xl sm:text-5xl md:text-[4.5rem] text-white font-[nexa] font-bold leading-tight md:text-left">
            {text}
          </h1>

          <p className="leading-normal text-white opacity-75 font-[poppins] text-base md:text-[21px] mb-8 md:text-left">
            Unlock digital excellence with us. Elevate your brand's potential
            and achieve success in the digital realm.
          </p>
        </div>
        <div className="w-full xl:w-3/5  overflow-hidden">
          {/* <EarthAnime /> */}
          <img className="opacity-80 ml-auto w-[600px]" src={tech} />
          {/* <Lottie className="opacity-80 ml-auto w-[700px]" animationData={AnimeData}></Lottie> */}
          {/* <img className="opacity-90 ml-auto" src={arm} /> */}
        </div>
      </div>

      {openModal && (
        <GetQuote closeModal={setOpenModal} Title="Request a Quote" />
      )}
    </div>
  );
};

export default MainBanner;

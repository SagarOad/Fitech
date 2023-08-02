import tech from "../assets/newBanner.png";

import { useState, useEffect } from "react";

import { TbDiscountCheckFilled } from "react-icons/tb";
// import Lottie from "lottie-react"
import logo from "../assets/newLogo.png";
import GetQuote from "./GetQuote";
import Navbar from "./Navbar";
// import AnimeData from "../assets/main-anime.json"
import { NavLink } from "react-router-dom";
import bgImg from "../assets/webdesign/3274408.jpg"

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

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleDropdownClose = () => {
    setDropdownVisible(false);
  };

  return (
    <div id="main-banner" className=" mb-20">
      <nav className="backdrop-blur-xl bg-white/30 py-3 px-6 mb-12 md:px-24 mx-auto fixed w-full z-20 top-0 left-0">
        <div className="flex flex-wrap items-center justify-between mx-auto">
          <a href="#main-banner" className="flex items-center cursor-pointer">
            <img src={logo} className="md:w-[138px] w-[120px]" />
          </a>
          <div className="flex md:order-2 md:flex-row flex-col-reverse">
            <button
              onClick={() => {
                setOpenModal(true);
              }}
              className="get-started mr-0 md:mr-[22px] z-20 text-white opacity-75 md:py-3 py-2 md:px-5 px-3 rounded-lg font-[poppins] text-[12px] md:text-[18px]"
            >
              Request a Quote
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex justify-end items-center p-2 text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-transparent dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
            onMouseLeave={handleDropdownClose}
            onClick={handleDropdownToggle}
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li className="py-2 pl-[3.75rem] md:py-0 md:border-0 border-t-2 border-white text-end">
            <div className="group relative cursor-pointer">
              <div>
                <a
                  data-dropdown-toggle="dropdownHover"
                  data-dropdown-trigger="hover"
                  id="dropdownHoverButton"
                  href="#services"
                  className="text-white menu-hover hover:text-[#f58020] font-[nexa-light] text-[18px] md:text-[18px]"
                  aria-current="page"
                  onMouseEnter={handleDropdownToggle}
                >
                  Services
                </a>
              </div>
              <div
                className={`${
                  isDropdownVisible ? "block" : "hidden"
                } invisible md:visible w-64 absolute z-50 flex font-[poppins] flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl`}
              >
                <NavLink to="/servicepage">
                  <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-[#f58020] md:mx-2">
                    Mobile Application
                  </a>
                </NavLink>
                <NavLink to="/ecommerce">
                  <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-[#f58020] md:mx-2">
                    Web Development
                  </a>
                </NavLink>
                <NavLink to="/digitalmarketing">
                  <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-[#f58020] md:mx-2">
                    Digital Marketing
                  </a>
                </NavLink>
                <NavLink to="/animation">
                  <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-[#f58020] md:mx-2">
                    2D / 3D Animation
                  </a>
                </NavLink>
                <NavLink to="/graphicsdesign">
                  <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-[#f58020] md:mx-2">
                    Graphics Design
                  </a>
                </NavLink>
                <NavLink to="/softwaredevelopment">
                  <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-[#f58020] md:mx-2">
                    Software Development
                  </a>
                </NavLink>
              </div>
            </div>
          </li>
              <li className="pl-[3.75rem] py-2 md:py-0 md:border-0 border-t-2 border-white text-end">
                <a
                  href="#projects"
                  className="text-white hover:text-[#f58020] font-[nexa-light] text-[18px] md:text-[18px]"
                >
                  Projects
                </a>
              </li>
              <li className="pl-[3.75rem] py-2 md:py-0 md:border-0 border-t-2 border-white text-end">
                <a
                  href="#pricing"
                  className="text-white hover:text-[#f58020] font-[nexa-light] text-[18px] md:text-[18px]"
                >
                  Prices
                </a>
              </li>
              <li className="pl-[3.75rem] py-2 md:py-0 md:border-0 border-t-2 border-white text-end">
                <NavLink to="/about">
                <a
                  href="#pricing"
                  className="text-white hover:text-[#f58020] font-[nexa-light] text-[18px] md:text-[18px]"
                >
                  About
                </a>
                </NavLink>
              </li>
              <li className="pl-[3.75rem] py-2 md:py-0 md:border-0 border-t-2 border-white text-end">
                <a
                  href="#contact"
                  className="text-white hover:text-[#f58020] font-[nexa-light] text-[18px] md:text-[18px]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

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

import tech from "../assets/newBanner.png";

import { useState, useEffect } from "react";

import { TbDiscountCheckFilled } from "react-icons/tb";
// import Lottie from "lottie-react"
import logo from "../assets/fame-itech-png.png";
import GetQuote from "./GetQuote";
import Navbar from "./Navbar";
// import AnimeData from "../assets/main-anime.json"
import { NavLink } from "react-router-dom";
import bgImg from "../assets/webdesign/3274408.jpg";
import shineSvt from "../assets/header-illustration.svg";

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
    <div id="main-banner" className=" pt-3">
      <nav className="bg-white shadow-md rounded-full py-4 px-6 mb-12 md:px-14 mx-auto w-[85%] z-20">
        <div className="flex flex-wrap items-center justify-between mx-auto">
          <div className="flex justify-center">
            <a
              href="#main-banner"
              className="flex items-center cursor-pointer mr-12"
            >
              <img src={logo} className="md:w-[168px] w-[120px]" />
            </a>

            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
              onMouseLeave={handleDropdownClose}
              onClick={handleDropdownToggle}
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0">
                <li className="py-2 pl-[2rem] md:py-0 md:border-0 border-t-2 border-white text-end">
                  <div className="group relative cursor-pointer">
                    <div>
                      <a
                        data-dropdown-toggle="dropdownHover"
                        data-dropdown-trigger="hover"
                        id="dropdownHoverButton"
                        href="#services"
                        className="text-[#212121] menu-hover hover:text-[#f58020] font-sans font-medium text-[18px] md:text-[19px]"
                        aria-current="page"
                        onMouseEnter={handleDropdownToggle}
                      >
                        Services
                      </a>
                    </div>
                    <div
                      className={`${
                        isDropdownVisible ? "block" : "hidden"
                      } invisible md:visible w-64 absolute z-50 flex font-sans font-medium flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl`}
                    >
                      <NavLink to="/servicepage">
                        <a className="my-2 block border-b border-gray-100 py-1 font-medium text-gray-500 hover:text-[#f58020] md:mx-2">
                          Mobile Application
                        </a>
                      </NavLink>
                      <NavLink to="/ecommerce">
                        <a className="my-2 block border-b border-gray-100 py-1 font-medium text-gray-500 hover:text-[#f58020] md:mx-2">
                          Web Development
                        </a>
                      </NavLink>
                      <NavLink to="/digitalmarketing">
                        <a className="my-2 block border-b border-gray-100 py-1 font-medium text-gray-500 hover:text-[#f58020] md:mx-2">
                          Digital Marketing
                        </a>
                      </NavLink>
                      <NavLink to="/animation">
                        <a className="my-2 block border-b border-gray-100 py-1 font-medium text-gray-500 hover:text-[#f58020] md:mx-2">
                          2D / 3D Animation
                        </a>
                      </NavLink>
                      <NavLink to="/graphicsdesign">
                        <a className="my-2 block border-b border-gray-100 py-1 font-medium text-gray-500 hover:text-[#f58020] md:mx-2">
                          Graphics Design
                        </a>
                      </NavLink>
                      <NavLink to="/softwaredevelopment">
                        <a className="my-2 block border-b border-gray-100 py-1 font-medium text-gray-500 hover:text-[#f58020] md:mx-2">
                          Software Development
                        </a>
                      </NavLink>
                    </div>
                  </div>
                </li>
                <li className="pl-[2rem] py-2 md:py-0 md:border-0 border-t-2 border-white text-end">
                  <a
                    href="#projects"
                    className="text-[#212121] hover:text-[#f58020] font-sans font-medium text-[18px] md:text-[19px]"
                  >
                    Projects
                  </a>
                </li>
                <li className="pl-[2rem] py-2 md:py-0 md:border-0 border-t-2 border-white text-end">
                  <a
                    href="#pricing"
                    className="text-[#212121] hover:text-[#f58020] font-sans font-medium text-[18px] md:text-[19px]"
                  >
                    Prices
                  </a>
                </li>
                <li className="pl-[2rem] py-2 md:py-0 md:border-0 border-t-2 border-white text-end">
                  <NavLink to="/about">
                    <a
                      href="#pricing"
                      className="text-[#212121] hover:text-[#f58020] font-sans font-medium text-[18px] md:text-[19px]"
                    >
                      About
                    </a>
                  </NavLink>
                </li>
                <li className="pl-[2rem] py-2 md:py-0 md:border-0 border-t-2 border-white text-end">
                  <a
                    href="#contact"
                    className="text-[#212121] hover:text-[#f58020] font-sans font-medium text-[18px] md:text-[19px]"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex md:order-2 md:flex-row flex-col-reverse">
            <button
              onClick={() => {
                setOpenModal(true);
              }}
              className="bg-[#f58020] mr-0 md:mr-[22px] z-20 text-white opacity-75 md:py-3 py-2 md:px-5 px-3 rounded-full font-sans font-medium text-[12px] md:text-[18px]"
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
        </div>
      </nav>

      <div className="flex justify-center items-center pt-16 pb-32">
        <div className="px-8 md:px-24  flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full xl:w-[50%] justify-center lg:items-start ">
            <h1 className="main-banner-heading relative mt-4 mb-5 text-3xl sm:text-5xl md:text-[6rem] text-[#212121] font-[nexa] font-bold leading-tight  md:text-left">
              <span className="flex justify-center absolute left-44 top-[-33px]">
                <img src={shineSvt} className="w-[80px]" />
              </span>{" "}
              Fun <br />
              with Tech
              <br />
              <span
                id="typed"
                className="power-text span-color bg-clip-text text-[#f58020]"
              >
                Magic
              </span>
            </h1>

            <p className="leading-normal text-[#212121] opacity-75 pr-20 font-sans font-medium text-base md:text-[22px] mb-8 md:text-left">
              Unlock digital excellence with us. Elevate your brand's potential
              and achieve success in the digital realm.
            </p>
          </div>
          <div className="w-full xl:w-[50%] rounded-2xl  overflow-hidden">
            {/* <EarthAnime /> */}
            <video
              loop
              autoPlay
              muted
              type="video/mp4"
              src="https://video-previews.elements.envatousercontent.com/h264-video-previews/fcb18010-f6be-43b0-80d6-75cbee4ec03e/27659685.mp4"
            />
            <div className="flex justify-end mt-12">
              <button className="bg-[#f58020] mr-0 md:mr-[22px] z-20 text-white opacity-75 md:py-3 py-2 md:px-5 px-3 rounded-full font-sans font-medium text-[12px] md:text-[19px]">
                Our Work
              </button>
              <button className="bg-[#212121] mr-0 md:mr-[22px] z-20 text-white opacity-75 md:py-3 py-2 md:px-5 px-3 rounded-full font-sans font-medium text-[12px] md:text-[19px]">
                About Us
              </button>
            </div>
            {/* <img className="opacity-80 ml-auto w-[600px]" src={tech} /> */}
            {/* <Lottie className="opacity-80 ml-auto w-[700px]" animationData={AnimeData}></Lottie> */}
            {/* <img className="opacity-90 ml-auto" src={arm} /> */}
          </div>
        </div>
      </div>
      {openModal && (
        <GetQuote closeModal={setOpenModal} Title="Request a Quote" />
      )}
    </div>
  );
};

export default MainBanner;

import React, { useState } from "react";
import logo from "../assets/fame-itech-png.png";
import GetQuote from "./GetQuote";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleDropdownClose = () => {
    setDropdownVisible(false);
  };

  return (
    <div>
      <nav className=" py-4 px-6 mb-6 md:px-14 mx-auto z-20">
        <div className="flex flex-wrap items-center justify-between mx-auto">
          <div className="flex justify-center">
          <NavLink to="/">
            <a
              href="#main-banner"
              className="flex items-center cursor-pointer mr-12"
            >
              <img src={logo} className="md:w-[168px] w-[120px]" />
            </a>
            </NavLink>
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
                    <NavLink to="/"
                     onClick={(event) => {
                      event.preventDefault(); // Prevent default link behavior
                      const servicesSection = document.getElementById('services');
                      if (servicesSection) {
                        servicesSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    >
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
                      </NavLink>
                    </div>
                    <div
                      className={`${
                        isDropdownVisible ? "block" : "hidden"
                      } invisible md:visible w-64 absolute z-50 flex font-sans font-medium flex-col bg-gray-100 py-1 text-gray-800 shadow-xl`}
                    >
                      <NavLink to="/servicepage">
                        <a className="my-2 block border-b border-gray-100 font-medium text-gray-500 px-4 py-2 hover:bg-[#f58020] text-left  hover:text-white md:mx-2">
                          Mobile Application
                        </a>
                      </NavLink>
                      <NavLink to="/ecommerce">
                        <a className="my-2 block border-b border-gray-100 font-medium text-gray-500 px-4 py-2 hover:bg-[#f58020] text-left hover:text-white md:mx-2">
                          Web Development
                        </a>
                      </NavLink>
                      <NavLink to="/digitalmarketing">
                        <a className="my-2 block border-b border-gray-100 font-medium text-gray-500 px-4 py-2 hover:bg-[#f58020] text-left hover:text-white md:mx-2">
                          Social Media Marketing
                        </a>
                      </NavLink>
                      <NavLink to="/animation">
                        <a className="my-2 block border-b border-gray-100 font-medium text-gray-500 px-4 py-2 hover:bg-[#f58020] text-left hover:text-white md:mx-2">
                          2D / 3D Animation
                        </a>
                      </NavLink>
                      <NavLink to="/graphicsdesign">
                        <a className="my-2 block border-b border-gray-100 font-medium text-gray-500 px-4 py-2 hover:bg-[#f58020] text-left hover:text-white md:mx-2">
                          Graphics Design
                        </a>
                      </NavLink>
                      <NavLink to="/softwaredevelopment">
                        <a className="my-2 block border-b border-gray-100 font-medium text-gray-500 px-4 py-2 hover:bg-[#f58020] text-left hover:text-white md:mx-2">
                          Video Editing
                        </a>
                      </NavLink>
                      <NavLink to="/nftdesigning">
                        <a className="my-2 block border-b border-gray-100 font-medium text-gray-500 px-4 py-2 hover:bg-[#f58020] text-left hover:text-white md:mx-2">
                          Nft Designing
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

      {openModal && <GetQuote closeModal={() => setOpenModal(false)} Title="Request a Quote" />}
    </div>
  );
};

export default Navbar;
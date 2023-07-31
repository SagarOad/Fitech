import React from "react";

import logo from "../assets/newLogo.png";
import GetQuote from "./GetQuote";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [openModal, setOpenModal] = useState();
  return (
    <div>
      <nav class="backdrop-blur-xl bg-white/30 py-3 px-6 mb-12 px-6 md:px-24 mx-auto fixed w-full z-20 top-0 left-0">
        <div class="flex flex-wrap items-center justify-between mx-auto">
          <NavLink to="/">
          <a href="#main-banner" class="flex items-center cursor-pointer">
            <img src={logo} className="md:w-[138px] w-[120px]" />
          </a>
          </NavLink>
          <div class="flex md:order-2 md:flex-row flex-col-reverse">
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
              class="inline-flex justify-end items-center p-2 text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-transparent dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
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
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul class="flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li className="pl-[3.75rem] py-2 md:py-0 md:border-0 border-t-2 border-white text-end">
                <NavLink to="/">
                <a
                  class="text-white hover:text-[#f58020] font-[nexa-light] text-[18px] md:text-[18px]"
                >
                  Home
                </a>
                </NavLink>
              </li>
              <li className="py-2 pl-[3.75rem] md:py-0 md:border-0 border-t-2 border-white text-end">
                <div class="group relative cursor-pointer">
                  <div class="">
                    <a
                      data-dropdown-toggle="dropdownHover"
                      data-dropdown-trigger="hover"
                      id="dropdownHoverButton"
                      href="#services"
                      className="text-white menu-hover hover:text-[#f58020] font-[nexa-light] text-[18px] md:text-[18px]"
                      aria-current="page"
                    >
                      Services
                    </a>
                  </div>
                  <div
                    class="invisible w-64 absolute z-50 flex font-[poppins] flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible"
                    onClick=""
                  >
                    <NavLink to="/servicepage">
                    <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-[#f58020] md:mx-2">
                      Mobile Application
                    </a>
                    </NavLink>
                    
                    <NavLink to="/ecommerce">
                    <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-[#f58020] md:mx-2">
                      Ecommerce
                    </a>
                    </NavLink>

                    <NavLink to="/digitalmarketing">
                    <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-[#f58020] md:mx-2">
                      Digital Marketing
                    </a>
                    </NavLink>

                    <NavLink to="/animation">
                    <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-[#f58020] md:mx-2">
                      2D / 3D Animation
                    </a>
                    </NavLink>

                    <NavLink to="/graphicsdesign">
                    <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-[#f58020] md:mx-2">
                      Graphics Desgin
                    </a>
                    </NavLink>

                    <NavLink to="/softwaredevelopment">
                    <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-[#f58020] md:mx-2">
                      Software Development
                    </a>
                    </NavLink>
                  </div>
                </div>
              </li>
              <li className="pl-[3.75rem] py-2 md:py-0 md:border-0 border-t-2 border-white text-end">
                <NavLink to="/#projects">
                <a
                  href="#projects"
                  class="text-white hover:text-[#f58020] font-[nexa-light] text-[18px] md:text-[18px]"
                >
                  Projects
                </a>
                </NavLink>
              </li>
              <li className="pl-[3.75rem] py-2 md:py-0 md:border-0 border-t-2 border-white text-end">
                <NavLink to="/about">
                <a
                  href="#pricing"
                  class="text-white hover:text-[#f58020] font-[nexa-light] text-[18px] md:text-[18px]"
                >
                  Abour Us
                </a>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {openModal && (
        <GetQuote closeModal={setOpenModal} Title="Request a Quote" />
      )}
    </div>
  );
};

export default Navbar;

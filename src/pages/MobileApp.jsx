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

const MobileApp = () => {

const [openModal, setOpenModal] = useState();

  return (
    <div>
      <Navbar />
      <div className="main-bg md:px-24">
        <div className="pt-[147px] flex md:flex-row items-center">
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
              Choose us for mobile app development excellence. With a skilled
              team, proven track record, and user-centric approach, we craft
              standout apps with cutting-edge technology. Trust us for seamless
              integration, robust security, and unwavering support, ensuring
              your app's enduring success.
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
                  <IoIosNotificationsOutline />
                </div>
                <div className="text-center">
                  <h1 className="text-white mt-4 md:text-[24px] opacity-75 font-[poppins] font-semibold ">
                    Notifications
                  </h1>
                  <p className="text-white opacity-75 font-[poppins]">
                    Engage and retain users effectively with seamless
                    integration of push notifications to keep them informed and
                    connected to your app's latest updates and offerings.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-4 p-6">
              <div className="">
                <div className="bg-[#f58020] text-[42px] font-bold text-white w-[100px] flex justify-center items-center rounded-full h-[100px] mx-auto">
                  <AiOutlineSecurityScan />
                </div>
                <div className="text-center">
                  <h1 className="text-white mt-4 md:text-[24px] opacity-75 font-[poppins] font-semibold ">
                    Security
                  </h1>
                  <p className="text-white opacity-75 font-[poppins]">
                    Safeguard sensitive user data and ensure app integrity with
                    robust encryption and advanced security measures, providing
                    users with peace of mind.
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
                    UI/UX
                  </h1>
                  <p className="text-white opacity-75 font-[poppins]">
                    Create intuitive and visually appealing interfaces that
                    enhance user satisfaction, making your app a joy to use and
                    increasing overall engagement.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-4 p-6">
              <div className="">
                <div className="bg-[#f58020] text-[42px] font-bold text-white w-[100px] flex justify-center items-center rounded-full h-[100px] mx-auto">
                  <RxUpdate />
                </div>
                <div className="text-center">
                  <h1 className="text-white mt-4 md:text-[24px] opacity-75 font-[poppins] font-semibold ">
                    Updates
                  </h1>
                  <p className="text-white opacity-75 font-[poppins]">
                    Stay ahead of the curve with regular app updates, ensuring
                    compatibility with the latest OS versions and introducing
                    new features to keep users delighted.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-4 p-6">
              <div className="">
                <div className="bg-[#f58020] text-[42px] font-bold text-white w-[100px] flex justify-center items-center rounded-full h-[100px] mx-auto">
                  <CgPerformance />
                </div>
                <div className="text-center">
                  <h1 className="text-white mt-4 md:text-[24px] opacity-75 font-[poppins] font-semibold ">
                    Performance
                  </h1>
                  <p className="text-white opacity-75 font-[poppins]">
                    Optimize app performance for lightning-fast loading times
                    and smooth interactions, providing a seamless user
                    experience even in high-demand scenarios.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-4 p-6">
              <div className="">
                <div className="bg-[#f58020] text-[42px] font-bold text-white w-[100px] flex justify-center items-center rounded-full h-[100px] mx-auto">
                  <AiFillEdit />
                </div>
                <div className="text-center">
                  <h1 className="text-white mt-4 md:text-[24px] opacity-75 font-[poppins] font-semibold ">
                    Customization
                  </h1>
                  <p className="text-white opacity-75 font-[poppins]">
                    Tailor your app to meet specific business needs and
                    preferences, delivering a unique and personalized experience
                    for your target audience.
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
                <MobileAppCard />
              </div>
            </div>

            <div id="pricing" className="my-40">
              <PricingCard
                firstTitle="Basic Package"
                secondTitle="Premimum Package"
                thirdTitle="Ennterprice Package"
                firstPrice="$6000"
                firstDiscount="$4500"
                secondPrice="$12000"
                seoncdDiscount="$8000"
                thirdPrice="$18000"
                thirdDiscount="$25000"
                WebDesignMsg1="Custom App Deevlopment (IOS/Android)"
                WebDesignMsg2="User Interface (UI) Design"
                WebDesignMsg3="User Experience (UX) Design"
                WebDesignMsg4="Push Notifications Integration"
                WebDesignMsg5="App Store Submission Assistance"
                WebDesignMsg6="Basic App Performance Optimization"
                WebDesignMsg7="Standard Security Measure"
                WebDesignMsg8="1 Platform (IOS or Android)"
                WebDesignMsg9="Everything included in the Basic Package"
                WebDesignMsg10="Cross-Platform App Development (iOS and Android)"
                WebDesignMsg11="App Store Optimization (ASO)"
                WebDesignMsg12="In-App Purchase Integration"
                WebDesignMsg13="Enhanced App Performance Optimization"
                WebDesignMsg14="Advanced Security Features"
                WebDesignMsg15="Backend Development and API Integration"
                WebDesignMsg16="User Authentication and Login"
                WebDesignMsg17="Everything included in the Premium Package"
                WebDesignMsg18="Custom Backend Development"
                WebDesignMsg19="Multi-platform Support (iOS, Android, Web)"
                WebDesignMsg20="Enhanced Security and Data Encryption"
                WebDesignMsg21="Advanced User Authentication and Permissions"
                WebDesignMsg22="Integration of Third-Party Services (e.g., Payment Gateways, Social Media APIs)"
                WebDesignMsg23="Real-time Analytics and Insights"
                WebDesignMsg24="Continuous Integration and Deployment (CI/CD)"
                WebDesignMsg25="Dedicated Project Manager"
                WebDesignMsg26="24/7 Technical Support"
              />
            </div>
            {/* <div className="border-b-2 border-white">
            <section className="my-28 opacity-75">
              <div className="p-4 lg:p-16 border-2 border-white rounded-lg mx-auto max-w-screen-md">
                <h2 className="main-banner-heading text-center mb-6  text-2xl sm:text-4xl md:text-[2.5rem] text-white font-[nexa] font-bold leading-tight">
                  Get a Quote
                </h2>
                <p className="leading-normal text-white opacity-75 mt-6 font-[poppins] text-base md:text-[18px] mb-8 md:text-center">
                  Get in touch with us today and let's bring your idea to life!
                  Fill out the form below, and our team will get back to you
                  promptly.
                </p>
                <form action="#" className="space-y-8 m-0 w-full">
                  <div>
                    <input
                      type="text"
                      id="name"
                      className="service-page-input text-[18px] text-white ring-0 w-full p-4 font-[poppins] rounded-lg bg-transparent"
                      placeholder="Write Name"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      id="email"
                      className="service-page-input text-[18px] text-white ring-0 w-full p-4 font-[poppins] rounded-lg bg-transparent"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      id="subject"
                      className="service-page-input text-[18px] text-white ring-0 w-full p-4 font-[poppins] rounded-lg bg-transparent"
                      placeholder="Your Contact"
                      required
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <textarea
                      id="message"
                      rows="4"
                      className="service-page-input text-[18px] text-white ring-0 w-full p-4 font-[poppins] rounded-lg bg-transparent"
                      placeholder="Leave a comment..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="contact-btn text-[21px] text-white font-[poppins]"
                  >
                    Send message
                  </button>
                </form>
              </div>
            </section>
          </div> */}
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

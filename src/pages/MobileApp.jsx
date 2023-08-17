import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useState, useEffect } from "react";
import GetQuote from "../Components/GetQuote";

import mobApp from "../assets/vectors/mobileDev.png";
import growth from "../assets/vectors/growth.jpg";
import mob1 from "../assets/mobileapps/1 (4).png";
import mob2 from "../assets/mobileapps/2 (5).png";
import Mobile from "../Components/MobileApp";
import ContactSection from "../Components/ContactSection";

const MobileApp = () => {
  const [openModal, setOpenModal] = useState();

  return (
    <div id="mobile-app" className="bg-[#F8F6F2] leading-normal tracking-normal text-indigo-400 bg-cover bg-fixed">
      <Navbar />
      <div className=" pt-6 pb-32">
        <div className="px-8 md:px-24  flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full xl:w-[50%] justify-center lg:items-start ">
            <h1 className="main-banner-heading relative mt-4 mb-5 text-3xl md:text-[4rem] text-[#212121] font-[nexa] font-bold leading-tight  md:text-left">
              <span className="flex justify-center absolute left-44 top-[-33px]">
                {/* <img src={shineSvt} className="w-[80px]" /> */}
              </span>{" "}
              Mobile <br />
              Application
              <br />
              <span
                id="typed"
                className="power-text span-color bg-clip-text text-[#f58020]"
              >
                Development
              </span>
            </h1>

            <p className="leading-normal text-[#212121] opacity-75 md:pr-20 font-sans font-medium text-base md:text-[18px] mb-8 md:text-left">
              Our Expertise in Crafting Customized Mobile Apps That Bring Your
              Vision to Life.
            </p>
          </div>
          <div className="w-full xl:w-[50%] rounded-2xl  overflow-hidden">
            <img src={mobApp} className="w-[550px] mx-auto" />
          </div>
        </div>
      </div>

      <div className="pt-16 bg-[#f69e55]">
        <h1 className="services2-heading text-center mb-6 text-3xl md:text-[3.5rem] text-[#212121] font-[nexa] opacity-95 font-bold leading-[70px]">
          App Portfolio
        </h1>
        <Mobile />

        <div className=" my-6  w-[56%] flex p-4 ml-auto font-bold items-center">
        <h1 className="leading-normal  text-[#f58020]  font-sans font-medium text-[30px] md:text-[32px] md:text-center">
          For complete portfolio, please don't hesitate to get in
        </h1>
        <h1 className="leading-normal ml-2 text-white bg-[#f58020] rounded-2xl px-4 font-sans font-medium text-[30px] md:text-[32px]">touch with us.</h1>
      </div>
      </div>

      <div className="rounded-[50px]">
        <div className="w-full py-28 px-8 md:px-24 md:pr-0 mx-auto">
          <div className="md:flex mb-24">
            <div className="xl:basis-2/6">
              <img
                className="w-auto md:w-[280px] mt-[0px] mx-auto"
                src={mob1}
              ></img>
            </div>
            <div className="xl:basis-4/6">
              <div>
                <h1 className="main-banner-heading relative mt-4 mb-6 text-[24px] md:text-[36px]  text-[#212121] font-[nexa] font-bold leading-tight  md:text-left">
                  What makes an App great?
                </h1>
                <p className="leading-normal text-[#212121] opacity-75 md:pr-20 font-sans font-medium text-base md:text-[18px] mb-8 md:text-left">
                  In today's digital landscape, the demand for mobile
                  applications is higher than ever before. However, not all apps
                  achieve the desired success. So, what sets apart a truly great
                  app from the rest? Let's delve into the key ingredients that
                  contribute to the success of a remarkable mobile application.
                </p>

                <div>
                  <ul className="">
                    <li>
                      <p className="leading-normal text-[#212121] opacity-75 pr-20 font-sans font-medium text-base md:text-[18px] mb-4 md:text-left">
                        <span className="font-[nexa] text-[18px] mr-2">
                          User-Centric Design:
                        </span>
                        Prioritize intuitive navigation and a clean interface
                        for a seamless user experience.
                      </p>
                    </li>
                    <li>
                      <p className="leading-normal text-[#212121] opacity-75 pr-20 font-sans font-medium text-base md:text-[18px] mb-4 md:text-left">
                        <span className="font-[nexa] text-[18px] mr-2">
                          Purposeful Functionality:
                        </span>
                        Include features that add clear value to the user,
                        avoiding unnecessary complexity.
                      </p>
                    </li>
                    <li>
                      <p className="leading-normal text-[#212121] opacity-75 pr-20 font-sans font-medium text-base md:text-[18px] mb-4 md:text-left">
                        <span className="font-[nexa] text-[18px] mr-2">
                          Performance and Speed:
                        </span>
                        Optimize the app for speed and responsiveness to ensure
                        a smooth user experience.
                      </p>
                    </li>
                    <li>
                      <p className="leading-normal text-[#212121] opacity-75 pr-20 font-sans font-medium text-base md:text-[18px] mb-4 md:text-left">
                        <span className="font-[nexa] text-[18px] mr-2">
                          Security and Privacy:
                        </span>
                        Instill trust by prioritizing data security and privacy
                        measures.
                      </p>
                    </li>
                    <li>
                      <p className="leading-normal text-[#212121] opacity-75 pr-20 font-sans font-medium text-base md:text-[18px] mb-4 md:text-left">
                        <span className="font-[nexa] text-[18px] mr-2">
                          Offline Functionality
                        </span>
                        Provide some level of offline access for user
                        convenience.
                      </p>
                    </li>
                    <li>
                      <p className="leading-normal text-[#212121] opacity-75 pr-20 font-sans font-medium text-base md:text-[18px] mb-4 md:text-left">
                        <span className="font-[nexa] text-[18px] mr-2">
                          Personalization:
                        </span>
                        Tailor the app experience to individual users whenever
                        possible.
                      </p>
                    </li>
                    <li>
                      <p className="leading-normal text-[#212121] opacity-75 pr-20 font-sans font-medium text-base md:text-[18px] mb-4 md:text-left">
                        <span className="font-[nexa] text-[18px] mr-2">
                          {" "}
                          Regular Updates and Support:
                        </span>
                        Maintain the app with updates and offer responsive
                        customer support.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="md:flex">
            <div className="xl:basis-2/6">
              <img
                className="w-auto md:w-[280px] mt-[0px] mx-auto"
                src={mob2}
              />
            </div>
            <div className="xl:basis-4/6">
              <div className="">
                <h1 className="main-banner-heading relative mt-4 mb-6 text-[24px] md:text-[36px]  text-[#212121] font-[nexa] font-bold leading-tight  md:text-left">
                  What Does Mobile App Development Look Like?
                </h1>

                <div>
                  <ul className="">
                    <li>
                      <p className="leading-normal text-[#212121] opacity-75 pr-20 font-sans font-medium text-base md:text-[18px] mb-4 md:text-left">
                        <span className="font-[nexa] text-[18px] mr-2">
                          Discovery and Planning:
                        </span>
                        Collaborate to understand objectives and target
                        audience.
                      </p>
                    </li>
                    <li>
                      <p className="leading-normal text-[#212121] opacity-75 pr-20 font-sans font-medium text-base md:text-[18px] mb-4 md:text-left">
                        <span className="font-[nexa] text-[18px] mr-2">
                          Design and Prototyping:
                        </span>
                        Visualize the app's layout and functionality.
                      </p>
                    </li>
                    <li>
                      <p className="leading-normal text-[#212121] opacity-75 pr-20 font-sans font-medium text-base md:text-[18px] mb-4 md:text-left">
                        <span className="font-[nexa] text-[18px] mr-2">
                          Development and Coding:
                        </span>
                        Write code to bring the app to life.
                      </p>
                    </li>
                    <li>
                      <p className="leading-normal text-[#212121] opacity-75 pr-20 font-sans font-medium text-base md:text-[18px] mb-4 md:text-left">
                        <span className="font-[nexa] text-[18px] mr-2">
                          Testing and Quality Assurance:
                        </span>
                        Ensure a bug-free and reliable app.
                      </p>
                    </li>
                    <li>
                      <p className="leading-normal text-[#212121] opacity-75 pr-20 font-sans font-medium text-base md:text-[18px] mb-4 md:text-left">
                        <span className="font-[nexa] text-[18px] mr-2">
                          Deployment and Launch:
                        </span>
                        Prepare for a successful app launch.
                      </p>
                    </li>
                    <li>
                      <p className="leading-normal text-[#212121] opacity-75 pr-20 font-sans font-medium text-base md:text-[18px] mb-4 md:text-left">
                        <span className="font-[nexa] text-[18px] mr-2">
                          Post-Launch Support:
                        </span>
                        Provide ongoing support and updates.
                      </p>
                    </li>
                    <li>
                      <p className="leading-normal text-[#212121] opacity-75 pr-20 font-sans font-medium text-base md:text-[18px] mb-4 md:text-left">
                        <span className="font-[nexa] text-[18px] mr-2">
                          {" "}
                          Transparent Communication:
                        </span>
                        Foster collaboration with clients.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-start">
                <button className="bg-white mr-0 md:mr-[22px] shadow-md z-20 text-black opacity-75 md:py-3 py-2 md:px-5 px-3 rounded-full font-sans font-medium text-[18px] md:text-[18px]">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid bg-white py-8 grid-cols-12 px-8 md:px-24">
        <div className="col-span-12 md:col-span-4flex justify-center items-start p-6">
          <div>
            <h1 className="main-banner-heading relative mt-4 mb-6 text-[22px] md:text-[24px] text-[#212121] font-[nexa] font-bold leading-tight  md:text-left">
              How do you measure success for a mobile app?
            </h1>
            <p className="leading-normal text-[#212121] opacity-75 md:pr-20 font-sans font-medium text-base md:text-[18px] mb-8 md:text-left">
              Success for a mobile app is measured by key performance indicators
              (KPIs) like user engagement, retention rates, downloads, and
              conversions. User feedback and reviews also provide insights for
              improvement. By monitoring these metrics, we ensure our apps
              deliver exceptional value and meet client goals.
            </p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4flex justify-center items-start p-6">
          <div>
            <h1 className="main-banner-heading relative mt-4 mb-6 text-[22px] md:text-[24px] text-[#212121] font-[nexa] font-bold leading-tight  md:text-left">
              How much money does an mobile app development cost?
            </h1>
            <p className="leading-normal text-[#212121] opacity-75 md:pr-20 font-sans font-medium text-base md:text-[18px] mb-8 md:text-left">
              The cost of an explainer video varies based on factors like video
              length, animation complexity, customization, and the production
              company's expertise. It can range from low-budget options (around
              $500 to $3,000) to mid-range choices (about $3,000 to $10,000) and
              high-end productions (starting from $10,000 and going up to
              $50,000 or more). Investing in a well-crafted explainer video can
              significantly impact brand image, customer engagement, and
              marketing efforts.
            </p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4flex justify-center items-start p-6">
          <div>
            <h1 className="main-banner-heading relative mt-4 mb-6 text-[22px] md:text-[24px] text-[#212121] font-[nexa] font-bold leading-tight  md:text-left">
              How long can it be to develop an mobile app?
            </h1>
            <p className="leading-normal text-[#212121] opacity-75 md:pr-20 font-sans font-medium text-base md:text-[18px] mb-8 md:text-left">
              The development time for a mobile app varies based on its
              complexity and features. Simple apps may take 2 to 4 months,
              moderately complex apps 4 to 6 months, and highly complex apps 6
              months to a year or more. Efficient planning and collaboration are
              crucial for meeting development timelines and delivering a
              successful mobile app.
            </p>
          </div>
        </div>
      </div>

    

      <div>
        <ContactSection />
        <Footer />
      </div>
      {openModal && (
        <GetQuote closeModal={setOpenModal} Title="Request a Quote" />
      )}
    </div>
  );
};

export default MobileApp;

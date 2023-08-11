import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useState, useEffect } from "react";
import GetQuote from "../Components/GetQuote";

import digiMarket from "../assets/vectors/gd.png";
import gd2 from "../assets/vectors/gd2.jpg";
import Web from "../Components/PortfolioGallery";
import ContactSection from "../Components/ContactSection";

const GraphicsDesign = () => {
  const [openModal, setOpenModal] = useState();

  return (
    <div id="graphics-designing" className="bg-[#F8F6F2] leading-normal tracking-normal text-indigo-400 bg-cover bg-fixed">
      <Navbar />
      <div className=" pt-6 pb-32">
        <div className="px-8 md:px-24  flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full xl:w-[50%] justify-center lg:items-start ">
            <h1 className="main-banner-heading relative mt-4 mb-5 text-3xl md:text-[4rem] text-[#212121] font-[nexa] font-bold leading-tight  md:text-left">
              <span className="flex justify-center absolute left-44 top-[-33px]">
                {/* <img src={shineSvt} className="w-[80px]" /> */}
              </span>{" "}
              Graphics <br />
              <span
                id="typed"
                className="power-text span-color bg-clip-text text-[#f58020]"
              >
                Design
              </span>
            </h1>

            <p className="leading-normal text-[#212121] opacity-75 pr-20 font-sans font-medium text-base md:text-[18px] mb-8 md:text-left">
              Visualize Your Ideas: Our Graphic Designing Services Transform
              Concepts into Stunning Visuals, Elevating Your Brand's Aesthetic
              and Impact.
            </p>
          </div>
          <div className="w-full xl:w-[50%] rounded-2xl  overflow-hidden">
            <img src={digiMarket} className="w-[800px] mx-auto" />
          </div>
        </div>
      </div>

      <div className="bg-[#f69e55] rounded-[50px]">
        <div
          id="services"
          className="w-full pt-30 md:pt-10 relative pb-20 px-8 md:px-24 mx-auto my-16"
        >
          <div className="md:w-[80%] mb-28">
            <h1 className="main-banner-heading relative mt-4 mb-5 text-3xl sm:text-5xl md:text-[5rem] text-[#212121] font-[nexa] font-bold leading-tight  md:text-left">
              <span className="flex justify-center absolute left-56 top-[70px]"></span>
              What makes <br />
              Graphic Designing great
            </h1>
          </div>

          <div className="grid grid-cols-12">
            <div className="xl:col-span-3 flex flex-col justify-center items-center col-span-12 p-4 bg-white rounded-[26px] mr-6">
              <img src={gd2} className="rounded-[26px] w-[300px]" />

              <p className="leading-normal text-[#212121] opacity-75 font-sans font-medium md:text-[22px] mb-8 text-center">
                Amplify Your Brand's Reach with Our Digital Marketing Solutions!
              </p>
            </div>

            <div className="xl:col-span-9 col-span-12">
              <div className="grid grid-cols-12 gap-4  md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
                <div className="opacity-100 group p-12 px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg transition-all   sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                  <div className="flex">
                    <div className="">
                      <h1 className="text-[#f58020]  service-card- text-[24px] font-[nexa] mb-4">
                        Striking Visual Appeal
                      </h1>
                      <p className="text-[#212121]  font-[Poppins]">
                        Great graphic design captures attention with visually
                        compelling elements that resonate with viewers.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white  hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                  <div className="flex">
                    <div className="">
                      <h1 className="text-[#f58020]  service-card- text-[24px] font-[nexa] mb-4 ">
                        Clear Communication
                      </h1>
                      <p className="text-[#212121]  font-[Poppins]">
                        Effective design communicates messages concisely,
                        conveying information effortlessly.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[20px]">
                  <div className="flex">
                    <div className="">
                      <h1 className="text-[#f58020]  service-card- text-[24px] font-[nexa] mb-4">
                        Consistency and Branding
                      </h1>
                      <p className="text-[#212121]  font-[Poppins]">
                        Cohesive design elements establish a strong brand
                        identity and build recognition.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                  <div className="flex">
                    <div className="">
                      <h1 className="text-[#f58020]  service-card- text-[24px] font-[nexa] mb-4">
                        Balanced Layouts
                      </h1>
                      <p className="text-[#212121]  font-[Poppins]">
                        Well-structured layouts guide the eye and create a
                        harmonious viewing experience.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                  <div className="flex">
                    <div className="">
                      <h1 className="text-[#f58020]  service-card- text-[24px] font-[nexa] mb-4">
                        Creativity and Innovation
                      </h1>
                      <p className="text-[#212121]  font-[Poppins]">
                        Innovative design solutions showcase originality and
                        leave a memorable impression.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                  <div className="flex">
                    <div className="">
                      <h1 className="text-[#f58020]  service-card- text-[24px] font-[nexa] mb-4">
                        Emotional Connection
                      </h1>
                      <p className="text-[#212121]  font-[Poppins]">
                        Successful graphic design evokes emotions, fostering a
                        deeper connection with the audience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid bg-white py-8 grid-cols-12 px-8 md:px-24">
        <div className="col-span-4 flex justify-center items-start p-6">
          <div>
            <h1 className="main-banner-heading relative mt-4 mb-6 md:text-[24px] text-[#212121] font-[nexa] font-bold leading-tight  md:text-left">
              How do you measure success for digital marketing?
            </h1>
            <p className="leading-normal text-[#212121] opacity-75 pr-20 font-sans font-medium text-base md:text-[18px] mb-8 md:text-left">
              Success in graphic design is measured through factors such as
              visual impact, audience engagement, brand consistency, and
              alignment with objectives. Analyzing design effectiveness,
              audience feedback, and its ability to convey messages or emotions
              gauges its resonance and contribution to overall brand perception
              and communication goals. By assessing these metrics, we ensure
              that our graphic design solutions deliver meaningful visual
              experiences and achieve their intended outcomes.
            </p>
          </div>
        </div>
        <div className="col-span-4 flex justify-center items-start p-6">
          <div>
            <h1 className="main-banner-heading relative mt-4 mb-6 md:text-[24px] text-[#212121] font-[nexa] font-bold leading-tight  md:text-left">
              How much money does digital marketing cost?
            </h1>
            <p className="leading-normal text-[#212121] opacity-75 pr-20 font-sans font-medium text-base md:text-[18px] mb-8 md:text-left">
              The cost of digital marketing varies widely based on factors such
              as campaign scope, industry competitiveness, chosen channels, and
              desired outcomes. On average, small businesses might allocate
              around $500 to $2,000 per month for basic social media and
              entry-level SEO services. Medium-sized businesses could invest
              $2,000 to $5,000 per month for more comprehensive strategies,
              including PPC advertising and content marketing. Larger
              enterprises with ambitious goals may dedicate $10,000 or more
              monthly for multi-channel campaigns targeting a broader audience.
              The specific budget depends on tailored strategies and the
              expected ROI.
            </p>
          </div>
        </div>
        <div className="col-span-4 flex justify-center items-start p-6">
          <div>
            <h1 className="main-banner-heading relative mt-4 mb-6 md:text-[24px] text-[#212121] font-[nexa] font-bold leading-tight  md:text-left">
              Results & Timelines in Digital Marketing.
            </h1>
            <p className="leading-normal text-[#212121] opacity-75 pr-20 font-sans font-medium text-base md:text-[18px] mb-8 md:text-left">
              Understanding the Dynamics of Outcomes and Timelines in Graphic
              Designing: A Detailed Exploration of Success Metrics, Creative
              Evolution, and the Synchronization of Artistic Progression with
              Project Milestones.
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

export default GraphicsDesign;

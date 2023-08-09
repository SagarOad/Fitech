import { NavLink } from "react-router-dom";
import shineSvt from "../assets/header-illustration.svg";
import services from "../assets/vectors/services.jpg";
import wave from "../assets/vectors/wave.png";

const OurServices = () => {
  return (
    <div
      id="services"
      className="w-full pt-30 md:pt-10 relative pb-20 px-8  md:px-24 mx-auto my-16"
    >
      <img src={wave} className="absolute bottom-[250px] opacity-[6%] z-[0]" />
      <div className="md:w-[80%] mb-28">
        <h1 className="main-banner-heading relative mt-4 mb-5 text-3xl sm:text-5xl md:text-[5rem] text-[#212121] font-[nexa] font-bold leading-tight  md:text-left">
          <span className="flex justify-center absolute left-56 top-[70px]">
            <img src={shineSvt} className="w-[50px] hidden md:visible" />
          </span>
          Here’s what <br />
          we do
        </h1>
      </div>

      <div className="grid grid-cols-12">
        <div className="xl:col-span-3 flex flex-col justify-center items-center col-span-12 p-4 bg-white rounded-[26px] mr-6">
          <img src={services} className="rounded-[26px]" />

          <p className="leading-normal text-[#212121] opacity-75 font-sans font-medium text-[20px] md:text-[22px] mb-8 text-center">
            boost your online presence and make the most of the digital world!
          </p>
        </div>

        <div className="xl:col-span-9 col-span-12">
          <div className="grid grid-cols-12 gap-4  md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
            <div className="opacity-100 group p-12 px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg hover:mt-[-12px] transition-all hover:bg-[#f58020]   sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
              <NavLink to="/servicepage">
                <div className="flex">
                  <div className="">
                    <h1 className="text-[#f58020] group-hover:text-white service-card- text-[24px] font-[nexa] mb-4">
                      Mobile Application
                    </h1>
                    <p className="text-[#212121] group-hover:text-white font-[Poppins]">
                      Seamlessly connect with your audience through our
                      cutting-edge mobile app solutions
                    </p>
                  </div>
                </div>
              </NavLink>
            </div>

            <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white group-hover:text-white hover:shadow-lg hover:mt-[-12px] transition-all hover:bg-[#f58020]  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
              <NavLink to="/ecommerce">
                <div className="flex">
                  <div className="">
                    <h1 className="text-[#f58020] group-hover:text-white service-card- text-[24px] font-[nexa] mb-4 ">
                      Website Development
                    </h1>
                    <p className="text-[#212121] group-hover:text-white font-[Poppins]">
                      The best Website Development solutions for your business
                      to prosper and reach the global market.{" "}
                    </p>
                  </div>
                </div>
              </NavLink>
            </div>

            <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg hover:mt-[-12px] transition-all hover:bg-[#f58020]  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[20px]">
              <NavLink to="/digitalmarketing">
                <div className="flex">
                  <div className="">
                    <h1 className="text-[#f58020] group-hover:text-white service-card- text-[24px] font-[nexa] mb-4">
                      Digital Marketing
                    </h1>
                    <p className="text-[#212121] group-hover:text-white font-[Poppins]">
                      Best digital marketing solutions to take your brand to the
                      next level
                    </p>
                  </div>
                </div>
              </NavLink>
            </div>

            <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg hover:mt-[-12px] transition-all hover:bg-[#f58020]  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
              <NavLink to="animation">
                <div className="flex">
                  <div className="">
                    <h1 className="text-[#f58020] group-hover:text-white service-card- text-[24px] font-[nexa] mb-4">
                      2D / 3D Animation
                    </h1>
                    <p className="text-[#212121] group-hover:text-white font-[Poppins]">
                      Bring your imagination to life with our exceptional 2D /
                      3D animation services
                    </p>
                  </div>
                </div>
              </NavLink>
            </div>

            <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg hover:mt-[-12px] transition-all hover:bg-[#f58020]  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
              <NavLink to="/graphicsdesign">
                <div className="flex">
                  <div className="">
                    <h1 className="text-[#f58020] group-hover:text-white service-card- text-[24px] font-[nexa] mb-4">
                      Graphics Design
                    </h1>
                    <p className="text-[#212121] group-hover:text-white font-[Poppins]">
                      We provide custom design solutions that range from Logo
                      Design to Mobile and Web{" "}
                    </p>
                  </div>
                </div>
              </NavLink>
            </div>

            <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg hover:mt-[-12px] transition-all hover:bg-[#f58020]  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
              <NavLink to="/softwaredevelopment">
                <div className="flex">
                  <div className="">
                    <h1 className="text-[#f58020] group-hover:text-white service-card- text-[24px] font-[nexa] mb-4">
                      Software Development
                    </h1>
                    <p className="text-[#212121] group-hover:text-white font-[Poppins]">
                      Empower your business with our expert software development
                      solutions
                    </p>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;

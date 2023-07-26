import img1 from "../assets/icons/Frame-1.png";
import img2 from "../assets/icons/Frame-2.png";
import img3 from "../assets/icons/Frame-3.png";
import img4 from "../assets/icons/Frame-4.png";
import img5 from "../assets/icons/Frame-5.png";
import img6 from "../assets/icons/Frame-6.png";
import { NavLink } from "react-router-dom";

const OurServices = () => {
  return (
    <div
      id="services"
      className="w-full pt-20 md:pt-10 pb-20 px-8 md:px-24 mx-auto"
    >
      <div className="md:w-[80%] mb-28">
        <h1 className="my-6 mb-6 text-3xl md:text-[3rem] text-white font-[nexa] opacity-95 font-bold leading-tight md:text-left">
          Connecting brands and users, we design elegant and purposeful digital
          experiences that foster engagement and drive growth
        </h1>
        <p className="leading-normal text-white opacity-75  font-[nexa-light]  text-base md:text-[21px] mb-14 0 text-left">
          Drive growth with captivating digital experiences. Our agency combines
          creativity and expertise to deliver impactful results for your brand.
          Elevate your digital presence with us.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className=" opacity-95 p-12 px-5 pt-7.5 pb-5 shadow-md shadow-[#000] hover:shadow-lg hover:mt-[-12px] transition-all  hover:shadow-[#000000] sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
          <NavLink to="/servicepage">
            <div className="flex">
              <div>
                <img className="service-icons w-32" src={img1} />
              </div>
              <div className="ml-8">
                <h1 className="text-white text-[21px] font-[Poppins] mb-4">
                  Mobile Application
                </h1>
                <p className="text-white font-[Poppins]">
                  Seamlessly connect with your audience through our cutting-edge
                  mobile app solutions
                </p>
              </div>
            </div>
          </NavLink>
        </div>

        <div className="flex opacity-95 p-12 px-5 pt-7.5 pb-5 shadow-md shadow-[#000] hover:shadow-lg hover:mt-[-12px] transition-all  hover:shadow-[#000] sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
          <div>
            <img className="service-icons w-32" src={img2} />
          </div>
          <div className="ml-8">
            <h1 className="text-white text-[21px] font-[Poppins] mb-4">
              Ecommerce Solutions
            </h1>
            <p className="text-white font-[Poppins]">
              The best eCommerce solutions for your business to prosper and
              reach the global{" "}
            </p>
          </div>
        </div>

        <div className="flex opacity-95 p-12 px-5 pt-7.5 pb-5 shadow-md shadow-[#000] hover:shadow-lg hover:mt-[-12px] transition-all  hover:shadow-[#000] sm:px-7.5 xl:col-span-4 col-span-12 rounded-[20px]">
          <div>
            <img className="service-icons w-32" src={img3} />
          </div>
          <div className="ml-8">
            <h1 className="text-white text-[21px] font-[Poppins] mb-4">
              Digital Marketing
            </h1>
            <p className="text-white font-[Poppins]">
              Best digital marketing solutions to take your brand to the next
              level
            </p>
          </div>
        </div>

        <div className="flex opacity-95 p-12 px-5 pt-7.5 pb-5 shadow-md shadow-[#000] hover:shadow-lg hover:mt-[-12px] transition-all  hover:shadow-[#000] sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
          <div>
            <img className="service-icons w-32" src={img4} />
          </div>
          <div className="ml-8">
            <h1 className="text-white text-[21px] font-[Poppins] mb-4">
              2D / 3D Animation
            </h1>
            <p className="text-white font-[Poppins]">
              Bring your imagination to life with our exceptional 2D / 3D
              animation services
            </p>
          </div>
        </div>

        <div className="flex opacity-95 p-12 px-5 pt-7.5 pb-5 shadow-md shadow-[#000] hover:shadow-lg hover:mt-[-12px] transition-all  hover:shadow-[#000] sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
          <div>
            <img className="service-icons w-32" src={img5} />
          </div>
          <div className="ml-8">
            <h1 className="text-white text-[21px] font-[Poppins] mb-4">
              Graphics Design
            </h1>
            <p className="text-white font-[Poppins]">
              We provide custom design solutions that range from Logo Design to
              Mobile and Web{" "}
            </p>
          </div>
        </div>

        <div className="flex opacity-95 p-12 px-5 pt-7.5 pb-5 shadow-md shadow-[#000] hover:shadow-lg hover:mt-[-12px] transition-all  hover:shadow-[#000] sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
          <div>
            <img className="service-icons w-32" src={img6} />
          </div>
          <div className="ml-8">
            <h1 className="text-white text-[21px] font-[Poppins] mb-4">
              Software Development
            </h1>
            <p className="text-white font-[Poppins]">
              Empower your business with our expert software development
              solutions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;

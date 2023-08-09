import { AiOutlineArrowRight } from "react-icons/ai";
import ServiceImg from "../assets/websites/all-devices-white.png";

const OurServices2 = () => {
  return (
    <div className="w-full bg-white py-16 px-8  md:px-24 mx-auto">
      {/* <div className="bg-[#f58020] h-[80vh] w-[80%] absolute left-0"></div> */}
      <div className="flex flex-wrap justify-center items-center flex-col md:flex-row">
        <div className="xl:basis-2/4">
          <h1 className="services2-heading mb-6 text-3xl md:text-[3.5rem] text-[#212121] font-[nexa] opacity-95 font-bold leading-[70px]  md:text-left">
            Partner with us for the{" "}
            <span className=" span-color bg-clip-text text-[#f58020]">
              future
            </span>
          </h1>
          <p className="leading-normal text-[#212121] opacity-75 pr-20 font-sans font-medium text-[20px] md:text-[22px] mb-8 md:text-left">
            we pride ourselves on our ability to meet the ever-evolving digital
            demands of a wide range of businesses.
          </p>
        </div>
        {/* <div className="xl:basis-2/4 pl-6">
          <div className="flex mb-12 justify-start items-center">
            <div className="bg-[#f580202a] p-3 rounded-full">
              <IoMdCall className="text-[48px] text-white" />
            </div>
            <div className=" service-list ml-6">
              <h1 className="leading-normal text-[#212121] opacity-95 font-[poppins] font-medium text-base md:text-[22px]   md:text-left">
                Constant Client Coordination
              </h1>
              <p className="text-[#212121] opacity-75 font-[poppins]">
                Streamlined communication for successful collaboration{" "}
              </p>
            </div>
          </div>

          <div className="flex mb-12 justify-start items-center">
            <div className="bg-[#f580202a] p-3 rounded-full">
              <AiFillStar className="text-[48px] text-white" />
            </div>
            <div className="service-list ml-6">
              <h1 className="leading-normal text-[#212121] opacity-95 font-[poppins] font-medium text-base md:text-[22px]   md:text-left">
                Supreme Customer Satisfaction
              </h1>
              <p className="text-[#212121] opacity-75 font-[poppins]">
                Exceptional service that surpasses expectations.
              </p>
            </div>
          </div>

          <div className="flex mb-12 justify-start items-center">
            <div className="bg-[#f580202a] p-3 rounded-full">
              <AiFillFlag className="text-[48px] text-white" />
            </div>
            <div className="service-list ml-6">
              <h1 className="leading-normal text-[#212121] opacity-95 font-[poppins] font-medium text-base md:text-[22px]   md:text-left">
                100% Ownership Rights
              </h1>
              <p className="text-[#212121] opacity-75 font-[poppins]">
                Complete control over your creative assets.
              </p>
            </div>
          </div>

          <div className="flex mb-12 justify-start items-center">
            <div className="bg-[#f580202a] p-3 rounded-full">
              <BsShieldFillCheck className="text-[48px] text-white" />
            </div>
            <div className="service-list ml-6">
              <h1 className="leading-normal text-[#212121] opacity-95 font-[poppins] font-medium text-base md:text-[22px]   md:text-left">
                Secure Money Back Gaurantee
              </h1>
              <p className="text-[#212121] opacity-75 font-[poppins]">
                Your investment protected, satisfaction guaranteed.
              </p>
            </div>
          </div>

          <div className="flex mb-12 justify-start items-center">
            <div className="bg-[#f580202a] p-3 rounded-full">
              <BsFillPeopleFill className="text-[48px] text-white" />
            </div>
            <div className="service-list ml-6">
              <h1 className="leading-normal text-[#212121] opacity-95 font-[poppins] font-medium text-base md:text-[22px]   md:text-left">
                Industry Proven Professionals
              </h1>
              <p className="text-[#212121] opacity-75 font-[poppins]">
                Our team of experienced experts delivers top-quality content
                tailored to your industry's needs.
              </p>
            </div>
          </div>
        </div> */}

        <div className="xl:basis-2/4 pl-6">
          <img src={ServiceImg} />

          <div className="flex justify-end items-center mt-3 mr-12">
            <button className="flex justify-center items-center mr-0 md:mr-[22px] z-20 text-black opacity-75 md:py-3 py-2 md:px-5 px-3 rounded-full font-sans font-medium text-[18px] md:text-[21px]">
              View more 
              <AiOutlineArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices2;

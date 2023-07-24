import { IoMdCall } from "react-icons/io";
import { AiFillStar, AiFillFlag } from "react-icons/ai";
import { BsShieldFillCheck } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";

const OurServices2 = () => {
  return (
    <div className="w-full py-16  px-8 md:px-24 mx-auto">
      <div className="flex flex-wrap flex-col md:flex-row">
        <div className="xl:basis-2/4">
          <h1 className="services2-heading mb-6 text-3xl md:text-[3rem] text-white font-[nexa] opacity-95 font-bold leading-[70px]  md:text-left">
            We Are Here To Help You Get Renowned All Over The World{" "}
            <span className="mx-4 span-color bg-clip-text text-[#f58020]">
              Within No Time!
            </span>
          </h1>
          <p className="leading-normal text-white opacity-75  font-[nexa-light]  text-base md:text-[21px] mb-8  md:text-left">
            Over The Years, We've Met Even The Most Demanding Digital
            Requirements Of Our Customers, Have Created Incredibly Unique Work
            From A Vast Portfolio Of Business Verticals, And Met Customers Who
            Support Us. Our Service Help Them Grow Ceaselessly!
          </p>
        </div>
        <div className="xl:basis-2/4 pl-6">
          <div className="flex mb-12 justify-start items-center">
            <div className="bg-[#f580202a] p-3 rounded-full">
              <IoMdCall className="text-[48px] text-[#f58020]" />
            </div>
            <div className=" service-list ml-6">
              <h1 className="leading-normal text-white opacity-95 font-[poppins] font-medium text-base md:text-[22px]   md:text-left">
                Constant Client Coordination
              </h1>
              <p className="text-white opacity-75 font-[poppins]">
              Streamlined communication for successful collaboration              </p>
            </div>
          </div>

          <div className="flex mb-12 justify-start items-center">
            <div className="bg-[#f580202a] p-3 rounded-full">
              <AiFillStar className="text-[48px] text-[#f58020]" />
            </div>
            <div className="service-list ml-6">
              <h1 className="leading-normal text-white opacity-95 font-[poppins] font-medium text-base md:text-[22px]   md:text-left">
                Supreme Customer Satisfaction
              </h1>
              <p className="text-white opacity-75 font-[poppins]">
              Exceptional service that surpasses expectations.
              </p>
            </div>
          </div>

          <div className="flex mb-12 justify-start items-center">
            <div className="bg-[#f580202a] p-3 rounded-full">
              <AiFillFlag className="text-[48px] text-[#f58020]" />
            </div>
            <div className="service-list ml-6">
              <h1 className="leading-normal text-white opacity-95 font-[poppins] font-medium text-base md:text-[22px]   md:text-left">
                100% Ownership Rights
              </h1>
              <p className="text-white opacity-75 font-[poppins]">
              Complete control over your creative assets.
              </p>
            </div>
          </div>

          <div className="flex mb-12 justify-start items-center">
            <div className="bg-[#f580202a] p-3 rounded-full">
              <BsShieldFillCheck className="text-[48px] text-[#f58020]" />
            </div>
            <div className="service-list ml-6">
              <h1 className="leading-normal text-white opacity-95 font-[poppins] font-medium text-base md:text-[22px]   md:text-left">
                Secure Money Back Gaurantee
              </h1>
              <p className="text-white opacity-75 font-[poppins]">
              Your investment protected, satisfaction guaranteed.
              </p>
            </div>
          </div>

          <div className="flex mb-12 justify-start items-center">
            <div className="bg-[#f580202a] p-3 rounded-full">
              <BsFillPeopleFill className="text-[48px] text-[#f58020]" />
            </div>
            <div className="service-list ml-6">
              <h1 className="leading-normal text-white opacity-95 font-[poppins] font-medium text-base md:text-[22px]   md:text-left">
                Industry Proven Professionals
              </h1>
              <p className="text-white opacity-75 font-[poppins]">
              Our team of experienced experts delivers top-quality content tailored to your industry's needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices2;

import { IoMdCall } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { useState } from "react";
import GetQuote from "./GetQuote";
import arrow from "../assets/icons/arrow.png"

const ContactSection = () => {
  const [openModal, setOpenModal] = useState();

  return (
    <div className="relative">
    <div id="contact" className="bg-white ml-auto w-[90%] h-[60vh]">
      <div className="bg-[#f58020] absolute left-0 rounded-r-[50px] w-[90%] py-20 mt-[150px] h-auto px-8 md:px-24 mr-auto">
        <div className="anime-bg flex relative items-center">
        
          <img src={arrow} className="w-[180px] rotate-[250deg] mr-20" />
        
          <div className="">
            <h1 className="text-3xl text-center  md:text-[4rem] text-[white] font-[nexa] opacity-95 font-bold leading-tight md:text-left">
              Ready to work with us?
            </h1>
            <button
              onClick={() => {
                setOpenModal(true);
              }}
              className="bg-[#212121] mt-6 mr-0 md:mr-[22px] z-20 text-white md:py-3 py-2 md:px-8 px-3 rounded-full font-sans font-medium text-[12px] md:text-[21px]"
            >
              Let's Talk
            </button>
          </div>
        </div>
      </div>
      
      {openModal && <GetQuote closeModal={setOpenModal} Title="Contact Us" />}
    </div>
    </div>
  );
};

export default ContactSection;

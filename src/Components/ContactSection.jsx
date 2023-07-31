import { IoMdCall } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { useState } from "react";
import GetQuote from "./GetQuote";

const ContactSection = () => {
  const [openModal, setOpenModal] = useState();

  return (
    <div id="contact">
      <div className="flex justify-center items-center backdrop-blur-xl bg-white/30 py-20 mt-28 h-auto px-8 px-6 md:px-24 mx-auto">
        <div className="flex flex-col md:flex-row anime-bg relative justify-between items-center">
          <div className="">
            <h1 className="text-3xl  md:text-[3rem] text-white font-[nexa] opacity-95 font-bold leading-tight md:text-left">
              Get expert advice for your project.
            </h1>
            <button
              onClick={() => {
                setOpenModal(true);
              }}
              className="get-started px-4 py-4 text-3xl mt-4 md:text-[3rem] text-white font-[nexa] opacity-95"
            >
              Contact us now!
            </button>
          </div>
          <div className="mob-svg-container py-4 md:py-9 md:px-9">
            <div className="flex items-center">
              <div className="bg-[#f580202a] my-4 mr-4 p-4 rounded-full">
                <IoMdCall className="text-[36px] md:text-[48px] text-[#f58020]" />
              </div>
              <h1 className="text-[20px] md:text-[28px] font-bold text-white font-[nexa-light]">
                Contact us today at our toll-free number: (TOLL FREE)
                0092-213-5308703
              </h1>
            </div>

            <div className="flex items-center">
              <div className="bg-[#f580202a] my-4 mr-4 p-4 rounded-full">
                <AiOutlineMail className="text-[36px] md:text-[48px] text-[#f58020]" />
              </div>
              <h1 className="text-[20px] md:text-[28px] font-bold text-white font-[nexa-light]">
                Discuss Your Ideas Info@Fameitech.Com
              </h1>
            </div>
          </div>
        </div>
      </div>
      {openModal && <GetQuote closeModal={setOpenModal} Title="Contact Us" />}
    </div>
  );
};

export default ContactSection;

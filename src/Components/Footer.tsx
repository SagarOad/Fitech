import Logo from ".././assets/newLogo.png";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="">
      <div className="py-12 px-8 md:px-24 mx-auto">
        <div className="block md:flex justify-between items-center">
          <div>
            <img className="w-[220px] mx-auto md:mx-0" src={Logo} />
          </div>
          <div>
            <div className="flex my-8 md:my-0 justify-center md:justify-end item-center">
              <a href="https://instagram.com/fameitech?igshid=MWQ1ZGUxMzBkMA==">
                <BsInstagram className="text-white mx-2  text-[32px]" />
              </a>
              <a href="https://www.facebook.com/fameiteh">
                <FaFacebookF className="text-white mx-2 text-[32px]" />
              </a>
            </div>

            <p className="text-[24px] font-medium text-center md:text-right text-white font-[nexa-light] mt-6">
              Head Office
            </p>
            <p className="text-[21px] text-center md:text-right text-white font-[nexa-light]">
              9432, Emerald Woods Way,Knoxville, TN 37922
            </p>

            <p className="text-[24px] font-medium text-center md:text-right text-white font-[nexa-light] mt-4">
             Regional Office
            </p>
            <p className="text-[21px] text-center md:text-right text-white font-[nexa-light]">
              214, The Plaza, Clifton Block 9,Karachi, Pakistan
            </p>
            <p className="text-[21px] text-center text-white md:text-right font-[nexa-light]">
              Info@fameitech.com
            </p>
            <p className="text-[21px] text-center text-white md:text-right font-[nexa-light]">
              0092-213-5308703
            </p>
          </div>
        </div>
      </div>
      <hr className="w-full bg-white opacity-30 h-[1px]" />
      <div className="py-8 px-16 md:px-24 mx-auto text-[21px] text-white text-center font-[nexa-light]">
        © 2023 Fame Itech, All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;

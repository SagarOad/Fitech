import Lottie from "lottie-react"
import anime from "../assets/laptop.json"


const Branding = () => {
  return (
    <div className="">
      <div className="w-full pt-20 md:pt-44 px-8 px-6 md:px-24 md:pr-0 mx-auto">
        <div className="flex flex-col justify-between md:flex-row">
          <div className="xl:basis-2/4">
            <h1 className="mb-6 text-3xl md:text-[3rem] text-white font-[nexa] opacity-95 font-bold leading-[70px]  md:text-left">
            Business
              <span className="mx-4 span-color bg-clip-text text-[#f58020]">
                 Growth
              </span>
            </h1>
            <p className="leading-normal text-white opacity-75  font-[nexa-light]  text-base md:text-[21px] mb-8  md:text-left">
              We Are A Team Of Proficient And Highly Qualified Individuals Who
              Fully Comprehends The Significance Of Branding In Enhancing The
              Customer Base. We Are A Professional Software Agency With A
              Primary Focus On Crafting A Strategy That Can Help You Target More
              Leads And Enhance Your ROI.
            </p>
          </div>
          <div>
            <Lottie className="w-auto md:w-[660px] mt-[0px] md:mt-[-154px]" animationData={anime}></Lottie>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branding;

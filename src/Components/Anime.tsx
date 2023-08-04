import mockup from "../assets/mobile-mockup.png";

const Anime = () => {
  return (
    <div className="anime-banner py-28 mt-20 md:mt-10 mb-20 h-auto mx-auto">
      {/* <div className="bg-[#f58020] absolute right-0 h-[600px] w-[50%]"></div> */}
      <div className="block md:flex justify-between anime-bg relative">
        <div className="px-6 md:px-24 w-[50%]">
          <h1 className="text-3xl text-center  md:text-[4rem] text-[#212121] font-[nexa] opacity-95 font-bold leading-tight md:text-left">
            Transforming Visions <br />
            Into{" "}
            <span className="mx-4 span-color bg-clip-text text-[#f58020]">
              Reality
            </span>
          </h1>

          <p className="leading-normal text-[#212121] mt-4 opacity-75 pr-20 font-sans font-medium text-base md:text-[22px] mb-8 md:text-left">
            Your ideas brought to life with creativity and expertise
          </p>
        </div>
        <div className="mob-svg-container relative w-[40%] h-[430px] bg-[#f58020] flex justify-center">
          <video
            className="w-[700px] left-[-100px] top-[-40px] shadow-lg absolute"
            loop
            autoPlay
            muted
            type="video/mp4"
            src="https://video-previews.elements.envatousercontent.com/h264-video-previews/57d9d4bf-b06c-4030-a1c6-785bec07df66/46121601.mp4"
          />
        </div>
      </div>
    </div>
  );
};

export default Anime;

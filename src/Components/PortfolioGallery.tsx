import img1 from "../assets/updated-portfolio/Web/Web 1.png"
import img2 from "../assets/updated-portfolio/Web/Web 3.png"
import img3 from "../assets/updated-portfolio/Web/screencapture-aurorashoeco-2023-07-27-16_44_06.png"
import img4 from "../assets/updated-portfolio/Web/screencapture-hanselmannpottery-2023-07-27-16_44_32.png"
// import img5 from "../assets/New folder/7.webp"
import img6 from "../assets/updated-portfolio/Web/screencapture-mayoclinic-org-2023-07-27-16_42_58.png"
import img7 from "../assets//updated-portfolio/Web/screencapture-textore-net-2023-07-27-16_41_55.png"


 

const PortfolioGallery = () => {
  return (
    <div className="px-0  mb-20 mx-auto">
      <section className="portfolio-section pb-8" id="portfolio">
        <div className="container-fluid">
        
          <div className="container h-[400px] md:h-[690px] overflow-scroll mx-auto px-2 md:px-5 py-2 lg:px-6 lg:pt-4">
       
            <div className="-m-1 flex flex-wrap md:-m-2">
              <div className="flex w-1/2 flex-wrap">
                <div className="grayscale hover:grayscale-0 ease-in duration-300 w-1/2 p-1 md:p-2">
                  <a href="https://bravogroup.us/" target="_blank">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center "
                    src={img1}
                  />
                  </a>
                </div>
                <div className="grayscale hover:grayscale-0 ease-in duration-300 w-1/2 p-1 md:p-2">
                <a href="https://pi.paytm.com/" target="_blank">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={img2}
                  />
                  </a>
                </div>
                <div className="w-full p-1 md:p-2 grayscale hover:grayscale-0 ease-in duration-300">
                  <a href="https://www.aurorashoeco.com/" target="_blank">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={img3}
                  />
                  </a>
                </div>
              </div>


              <div className="flex w-1/2 flex-wrap">
                <div className="w-full p-1 md:p-2 grayscale hover:grayscale-0 ease-in duration-300">
                <a href="https://hanselmannpottery.com/" target="_blank">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={img4}
                  />
                  </a>
                </div>
                {/* <div className="grayscale hover:grayscale-0 ease-in duration-300 w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={img5}
                  />
                </div> */}
                <div className="grayscale hover:grayscale-0 ease-in duration-300 p-1 md:p-2">
                
                <a href="https://www.mayoclinic.org/" target="_blank">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={img6}
                  />
                  </a>
                </div>
              </div>
              <div className="w-full p-1 md:p-2 grayscale hover:grayscale-0 ease-in duration-300">
                <a href="https://homesensepk.com/" target="_blank">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={img7}
                  />
                  </a>
                </div>

                
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioGallery;

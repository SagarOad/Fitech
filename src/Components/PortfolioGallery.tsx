import img1 from "../assets/updated-portfolio/rts.png"
import img2 from "../assets/updated-portfolio/grandeMaison.png"
import img3 from "../assets/updated-portfolio/fgc.png"
import img4 from "../assets/updated-portfolio/fprod.png"
// import img5 from "../assets/New folder/7.webp"
import img6 from "../assets/New folder/alkauser-charity.jpg"
import img7 from "../assets/New folder/home-sense.jpg"
import img8 from "../assets/New folder/islam-marriage.jpg"
import img9 from "../assets/New folder/mongo-tech.jpg"
import img10 from "../assets/New folder/perky-parrot.jpg"
import img11 from "../assets/New folder/world-wide-group.jpg"


 

const PortfolioGallery = () => {
  return (
    <div className="px-0  mb-20 mx-auto">
      <section className="portfolio-section pb-8" id="portfolio">
        <div className="container-fluid">
        
          <div className="container h-[400px] md:h-[690px] overflow-scroll mx-auto px-2 md:px-5 py-2 lg:px-6 lg:pt-4">
       
            <div className="-m-1 flex flex-wrap md:-m-2">
              <div className="flex w-1/2 flex-wrap">
                <div className="grayscale hover:grayscale-0 ease-in duration-300 w-1/2 p-1 md:p-2">
                  <a href="https://rayyanthesuperhero.com/" target="_blank">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center "
                    src={img1}
                  />
                  </a>
                </div>
                <div className="grayscale hover:grayscale-0 ease-in duration-300 w-1/2 p-1 md:p-2">
                <a href="http://grandemaison.wirelesswavestx.com/" target="_blank">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={img2}
                  />
                  </a>
                </div>
                <div className="w-full p-1 md:p-2 grayscale hover:grayscale-0 ease-in duration-300">
                  <a href="https://famegroupofcompanies.com/" target="_blank">
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
                <a href="https://fame-production.com/" target="_blank">
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
                
                <a href="http://alkousarcharity.com/" target="_blank">
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

                <div className="grayscale hover:grayscale-0 ease-in duration-300 w-1/2 p-1 md:p-2">
                <a href="https://islamarriage.com/" target="_blank">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center "
                    src={img8}
                  />
                  </a>
                </div>


                <div className="flex w-1/2 flex-wrap">
                <div className="grayscale hover:grayscale-0 ease-in duration-300 w-1/2 p-1 md:p-2">
                  <a href="https://mongotech.net/" target="_blank">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center "
                    src={img9}
                  />
                  </a>
                </div>
                <div className="grayscale hover:grayscale-0 ease-in duration-300 w-1/2  p-1 md:p-2">
                
                <a href="https://perkyparrotsnft.com/" target="_blank">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={img10}
                  />
                  </a>
                </div>
                <div className="w-full p-1 md:p-2 grayscale hover:grayscale-0 ease-in duration-300">
                <a href="https://wwg.com.pk/" target="_blank">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={img11}
                  />
                  </a>
                </div>
              </div>
                
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioGallery;

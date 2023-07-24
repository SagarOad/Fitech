import img1 from "../assets/logodesign/logo-1.webp"
import img2 from "../assets/logodesign/logo-2.webp"
import img3 from "../assets/logodesign/logo-3.webp"
import img4 from "../assets/logodesign/logo-4.webp"
import img5 from "../assets/logodesign/logo-5.webp"

const WebDesign = () => {
  return (
    <div className="px-0 md:px-6 mb-20 mx-auto">
      <section className="portfolio-section" id="portfolio">
        <div className="container-fluid">
          <div className="container h-[400px] md:h-[690px] overflow-scroll mx-auto px-2 md:px-5 py-2 lg:px-6 lg:pt-4">
            <div className="-m-1 flex flex-wrap md:-m-2">
              <div className="flex w-full flex-wrap">
                <div className="grayscale hover:grayscale-0 ease-in duration-300 w-1/3 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center "
                    src={img1}
                  />
                </div>
                <div className="grayscale hover:grayscale-0 ease-in duration-300 w-1/3 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={img2}
                  />
                </div>
                <div className="grayscale hover:grayscale-0 ease-in duration-300 w-1/3 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={img3}
                  />
                </div>
                <div className="grayscale hover:grayscale-0 ease-in duration-300 w-1/3 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={img4}
                  />
                </div>
                <div className="grayscale hover:grayscale-0 ease-in duration-300 w-1/3 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={img5}
                  />
                </div>
              </div>
              </div>
            </div>
          </div>
      </section>
    </div>
  );
};

export default WebDesign;

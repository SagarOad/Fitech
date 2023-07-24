import img1 from "../assets/webdesign/6.webp";
import img2 from "../assets/webdesign/cyberverse.jpg";
import img3 from "../assets/webdesign/image-10.webp";
import img4 from "../assets/webdesign/image-11.webp";
import img5 from "../assets/webdesign/image-12.webp";
import img6 from "../assets/webdesign/perky-parrot.jpg";

import img7 from "../assets/New folder/1.webp";
import img8 from "../assets/New folder/2.webp";
import img9 from "../assets/New folder/5.webp";
import img10 from "../assets/New folder/6.webp";
import img11 from "../assets/New folder/7.webp";



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
                  src={img7}
                />
              </div>

              <div className="grayscale hover:grayscale-0 ease-in duration-300 w-1/3 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={img8}
                />
              </div>

              <div className="grayscale hover:grayscale-0 ease-in duration-300 w-1/3 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={img9}
                />
              </div>

              <div className="grayscale hover:grayscale-0 ease-in duration-300 w-1/3 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={img10}
                />
              </div>

              <div className="grayscale hover:grayscale-0 ease-in duration-300 w-1/3 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={img11}
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

              <div className="grayscale hover:grayscale-0 ease-in duration-300 w-1/3 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={img6}
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

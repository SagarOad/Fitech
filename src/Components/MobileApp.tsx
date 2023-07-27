import img1 from "../assets/mobileapps/App 1.1.png"
import img2 from "../assets/mobileapps/App 1.2.png"
import img3 from "../assets/mobileapps/App 1.3.png"
import img4 from "../assets/mobileapps/App 2.1.png"
import img5 from "../assets/mobileapps/App 2.2.png"
import img6 from "../assets/mobileapps/App 2.3.png"
import img7 from "../assets/mobileapps/App 3.1.png"
import img8 from "../assets/mobileapps/App 3.2.png"
import img9 from "../assets/mobileapps/App 3.3.png"
import img10 from "../assets/mobileapps/App 4.1.png"
import img11 from "../assets/mobileapps/App 4.2.png"
import img12 from "../assets/mobileapps/App 4.3.png"

const MobileApp = () => {
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
              <div className="grayscale hover:grayscale-0 ease-in duration-300 w-1/3 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={img6}
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
                  src={img12}
                />
              </div>
            </div>
            </div>
          </div>
        </div>
    </section>
  </div>
  )
}

export default MobileApp
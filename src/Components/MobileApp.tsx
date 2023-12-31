import img1 from "../assets/mobileapps/1 (4).png"
import img2 from "../assets/mobileapps/2 (5).png"
import img3 from "../assets/mobileapps/3 (3).png"
import img4 from "../assets/mobileapps/4 (3).png"
import img5 from "../assets/mobileapps/5 (3).png"

const MobileApp = () => {
  return (
    <div className="px-0 md:px-6 mb-20 mx-auto">
    <section className="portfolio-section" id="portfolio">
      <div className="container-fluid">
        <div className="container h-[400px] md:h-[800px] overflow-scroll mx-auto px-2 md:px-5 py-2 lg:px-6 lg:pt-4">
          <div className="-m-1 flex flex-wrap md:-m-2">
            <div className="flex w-full flex-wrap">
              <div className="grayscale flex justify-center items-center hover:grayscale-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
                <img
                  alt="gallery"
                  className="block w-[250px] rounded-lg object-cover object-center "
                  src={img1}
                />
              </div>
              <div className="grayscale flex justify-center items-center hover:grayscale-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
                <img
                  alt="gallery"
                  className="block w-[250px] rounded-lg object-cover object-center"
                  src={img2}
                />
              </div>
              <div className="grayscale flex justify-center items-center hover:grayscale-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
                <img
                  alt="gallery"
                  className="block w-[250px] rounded-lg object-cover object-center"
                  src={img3}
                />
              </div>
              <div className="grayscale flex justify-center items-center hover:grayscale-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
                <img
                  alt="gallery"
                  className="block w-[250px] rounded-lg object-cover object-center"
                  src={img4}
                />
              </div>
              <div className="grayscale flex justify-center items-center hover:grayscale-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
                <img
                  alt="gallery"
                  className="block w-[250px] rounded-lg object-cover object-center"
                  src={img5}
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
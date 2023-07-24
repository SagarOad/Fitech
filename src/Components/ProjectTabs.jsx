import React from 'react'
import GalleryWeb from "../Components/PortfolioGallery"
import Ecommerce from "../Components/Ecommerce"
import WebDesign from "../Components/WebDesign"
import LogoDesign from "../Components/LogoDesign"
import MobileApp from "../Components/MobileApp"
import Animation from "../Components/Animation"

window.onload = function () {
  let tabs = document.querySelectorAll(".tab")
  let indicator = document.querySelector(".indicator")
  let panels = document.querySelectorAll(".tab-panel")
  
  indicator.style.width = tabs[0].getBoundingClientRect().width + 'px'
  indicator.style.left = tabs[0].getBoundingClientRect().left - tabs[0].parentElement.getBoundingClientRect().left + 'px'
  
  tabs.forEach(tab =>{
    tab.addEventListener("click", ()=>{
      let tabTarget = tab.getAttribute("aria-controls")
  
      indicator.style.width = tab.getBoundingClientRect().width + 'px'
      indicator.style.left = tab.getBoundingClientRect().left - tab.parentElement.getBoundingClientRect().left + 'px'
  
  
      panels.forEach(panel =>{
        let panelId = panel.getAttribute("id")
        if(tabTarget === panelId){
          panel.classList.remove("invisible", "opacity-0")
          panel.classList.add("visible", "opacity-100")
        } else {
          panel.classList.add("invisible", "opacity-0")
        }
      })
    })
  })
};


const ProjectTabs = () => {

  return (
    <div id='projects' className=''>
      <div className="row mb-12">
            <div className="col-lg-12 text-center">
              <h2 className="text-3xl md:text-[3rem] text-white font-[nexa] opacity-95 font-bold leading-tight md:text-center">
                Project Gallery
              </h2>
              <p className="text-white opacity-85 mt-3 font-[poppins] text-base md:text-[21px]">
              See our work! 
              </p>
            </div>
          </div>
         <div className="mx-auto px-8 sm:px-0">
      <div className="sm:w-10/12 sm:mx-auto">
        <div 
          role="tablist"
          aria-label="tabs"
          className="relative w-[auto] text-[12px] xl:text-[18px] xl:w-max mx-auto flex flex-wrap md:h-12 md:grid md:grid-cols-6 items-center px-[3px] rounded-full md:backdrop-blur-xl md:bg-white/30 overflow-hidden shadow-2xl shadow-900/20 transition"
        >
          <div className="absolute hidden md:block indicator h-11 my-auto top-0 bottom-0 left-0 rounded-full bg-[#f58020] shadow-md"></div>
          <button
            role="tab"
            aria-selected="true"
            aria-controls="panel-1"
            id="tab-1"
            tabindex="0"
            className="relative block md:p-2 p-0 md:m-0 m-4 h-10 tab rounded-full"
          >
            <span className="text-white">Web Development</span>
          </button>
          <button
            role="tab"
            aria-selected="false"
            aria-controls="panel-2"
            id="tab-2"
            tabindex="-1"
            className="relative block md:p-2 p-0 md:m-0 m-4 h-10 tab rounded-full"
          >
            <span className="text-white">Ecommerce</span>
          </button>
          <button
            role="tab"
            aria-selected="false"
            aria-controls="panel-3"
            id="tab-3"
            tabindex="-1"
            className="relative block md:p-2 p-0 md:m-0 m-4 h-10 tab rounded-full"
          >
            <span className="text-white">UI / UX</span>
          </button>
          <button
            role="tab"
            aria-selected="false"
            aria-controls="panel-4"
            id="tab-4"
            tabindex="-1"
            className="relative block md:p-2 p-0 md:m-0 m-4 h-10 tab rounded-full"
          >
            <span className="text-white">Logo Design</span>
          </button>
          <button
            role="tab"
            aria-selected="false"
            aria-controls="panel-5"
            id="tab-5"
            tabindex="-1"
            className="relative block md:p-2 p-0 md:m-0 m-4 h-10 tab rounded-full"
          >
            <span className="text-white">Mobile App</span>
          </button>
          <button
            role="tab"
            aria-selected="false"
            aria-controls="panel-6"
            id="tab-6"
            tabindex="-1"
            className="relative block md:p-2 p-0 md:m-0 m-4 h-10 tab rounded-full"
          >
            <span className="text-white">2d / 3d Animation</span>
          </button>
        </div>
        <div className="mt-6 relative rounded-3xl  backdrop-blur-xl bg-white/30">
          <div
            role="tabpanel"
            id="panel-1"
            className="tab-panel p-0 transition duration-300"
          >
            <GalleryWeb />
          </div>
          <div
            role="tabpanel"
            id="panel-2"
            className="absolute top-0 invisible opacity-0 tab-panel p-0 md:p-6 transition duration-300"
          >
            <Ecommerce />
          </div>
          <div
            role="tabpanel"
            id="panel-3"
            className="absolute top-0 invisible opacity-0 tab-panel p-0 md:p-6 transition duration-300"
          >
           <WebDesign />
          </div>
          <div
            role="tabpanel"
            id="panel-4"
            className="absolute top-0 invisible opacity-0 tab-panel p-0 md:p-6 transition duration-300"
          >
           <LogoDesign /> 
          </div>
          <div
            role="tabpanel"
            id="panel-5"
            className="absolute top-0 invisible opacity-0 tab-panel p-0 md:p-6 transition duration-300"
          >
           <MobileApp />
          </div>
          <div
            role="tabpanel"
            id="panel-6"
            className="absolute top-0 invisible opacity-0 tab-panel p-0 md:p-6 transition duration-300"
          >
          <Animation />
          </div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default ProjectTabs
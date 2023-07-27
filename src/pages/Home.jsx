import React from 'react'
import "../App.css";
import MainBanner from '../Components/MainBanner';
import Anime from "../Components/Anime";
import ContactSection from "../Components/ContactSection";
import Features from "../Components/Features";
import OurServices from "../Components/OurServices";
import OurServices2 from "../Components/OurServices2";
import Pricing from "../Components/Pricing";
import Branding from "../Components/Branding";
import Footer from "../Components/Footer";
import TeamSlider from "../Components/TeamSlider";
import ProjectTabs from "../Components/ProjectTabs";

const Home = () => {
  return (
     <div className="main-bg  leading-normal tracking-normal text-indigo-400 bg-cover bg-fixed">
      <MainBanner />
      <OurServices2 />
      <Features />
      <Branding />
      <OurServices />
      <Anime />
      <ProjectTabs />
      <ContactSection />
      <Pricing />
      {/* <TeamSlider /> */}
      <Footer />
    </div>
  )
}

export default Home
import "./App.css";
import Home from "./pages/home";
import MobileApp from "./pages/MobileApp";
import Ecommerce from "./pages/Ecommerce";
import DigitalMarketing from "../src/pages/DigitalMarketing"
import GraphicsDesign from "../src/pages/GraphicsDesign"
import Animation from "../src/pages/Animation"
import SoftwareDevelopment from "../src/pages/SoftwareDevelopment"
import { useRoutes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import NftDesigning from "./pages/NftDesigning";
import ScrollToTop from "./ScrollToTop";


const App = () => {
  const routes = useRoutes([
      { path: '/', element: <Home /> },
      { path: '/about', element: <AboutUs /> },
      { path: '/servicepage', element: <MobileApp /> },
      { path: '/ecommerce', element: <Ecommerce /> },
      { path: '/digitalmarketing', element: <DigitalMarketing /> },
      { path: '/animation', element: <Animation /> },
      { path: '/graphicsdesign', element: <GraphicsDesign /> },
      { path: '/softwaredevelopment', element: <SoftwareDevelopment /> },
      { path: '/nftdesigning', element: <NftDesigning /> },
  ]);

  return (
    <>
  <ScrollToTop />
    {routes}
    </>
  ) 
};

export default App;

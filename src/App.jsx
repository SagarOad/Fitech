import "./App.css";
import Home from "./pages/home";
import MobileApp from "./pages/MobileApp";
import { useState } from "react";
import { useRoutes } from "react-router-dom";

const App = () => {
  const routes = useRoutes([
      { path: '/', element: <Home /> },
      { path: '/servicepage', element: <MobileApp /> },
      { path: '/ecommerce', element: <MobileApp /> },
      { path: '/digitalmarketing', element: <MobileApp /> },
      { path: '/animation', element: <MobileApp /> },
      { path: '/graphicsdesign', element: <MobileApp /> },
      { path: '/softwaredevelopment', element: <MobileApp /> },
  ]);

  return routes;
};

export default App;

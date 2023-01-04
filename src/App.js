
import "./App.css";

import Footer from "./components/Footer";
import { useEffect } from "react";
import WOW from "wowjs";
import "animate.css";
import Header from "./sections/Header";
import Service from "./components/Service";
import AboutUs from "./components/AboutUs";
// import Pricelist from "./sections/Pricelist";
import OurTeam from "./sections/OurTeam";
import OurGallery from "./sections/OurGallery";
import Map from "./sections/Map";
import NewPriceList from "./sections/NewPriceList";

function App() {
  useEffect(()=>{
    new WOW.WOW().init();
  },[]);

  return (
    <div>
      <Header/>
      <Service/>
      <AboutUs/>
      {/* <Pricelist/> */}
      <NewPriceList/>
      <OurTeam/>
      <OurGallery/>
      <Map/>
      <Footer/>
    </div>
  );
}

export default App;

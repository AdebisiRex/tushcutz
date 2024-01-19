
import "./App.css";

import Footer from "./components/Footer";
import { useEffect } from "react";
import WOW from "wowjs";
import "animate.css";
import Header from "./sections/Header";
// import Service from "./components/Service";
import AboutUs from "./components/AboutUs";
// import Pricelist from "./sections/Pricelist";
import OurTeam from "./sections/OurTeam";
import OurGallery from "./sections/OurGallery";
import Map from "./sections/Map";
import NewPriceList from "./sections/NewPriceList";
import Banner from "./components/Banner";
import BlobGallery from "./sections/BlobGallery";

function App() {
  useEffect(()=>{
    new WOW.WOW().init();
  },[]);

  return (
    <div>
      {/* <Banner/> */}
      <Header/>
      {/* <Service/> */}
      <AboutUs/>
      {/* <Pricelist/> */}
      <NewPriceList/>
      {/* <OurTeam/> */}
      {/* <OurGallery/> */}
      <BlobGallery/>
      <Map/>
      <Footer/>
    </div>
  );
}

export default App;

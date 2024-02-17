import React from "react";
import Navbar from "../components/Navbar";
import watch from "../assets/watch-video.png";
import line from "../assets/line.png";
import classes from "../styles/Header.module.css";
import Service from "../components/Service";
const Header = () => {
  return (
    <>
      <header id="header" className={classes.header + ""}>
        <Navbar />
        <div className={classes.header_div + "  text-white container"}>
          <div className={classes.premium + " d-flex "}>
            <img src={line} height={3} alt="" className="p-0 m-0 me-2" />
            <p className="">THE PREMIUM LIFESTYLE</p>
          </div>
          <div className={classes.text_content}>
          <h1 className={classes.bigText}>
            You're Not A Customer, You're FAMILY
          </h1>
          <p>
          The best barbershop in Newark with top-notch stylists. We are the best place to improve your style and confidence.
          </p>
          </div>
          <a href="https://www.instagram.com/p/CezvmvDgUI1/" target={"_blank"} className={classes.watch + " d-flex align-items-center"}>
            <h4 className="me-2 text-white">Watch Video</h4>
            <img src={watch} width={34} alt="" className="p-0 m-0 ms-2" />
          </a>
        </div>
        <Service/>
      </header>
    </>
  );
};

export default Header;

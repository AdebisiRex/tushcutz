import React from "react";
import Navbar from "../components/Navbar";
import watch from "../assets/watch-video.png";
import line from "../assets/line.png";
import classes from "../styles/Header.module.css";
const Header = () => {
  return (
    <>
      <header id="header" className={classes.header + " vh-100"}>
        <Navbar />
        <div className={classes.header_div + "  text-white container"}>
          <div className={classes.premium + " d-flex "}>
            <img src={line} height={3} alt="" className="p-0 m-0 me-2" />
            <p className="">THE PREMIUM LIFESTYLE</p>
          </div>
          <div className={classes.text_content}>
          <h1 className=" ">
            You're Not A Customer, You're FAMILY
          </h1>
          <p>
            The wonderful serenity has taken possesion of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart
          </p>
          </div>
          <div className={classes.watch + " d-flex align-items-center"}>
            <h4 className="me-2">Watch Video</h4>
            <img src={watch} width={34} alt="" className="p-0 m-0 ms-2" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

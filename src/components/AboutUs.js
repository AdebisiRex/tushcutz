import React from "react";
import line from "../assets/line.png";
import barber from "../assets/bg-2.png";
import classes from "../styles/AboutUs.module.css";

const AboutUs = () => {
  return (
    <div id="about" className={classes.about}>
      <div className={classes.barber_img_div}>
      <img src={barber} alt="" className={classes.barber_img} />
      </div>

      <div className={classes.about_div  + " pt-4 p-3"}>
        <div className={" d-flex align-items-center mb-3"}>
          <img src={line} height={3} alt="" className="p-0 m-0 me-2" />
          <p className="m-0 lh-0 font-monospace ">About us</p>
        </div>

        <h1>WELCOME TO TUSH BARBER SHOP</h1>
        <p className="ms-3 ps-3">
          Proactively integrate turnkey synergy with world-class portals.
          Proactively harness sticky users whereas cooperative opportunities.
          harness exceptional before fully researched services. Seamlessly
          network client-focused.
        </p>

        <button className="btn btn-danger rounded-0 fs-5 py-3 shadow px-5 float-end">
          Read More
        </button>
      </div>
    </div>
  );
};

export default AboutUs;

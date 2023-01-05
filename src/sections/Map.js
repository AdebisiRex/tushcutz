import React from "react";
import classes from "../styles/Map.module.css";

import working from "../assets/working-hours.png";
import contact from "../assets/smartphone.png";
import address from "../assets/address.png";

const Map = () => {
  return (
    <div id="contact" className={` ${classes.contact}`}>
      <div
        className={
          classes.details +
          "  container wow animate__animated animate__fadeInDown animate__slower  mb-5"
        }
      >
        <div className="bg-primary p-3 shadow  text-white text-center">
          <img src={working} alt="" className="mb-2" />
          <p className="m-0">WORKING HOURS</p>
          <p className="m-0">Monday to Saturday: 10:00am - 7:00pm</p>
          <p className="m-0">Sunday: Closed</p>
        </div>
        
        <div className="bg-primary p-3 shadow text-white text-center">
          <img src={address} alt="" className="mb-2" />
          <p className="m-0">ADDRESS:</p>
          <p className="m-0">Raymond Blvd, 1212, A, Newark, 07102</p>
        </div>
        <div className="bg-primary p-3 shadow text-white text-center">
          <img src={contact} alt="" className="mb-2" />
          <p className="m-0">CONTACT:</p>
          <p className="m-0">(862) 367-3408</p>
          <p className="m-0">Tushcutz@gmail.com</p>
        </div>
      </div>
      <a
        target={"_blank"} rel="noreferrer"
        href="https://www.google.com/maps/dir//40.73763,-74.1721/@40.7374425,-74.2419733,12z/data=!3m1!4b1"
      >
        <div className={classes.map}></div>
      </a>
    </div>
  );
};

export default Map;

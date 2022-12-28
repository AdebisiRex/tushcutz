import React from "react";
import classes from "../styles/OurTeam.module.css"
import staff from "../assets/staff.png"
import facebook from "../assets/facebook-dark.png"
import instagram from "../assets/instagram-dark.png"
import twitter from "../assets/twitter-dark.png"
import tiktok from "../assets/tiktok-dark.png"

const OurTeamCard = () => {
  return (
    <div className="col-6 
     col-lg-3 text-dark">
      <div className={classes.card_img_div}>
        <img src={staff} alt="" />
      </div>
      <div className="p-3 bg-white">
        <p className="fs-5 m-0">John Doe </p>
        <p className="fw-bold m-0">BARBER</p>
        <hr />
        <div>
          <img src={facebook} alt="" width={20} className="mx-1" />
          <img src={instagram} alt="" width={20} className="mx-1" />
          <img src={twitter} alt="" width={20} className="mx-1" />
          <img src={tiktok} alt="" width={20} className="mx-1" />
        </div>
      </div>
    </div>
  );
};

export default OurTeamCard;

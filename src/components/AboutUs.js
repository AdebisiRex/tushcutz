import React, { useState } from "react";
import line from "../assets/line.png";
import barber from "../assets/bg-2.png";
import classes from "../styles/AboutUs.module.css";

const AboutUs = () => {
  const [show, setshow] = useState(false);

  const showMore = () => {
    let text = document.getElementById("aboutText");
    text.classList.toggle("abt_show");
    setshow(!show);
  };

  return (
    <div id="about" className={`${classes.about} grid`}>
      <div className={`g-col-12 g-col-md-6 ${classes.barber_img_div}`}>
        <img src={barber} alt="" className={classes.barber_img} />
      </div>

      <div className={classes.about_div + " g-col-12 g-col-md-6 pt-4 p-3"}>
        <div className={" d-flex align-items-center mb-3"}>
          <img src={line} height={3} alt="" className="p-0 m-0 me-2" />
          <p className="m-0 lh-0 font-monospace ">About us</p>
        </div>

        <div>
          <h1 className={classes.about_h1}>WELCOME TO TUSH BARBER SHOP</h1>
          <p
            id="aboutText"
            className={`ms-3 ps-3 abt_show ${classes.about_text}`}
          >
            Tush Cutz Barbershop is one of the finest barber shops located in
            the heart of downtown Newark. Our shop has been ranked highly among
            the high-end barber shops in Newark and is endowed with top-notch
            barbers who are competent and offer all styles you like. Our work
            has also been featured on the social media pages of various
            celebrities as one of the best places to visit for your haircut
            needs. We provide top-tier services and the best professional
            haircuts to top professionals and celebrities. We take pride in our
            commitment, excellence, and elegance in men's grooming. If you want
            to improve your style and confidence, look no further for a master
            stylist.
          </p>

          <button
            id="button"
            onClick={showMore}
            className="btn btn-danger rounded-0 fs-5 py-3 shadow px-5 float-end"
          >
            {show ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

import React from "react";
import line from "../assets/line.png";
import classes from "../styles/Price.module.css";

const PriceHero = () => {
  return (
    <div className={classes.hero + " text-white"}>
      <div className={classes.pricehero + " container"}>
        <div className={" d-flex align-items-center mb-3"}>
          <img src={line} height={3} alt="" className="p-0 m-0 me-2" />
          <p className="m-0 lh-0 font-monospace ">Price List</p>
        </div>

        <h1>First Hair Cut Free For Kids</h1>
      </div>
    </div>
  );
};

export default PriceHero;

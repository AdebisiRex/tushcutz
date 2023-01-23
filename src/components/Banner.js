import React from "react";
import classes from "../styles/Banner.module.css";

import book from "../assets/book.png";
import bookArrow from "../assets/book-arrow.png";

const Banner = () => {
  return (
    <div className="bg-danger">
      <a
        rel="noreferrer"
        target="_blank"
        href="https://booksy.com/en-us/540342_tush-cutz-barbershop_barber-shop_134623_newark?do=invite&_branch_match_id=1051452559234864044&utm_source=sms&utm_medium=merchant_customer_invite&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVL7MM8s6PzM7Iz08CAIyEGjoiAAAA"
        className={"container p-3 align-items-center " + classes.banner}
      >
        <div>
          <p className="text-white m-1 ">
            Save up to 10% during our Happy Hours
          </p>
          <p className="text-white m-1 ">
            Monday to Wednesday 1:00am to 4:00pm
          </p>
        </div>

        <div
          className={
            classes.book +
            "px-4 d-flex justify-content-between align-items-center text-white"
          }
        >
          <img src={book} className=" p-0 pb-2 m-0 me-3  " width={20} alt="" />
          <p className="fs-5 mb-1 me-2">Book Now</p>

          <img className=" " src={bookArrow} height={20} alt="" />
        </div>
      </a>
    </div>
  );
};

export default Banner;

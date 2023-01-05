import React from "react";
import classes from "../styles/Service.module.css";
// import facebook from "../assets/facebook-white.png";
import tiktok from "../assets/TikTok.png";
import instagram from "../assets/instagram.png";
import google from "../assets/google.png";
import book from "../assets/book.png";
import bookArrow from "../assets/book-arrow.png";
import line from "../assets/line.png";
import Caro from "./Caro.";

const Service = () => {
  return (
    <div className={classes.services}>
      <div className={classes.socials + " "}>
        <div>
          {/* <img className="mx-2" src={facebook} width={20} alt="" /> */}
          <a rel="noreferrer" target={"_blank"}  href="tushcutz@gmail.com"><img className="mx-2" src={google} width={20} alt="" /></a>
          <a rel="noreferrer" target={"_blank"} href="https://www.tiktok.com/@tushiemane?_t=8Yc06momeYk&_r=1"><img className="mx-2" src={tiktok} width={20} alt="" /></a>
          <a rel="noreferrer" target={"_blank"} href="https://instagram.com/tushcutzbarbershop?igshid=YWJhMjlhZTc="><img className="mx-2" src={instagram} width={20} alt="" /></a>
        </div>
      </div>
      <div className="text-center bg-white py-3">
        <p className="fw-bold  fs-5 m-0">Opening Times</p>
        <span className="fs-6">mon to sat - 10:00 am to 8:00pm</span>
      </div>
      <div className={classes.carousel + " bg-primary p-3 text-white"}>
        <div className="w-100">
          <div className={classes.customer + " d-flex "}>
            <img src={line} height={3} alt="" className="p-0 m-0 me-2" />
            <p className="fs-5">Customer say</p>
          </div>
          <Caro />
        </div>
      </div>
      <div  
        className={
          classes.book +
          " bg-danger  px-4 d-flex justify-content-between align-items-center text-white"
        }
      >
        <a  rel="noreferrer" target="_blank"
           href="https://booksy.com/en-us/540342_tush-cutz-barbershop_barber-shop_134623_newark?do=invite&_branch_match_id=1051452559234864044&utm_source=sms&utm_medium=merchant_customer_invite&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVL7MM8s6PzM7Iz08CAIyEGjoiAAAA" className="pt-3 w-100 p   text-white ">
          <img src={book} className=" p-0 pb-2 m-0 me-3  " width={20} alt="" />
          <p className="fs-5">
            Book Now
          </p>
        </a>
        <img src={bookArrow} height={20} alt="" />
      </div>
    </div>
  );
};

export default Service;

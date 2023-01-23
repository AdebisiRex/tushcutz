import React from 'react'
import classes from "../styles/Footer.module.css"
// import {Link} from "react-router-dom"
import logo from "../assets/logo.png"
import tiktok from "../assets/TikTok.png";
// import facebook from "../assets/facebook-white.png"
// import twitter from "../assets/twitter-white.png"
import instagram from "../assets/instagram.png"
import google from "../assets/google.png"


const Footer = () => {
  return (
    <div className={classes.footer + "  bg-primary py-4"}>
       <div>

        <img src={logo} height={150} alt="" />
       </div>
       
      
        <div>
          {/* <img className="mx-2" src={facebook} width={20} alt="" /> */}
          <a rel="noreferrer" target={"_blank"}  href="tushcutz@gmail.com"><img className="mx-2" src={google} width={20} alt="" /></a>
          <a rel="noreferrer" target={"_blank"} href="https://www.tiktok.com/@tushiemane?_t=8Yc06momeYk&_r=1"><img className="mx-2" src={tiktok} width={20} alt="" /></a>
          <a rel="noreferrer" target={"_blank"} href="https://instagram.com/tushcutzbarbershop?igshid=YWJhMjlhZTc="><img className="mx-2" src={instagram} width={20} alt="" /></a>
        </div>
        <div className={classes.footer_nav + "  mx-auto "}>
            <div className='d-lg-flex mx-auto text-center'>
                <div className='' >
                    <a className={'fs-5  text-white  nav-link '+ classes.link} href="#header">Home</a>
                </div>
                <div className='' >
                    <a href='#about' className={'fs-5 nav-link text-white '+ classes.link}>About</a>
                </div>
                <div className='' >
                    <a href='#services' className={'fs-5  text-white nav-link '+ classes.link}>Services</a>
                </div>
                <div className='' >
                    <a href='#our-team' className={'fs-5  text-white nav-link '+ classes.link}>Our Team</a>
                </div>
                <div className='' >
                    <a href='#gallery' className={'fs-5  text-white nav-link '+ classes.link}>Gallery</a>
                </div>
                <div className=' ' >
                    <a href='#contact' className={'fs-5  text-white nav-link '+ classes.link}>Contact</a>
                </div>
            </div>
        </div>

        <div className='mb-3'>
            <a className={classes.btn} rel="noreferrer" target="_blank"
           href="https://booksy.com/en-us/540342_tush-cutz-barbershop_barber-shop_134623_newark?do=invite&_branch_match_id=1051452559234864044&utm_source=sms&utm_medium=merchant_customer_invite&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVL7MM8s6PzM7Iz08CAIyEGjoiAAAA">
            <button className={'btn btn-danger rounded-0 fs-5 py-2 px-5'}>Book Now</button>
            </a>
        </div>

        <div><p className='text-white'> Copywright &copy; 2023 Tushcutz Barbers</p></div>


    </div>
  )
}

export default Footer
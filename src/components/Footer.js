import React from 'react'
import classes from "../styles/Footer.module.css"
// import {Link} from "react-router-dom"
import logo from "../assets/logo.png"
import facebook from "../assets/facebook-white.png"
import twitter from "../assets/twitter-white.png"
import instagram from "../assets/instagram.png"
import google from "../assets/google.png"


const Footer = () => {
  return (
    <div className={classes.footer + "  bg-primary py-4"}>
       <div>

        <img src={logo} height={150} alt="" />
       </div>
       
        <div className="socials">
            <img className='mx-1'  src={facebook} width={20} alt="" />
            <img className='mx-1' src={twitter} width={20} alt="" />
            <img className='mx-1' src={instagram} width={20} alt="" />
            <img className='mx-1' src={google} width={20} alt="" />
        </div>
        <div className={classes.footer_nav + " mx-auto "}>
            <ul className='d-lg-flex  '>
                <li >
                    <a className={'fs-5 mb-5 px-3 text-white '+ classes.link} href="#header">Home</a>
                </li>
                <li >
                    <a href='#about' className={'fs-5 mb-5 px-3 text-white '+ classes.link}>About</a>
                </li>
                <li >
                    <a href='#services' className={'fs-5 mb-5 px-3 text-white '+ classes.link}>Services</a>
                </li>
                <li >
                    <a href='#our-team' className={'fs-5 mb-5 px-3 text-white '+ classes.link}>Our Team</a>
                </li>
                <li >
                    <a href='#gallery' className={'fs-5 mb-5 px-3 text-white '+ classes.link}>Gallery</a>
                </li>
                <li >
                    <a href='#contact' className={'fs-5 mb-5 px-3 text-white '+ classes.link}>Contact</a>
                </li>
            </ul>
        </div>

        <div className='mb-3'>
            <button className='btn btn-danger rounded-0 fs-5 py-2 px-5'>Book Now</button>
        </div>

        <div><p className='text-white'> Copywright &copy; 2023 Tushcutz Barbers</p></div>


    </div>
  )
}

export default Footer
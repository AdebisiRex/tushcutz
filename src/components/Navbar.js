import React from "react";
import classes from "../styles/Navbar.module.css";
// import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
import menu from "../assets/menu.png"

const Navbar = () => {
  return (
    <nav
      className={
        classes.navbar_height + " navbar navbar-expand-lg"
      }
    >
        <a href="header" className={"mx-auto  " + classes.logo} to="#">
          <img src={logo} className={classes.logo_img_width} alt="" />
        </a>
      <div className="container">
        
        <button
          className="btn border-0 navbar-toggler ms-auto "
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#externalNavbar"
          aria-controls="externalNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img src={menu} width={35} alt="" /> 
        </button>

   

        <div
          className={classes.canvas + " p-3 offcanvas offcanvas-start navbar-collapse z-50"}
          id="externalNavbar"
        >
          
          <div className={"wow animate__animated animate__fadeInDown  d-lg-flex justify-content-between  w-100"}>
            
          <ul className={"navbar-nav fw-normal me-auto  " + classes.navbar_items}>
            
            <li className="nav-item pe-lg-5">
              <a className= " nav-link text-white fs-5 px-lg-2 pb-1" href="#header">
                Home
              </a>
            </li>
            <li className="nav-item pe-lg-5">
              <a className= " nav-link text-white fs-5 px-lg-2 pb-1" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link pb-1 text-white fs-5" href="#services">
                Services
              </a>
            </li>
          </ul>
          <ul className={"navbar-nav fw-normal ms-auto  " + classes.navbar_items}>
            
            <li className="nav-item pe-lg-5">
              <a className= " nav-link text-white px-lg-2 pb-1 fs-5" href="#our-team">
                Our Team 
              </a>
            </li>
            <li className="nav-item pe-lg-5">
              <a className= " nav-link text-white fs-5 px-lg-2 pb-1" href="#gallery">
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link pb-1 text-white fs-5" href="#contact-us">
                Contact
              </a>
            </li>
          </ul>
          </div>
          
         
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

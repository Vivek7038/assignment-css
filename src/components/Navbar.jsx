import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import sun from "../assets/sun-rays.png";
import uparrow from "../assets/arrow-up.png"
const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="nav nav-first underline-div">
          <ul>
            <li className="selected">Home</li>
            <li>About Us</li>
            <li>Get Involved </li>
            <li />
          </ul>
        </div>

        <div className="vl"></div>

        <div className="nav underline-second-div brand">
          <img src={logo} className="logo" alt="loading" />
          <div className="circle"></div>
          <div>charify</div>
        </div>

        <div className="vl2"></div>

        <div className="nav underline-last-div">
          <ul>
            <li>Donor</li>
            <li>Stories</li>
            <li>News & Events</li>
          </ul>
        </div>
      </div>
      <div className="hero-section">
        <div className="first">
          <div className="first-child">
            Our Highest Ambition is to Help People{" "}
          </div>
        </div>
        <div className="second">
          <div className="rectangle">
            
             
          <div className="logo_second"><img src={logo}alt="" /></div>
            <img src={sun} alt="loading" />
            <div>
          
            </div>
            <div className="dot"/>
            <div className="sunray"/>
            <div className="circle_second">
           <div className="oval"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

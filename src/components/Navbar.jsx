import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import sun from "../assets/sun-rays.png";
import uparrow from "../assets/arrow-up.png";
const Navbar = () => {
  return <>
  <div className="nav">
    <div className="nav-items">
      <div className="nav-one">
      <div className="selected">Home</div>
      <div>About Us</div>
      <div>Get Involved</div>
      </div>
      <div className="nav-two">
      <div>logo</div>
      <div>charify</div>
     
      </div>
      <div className="nav-three">
      <div>Donor</div>
      <div>Stories</div>
      <div>News & Events</div>
     
      </div>
    </div>
    <div className="horizontal-line"/>
  </div>
  </>;
};

export default Navbar;

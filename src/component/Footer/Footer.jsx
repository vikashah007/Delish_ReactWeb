import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <h1>DELISH</h1>
          <p>
          Delicious meals delivered to your door! Enjoy a wide variety of cuisines crafted fresh and fast, just for you. Order now and taste the ease of effortless dining with quality you can trust. Your cravings, our commitment!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>DELISH</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
        <h2>GET IN TOUCH</h2>
        <ul>
        <li>+91 7234532132</li>
        <li>orderdeliciousfoods@gmail.com</li>
        </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">Copyright 2024 @ Delish.com - All Right Reserved</p>
    </div>
  );
};

export default Footer;

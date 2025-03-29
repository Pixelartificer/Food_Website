import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footerContent">
        <div className="footerContentLeft">
          <img src={assets.logo} alt={assets.logo} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
            numquam repellendus tenetur voluptate alias itaque. Quasi, numquam?
            Similique harum quidem rem numquam? Esse harum doloremque deserunt
            optio fuga, et voluptatibus.
          </p>
          <div className="footerSocialItems">
            <img src={assets.facebook_icon} alt={assets.facebook_icon} />
            <img src={assets.twitter_icon} alt={assets.twitter_icon} />
            <img src={assets.linkedin_icon} alt={assets.linkedin_icon} />
          </div>
        </div>

        <div className="footerContentCanter">
            <h2>Company Name</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li> Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div className="footerContentRight">
            <h2>Get in Touch</h2>
            <ul>
                <li>+001 566332 5896</li>
                <li>domein@domainname.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footerCopyRight">Copyright 2024 Company Name. All rights reserved.</p>
    </div>
  );
};

export default Footer;

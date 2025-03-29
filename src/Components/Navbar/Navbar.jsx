import React, { useState } from "react";
import './Navbar.css'
import { assets } from "../../assets/assets";

const Navbar = () => {

const [menu, setMenu] = useState("home")


  return (
    <>
      <div className="navbar">
        <img src={assets.logo} alt={assets.logo} className="logo" />
        <ul className="navbarMeny">
          <li onClick={()=>setMenu('home')} className={menu==='home'? 'active':''}>Home</li>
          <li onClick={()=>setMenu('menu')} className={menu==='menu' ? 'active':''}>Menu</li>
          <li onClick={()=>setMenu('mobile-App')} className={menu==='mobile-App' ? 'active':''}>MobileApp</li>
          <li onClick={()=>setMenu('contact-us')} className={menu==='contact-us' ? 'active':''}> Contact Us</li>
        </ul>
        <div className="navbarRight">
          <img src={assets.search_icon} alt={assets.search_icon} />
          <div className="navBarSearchIcon">
            <img src={assets.basket_icon} alt={assets.basket_icon} />
            <div className="dot"></div>
          </div>
          <button>Sign In</button>
        </div>
      </div>
    </>
  ); 
};

export default Navbar;

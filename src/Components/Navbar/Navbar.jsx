import React, { useContext, useState } from "react";
import './Navbar.css'
import { assets } from "../../assets/assets";
import { Link } from "react-router";
import { StoreContext } from "../../Context/StoreContext";

const Navbar = ({setShowLogin}) => {

const [menu, setMenu] = useState("home")

const {getTotalCartAmount} = useContext(StoreContext);


  return (
    <>
      <div className="navbar">
        <Link to='/'><img src={assets.logo} alt={assets.logo} className="logo" /></Link>
        <ul className="navbarMenu">
          <Link to='/' onClick={()=>setMenu('home')} className={menu==='home'? 'active':''}>Home</Link>
          <a href="#exploreMenu" onClick={()=>setMenu('menu')} className={menu==='menu' ? 'active':''}>Menu</a>
          <a href="#appDownload" onClick={()=>setMenu('mobile-App')} className={menu==='mobile-App' ? 'active':''}>MobileApp</a>
          <a href="#footer" onClick={()=>setMenu('contact-us')} className={menu==='contact-us' ? 'active':''}> Contact Us</a>
        </ul>
        <div className="navbarRight">
          <img src={assets.search_icon} alt={assets.search_icon} />
          <div className="navBarSearchIcon">
            <Link to='/cart'><img src={assets.basket_icon} alt={assets.basket_icon} /></Link>
            <div className={getTotalCartAmount()=== 0 ? "" : "dot"}></div>
          </div>
          <button onClick={()=>setShowLogin(true)}>Sign In</button>
        </div>
      </div>
    </>
  ); 
};

export default Navbar;

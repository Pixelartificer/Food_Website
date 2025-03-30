import React, { useState } from "react";
import "./LoginPopUp.css";
import { assets } from "../../assets/assets";

const LoginPopUp = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");

  return (
    <div className="logInPopUp">
      <form className="logInPopupContainer">
        <div className="logInpopupTitle">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt={assets.cross_icon}
          />
        </div>
        <div className="loginPopupInput">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your Name" required />
          )}
          <input type="email" placeholder="Your E-Mail" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>{currState === "Sign Up" ? "Creat Account" : "Login"}</button>
        <div className="loginPopupCondition">
          <input type="checkbox" required />
          <p>By Continuing, I agree to the terms and conditions</p>
        </div>
        {currState === "Login" ? (
          <p>
            Creat a new Account? <span onClick={()=>setCurrState('Sign Up')}>Click Here</span>
          </p>
        ) : (
          <p>
            Already Have an account? <span onClick={()=>setCurrState('Login')}>Login Here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUp;

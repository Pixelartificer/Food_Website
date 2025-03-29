import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerContent">
        <h1>Order Your Favourite Food Here</h1>
        <p>
          Our diverse menu features a delectable array of dishes crafted with
          the finest ingredients and culinary expertise. Our chefs take pride in
          creating flavorful, high-quality meals that cater to a variety of
          tastes and preferences. From savory appetizers to mouthwatering main
          courses and indulgent desserts, each dish is thoughtfully prepared to
          provide an unforgettable dining experience. 
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;

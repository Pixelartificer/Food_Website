import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({category, setCategory}) => {

  return (
    <div className="exploreMenu" id="exploreMenu">
      <h2>Explore Our Menu</h2>
      <p className="exploreMenuText">
        {" "}
        Our diverse menu features a delectable array of dishes crafted with the
        finest ingredients and culinary expertise. Our chefs take pride in
        creating flavorful provide an unforgettable dining experience.
      </p>
      <div className="exploreMenuList">
        {menu_list.map((item, index) => {
          return (
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?'All':item.menu_name)} key={index} className="exploreMenuListItem">
              <img className={category===item.menu_name?'active':''}src={item.menu_image} alt={item.menu_image} />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;

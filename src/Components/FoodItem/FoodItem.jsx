import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
 
  const {cartItems,  addToCart, removeFromCart} = useContext(StoreContext);

  return (
    <div className="foodItem">
      <div className="fooeItemImgContainer">
        <img className="foodItemImage" src={image} alt={image} />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt={assets.add_icon_white}
          />
        ) : (
          <div className="foodItemCounter">
            <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt={assets.remove_icon_red} />
            <p>{cartItems[id]}</p>
            <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt={assets.add_icon_green} />
          </div>
        )}
      </div>
      <div className="foodItemInfo">
        <div className="foodItemNameRating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt={assets.rating_starts} />
        </div>
        <p className="foodItemDesc">{description}</p>
        <p className="foodItemPrice">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;

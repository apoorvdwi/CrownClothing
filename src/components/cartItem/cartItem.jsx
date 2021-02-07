import React from "react";
import "./cartItem.scss";

const CartItem = ({item: { imageUrl, price, name, quantity }}) => {
    return (
      <div className="CartItem">
        <img src={imageUrl} alt="item" />
        <div className="ItemDetails">
          <span className="name">{name}</span>
          <span className="price">{quantity} x ${price}</span>
        </div>
      </div>
    );
};

export default CartItem;
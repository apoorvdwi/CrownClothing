import React from 'react';
import { connect } from 'react-redux';
import {
  ClearItemFromCart,
  AddItems,
  RemoveItems,
} from '../../redux/cart/cartActions';
import './checkoutItem.scss';

const CheckoutItem = ({ cartItem, clearItem, removeItem, addItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkoutItem">
      <div className="imageContainer">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="removeButton" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(ClearItemFromCart(item)),
  addItem: (item) => dispatch(AddItems(item)),
  removeItem: (item) => dispatch(RemoveItems(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);

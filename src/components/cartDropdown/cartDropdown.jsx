import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CustomButton from '../customButton/customButton';
import CartItem from '../cartItem/cartItem';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cartSelectors';
import { ToggleCartHidden } from '../../redux/cart/cartActions';
import './cartDropdown.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cartDropdown">
    <div className="cartItems">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="emptyMessage">Your Cart is Empty </span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push('/checkout');
        dispatch(ToggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));

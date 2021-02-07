import React from "react";
import { connect } from "react-redux";
import { ToggleCartHidden } from "../../redux/cart/cartActions";
import { selectCartItemsCount } from "../../redux/cart/cartSelectors";
import { createStructuredSelector } from 'reselect';
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cartIcon.scss";

const CartIcon = ({ ToggleCartHidden, itemCount }) => (
    <div className="cartIcon" onClick={ToggleCartHidden}>
        <ShoppingIcon className="shoppingIcon" />
        <span className="itemCount">{itemCount}</span>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    ToggleCartHidden: () => dispatch(ToggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

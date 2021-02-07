import React from "react";
import "./collectionItem.scss";
import { connect } from "react-redux";
import { AddItems } from "../../redux/cart/cartActions";
import CustomButton from "../customButton/customButton";

const CollectionItem = ({ item, AddItems }) => {
  const { id, name, price, imageUrl } = item;
  return (
  <div id={id} className="collectionItem">
    <div
      className="image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
    <div className="collectionFooter">
      <span className="name">{name}</span>
      <span className="price">${price}</span>
    </div>
    <CustomButton onClick={() => AddItems(item)} className="customButton" inverted> Add To Cart </CustomButton>
  </div>
)};

const mapDispatchToProps = (dispatch) => ({
  AddItems: item => dispatch(AddItems(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);

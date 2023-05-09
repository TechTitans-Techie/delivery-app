import React, { useEffect, useState } from "react";

import "../../../styles/product-card.css";

// import productImg from "../../../assets/images/product_2.1.jpg";

import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { id, title, image01, price, extraIngredients } = props.item;
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [cartItem, setCartItem] = useState(null)
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
        extraIngredients
      })
    );
  };

  const deleteItem = () => {
    dispatch(cartActions.removeItem(id));
  }

  useEffect(() => {
    setCartItem(cartItems.find(item => item.id === id))
  }, [addToCart, deleteItem, cartItems, id])


  return (
    <div className="product__item d-flex flex-column justify-content-between">
      <div className="product__content">
        <img className="product__img w-50" src={image01} alt="Pizza" />
        <h5>
          {title}
        </h5>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-between">
        <span className="product__price mb-2">{price} € </span>
        {
          cartItem ? <div><button className="addTOCART__btn" onClick={deleteItem}> - </button> {cartItem.quantity}  <button className="addTOCART__btn" onClick={addToCart}> + </button></div> : <button className="addTOCART__btn" onClick={addToCart}>
            Add to Cart
          </button>
        }

      </div>
    </div>
  );
};

export default ProductCard;

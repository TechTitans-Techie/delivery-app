import "../styles/checkout.css";
import { AiFillCheckCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";
import { useEffect } from "react";
import axios from '../axios'
import { useState } from "react";

const Checkout = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true)
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  useEffect(() => {
    axios.post("orders", { items: cartItems, totalAmount, totalQuantity, status: "Placed" })
      .then(() => {
        dispatch(cartActions.emptyCart())
        setLoading(false)
      })

  }, [])

  return (
    <>
      <div className="checkoutMessage">
        {
          loading ? <>Loading</> : <>
            <div className="checkoutTitleContainer">
              <AiFillCheckCircle className="checkoutIcon" />
              <h3>Thank you for your order!</h3>
            </div>
            <span>
              Your order is being processed and will be delivered as fast as
              possible.
            </span></>
        }

      </div>
    </>
  );
};

export default Checkout;

import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Cart = (props) => {
  const { cart, handleClearCart, children } = props;
  let totalPrice = 0;
  let totalShippingCost = 0;
  let quantity = 0;
  for (const product of cart) {
    product.quantity = product.quantity || 1;
    quantity = quantity + product.quantity;
    totalPrice = totalPrice + product.price * product.quantity;
    totalShippingCost = product.shipping + totalShippingCost;
  }

  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + totalShippingCost + tax;
  return (
    <div className="cart-added-product-container">
      <h5 className="title">Order Summary</h5>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: {(totalPrice * 105.05).toFixed(0)}</p>
      <p>Shipping: {(totalShippingCost * 105.05).toFixed(0)}</p>
      <p>Tax: {(tax * 105.05).toFixed(0)}</p>
      <h6>Grand Total: {(grandTotal * 105.05).toFixed(0)}</h6>
      <button onClick={handleClearCart} className="clear-cart-btn">
        Clear Cart <FontAwesomeIcon icon={faTrashCan} />
      </button>
      {children}
    </div>
  );
};

export default Cart;

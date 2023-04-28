import React, { useState } from "react";
import Cart from "../Shop/Cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import ReviewItems from "./ReviewItems/ReviewItems";
import "../Orders/Orders.css";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

const Orders = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart);

  const handleDeleteCartItem = (id) => {
    const remaining = cart.filter((pd) => pd.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };
  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="shop-container">
      <div className="review-container">
        {cart.map((pd) => (
          <ReviewItems
            key={pd.id}
            addedProducts={pd}
            handleDeleteCartItem={handleDeleteCartItem}
          ></ReviewItems>
        ))}
      </div>
      <div className="cart-items">
        <Cart cart={cart} handleClearCart={handleClearCart}>
          <button className="preview-order-btn">
            <Link to="/checkout">
              Proceed Checkout <FontAwesomeIcon icon={faCreditCard} />
            </Link>
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;

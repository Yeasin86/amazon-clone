import React from "react";
import "./ReviewItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const ReviewItems = (props) => {
  const { handleDeleteCartItem } = props;
  const { id, img, name, price, quantity } = props.addedProducts;
  return (
    <div className="review-cart">
      <div className="img-holder">
        <img src={img} alt="" />
      </div>
      <div className="review-info">
        <h4>{name}</h4>
        <p>
          Price: <span className="text-orange">{price}</span>
        </p>
        <p>
          Quantity: <span className="text-orange">{quantity}</span>
        </p>
      </div>
      <div className="delete-btn-holder">
        <button className="delete-btn" onClick={() => handleDeleteCartItem(id)}>
          <FontAwesomeIcon className="trash-icon" icon={faTrashCan} />
        </button>
      </div>
    </div>
  );
};

export default ReviewItems;

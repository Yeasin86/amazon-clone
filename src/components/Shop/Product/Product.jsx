import React from 'react';
import "./Product.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { category, img, name, price, ratings, seller } = props.product
    const addToCart = props.addToCart; 

    return (
        <div className='product-card'>
            <small title="Products Category" className='product-category'>{category}</small>
            <div className='card-image'>
                <img src={img} alt="" />
            </div>
            <div className='card-body'>
                <h3 className='product-name'>{name}</h3>
                <h5 className='product-price'>Price: {(price*105.05).toFixed(0)} BDT</h5>
                <div className='product-quality-info'>
                    <p>Ratings: {ratings} Stars</p>
                    <p>Manufacturer: {seller}</p>
                </div>
            </div>
            <button onClick={()=>{addToCart(props.product)}} className='add-to-cart-btn'>
                Add To Cart <FontAwesomeIcon icon={faCartPlus} />
            </button>
        </div>
    );
};

export default Product;
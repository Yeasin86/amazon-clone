import React from 'react';
import "./Product.css"

const Product = (props) => {
    console.log(props.product)
    const { category, img, name, price, ratings, seller } = props.product
    return (
        <div className='product-card'>
            <small className='product-category'>{category}</small>
            <div className='card-image'>
                <img src={img} alt="" />
            </div>
            <div className='card-body'>
                <h3>{name}</h3>
                <h2>Price: {price * 1.5.toFixed(0)} BDT</h2>
                <div>
                    <small>{ratings}</small>
                    <small>{seller}</small>
                </div>
            </div>
        </div>
    );
};

export default Product;
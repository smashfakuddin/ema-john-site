import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const { name, quantity, key,price } = props.product;
    return (
        <div className='review-cart'>
            <h1 className='product-name'>{name}</h1>
            <p>Quantity: {quantity}</p>
            <p><small>Price: ${price}</small></p>
            <button className='main-button' onClick={() => props.removeProduct(key)}>Remove</button>
        </div>
    );
};

export default ReviewItem;
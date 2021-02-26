import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.children.name);
    const { img, name, seller, price, stock } = props.children;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />

            </div>
            <div>
                <h4 className='product-name'>{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stack -Order soon</small></p>
            </div>

        </div>
    );
};

export default Product;
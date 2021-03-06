import React from 'react';

import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, product) => total + product.price *product.quantity  , 0);
 
    

    let shipping = 0;
    if (totalPrice > 35) {
        shipping = 0;
    }
    else if (totalPrice > 15) {
        shipping = 4.99;
    }
    else if (totalPrice > 0) {
        shipping = 12.99;
    }

    const tax = (totalPrice /10).toFixed(2) ;
    const grandTotal = (totalPrice + shipping + Number(tax)).toFixed(2);
    return (
        <div className='cart'>
            <p>Items Ordered: {cart.length}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p><small>Tax + Vat :{tax}</small></p>
            <p>Total price: {grandTotal}</p>
            {
                props.children
            }
            
            
        </div>
    );
};

export default Cart;
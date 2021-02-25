import React, { useState } from 'react';
import fakeData from '../../../fakeData';


const Shop = () => {

    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10)
    return (
        <div>
            <h3>{products.length}</h3>
            <ul>
                {
                    products.map(product => <li> {product.name}</li>)
                }
            </ul>
        </div>
    );
    //testing some thing
};

export default Shop;
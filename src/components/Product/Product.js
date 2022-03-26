import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = (props) => {
    const { product, handleCart } = props
    const { name, img, price } = product

    return (
        <div className='product'>
            <img src={img} alt="" />
            <h5>Name: {name}</h5>
            <h6>Price: ${price}</h6>
            <button className='product-btn' onClick={() => handleCart(product)}>
                <p>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;
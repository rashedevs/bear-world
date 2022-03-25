import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { name, img, price } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <h4>Price: {price}</h4>
            <button className='product-btn'>
                <p>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;
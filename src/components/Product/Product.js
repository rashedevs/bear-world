import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props)
    const { product, handleCart } = props
    const { name, img, price } = product

    return (
        <div className='product'>
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <h4>Price: {price}</h4>
            <button className='product-btn' onClick={() => handleCart(product)}>
                <p>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;
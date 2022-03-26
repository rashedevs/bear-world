import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { img, name } = props.item
    return (
        <div className='cart-item'>
            <img src={img} alt="" />
            <h6>{name}</h6>
        </div>
    );
};

export default Cart;
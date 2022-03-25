import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { img, name } = props.item
    return (
        <div className='cart-item'>
            <img src={img} alt="" />
            <h4>{name}</h4>
        </div>
    );
};

export default Cart;
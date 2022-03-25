import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    // console.log(cart)
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
    }
    const removeFromCart = () => {
        const newCart = []
        setCart(newCart)
    }
    return (
        <div className='shop-container'>
            <div className="products">
                {
                    products.map(product => <Product key={product.id} product={product} handleCart={handleCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <div className="cart-items">
                    <h2>Selected Items</h2>
                    {
                        cart.map(item => <Cart key={item.id} item={item}></Cart>)
                    }
                    <div>
                        <button className='random-btn'>
                            <p>CHOOSE 1 FOR ME</p>
                        </button>
                    </div>
                    <div>
                        <button className='choose-btn' onClick={() => { removeFromCart() }}>
                            <p>CHOOSE AGAIN</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
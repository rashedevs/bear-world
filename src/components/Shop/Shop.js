import React, { useEffect, useState } from 'react';
import Bonus from '../Bonus/Bonus';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleCart = (product) => {
        if (cart.length >= 4) {
            alert("Can't add more than 4 item.")
        }
        else {
            const newCart = [...cart, product]
            setCart(newCart)
        }
    }
    const pickRandom = () => {
        let newCart = [...cart]
        if (newCart.length) {
            let num = Math.floor(Math.random() * newCart.length)
            let picked = newCart[num]
            newCart = [picked]
            setCart(newCart)
        }
    }
    const removeFromCart = () => {
        const cart = []
        setCart(cart)
    }
    return (
        <div>
            <div className='shop-container'>
                <div className="products-container">
                    {
                        products.map(product => <Product key={product.id} product={product} handleCart={handleCart}></Product>)
                    }
                </div>
                <div className="cart-container">
                    <div className="cart-items">
                        <h4 className="text-primary mb-3 mt-4">Selected Items</h4>
                        {
                            cart.map(item => <Cart key={item.id} item={item}></Cart>)
                        }
                        <div>
                            <button className='random-btn' onClick={() => pickRandom()}>
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
            <div className='bonus-container'>
                {
                    <Bonus></Bonus>
                }
            </div>
        </div>
    );
};
export default Shop;
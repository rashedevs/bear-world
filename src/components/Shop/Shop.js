import React, { useEffect, useState } from 'react';
import Bonus from '../Bonus/Bonus';
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
    const pickRandom = () => {
        let newCart = [...cart]
        // console.log(newCart)
        if (newCart.length >= 2) {
            let picked = newCart[Math.floor(Math.random() * newCart.length)]
            newCart = [picked]
            setCart(newCart)
        }
    }
    const removeFromCart = () => {
        const newCart = []
        setCart(newCart)
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
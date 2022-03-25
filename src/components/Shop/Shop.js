import React, { useEffect, useState } from 'react';

const Shop = () => {
    const [products, setProducts] = useState([])
    console.log(products)
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>

        </div>
    );
};

export default Shop;
import React, { useEffect, useState } from 'react';

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='px-12'>
            <h1 className='text-4xl mt-10 pt-10 mb-10 text-blue-900 font-bold text-center'>Parts We Manufacture</h1>
            <p>{products.length}</p>
        </div>
    );
};

export default Product;
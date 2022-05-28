import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct';

const Product = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://cryptic-tundra-74859.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])



    return (
        <div className='px-12'>
            <h1 className='text-4xl mt-10 pt-10 mb-10 text-blue-900 font-bold text-center'>Parts We Manufacture</h1>
            <div className='grid md:grid-cols-3 justify-items-center'>
                {
                    products.map(product =>
                        <SingleProduct
                            key={product._id}
                            product={product}
                        ></SingleProduct>
                    )
                }
            </div>
        </div>
    );
};

export default Product;
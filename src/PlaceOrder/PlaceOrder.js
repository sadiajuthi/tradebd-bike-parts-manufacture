import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PlaceOrder = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                console.log(product)
            })
    }, []);

    return (

        <div class="card w-96 bg-base-100 shadow-xl mx-auto">
            <figure><img src={product.img} alt="WheelRim" /></figure>
            <div class="card-body">
                <h2 class="card-title">{product.name}</h2>
                <p className='text-xl font-semibold text-blue-700'>Price: ${product.price}</p>
                <p>{product.description}</p>
                <p>Available quantity: {product.quantity}</p>
                <p className='inline-block'>Order Quantity:</p>
                <input className='inline-block w-44 border' type="number" name="quantity" id="" placeholder='minimum quantity 100' />


                <div class="card-actions justify-center">
                    <button class="btn btn-wide btn-primary">Pay Now</button>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;
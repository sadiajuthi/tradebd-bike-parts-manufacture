import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const PlaceOrder = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    const [user] = useAuthState(auth)



    useEffect(() => {
        const url = `https://cryptic-tundra-74859.herokuapp.com/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProduct(data)

            })
    }, []);

    const handlePlaceOrder = event => {
        console.log(product);
        const { _id, name, price } = product;
        event.preventDefault();

        console.log('click');

        const order = {
            name: name,

            poductId: _id,
            address: event.target.address,
            email: user.email,
            quantity: event.target.quantity


        }


        fetch('https://cryptic-tundra-74859.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log('added', data);
                alert('Your order Added')
            })
    }






    return (

        <div className="px-12">
            <div class="grid md:grid-cols-2 items-center justify-items-center">
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={product.img} alt="WheelRim" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">{product.name}</h2>
                        <p className='text-xl font-semibold text-blue-700'>Price: ${product.price}</p>
                        <p>{product.description}</p>
                        <p>Available quantity: {product.quantity}</p>
                        <p>Minimum Order: {product.orderquatity}</p>

                    </div>
                </div>
                <div><h1 className="text-xl font-semibold my-4">Please fill the form to confirm Your Order!</h1>
                    <form className='' onSubmit={handlePlaceOrder}>
                        <label className='font-semibold block'>Name:</label>
                        <input className='h-8 w-96 border-gray-400 border-2 mb-3' type="text" name="customer" id="" />

                        <label className='font-semibold block'>Email:</label>
                        <input className='h-8 w-96 border-gray-400 border-2 mb-3' type="text" name="name" id="" value={user?.email || ''} readOnly />

                        <label className='font-semibold block'>Address:</label>
                        <input className='h-8 w-96 border-gray-400 border-2 mb-3' type="text" name="address" id="" placeholder='enter your address' />

                        <label className='font-semibold block'>Quantity:</label>
                        <input className='h-8 w-96 border-gray-400 border-2 mb-3' type="number" name="quantity" id="" placeholder={product.orderquatity} />


                        <input

                            className='btn w-96' type="submit" name='btn' value="Confirm Order" />



                    </form>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;
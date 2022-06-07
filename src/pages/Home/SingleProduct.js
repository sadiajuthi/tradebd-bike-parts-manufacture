import React from 'react';
import { useNavigate } from 'react-router-dom';


const SingleProduct = ({ product }) => {
    // const [user]= useAuthState(auth)
    const navigate = useNavigate();
    const handleOrder = () => {
        navigate(`http://localhost:5000/order/${product._id}`)
    }
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src={product.img} alt="WheelRim" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{product.name}</h2>
                    <p className='text-xl font-semibold text-blue-700'>Price: ${product.price}</p>
                    <p>{product.description}</p>
                    <p>Available quantity: {product.quantity}</p>
                    <p>Minimum Order: {product.orderquatity}</p>


                    <div onClick={handleOrder} class="card-actions justify-center">
                        <button class="btn btn-wide btn-primary">Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
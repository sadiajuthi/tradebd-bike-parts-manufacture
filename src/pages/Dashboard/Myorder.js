import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Myorder = () => {
    const [orders, setOrders] = useState([]);
    const user = useAuthState(auth)
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/myorder')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user])


    return (
        <div>
            <h1 className='text-xl font-semibold mt-10'>My orders</h1>
            <div>
                <div class="overflow-x-auto w-full">

                </div>
            </div>
        </div>
    );
};

export default Myorder;
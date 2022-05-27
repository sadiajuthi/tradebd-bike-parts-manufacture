import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Myorder = () => {
    const [orders, setOrders] = useState([]);
    const user = useAuthState(auth)
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/order')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user])


    return (
        <div>
            <h1 className='text-2xl font-semibold mt-10'>My orders{orders.length}</h1>
        </div>
    );
};

export default Myorder;
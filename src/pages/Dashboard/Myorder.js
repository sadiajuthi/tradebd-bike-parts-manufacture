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
            <h1 className='text-2xl font-semibold mt-10'>My orders{orders.length}</h1>
            <div>
                <div class="overflow-x-auto w-full">
                    <table class="table w-full">

                        <thead>
                            <tr>

                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                                <th></th>
                            </tr>
                        </thead>

                        {
                            orders.map(order =>
                                <tbody>

                                    <tr>
                                        <td>
                                            <div class="flex items-center space-x-3">
                                                <div class="avatar">
                                                    <div class="mask mask-squircle w-12 h-12">
                                                        <img src={order.img} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="font-bold">{order.name}</div>
                                                    <div class="text-sm opacity-50">{order.quantity}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {order.name}


                                        </td>
                                        <td>Purple</td>
                                        <th>
                                            <button class="btn btn-ghost btn-xs">details</button>
                                        </th>
                                    </tr>



                                </tbody>
                            )
                        }




                    </table>
                </div>
            </div>
        </div>
    );
};

export default Myorder;
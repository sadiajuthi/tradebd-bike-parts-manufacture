import React from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

const UserList = ({ user }) => {
    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {

                console.log(data);
                toast.success('Successfully made an Admin');
                window.location.reload();
            })

    }
    return (
        <tr>


            <td>{email}</td>

            <td> {
                role != 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>
            }</td>


        </tr>
    );
};

export default UserList;
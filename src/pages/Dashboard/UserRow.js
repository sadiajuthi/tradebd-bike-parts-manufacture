import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const UserRow = ({ user, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })
    }
    const handleRemove = _id => {
        console.log('click');
        const proceed = window.confirm('Are you sure to delete this user?')
        if (proceed) {
            console.log('delete user', _id);
            const url = `http://localhost:5000/user/${_id}`;

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        }

    }

    return (
        <div>
            <ToastContainer></ToastContainer>
            <tr>

                <td>{email}</td>
                <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>

            </tr>
        </div>
    );

};

export default UserRow;
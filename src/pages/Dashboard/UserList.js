import React from 'react';
import { toast } from 'react-toastify';

const UserList = ({ user }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://cryptic-tundra-74859.herokuapp.com/admin/${email}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {

                console.log(data);
                toast.success('Successfully made an Admin')
            })

    }
    return (
        <tr>
            <th>1</th>

            <td>{email}</td>

            <td> {
                role != 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>
            }</td>

            <td><button class="btn btn-xs">Remove User</button></td>
        </tr>
    );
};

export default UserList;
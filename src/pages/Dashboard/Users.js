import React, { useEffect, useState } from 'react';
import UserList from './UserList';



const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div>
            <h2 className="text-2xl">All Users: {users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full text-xl">
                    <thead>
                        <tr>

                            <th>email</th>
                            <th>make Admin</th>
                            <th>delete User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <UserList
                                key={user._id}
                                user={user}

                            ></UserList>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
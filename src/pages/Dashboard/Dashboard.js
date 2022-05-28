import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="side-bar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content text-5xl">
                <h1>Wellcome to dashboard </h1>
                <Outlet></Outlet>


            </div>
            <div class="drawer-side">
                <label for="side-bar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Order</Link></li>
                    <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
                    <li><Link to='/dashboard/myreview'>Add Review</Link></li>
                    <li><Link to='/dashboard/users'>All users</Link></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;
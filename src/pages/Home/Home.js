import React from 'react';
import About from './About';
import BusinessSummary from './BusinessSummary';
import Extra from './Extra';
import Product from './Product';
import Review from './Review';

const Home = () => {
    return (
        <div>
            <div>
                <img className='w-full' src="https://media.istockphoto.com/photos/motorcycle-repairing-picture-id1266827300" alt="" />


            </div>
            <About></About>
            <Product></Product>
            <Extra></Extra>
            <BusinessSummary></BusinessSummary>
            <Review></Review>

        </div>
    );
};

export default Home;
import React from 'react';
import BusinessSummary from './BusinessSummary';
import Extra from './Extra';
import Review from './Review';

const Home = () => {
    return (
        <div>
            <div>
                <img className='w-full' src="https://media.istockphoto.com/photos/motorcycle-repairing-picture-id1266827300" alt="" />
            </div>

            <div className='px-12'>
                <h1 className='text-5xl mt-10 pt-10 mb-10 text-blue-900 font-bold text-center'>Introduction Of The Tools, We Manufacture</h1>


                <div className='grid grid-cols-3 gap-2 justify-items-center'>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://media.istockphoto.com/photos/motorcycle-parade-in-plovdiv-bulgaria-picture-id469433214?s=612x612" alt="WheelRim" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Motorcycle Wheel Rim</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>


                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://media.istockphoto.com/photos/car-service-procedure-picture-id522633920?s=612x612" alt="WheelRim" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Motorcycle Brake Disc</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>


                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://media.istockphoto.com/photos/the-industrial-chains-for-machine-picture-id964891572?s=612x612" alt="WheelRim" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Motorcycle chain</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Extra></Extra>
            <BusinessSummary></BusinessSummary>
            <Review></Review>

        </div>
    );
};

export default Home;
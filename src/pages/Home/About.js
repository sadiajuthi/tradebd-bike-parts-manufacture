import React from 'react';
import { BsCheckLg } from "react-icons/bs";

const About = () => {
    return (
        <div className="px-12">
            <h1 className='text-4xl mt-10 pt-10 mb-10 text-blue-900 font-bold text-center'>About Us</h1>
            <div className='grid md:grid-cols-2 gap-4'>
                <div className=''>
                    <div className='grid md:grid-cols-2 gap-3 px-6'>
                        <div>
                            <img className='w-full' src="https://img.freepik.com/free-photo/electric-wheel-grinding-steel-structure-welders-with-multiple-sparks-factory_61243-643.jpg?w=740" alt="" />

                            <img className='w-full mt-3' src="https://img.freepik.com/free-photo/worker-operating-industrial-machine-metal-workshop_342744-268.jpg?t=st=1653309113~exp=1653309713~hmac=7244f1bfbf56f87e4ff28f50a4e64d8ec1529310bfe05ab295e0560eaac7e4cd&w=740" alt="" />
                        </div>

                        <div>
                            <img className='w-full mt-7' src="https://img.freepik.com/free-photo/interior-view-steel-factory_1359-117.jpg?t=st=1653288309~exp=1653288909~hmac=16d55749e349a7a7c30b41480664002b5b7e3c1aadfdb7c4821d1d3a1321cf1e&w=740" alt="" />

                            <img className='w-full mt-3' src="https://img.freepik.com/free-photo/interior-view-steel-factory_1359-124.jpg?t=st=1653287437~exp=1653288037~hmac=960550f7407399ddbf9f9738a09d67bce8f8be62b34e903a6d465025ff72b2c4&w=740" alt="" />
                        </div>
                    </div>
                </div>
                <div className='p-4'>
                    <h2 className="text-2xl font-semibold text-blue-900 mt-2">
                        Welcome To The TradeBD.
                    </h2>
                    <h3 className="font-semibold mt-1">
                        Before we get ahead of ourselves, we want to welcome you to TradeBD. While nothing can replace thing on-the-lot experience.
                    </h3>
                    <p className=' mt-2'>
                        We appreciate you taking the time today to visit our web site. Our goal is to give you an interactive tour of our new inventory, as well as allow you to conveniently get a schedule of service appointment, or apply for financing.
                    </p>
                    <h2 className="text-2xl text-blue-900 font-semibold mt-3">
                        Core Values
                    </h2>
                    <p className='font-semibold mt-1 mb-1'>
                        We go through extensive factory training so that we may provide you with the knowledge you need to make an educated decision in choosing the vehicle that is right for your Business.
                    </p>
                    <ul className=''>
                        <li> <BsCheckLg className='inline-block mr-2 text-blue-900 text-sm' />Stress-free finance department.</li>

                        <li><BsCheckLg className='inline-block mr-2 text-blue-900 text-sm' /> more than 100 offers on site, trusted by a community.</li>

                        <li> <BsCheckLg className='inline-block mr-2 text-blue-900 text-sm' />We know how to handle a wide range of Motorcycle parts services.</li>
                        <li><BsCheckLg className='inline-block mr-2 text-blue-900 text-sm' /> Customize design for your business growth</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default About;
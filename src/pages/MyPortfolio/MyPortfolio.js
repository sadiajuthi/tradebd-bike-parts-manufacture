import React from 'react';
import img from '../../image/publicdomainq-0006224bvmrqd.svg';

const MyPortfolio = () => {
    return (
        <div className='px-12 mb-10'>
            <h1 className='text-4xl pt-10 pb-5 text-blue-900 font-bold text-center'>Welcome to my portfolio</h1>
            <div className="shadow-xl pt-10 grid md:grid-cols-2 ">
                <div>
                    <div className='flex justify-center'>
                        <div className='w-28 mr-10'>
                            <img className='' src={img} alt="" />
                        </div>
                        <div className=''>
                            <p><span className='font-semibold'>Name: </span> Sadia Afrin Juthi</p>
                            <p><span className='font-semibold'>Education: </span> MSc in Mathematics</p>
                            <p><span className='font-semibold'>Profile: </span>Front End Web Developer</p>
                            <p><span className='font-semibold'>Email: </span>sadia.5343@gmail.com</p>
                            <p><span className='font-semibold'>Phone: </span>+918 448 353 901</p>
                        </div>
                    </div>
                    <div className='mt-10 w-96 m-auto'>

                        <p className='text-xl font-semibold'>Live site link of some of my projects </p>
                        <li>https://bike-planet.web.app/</li>
                        <li>https://yoga-instractor.web.app/</li>
                        <li>https://saving-counter.netlify.app</li>

                    </div>
                </div>

                <div>


                    <div>
                        <h1 className='text-xl font-semibold mb-3 pl-10'>My skills</h1>

                        <div className='px-10 pb-10 pr-10 mr-10'>

                            <p className='font-semibold'>HTML 70%</p>
                            <progress class="progress progress-primary w-100 h-2 mt-1 mb-2" value="70" max="100"></progress>
                            <p className='font-semibold'>CSS 3 60%</p>
                            <progress class="progress progress-accent w-100 h-2 mt-1 mb-2" value="60" max="100"></progress>
                            <p className='font-semibold'>JavaScript 50%</p>
                            <progress class="progress progress-info w-100 h-2 mt-1 mb-2" value="50" max="100"></progress>
                            <p className='font-semibold'>React Js 50%</p>
                            <progress class="progress progress-warning w-100 h-2 mt-1 mb-2" value="50" max="100"></progress>
                            <p className='font-semibold'>Backend(firebase, Node js, MongoDB) 20%</p>
                            <progress class="progress progress-success w-100 h-2 mt-1 mb-2" value="20" max="100"></progress>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyPortfolio;
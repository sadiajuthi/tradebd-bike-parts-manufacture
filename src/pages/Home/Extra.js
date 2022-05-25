import React from 'react';

const Extra = () => {
    return (
        <div>
            <h1 className='text-4xl mt-10 pt-10 mb-10 text-blue-900 font-bold text-center'>Statistical Data in 2021</h1>
            <div className=' bg-slate-200'>
                <div className="px-12">
                    <div className='grid md:grid-cols-2 gap-4 p-10'>
                        <div className='p-5'>
                            <p className='text-xl'>New Techology usage 30%</p>
                            <progress class="progress progress-primary w-100 h-5 mt-2 mb-4" value="50" max="100"></progress>
                            <p className='text-xl'>Enviornment Friendly 80%</p>
                            <progress class="progress progress-primary w-100 h-5 mt-2 mb-4" value="80" max="100"></progress>
                            <p className='text-xl'>Business Growth 60%</p>
                            <progress class="progress progress-primary w-100 h-5 mt-2 mb-4" value="60" max="100"></progress>
                            <p className='text-xl'>Revenue 75%</p>
                            <progress class="progress progress-primary w-100 h-5 mt-2 mb-4" value="75" max="100"></progress>

                        </div>
                        <div>
                            <img src="https://as1.ftcdn.net/v2/jpg/02/73/75/14/1000_F_273751484_tohcsSPVQ03Fo2o4J4t5P1Ayl5vLSTeC.jpg" alt="" />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Extra;
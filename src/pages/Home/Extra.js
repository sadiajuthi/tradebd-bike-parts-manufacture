import React from 'react';

const Extra = () => {
    return (
        <div>
            <h1 className='text-5xl mt-10 pt-10 mb-10 text-blue-900 font-bold text-center'>Statistical Data in 2021</h1>
            <div className=' bg-slate-200'>
                <div className="px-12">
                    <div className='grid grid-cols-2 gap-4 p-10'>
                        <div className='mt-10 p-10'>
                            <p className='text-2xl inline-block'>Techology usage</p> <p className='inline-block text-2xl mr-0'>50%</p>
                            <progress class="progress progress-primary w-100 h-5 mt-2 mb-4" value="0" max="100"></progress>
                            <progress class="progress progress-primary w-100 h-5 mt-2 mb-4" value="10" max="100"></progress>
                            <progress class="progress progress-primary w-100 h-5 mt-2 mb-4" value="40" max="100"></progress>
                            <progress class="progress progress-primary w-100 h-5 mt-2 mb-4" value="40" max="100"></progress>

                        </div>
                        <div>
                            <img src="https://img.freepik.com/free-photo/workers-wearing-industrial-uniforms-welded-iron-mask-steel-welding-plants_61243-174.jpg?w=740" alt="" />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Extra;
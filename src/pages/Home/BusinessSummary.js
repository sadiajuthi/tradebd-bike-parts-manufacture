import React from 'react';
import { BiWorld } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import { RiEmotionHappyLine } from "react-icons/ri";
import { VscTools } from "react-icons/vsc";


const BusinessSummary = () => {
    return (
        <div className='px-12 mb-10 pb-10 text-center'>
            <h1 className='text-4xl mt-10 pt-10 mb-10 text-blue-900 font-bold text-center'>Our Business Summery</h1>
            <div className='grid md:grid-cols-4 justify-items-center p-10'>
                <div className='grid justify-items-center'>
                    <p className='text-8xl m-2 text-blue-800'> <BiWorld /></p>
                    <p className='text-2xl'><span className="text-4xl">17+</span> Countries <br /> We are connected with</p>
                </div>
                <div className='grid justify-items-center'>
                    <p className='text-8xl m-2 text-blue-800'> <VscTools /></p>
                    <p className='text-2xl'><span className="text-4xl">50+</span> Tools <br /> We Manufacture</p>
                </div>
                <div className='grid justify-items-center'>
                    <p className='text-8xl m-2 text-blue-800'> <RiEmotionHappyLine /></p>
                    <p className='text-2xl'><span className="text-4xl">10K+</span> <br /> Happy Clients</p></div>
                <div className='grid justify-items-center'>
                    <p className='text-8xl m-2 text-blue-800'> <AiOutlineStar /></p>
                    <p className='text-2xl'><span className="text-4xl">12K+</span> <br /> Reviews</p></div>
            </div>

        </div>
    );
};

export default BusinessSummary;
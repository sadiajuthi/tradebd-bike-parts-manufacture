import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiPhoneCall, FiMail } from "react-icons/fi";

const Footer = () => {
    return (
        <div className='bg-gray-800 text-white'>
            <div className='px-12'>
                <div className='grid grid-cols-3 justify-items-center mt-5 p-5 '>
                    <div className="">
                        <h4 className='text-2xl'>TradeBD</h4>
                        <p>
                            We help you grow your business.
                        </p>
                    </div>
                    <div className="">
                        <p className='mb-1'>USEFUL LINKS</p>
                        <Link className='block' to={'/home'}><MdKeyboardArrowRight className='inline-block' /><small>Home </small></Link>

                        <Link className=' block' to={'/blog'}><MdKeyboardArrowRight className='inline-block' /><small>Blog</small></Link>

                        <Link className='block' to={'/contact'}><MdKeyboardArrowRight className='inline-block' /><small>Contact </small></Link>
                    </div>

                    <div className="">
                        <p className="mb-1">
                            CONTACT US
                        </p>
                        <p className="">
                            <small><FaMapMarkerAlt className='mr-1 inline-block' /> 117/2, Qutab Road, <br /> <span className='ml-4'>Mehrauli, New Delhi, Delhi.</span>
                                <br />
                                <FiPhoneCall className='mr-1 inline-block' /> +91 95999 99999
                                <br />
                                <FiMail className='mr-2 inline-block' /> info@yourmail.com
                            </small>

                        </p>
                    </div>
                </div>
            </div>
            <div className='text-center text-muted'>
                <small>Copyright © 2022 Bike Planet, All rights reserved.</small>
            </div>
        </div>
    );
};


export default Footer;
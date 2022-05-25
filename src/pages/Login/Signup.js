import React from 'react';
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const handleNavigateLogin = () => {
        navigate('/login')
    }
    return (
        <div className='login pb-10 text-slate-100'>
            <div>
                <h1 className='pt-10 text-4xl mb-10 text-blue-900 font-bold text-center text-white'>Register Here</h1>
            </div>
            <div className='p-10 mb-10 login-form m-auto'>
                <div className='self-center'>
                    <FaRegUserCircle className='text-6xl font-thin mx-auto text-slate-200 mb-5' />
                </div>
                <form className=''>
                    <BiUser className='inline-block text-slate-100' />
                    <input className='input' type="email" name="email" id="" placeholder='Name' required />
                    <hr className='mt-0' />
                    <HiOutlineMail className='inline-block text-slate-100' />
                    <input className='input' type="email" name="email" id="" placeholder='Email Id' required />
                    <hr className='mt-0' />
                    <RiLockPasswordLine className='inline-block text-slate-100' />
                    <input className='input' type="password" name="password" id="" placeholder='Password' required />
                    <hr className='mt-0' />

                    <div className=" m-auto">
                        <input className='btn btn-wide bg-gradient-to-r from-cyan-400 to-blue-700 hover:from-pink-400 hover:to-yellow-600 mt-3' type="submit" value="Register" />
                    </div>
                </form>
                <p className='text-left'>

                    <small className='mt-0 block'>
                        Already have an account? <span className='cursor text-red-500' onClick={handleNavigateLogin}>Login here.
                        </span>
                    </small>
                </p>
                <div class="divider">Or</div>
                <button className='btn btn-wide bg-gradient-to-r from-cyan-400 to-blue-700 hover:from-pink-400 hover:to-yellow-600'><FcGoogle className='text-3xl mr-2' /> Login with Google</button>
            </div>

        </div>
    );
};

export default Signup;
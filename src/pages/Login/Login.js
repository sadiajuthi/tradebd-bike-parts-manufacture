import React, { useRef } from 'react';
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import './Login.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import SocialLogin from './SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    if (loading) {
        return <Loading></Loading>
    }

    const from = location.state?.from?.pathname || '/';
    if (user) {
        navigate(from, { replace: true })
    }

    let errorElement;
    if (error) {
        errorElement = <p className='text-red-500 text-right text-sm'>Error:{error.message}</p>
    }

    const handleNavigateRegister = () => {
        navigate('/register')
    }

    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password)
        signInWithEmailAndPassword(email, password)
    }

    const resetPassword = async (e) => {
        const email = emailRef.current.value;
        console.log(email)
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }
    }



    return (
        <div className='login pb-10 text-slate-100'>
            <div>
                <h1 className='pt-10 text-4xl mb-10 text-blue-900 font-bold text-center text-white'>Please Login</h1>
            </div>
            <div className='p-10 mb-10 login-form m-auto'>
                <div className='self-center'>
                    <FaRegUserCircle className='text-6xl font-thin mx-auto text-slate-200 mb-5' />
                </div>
                <ToastContainer className='toast-theme-dark'></ToastContainer>
                <form onSubmit={handleLogin}>
                    <HiOutlineMail className='inline-block text-slate-100' />
                    <input ref={emailRef} className='input' type="email" name="email" id="" placeholder='Email Id' required />
                    <hr className='mt-0' />
                    <RiLockPasswordLine className='inline-block text-slate-100' />
                    <input ref={passwordRef} className='input' type="password" name="password" id="" placeholder='Password' required />
                    <hr className='mt-0' />
                    <small>
                        Forgotten password? <span
                            onClick={resetPassword} className='cursor text-red-500'>reset password.
                        </span>
                    </small>
                    <div className=" m-auto">
                        <input className='btn btn-wide bg-gradient-to-r from-cyan-400 to-blue-700 hover:from-pink-400 hover:to-yellow-600 mt-3' type="submit" value="Login" />
                    </div>
                </form>
                {errorElement}
                <p className='text-left'>

                    <small className='mt-0 block'>
                        Don't have any account? <span className='cursor text-red-500' onClick={handleNavigateRegister}>Create Account.
                        </span>
                    </small>

                </p>

                <div class="divider text-sm">Or</div>
                <SocialLogin></SocialLogin>


            </div>

        </div>

    );
};

export default Login;
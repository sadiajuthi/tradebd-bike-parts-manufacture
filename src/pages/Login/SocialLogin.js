import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const from = location.state?.from?.pathname || '/';
    if (user) {
        navigate(from, { replace: true });
    }

    let errorElement;
    if (error) {
        errorElement = <p className='text-red-500 text-right text-sm'>Error:{error.message}</p>
    }

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <button onClick={() => signInWithGoogle()} className='btn btn-wide bg-gradient-to-r from-cyan-400 to-blue-700 hover:from-pink-400 hover:to-yellow-600'><FcGoogle className='text-3xl mr-2' /> Login with Google</button>
            {errorElement}
        </div>
    );
};

export default SocialLogin;
import React from 'react'
import Assets from '../Assets/assets'
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router';

function LogIn() {
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            navigate('/');
        } catch (error: any) {
            console.error("Google Sign-In Error:", error.message);
        }
    };

    return (
        <div className='flex w-screen h-screen content-center justify-center bg-zinc-100'>
            <div className='flex flex-col bg-sky-950 size-max self-center gap-5 p-8 rounded-lg shadow-lg'>
                <h1 className='text-2xl text-center font-bold text-white mt-6'>LOGIN</h1>
                <div className='flex flex-col mt-6'>
                    <label className='text-lg font-normal text-white mb-2'>E-mail</label>
                    <input type="email" placeholder="Enter your email" className="rounded-full px-4 py-3 w-80 outline-none" />

                    <label className='text-lg font-normal text-white mt-4 mb-2'>Password</label>
                    <input type="password" placeholder="Enter your password" className="rounded-full px-4 py-3 w-80 outline-none" />
                </div>

                <button className='mt-6 bg-blue-500 text-white font-semibold py-3 px-6 rounded-full w-80 hover:bg-blue-600 transition duration-300'>
                    Login
                </button>

                <div className='flex items-center my-4'>
                    <div className='border-t border-white flex-grow'></div>
                    <span className='text-white mx-2'>or</span>
                    <div className='border-t border-white flex-grow'></div>
                </div>

                <button className='bg-white text-gray-700 font-semibold py-3 px-6 rounded-full w-80 flex justify-center items-center gap-2 hover:bg-gray-200 transition duration-300' onClick={handleGoogleLogin}>
                    <img src={Assets.googlelogo} alt="Google logo" className='w-6 h-6' />
                    Login with Google
                </button>
            </div>
        </div>
    )
}

export default LogIn

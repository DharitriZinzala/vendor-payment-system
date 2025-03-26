import React from 'react'
import './signinstyle.css'
import { assert } from 'console'
import Assets from '../Assets/assets'

function SignIn() {
    return (
        <div className='flex w-screen h-screen content-center justify-center bg-zinc-100'>
            <div className='flex flex-col bg-sky-950 size-max self-center gap-5 p-8 rounded-lg shadow-lg'>
                <h1 className='text-2xl text-center font-bold text-white mt-6'>SIGN IN</h1>
                <div className='flex flex-col mt-6'>
                    <label className='text-lg font-normal text-white mb-2'>E-mail</label>
                    <input type="email" placeholder="Enter your email" className="rounded-full px-4 py-3 w-80 outline-none" />

                    <label className='text-lg font-normal text-white mt-4 mb-2'>Password</label>
                    <input type="password" placeholder="Enter your password" className="rounded-full px-4 py-3 w-80 outline-none" />
                </div>

                <button className='mt-6 bg-sky-600 text-white font-semibold py-3 px-6 rounded-full w-80 hover:bg-sky-500 transition duration-300'>
                    Sign In
                </button>

                <div className='flex items-center my-4'>
                    <div className='border-t border-white flex-grow'></div>
                    <span className='text-white mx-2'>or</span>
                    <div className='border-t border-white flex-grow'></div>
                </div>

                <button className='bg-white text-gray-700 font-semibold py-3 px-6 rounded-full w-80 flex justify-center items-center gap-2 hover:bg-gray-200 transition duration-300'>
                    <img src={Assets.googlelogo} alt="Google logo" className='w-6 h-6' />
                    Sign in with Google
                </button>
            </div>
        </div>
    )
}

export default SignIn

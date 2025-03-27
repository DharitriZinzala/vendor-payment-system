import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase';
import { useNavigate } from 'react-router';
import InvoiceForm from './InvoiceForm';
import Sidebar from './sidebar';

function Dashboard() {

    const navigate = useNavigate();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                let email = user.email;
                if (email) {
                    let name = email.split('@')[0];
                    // setUsername(name);
                }
            } else {
                navigate("/login");
            }
        });

    }, [])


    const [formVisible, setFormVisibile] = useState(false);


    return (
        <div className='flex w-screen h-screen'>
            <Sidebar />
            <div className='flex-1 p-4'>
                <button onClick={() => setFormVisibile((prev) => !prev)} className='mt-6 bg-blue-500 text-white font-semibold py-3 px-6 rounded-full w-50 hover:bg-blue-600 transition duration-300'>
                    Add Invoice</button>
            </div>
            {formVisible &&
                <InvoiceForm />
            }


        </div>
    )
}

export default Dashboard

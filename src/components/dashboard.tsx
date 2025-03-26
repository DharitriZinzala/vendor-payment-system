import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../firebase';
import { useNavigate } from 'react-router';
import InvoiceForm from './InvoiceForm';

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



    return (
        <div className='flex w-screen h-screen'>

            <InvoiceForm />
        </div>
    )
}

export default Dashboard

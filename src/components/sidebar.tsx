import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Dashboard from './dashboard';

function Sidebar() {
    const [active, setActive] = useState("Dashboard");

    return (
        <div className="flex h-screen bg-sky-900">
            <div className="w-64 bg-transparent shadow-lg p-5">
                <h1 className="text-xl font-bold mb-6 text-white">Dashboard</h1>
                <nav className="space-y-4">
                    <Link
                        to="/"
                        className={`flex items-center gap-2 p-3 rounded-lg transition ${active === "Dashboard" ? "bg-white text-black" : "hover:bg-sky-200"
                            }`}
                        onClick={() => setActive("Dashboard")}
                    >

                        Dashboard
                    </Link>
                    <Link
                        to="/vendor-details"
                        className={`flex items-center gap-2 p-3 rounded-lg transition ${active === "Vendor Details" ? "bg-white text-black" : "hover:bg-sky-200"
                            }`}
                        onClick={() => setActive("Vendor Details")}
                    >

                        Vendor Details
                    </Link>
                </nav>
            </div>
            {/* <div className="flex-1 p-6">
                <h1 className="text-2xl font-semibold">{active}</h1>
            </div> */}
        </div>
    );
}

export default Sidebar

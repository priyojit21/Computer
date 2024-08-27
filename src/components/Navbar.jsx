import React from 'react'

export default function Navbar() {
    return (
        <div className='fixed top-4 left-0 w-full px-6 flex justify-between items-center z-10'>
            <img src="https://via.placeholder.com/40" alt="logo" className='w-10' />
            <nav className="flex gap-8 text-white">
                <p className="nav-item text-lg font-medium cursor-pointer">Home</p>
                <p className="nav-item text-lg font-medium cursor-pointer">Who we are</p>
                <p className="nav-item text-lg font-medium cursor-pointer">Contacts</p>
                <p className='take_test text-lg font-medium border-2 border-blue-500 px-4 py-1 rounded cursor-pointer'>Take a Test</p>
            </nav>
        </div>
    )
}

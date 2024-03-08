"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaX } from "react-icons/fa6";

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className='w-full flex items-center justify-between bg-[#121212] fixed top-0 left-0 right-0 z-10 bg-opacity-90 px-8' >
            <div className='hidden md:flex text-xl font-semibold text-gray-400 hover:text-white transition-all duration-200 ease-in-out hover:scale-105 cursor-pointer'>~Yugal/Khanter~</div>
            <div id='navbar' className='w-full px-12 py-6 hidden sm:flex items-center justify-end'>
                <Link href='#about' className='text-lg font-semibold text-gray-400 hover:text-white transition-all duration-200 ease-in-out hover:scale-105 mx-3'>About</Link>
                <Link href='#experience' className='text-lg font-semibold text-gray-400 hover:text-white transition-all duration-200 ease-in-out hover:scale-105 mx-3'>Experience</Link>
                <Link href='#projects' className='text-lg font-semibold text-gray-400 hover:text-white transition-all duration-200 ease-in-out hover:scale-105 mx-3'>Projects</Link>
                <Link href='#contact' className='text-lg font-semibold text-gray-400 hover:text-white transition-all duration-200 ease-in-out hover:scale-105 ml-3'>Contact</Link>
            </div>

            {/* mobile nav menu */}
            <div className='flex items-center justify-end sm:hidden text-white font-semibold p-4 w-full bg-[#121212] fixed top-0 left-0 right-0 z-10 bg-opacity-90'>
                {!isMenuOpen ? (
                    <button onClick={() => setIsMenuOpen(true)}>
                        <FaBars className='w-10 h-10' />
                    </button>
                ) : (
                    <button onClick={() => setIsMenuOpen(false)}>
                        <FaX className='w-8 h-8' />
                    </button>
                )}
            </div>
            {
                isMenuOpen && <div className='text-white mt-24 w-full h-screen'>
                    <div className='text-4xl text-center mb-8 font-semibold transition-all duration-200 ease-in-out hover:scale-105 cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-[#09A6F3] via-[#0B74EA] to-[#0D41E1]'>~Yugal/Khanter~</div>
                    <p className='text-4xl text-center py-4 font-semibold'><Link href='#about'>About</Link></p>
                    <p className='text-4xl text-center py-4 font-semibold'><Link href='#experience'>Experience</Link></p>
                    <p className='text-4xl text-center py-4 font-semibold'><Link href='#projects'>Projects</Link></p>
                    <p className='text-4xl text-center py-4 font-semibold'><Link href='#contact'>Contact</Link></p>
                </div>
            }
        </nav>
    )
}

export default Navbar;

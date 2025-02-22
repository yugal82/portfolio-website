import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <div className='py-4 bg-[#282828] rounded-t-xl mt-12 md:mt-24'>
      <h2 className='text-2xl text-center py-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#09A6F3] via-[#0B74EA] to-[#0D41E1]'>~Yugal/Khanter~</h2>
      <div className='w-full py-2 flex items-center justify-center'>
        <Link href='#about' className='text-lg font-medium text-gray-400 hover:text-white transition-all duration-200 ease-in-out hover:scale-105 mx-2'>About</Link>
        <Link href='#experience' className='text-lg font-medium text-gray-400 hover:text-white transition-all duration-200 ease-in-out hover:scale-105 mx-2'>Experience</Link>
        <Link href='#projects' className='text-lg font-medium text-gray-400 hover:text-white transition-all duration-200 ease-in-out hover:scale-105 mx-2'>Projects</Link>
        <Link href='#contact' className='text-lg font-medium text-gray-400 hover:text-white transition-all duration-200 ease-in-out hover:scale-105 mx-2'>Contact</Link>
      </div>
      <div className='w-full py-2 text-center text-sm font-semibold'>	&#169; 2025 Yugal Khanter | All rights reserved</div>
    </div>
  )
}

export default Footer;

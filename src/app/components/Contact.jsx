import Link from 'next/link';
import React from 'react'
import { FaLinkedin, FaXTwitter, FaGithub, FaInstagram } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { TfiEmail } from "react-icons/tfi";

const Contact = () => {
    return (
        <div id='contact' className='container mx-auto px-12 py-4 mt-12 w-full'>
            <h2 className='w-full text-3xl font-semibold text-left md:text-center'>Want to get in contact with me?</h2>
            <div className='px-4 md:px-16 mt-4'>
                <p className='text-xl text-[#adb7b3] md:text-center'>I am currently looking for new opportunities, my inbox is always open. Feel free to reach out to me directly through the below mentioned social media handles for any inquiries, collaborations, or just to say hello! I'm always eager to connect with fellow creatives, clients, and potential collaborators. Whether you have a question or just want to say Hi, I'll try my best to get back to you!</p>
            </div>
            <div className='w-full mx-auto mt-10'>
                <div className='flex items-center justify-center'>
                    <Link href='mailto:yugalkhanter82@gmail.com' target='_blank' rel='noreferrer'>
                        <TfiEmail className='w-10 h-10 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out mx-2' />
                    </Link>
                    <Link href='https://www.linkedin.com/in/yugal-khanter-7499621bb/' target='_blank' rel='noreferrer'>
                        <FaLinkedin className='w-10 h-10 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out mx-2' />
                    </Link>
                    <Link href='https://twitter.com/KhanterYugal' target='_blank' rel='noreferrer' >
                        <FaXTwitter className='w-10 h-10 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out mx-2' />
                    </Link>
                    <Link href='https://github.com/yugal82' target='_blank' rel='noreferrer' >
                        <FaGithub className='w-10 h-10 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out mx-2' />
                    </Link>
                    <Link href='https://instagram.com/yugalkhanter' target='_blank' rel='noreferrer' >
                        <FaInstagram className='w-10 h-10 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out mx-2' />
                    </Link>
                    <Link href='https://leetcode.com/yugal82/' target='_blank' rel='noreferrer' >
                        <SiLeetcode className='w-10 h-10 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out mx-2' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Contact;

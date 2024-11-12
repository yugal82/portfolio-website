"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
    return (
        <div className='container mx-auto px-12 py-4 mt-28'>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <div className='col-span-7 place-self-center text-center sm:text-left'>
                    <h1 className='text-white text-4xl sm:text-5xl lg:text-6xl'>
                        <span className='font-extrabold'>Hello, I am <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#09A6F3] via-[#0B74EA] to-[#0D41E1]'>Yugal</span></span>
                        <p className='text-2xl font-bold md:text-5xl md:font-semibold py-3 md:py-6 text-transparent bg-clip-text bg-gradient-to-r from-[#09A6F3] via-[#0B74EA] to-[#0D41E1]'>
                        <span>I am </span>
                        <TypeAnimation
                            sequence={[
                                'a Web Developer',
                                1000,
                                'a Web3 Developer',
                                1000,
                                'an ML Engieer',
                                1000,
                                'an AI Enthusiast',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                        </p>
                    </h1>
                    <p className='text-[#adb7b3] text-base sm:text-lg lg:text-xl mb-6'>Currently based in <b>Los Angeles, CA, and pursuing a Master of Science in Computer Science at the University of Southern California</b>, I am passionate about software development and creating impactful, innovative digital solutions. With a strong foundation in machine learning, deep learning, and full-stack development, I am constantly learning, coding, and striving to push the boundaries of technology to build meaningful experiences.</p>
                </div>
                <div className='col-span-5 place-self-center'>
                    <div className='rounded-full p-2 bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px]'>
                        <Image src='/images/Photo.webp' alt='hero-image' className='rounded-full' width={350} height={350} />
                    </div>
                </div>
            </div>
            <div className=''>
                <button className='px-6 py-3 w-full sm:w-fit rounded-full mt-6 md:mt-0 bg-white hover:bg-slate-200 text-white font-semibold bg-gradient-to-r from-[#09A6F3] via-[#0B74EA] to-[#0D41E1]'>
                    <Link href='https://docs.google.com/document/d/1VZtQIY1TUO5YiXciDyk5j1440NscpXTJ/edit?usp=sharing&ouid=113078072215240214886&rtpof=true&sd=true' target='_blank' rel='noreferrer'>Download Resume</Link>
                </button>
            </div>
        </div>
    )
}

export default Hero;

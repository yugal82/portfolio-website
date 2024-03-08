"use client";
import Image from 'next/image';
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
    return (
        <div className='container mx-auto px-12 py-4 mt-28'>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <div className='col-span-7 place-self-center text-center sm:text-left'>
                    <h1 className='text-white text-4xl sm:text-5xl lg:text-6xl'>
                        <span className='font-extrabold'>Hello, I am <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#09A6F3] via-[#0B74EA] to-[#0D41E1]'>Yugal</span></span>
                        <p className='py-6 text-transparent bg-clip-text bg-gradient-to-r from-[#09A6F3] via-[#0B74EA] to-[#0D41E1]'>
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
                    <p className='text-[#adb7b3] text-base sm:text-lg lg:text-xl mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, sapiente libero repudiandae obcaecati perspiciatis ratione deleniti exercitationem</p>
                    <div>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full bg-white hover:bg-slate-200 text-white font-semibold bg-gradient-to-r from-[#09A6F3] via-[#0B74EA] to-[#0D41E1]'>Download Resume</button>
                    </div>
                </div>
                <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                    <div className='rounded-full p-2 bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px]'>
                        <Image src='/images/Photo.JPG' alt='hero-image' className='rounded-full' width={350} height={350} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;

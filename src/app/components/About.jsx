"use client";
import Image from 'next/image';
import React, { useState } from 'react'
import Tabs from './Tabs';
import Skills from './Skills';
import Certifications from './Certifications';
import Education from './Education';

const About = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const getSelectedTabIndex = (index) => setTabIndex(index)

    return (
        <div id='about' className='container mx-auto px-12 py-4 mt-6 md:mt-24'>
            <div className='lg:flex items-start justify-center gap-8 py-8 px-4'>
                <Image src='/images/about-image.webp' width={500} height={500} alt='about-me' className='rounded-2xl w-full' />
                <div className='mt-4 md:mt-0'>
                    <h2 className='text-white text-4xl font-bold mb-2'>About Me</h2>
                    <p className='text-base md:text-lg text-[#adb7b3]'>I am a passionate coder who thrives on bringing ideas to life through software. With a deep dedication to exploring the vast possibilities of technology, I am on a journey to create impactful, innovative solutions. I have honed a diverse technical toolkit, including JavaScript, React, Tailwind, NodeJs, ExpressJs, MongoDB, Web3, Ethereum, Ethers.js, Solidity, Python, and a wide range of machine learning libraries. My experiences in both frontend and backend development, paired with my commitment to expanding my knowledge base, empower me to tackle complex challenges and drive meaningful progress. Embracing emerging technologies, <b>I am a genuine learner who is constantly pushing boundaries, ready to create, learn, and innovate.</b></p>
                </div>
            </div>
            <Tabs categories={['Skills', 'Certifications', 'Education']} getSelectedTabIndex={getSelectedTabIndex} />
            {
                tabIndex === 0 ? (
                    <Skills />
                ) : tabIndex === 1 ? (
                    <Certifications />
                ) : (
                    <Education />
                )
            }
        </div>
    )
}

export default About;

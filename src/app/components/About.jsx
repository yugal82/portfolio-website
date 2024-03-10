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
                <Image src='/images/about-image.jpg' width={500} height={500} alt='about-me' className='rounded-2xl w-full' />
                <div className='mt-4 md:mt-0'>
                    <h2 className='text-white text-4xl font-bold mb-2'>About Me</h2>
                    <p className='text-base md:text-lg text-[#adb7b3]'>I love to code and bring ideas to life. I am dedicated to exploring the intricate field of deep learning and computer vision. My journey in technology has equipped me with proficiency in a diverse array of tools and languages, including JavaScript, React, Tailwind, NodeJs, ExpressJs, MongoDB, Web3, Ethereum, Ethersjs, Solidity, Python, various machine learning libraries, and Git/Github. Continuously pushing the boundaries, I am committed to expanding my knowledge base and embracing emerging technologies.</p>
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

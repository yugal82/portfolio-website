"use client";
import Image from 'next/image';
import React, { useState } from 'react'
import Tabs from './Tabs';

const About = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const getSelectedTabIndex = (index) => setTabIndex(index)

    return (
        <div className='container mx-auto px-12 py-4 mt-12 md:mt-24'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4'>
                <Image src='/images/about-image.jpg' width={500} height={500} className='rounded-2xl' />
                <div className='mt-6'>
                    <h2 className='text-white text-4xl font-bold mb-2 md:mb-4'>About Me</h2>
                    <p className='text-base md:text-lg text-[#adb7b3]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et cumque qui quia tempora libero architecto quasi ut esse recusandae consequuntur cum, dolorum debitis. Possimus accusamus repudiandae laboriosam sunt minima neque.</p>
                </div>
            </div>
            <Tabs categories={['Skills', 'Education', 'Certifications']} getSelectedTabIndex={getSelectedTabIndex} />
            {
                tabIndex === 0 ? (
                    <div>Skills tab</div>
                ) : tabIndex === 1 ? (
                    <div>Education tab</div>
                ) : (
                    <div>Certifications tab</div>
                )
            }
        </div>
    )
}

export default About;
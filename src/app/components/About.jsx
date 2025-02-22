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
                <Image src='/images/about-image.webp' width={500} height={500} alt='about-me' className='rounded-2xl w-full my-auto' />
                <div className='mt-4 md:mt-0'>
                    <h2 className='text-white text-4xl font-bold mb-2'>About Me</h2>
                    <p className='text-base md:text-lg text-[#adb7b3]'>
                        I am a passionate coder who thrives on transforming ideas into reality through software. With a deep commitment to innovation, I explore the limitless potential of technology to build impactful solutions. My expertise spans full-stack development and artificial intelligence, with a strong foundation in <b>JavaScript, React, Tailwind, Node.js, Express.js, MongoDB, Web3, Ethereum, Ethers.js, Solidity, and Python.</b>
                        <br></br>
                        <br></br>
                        In the AI space, I have worked extensively with machine learning, deep learning, and Generative AI, <b>leveraging frameworks like TensorFlow, PyTorch, Langchain, RAGs, Hugging Face to build intelligent systems.</b> My research and projects involve AI-driven automation, generative models, and data-driven solutions, particularly in healthcare and beyond.
                        <br></br>
                        <br></br>
                        I thrive on tackling complex challenges, continuously expanding my knowledge, and pushing the boundaries of what’s possible. Whether it’s crafting seamless user experiences, optimizing AI models, or exploring the latest advancements in Gen AI, <b>I am always eager to create, learn, and innovate.</b>
                    </p>
                    {/* <p className='text-base md:text-lg text-[#adb7b3]'>I am a passionate coder who thrives on bringing ideas to life through software. With a deep dedication to exploring the vast possibilities of technology, I am on a journey to create impactful, innovative solutions. I have honed a diverse technical toolkit, including <b>JavaScript, React, Tailwind, NodeJs, ExpressJs, MongoDB, Web3, Ethereum, Ethers.js, Solidity, Python, and a wide range of machine learning libraries.</b> My experiences in both frontend and backend development, paired with my commitment to expanding my knowledge base, empower me to tackle complex challenges and drive meaningful progress. Embracing emerging technologies, <b>I am a genuine learner who is constantly pushing boundaries, ready to create, learn, and innovate.</b></p> */}
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

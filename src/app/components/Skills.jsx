import Image from 'next/image';
import React from 'react'

const skills = ['c', 'cpp', 'javascript', 'python', 'solidity', 'react', 'redux', 'nodejs', 'express', 'mongodb', 'tailwindcss', 'html', 'css', 'pandas', 'numpy', 'keras', 'tensorflow', 'pytorch', 'ethereum', 'ethers', 'git', 'github', 'postman']

const Skills = () => {
    return (
        <div>
            <div className='grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-9 gap-y-4'>
                {skills.map((skill) => (
                    <Image className='rounded-xl cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out' src={`/images/skills/${skill}.jpg`} width={100} height={100} />    
                ))}
            </div>
        </div>
    )
}

export default Skills;
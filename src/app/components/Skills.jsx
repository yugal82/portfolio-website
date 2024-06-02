import Image from 'next/image';
import React from 'react'

const skills = ['c.svg', 'c++.svg', 'javascript.svg', 'python.svg', 'solidity.svg', 'react.svg', 'redux.svg', 'nodejs.svg', 'express.webp', 'mongodb.svg', 'pandas.svg', 'numpy.svg', 'scikit.webp', 'keras.webp', 'tensorflow.svg', 'pytorch.svg', 'ethereum.svg', 'tailwindcss.svg', 'html.svg', 'css.svg', 'ethers.webp', 'git.svg', 'github.svg', 'postman.svg']

const Skills = () => {
    return (
        <div>
            <div className='grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-9 gap-y-6'>
                {skills.map((skill) => (
                    <Image key={skill} className='rounded-xl cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out bg-white w-24 h-24 object-contain' src={`/images/skills/${skill}`} alt={skill} width={100} height={100} />    
                ))}
            </div>
        </div>
    )
}

export default Skills;